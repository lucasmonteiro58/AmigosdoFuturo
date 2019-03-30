var conteudoJSON;

$.ajax({
    type: 'GET',
    url: "http://127.0.0.1/ecoLicenseLayout/send-data.php",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data)
    {
        conteudoJSON = data;
        console.log(coneudoJSON);
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});