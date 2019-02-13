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

$( "#papel1, #metal1, #plastico1, #vidro1, #organico1, #papel2, #metal2, #plastico2, #vidro2, #organico2").draggable({
      revert: true,
      revertDuration: 600,
       cursor: "grabbing",



        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
        
       }
    });

$("#lixometal").droppable({
      accept: "#metal1, #metal2",
         over: function( event, ui){
           $("#lixometal").attr('src',"img/lixeirametal_aberta.png");
           $("#lixometal").css("margin-top", "73.6vh");

        },

        out: function( event, ui){
           $("#lixometal").attr('src',"img/lixeirametal_fechada.png");
           $("#lixometal").css("margin-top", "83vh");

        },

        drop: function( event, ui ) {         
          $("#lixometal").attr('src',"img/lixeirametal_fechada.png");
          $("#lixometal").css("margin-top", "83vh"); 
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");

          }
      });

$("#lixopapel").droppable({
      accept: "#papel1, #papel2",
       over: function( event, ui){
           $("#lixopapel").attr('src',"img/lixeirapapel_aberta.png");
           $("#lixopapel").css("margin-top", "73.6vh");

        },

        out: function( event, ui){
           $("#lixopapel").attr('src',"img/lixeirapapel_fechada.png");
           $("#lixopapel").css("margin-top", "83vh");

        },

        drop: function( event, ui ) {        
          $("#lixopapel").attr('src',"img/lixeirapapel_fechada.png");
          $("#lixopapel").css("margin-top", "83vh");
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");          
          }
      });

$("#lixoplastico").droppable({
      accept: "#plastico1, #plastico2",
        over: function( event, ui){
           $("#lixoplastico").attr('src',"img/lixeiraplastico_aberta.png");
           $("#lixoplastico").css("margin-top", "73.8vh");

        },

        out: function( event, ui){
           $("#lixoplastico").attr('src',"img/lixeiraplastico_fechada.png");
           $("#lixoplastico").css("margin-top", "83vh");

        },

        drop: function( event, ui ) {               
          $("#lixoplastico").attr('src',"img/lixeiraplastico_fechada.png");
          $("#lixoplastico").css("margin-top", "83vh"); 
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");         
          }
      });

$("#lixovidro").droppable({
      accept: "#vidro1, #vidro2",
        over: function( event, ui){
           $("#lixovidro").attr('src',"img/lixeiravidro_aberta.png");
           $("#lixovidro").css("margin-top", "73.6vh");

        },

        out: function( event, ui){
           $("#lixovidro").attr('src',"img/lixeiravidro_fechada.png");
           $("#lixovidro").css("margin-top", "83vh");

        },

        drop: function( event, ui ) {         
          $("#lixovidro").attr('src',"img/lixeiravidro_fechada.png");
          $("#lixovidro").css("margin-top", "83vh"); 
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");         
          }
      });

$("#lixoorganico").droppable({
      accept: "#organico1, #organico2",
         over: function( event, ui){
           $("#lixoorganico").attr('src',"img/lixeiraorganico_aberta.png");
           $("#lixoorganico").css("margin-top", "73.6vh");

        },

        out: function( event, ui){
           $("#lixoorganico").attr('src',"img/lixeiraorganico_fechada.png");
           $("#lixoorganico").css("margin-top", "83vh");

        },

        drop: function( event, ui ) {                    
          $("#lixoorganico").attr('src',"img/lixeiraorganico_fechada.png");
          $("#lixoorganico").css("margin-top", "83vh"); 
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");         
          }
      });

// Desafio Plantar -----------------------------------------------------------------

$('#buraco1').click(function(){
  if ($('#buraco1').attr('src')== "img/buraco.png"){
    $("#buraco1").attr('src', "");  
    $("#buraco1").attr('src',"img/plantinha0.png");
    $("#buraco1").css("margin-top", "50vh");
    $("#buraco1").removeClass('bcr1');
    $("#buraco1").addClass('bc1');
  }

  else if($('#buraco1').attr('src')== "img/plantinha0.png"){
    $("#buraco1").attr('src',"img/plantinha.png");
    $("#buraco1").css("margin-top", "50vh");
    $("#buraco1").removeClass('bc1');
    $("#buraco1").addClass('brcp1');
  } else if ($('#buraco1').attr('src')== "img/plantinha.png") {
    alert("aaaaa");
    $("#buraco1").attr('src',"");

  }  

});


$('#buraco2').click(function(){
    if ($('#buraco2').attr('src')== "img/buraco.png"){
      $("#buraco2").attr('src', ""); 
      $("#buraco2").attr('src',"img/plantinha0.png");
      $("#buraco2").css("margin-top", "50vh");
      $("#buraco2").removeClass('bcr2');
      $("#buraco2").addClass('bc2');
  }

  else if($('#buraco2').attr('src')== "img/plantinha0.png"){
    $("#buraco2").attr('src',"img/plantinha.png");
    $("#buraco2").css("margin-top", "50vh");
    $("#buraco2").removeClass('bc2');
    $("#buraco2").addClass('brcp2');
  } else if ($('#buraco2').attr('src')== "img/plantinha.png") {
    alert("aaaaa");
    $("#buraco2").attr('src',"");

  }
   
});

$('#buraco3').click(function(){
    if ($('#buraco3').attr('src')== "img/buraco.png"){
      $("#buraco3").attr('src', ""); 
      $("#buraco3").attr('src',"img/plantinha0.png");
      $("#buraco3").css("margin-top", "50vh");
      $("#buraco3").removeClass('bcr3');
      $("#buraco3").addClass('bc3');
  }

  else if($('#buraco3').attr('src')== "img/plantinha0.png"){
    $("#buraco3").attr('src',"img/plantinha.png");
    $("#buraco3").css("margin-top", "50vh");
    $("#buraco3").removeClass('bc3');
    $("#buraco3").addClass('brcp3');
  } else if ($('#buraco3').attr('src')== "img/plantinha.png") {
    alert("aaaaa");
    $("#buraco3").attr('src',"");

  }
});

$('#buraco4').click(function(){
    if ($('#buraco4').attr('src')== "img/buraco.png"){
      $("#buraco4").attr('src', ""); 
      $("#buraco4").attr('src',"img/plantinha0.png");
      $("#buraco4").css("margin-top", "65vh");
      $("#buraco4").removeClass('bcr4');
      $("#buraco4").addClass('bc4');
  }

  else if($('#buraco4').attr('src')== "img/plantinha0.png"){
    $("#buraco4").attr('src',"img/plantinha.png");
    $("#buraco4").css("margin-top", "65vh");
    $("#buraco4").removeClass('bc4');
    $("#buraco4").addClass('brcp4');
  } else if ($('#buraco4').attr('src')== "img/plantinha.png") {
    alert("aaaaa");
    $("#buraco4").attr('src',"");

  }
});

$('#buraco5').click(function(){
    if ($('#buraco5').attr('src')== "img/buraco.png"){
      $("#buraco5").attr('src', ""); 
      $("#buraco5").attr('src',"img/plantinha0.png");
      $("#buraco5").css("margin-top", "65vh");
      $("#buraco5").removeClass('bcr5');
      $("#buraco5").addClass('bc5');
  }

  else if($('#buraco5').attr('src')== "img/plantinha0.png"){
    $("#buraco5").attr('src',"img/plantinha.png");
    $("#buraco5").css("margin-top", "65vh");
    $("#buraco5").removeClass('bc5');
    $("#buraco5").addClass('brcp5');
  } else if ($('#buraco5').attr('src')== "img/plantinha.png") {
    alert("aaaaa");
    $("#buraco5").attr('src',"");

  }
});

$('#buraco6').click(function(){
    if ($('#buraco6').attr('src')== "img/buraco.png"){
      $("#buraco6").attr('src', ""); 
      $("#buraco6").attr('src',"img/plantinha0.png");
      $("#buraco6").css("margin-top", "65vh");
      $("#buraco6").removeClass('bcr6');
      $("#buraco6").addClass('bc6');
  }

  else if($('#buraco6').attr('src')== "img/plantinha0.png"){
    $("#buraco6").attr('src',"img/plantinha.png");
    $("#buraco6").css("margin-top", "65vh");
    $("#buraco6").removeClass('bc6');
    $("#buraco6").addClass('brcp6');
  } else if ($('#buraco6').attr('src')== "img/plantinha.png") {
    alert("aaaaa");
    $("#buraco6").attr('src',"");

  }
});









// ---------------------------------------------------------------------------------
});





