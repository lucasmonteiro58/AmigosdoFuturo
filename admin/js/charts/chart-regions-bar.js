function regions_bar(data, maximum) {
  // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = '#858796';

  function JSONtoDataList(json) {
    var list = json['values']
    return list
  }

  // Bar Chart Example
  var ctx = document.getElementById("regions-bar");
  var regions_bar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Maçico de Baturité", "Litoral Oeste", "Cariri", "Centro Sul", "Sertão Central", "Serra da Ibiapaba", "Sertão de Sobral","Litoral Norte", "Sertão dos Inhamuns", "Sertão dos Crateús", "Sertão de Canindé", "Vale do Jaguaribe", "Litoral Leste", "Grande Fortaleza"],
      datasets: [{
        label: "Quantidade",
        backgroundColor: '#F28F15',
        hoverBackgroundColor: '#C16E14',
        borderColor: '#F28F15',
        data: [data["macico_de_baturite"], data["litoral_oeste"], data["cariri"], data["centro_sul"], data["sertao_central"], data["serra_da_ibiapaba"], data["sertao_de_sobral"],data["litoral_norte"], data["sertao_dos_inhamuns"], data["sertao_dos_crateus"], data["sertao_de_caninde"], data["vale_do_jaguaribe"], data["litoral_leste"], data["grande_fortaleza"]],
      }],
    },
    options: {
      maintainAspectRatio: false,
     layout: {
        padding: {
          left: 0,
          right: 25,
          top: 25,
          bottom: 0
        }
      }, 
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: { maxTicksLimit: 20 },
          maxBarThickness: 15,
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: maximum,
            maxTicksLimit: 15,
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        caretPadding: 10,
        callbacks: {
          label: function(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ':' + tooltipItem.yLabel;
          }
        }
      },
    }
  })
} 


