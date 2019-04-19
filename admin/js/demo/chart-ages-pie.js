function ages_pie(age_groups) {
  // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = '#858796';

  var ctx_ages_pie = document.getElementById('ages-pie').getContext('2d');
  window.ages_pie = new Chart(ctx_ages_pie, {
    type: 'pie',
    data: {
      datasets: [{
        data: age_groups,
        backgroundColor: ['#e74c3c','#2e59d9','#9b59b6','#1abc9c','#f1c40f'],
        hoverBackgroundColor: ['#c0392b', '#305882','#8e44ad', '#16a085','#D0a10d'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
          labels: ['Menos de 3','3 a 6','7 a 10', '11 a 14', 'Mais de 14']},
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
          caretPadding: 10
        }
      }
    })
}