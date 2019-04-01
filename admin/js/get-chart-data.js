$.ajax({
    type: 'GET',
    url: "php/controller/get_data_charts.php?type=bar",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data)
    {
        chartBar = data
        getMaxValue(chartBar)
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});

function getMaxValue(json) {
    var all = ["edu","laz","eco","gov","mei","ino","sau"]

    for (var i = 0; i <= all.length - 1; i++) {
        var abrev = all[i]
        if (json[abrev] > chartBarMax) {
            chartBarMax = json[abrev]
        }
    }
}

$("#number_access").text()