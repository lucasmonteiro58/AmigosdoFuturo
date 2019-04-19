// Call the dataTables jQuery plugin
$(document).ready(function() {
    createSelectCity()

    $('#citiesTable').DataTable();

    $("#download-resume").click(function () {
        window.print()
    })
});



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

//Número total de acessos
$.ajax({
    type: 'GET',
    url: "php/controller/get_data_charts.php?type=total_users",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) {
       $("#number_users").text(data)
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});


$('a.button').click(function(){
    if (condition == 'true'){
        function1(someVariable, function() {
          function2(someOtherVariable);
        });
    }
    else {
        doThis(someVariable);
    }
});


//Gráfico com os amigos por emblema
$.ajax({
    type: 'GET',
    url: "php/controller/get_data_charts.php?type=user_badges",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) {        
        badges_bar(data, getMaxValue(data))
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown); } });
function getMaxValue(json) {
    var max = 0
    var all = ["edu","laz","eco","gov","mei","ino","sau"]
    for (var i = 0; i <= all.length - 1; i++) {
        var abrev = all[i]
        if (json[abrev] > max) { max = json[abrev] } 
    } return max 
}

//Gráfico com os amigos por região
$.ajax({
    type: 'GET',
    url: "php/controller/get_data_charts.php?type=region_users",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) {        
        regions_bar(data, getMaxValueRegion(data))
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown); } });
function getMaxValueRegion(json) {
    var max = 0
    var all = ["macico_de_baturite","litoral_oeste","cariri","centro_sul","sertao_central","serra_da_ibiapaba","sertao_de_sobral","litoral_norte","sertao_dos_inhamuns","sertao_dos_crateus","sertao_de_caninde","vale_do_jaguaribe","litoral_leste","grande_fortaleza"]
    for (var i = 0; i <= all.length - 1; i++) {
        var abrev = all[i]
        if (json[abrev] > max) { max = json[abrev] } 
    } return max 
}


//Número total de acessos por genero
$.ajax({
    type: 'GET',
    url: "php/controller/get_data_charts.php?type=gender",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) {
        gender_polarArea([data["F"], data["M"]])
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});

//Número total de usuarios grupo por idade
$.ajax({
    type: 'GET',
    url: "php/controller/get_data_charts.php?type=age",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) {
       ages_pie(data["ages_data"])
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
    }
});

//Número total de usuarios grupo por idade por cidade
var config_city_ages = {}
$.ajax({
    type: 'GET',
    url: "php/controller/get_data_charts.php?type=city_ages&city=Fortaleza",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) {
       city_ages_pie(data["ages_data"])
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
    }
});
function getCityAgesData(city) {
    $.ajax({
        type: 'GET',
        url: "php/controller/get_data_charts.php?type=city_ages&city="+city,
        dataType: 'json',
        contentType: 'application/json',
        crossDomain: true,
        cache:false,
        success: function(data) {  
            $("#city-name").text(city)
            $("#city-empty").css("display", "none")
            $(".chart-city-ages").css("display", "block")
            updateCityAgesChart(data["ages_data"])
        },
        error:function(jqXHR, textStatus, errorThrown){
            $("#city-name").text(city)
            $("#city-empty").css("display", "block")
            $(".chart-city-ages").css("display", "none")
        }
    });
}
function updateCityAgesChart(data) {
    config_city_ages.data.datasets.forEach(function(dataset) {
        dataset.data = data;
    });

    window.city_ages_pie.update();
}

function createSelectCity() {
    var available_cities = ["Abaiara","Acarapé","Acaraú","Acopiara","Aiuaba","Alcântaras","Altaneira","Alto Santo","Amontada","Antonina do Norte","Apuiarés","Aquiraz","Aracati","Aracoiaba","Ararendá","Araripe","Aratuba","Arneiroz","Assaré","Aurora","Baixio","Banabuiú","Barbalha","Barreira","Barro","Barroquinha","Baturité","Beberibe","Bela Cruz","Boa Viagem","Brejo Santo","Camocim","Campos Sales","Canindé","Capistrano","Caridade","Cariré","Caririaçu","Cariús","Carnaubal","Cascavel","Catarina","Catunda","Caucaia","Cedro","Chaval","Choró","Chorozinho","Coreaú","Crateús","Crato","Croatá","Cruz","Deputado Irapuan Pinheiro","Ererê","Eusébio","Farias Brito","Forquilha","Fortaleza","Fortim","Frecheirinha","General Sampaio","Graça","Granja","Granjeiro","Groaíras","Guaiúba","Guaraciaba do Norte","Guaramiranga","Hidrolândia","Horizonte","Ibaretama","Ibiapina","Ibicuitinga","Icapuí","Icó","Iguatu","Independência","Ipaporanga","Ipaumirim","Ipu","Ipueiras","Iracema","Irauçuba","Itaiçaba","Itaitinga","Itapajé","Itapipoca","Itapiúna","Itarema","Itatira","Jaguaretama","Jaguaribara","Jaguaribe","Jaguaruana","Jardim","Jati","Jijoca de Jericoacoara","Juazeiro do Norte","Jucás","Lavras da Mangabeira","Limoeiro do Norte","Madalena","Maracanaú","Maranguape","Marco","Martinópole","Massapê","Mauriti","Meruoca","Milagres","Milhã","Miraíma","Missão Velha","Mombaça","Monsenhor Tabosa","Morada Nova","Moraújo","Morrinhos","Mucambo","Mulungu","Nova Olinda","Nova Russas","Novo Oriente","Ocara","Orós","Pacajus","Pacatuba","Pacoti","Pacujá","Palhano","Palmácia","Paracuru","Paraipaba","Parambu","Paramoti","Pedra Branca","Penaforte","Pentecoste","Pereiro","Pindoretama","Piquet Carneiro","Pires Ferreira","Poranga","Porteiras","Potengi","Potiretama","Quiterianópolis","Quixadá","Quixelô","Quixeramobim","Quixeré","Redenção","Reriutaba","Russas","Saboeiro","Salitre","Santa Quitéria","Santana do Acaraú","Santana do Cariri","São Benedito","São Gonçalo do Amarante","São João do Jaguaribe","São Luís do Curu","Senador Pompeu","Senador Sá","Sobral","Solonópole","Tabuleiro do Norte","Tamboril","Tarrafas","Tauá","Tejuçuoca","Tianguá","Trairi","Tururu","Ubajara","Umari","Umirim","Uruburetama","Uruoca","Varjota","Várzea Alegre","Viçosa do Ceará"]

    var questionHTML = ""
   
    var selectOptions = "<option value='' disabled>Selecione uma cidade</option>"
    for (var i = 0; i < available_cities.length; i++) {
       row = available_cities[i];
       if (row == "Fortaleza") { selectOptions += '<option value="'+row+'" selected>'+row+'</option>' }
        else { selectOptions += '<option value="'+row+'">'+row+'</option>' }
    }

    questionHTML = "<form><select id='cities-select' name='city' class='custom-select'>"+selectOptions+"</select></form>"

    $("#cities-select-div").html(questionHTML)

    $('#cities-select').change(function() {
        getCityAgesData($(this).val());
    });
}