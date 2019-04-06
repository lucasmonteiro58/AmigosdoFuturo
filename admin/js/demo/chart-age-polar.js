// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var config = {
  type: 'pie',
  data: {
    datasets: [{
      data: gender_quantities,
      backgroundColor: ['#F28F15','#2e59d9'],
      hoverBackgroundColor: ['#C16E14', '#305882'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
        labels: ['Meninas','Meninos']},
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      cutoutPercentage: 50,
    }
  }

window.onload = function() {
  var ctx = document.getElementById('age-polar').getContext('2d');
  window.age_polar = new Chart(ctx, config);
};