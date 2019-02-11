// Mapa ----------------------------
$(document).ready(function() {

$(function () {
  $('[data-toggle="popover"]').popover()
})
	
	$( "#imgPeca1, #imgPeca2, #imgPeca3").draggable({
       cursor: "grabbing",

        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
        console.log('aaaaaa');
       }
    });

    $("#imgPeca1x").droppable({
    	accept: "#imgPeca1",
        drop: function( event, ui ) {
          alert('xxxxxxxx');
          document.getElementById("imgPeca1").style.left = "0px";
          document.getElementById("imgPeca1").style.top = "0px";
          document.getElementById("imgPeca1").style.marginLeft = "70.25%";
          document.getElementById("imgPeca1").style.marginTop = "55.42%";
          $( "#imgPeca1" ).draggable( "disable" );
          }
      })  
    

     $("#imgPeca2x").droppable({
    	accept: "#imgPeca2",
        drop: function( event, ui ) {
          alert('aaaaaa');
          document.getElementById("imgPeca2").style.left = "0px";
          document.getElementById("imgPeca2").style.top = "0px";
          document.getElementById("imgPeca2").style.marginLeft = "61.27%";
          document.getElementById("imgPeca2").style.marginTop = "26.55%";

          $( "#imgPeca2" ).draggable( "disable" );
          }
      })

      $("#imgPeca3x").droppable({
    	accept: "#imgPeca3",
        drop: function( event, ui ) {
          alert('aaaaaa');
          document.getElementById("imgPeca3").style.left = "0px";
          document.getElementById("imgPeca3").style.top = "0px";
          document.getElementById("imgPeca3").style.marginLeft = "60%";
          document.getElementById("imgPeca3").style.marginTop = "10.1%";
          $( "#imgPeca3" ).draggable( "disable" );
          }
      })

// Desafio Lixo -----------------------------------------------------------------

$( "#papel, #metal, #plastico, #vidro, #organico").draggable({

       cursor: "grabbing",


        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
        console.log('aaaaaa');
       }
    });

$("#lixometal").droppable({
      accept: "#metal",
        drop: function( event, ui ) {
          alert('xxxxxxxx');
          $( "#imgPeca1" ).draggable( "disable" );
          document.getElementById("metal").style.display = "none";
          }
      });

$("#lixopapel").droppable({
      accept: "#papel",
        drop: function( event, ui ) {
          alert('xxxxxxxx');
          $( "#imgPeca1" ).draggable( "disable" );
          document.getElementById("papel").style.display = "none";
          }
      });

$("#lixoplastico").droppable({
      accept: "#plastico",
        drop: function( event, ui ) {
          alert('xxxxxxxx');
          $( "#imgPeca1" ).draggable( "disable" );
          document.getElementById("plastico").style.display = "none";
          }
      });

$("#lixovidro").droppable({
      accept: "#vidro",
        drop: function( event, ui ) {
          alert('xxxxxxxx');
          $( "#imgPeca1" ).draggable( "disable" );
          document.getElementById("vidro").style.display = "none";
          }
      });

$("#lixoorganico").droppable({
      accept: "#organico",
        drop: function( event, ui ) {
          alert('xxxxxxxx');
          $( "#imgPeca1" ).draggable( "disable" );
          document.getElementById("organico").style.display = "none";
          }
      });

// Desafio Plantar -----------------------------------------------------------------

$('.brc1').click(function(){
  if($('#buraco1').hasClass('bc1')){
    $("#buraco1").attr('src',"img/plantinha.png");
    $("#buraco1").css("margin-top", "50vh"); 
    $("#buraco1").removeClass('bc1');
     $("#buraco4").addClass('brcp1');

  } else {

    $("#buraco1").attr('src',"img/plantinha0.png");
    $("#buraco1").css("margin-top", "50vh");
    $("#buraco1").removeClass('brc1');
    $("#buraco1").addClass('bc1');
  }
});


$('.brc2').click(function(){
    if($('#buraco2').hasClass('bc2')){
    $("#buraco2").attr('src',"img/plantinha.png");
    $("#buraco2").css("margin-top", "50vh");
    $("#buraco1").removeClass('bc2'); 
    $("#buraco4").addClass('brcp2');
       
  } else {

    $("#buraco2").attr('src',"img/plantinha0.png");
    $("#buraco2").css("margin-top", "50vh");
    $("#buraco2").removeClass('brc2');
    $("#buraco2").addClass('bc2');
  }
});

$('.brc3').click(function(){
    if($('#buraco3').hasClass('bc3')){
    $("#buraco3").attr('src',"img/plantinha.png");
    $("#buraco3").css("margin-top", "50vh"); 
    $("#buraco1").removeClass('bc3');
     $("#buraco4").addClass('brcp3');
       
  } else {

    $("#buraco3").attr('src',"img/plantinha0.png");
    $("#buraco3").css("margin-top", "50vh");
    $("#buraco3").removeClass('brc3');
    $("#buraco3").addClass('bc3');
  }
});

$('.brc4').click(function(){
    if($('#buraco4').hasClass('bc4')){
    $("#buraco4").attr('src',"img/plantinha.png");
    $("#buraco4").css("margin-top", "65vh"); 
    $("#buraco1").removeClass('bc4');
    $("#buraco4").addClass('brcp4');
       
  } else {

    $("#buraco4").attr('src',"img/plantinha0.png");
    $("#buraco4").css("margin-top", "65vh");
    $("#buraco4").removeClass('brc4');
    $("#buraco4").addClass('bc4');
  }
});

$('.brc5').click(function(){
    if($('#buraco5').hasClass('bc5')){
    $("#buraco5").attr('src',"img/plantinha.png");
    $("#buraco5").css("margin-top", "65vh");
    $("#buraco1").removeClass('bc5');
     $("#buraco4").addClass('brcp5'); 
       
  } else {

    $("#buraco5").attr('src',"img/plantinha0.png");
    $("#buraco5").css("margin-top", "65vh");
    $("#buraco5").removeClass('brc5');
    $("#buraco5").addClass('bc5');
  }
});

$('.brc6').click(function(){
    if($('#buraco6').hasClass('bc6')){
    $("#buraco6").attr('src',"img/plantinha.png");
    $("#buraco6").css("margin-top", "65vh"); 
    $("#buraco1").removeClass('bc6');
    $("#buraco4").addClass('brcp6');
       
  } else {

    $("#buraco6").attr('src',"img/plantinha0.png");
    $("#buraco6").css("margin-top", "65vh");
    $("#buraco6").removeClass('brc6');
    $("#buraco6").addClass('bc6');
  }
});









// ---------------------------------------------------------------------------------
});





