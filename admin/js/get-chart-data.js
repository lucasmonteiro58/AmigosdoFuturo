//Gráfico com os amigos por emblema
$.ajax({
    type: 'GET',
    url: "php/controller/get_data_charts.php?type=user_badges",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) {
        chartBar = data
        getMaxValue(chartBar) },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown); } });
function getMaxValue(json) {
    var all = ["edu","laz","eco","gov","mei","ino","sau"]
    for (var i = 0; i <= all.length - 1; i++) {
        var abrev = all[i]
        if (json[abrev] > chartBarMax) { chartBarMax = json[abrev] } } }

//Número total de acessos
$.ajax({
    type: 'GET',
    url: "php/controller/count_access.php",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) {
       $("#number_access").text(data["total_access"])
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});

//Número total de acessos por genero
$.ajax({
    type: 'GET',
    url: "php/controller/get_data_charts.php?type=gender",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) {
       gender_quantities = [data["F"], data["M"]]
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});