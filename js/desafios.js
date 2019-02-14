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
           $("#lixometal").css("top", "70.4%");

        },

        out: function( event, ui){
           $("#lixometal").attr('src',"img/lixeirametal_fechada.png");
           $("#lixometal").css("top", "80%");

        },

        drop: function( event, ui ) {         
          $("#lixometal").attr('src',"img/lixeirametal_fechada.png");
          $("#lixometal").css("top", "80%"); 
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");

          }
      });

$("#lixopapel").droppable({
      accept: "#papel1, #papel2",
       over: function( event, ui){
           $("#lixopapel").attr('src',"img/lixeirapapel_aberta.png");
           $("#lixopapel").css("top", "70.4%");

        },

        out: function( event, ui){
           $("#lixopapel").attr('src',"img/lixeirapapel_fechada.png");
           $("#lixopapel").css("top", "80%");

        },

        drop: function( event, ui ) {        
          $("#lixopapel").attr('src',"img/lixeirapapel_fechada.png");
          $("#lixopapel").css("top", "80%");
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");          
          }
      });

$("#lixoplastico").droppable({
      accept: "#plastico1, #plastico2",
        over: function( event, ui){
           $("#lixoplastico").attr('src',"img/lixeiraplastico_aberta.png");
           $("#lixoplastico").css("top", "70.4%");

        },

        out: function( event, ui){
           $("#lixoplastico").attr('src',"img/lixeiraplastico_fechada.png");
           $("#lixoplastico").css("top", "80%");

        },

        drop: function( event, ui ) {               
          $("#lixoplastico").attr('src',"img/lixeiraplastico_fechada.png");
          $("#lixoplastico").css("top", "80%"); 
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");         
          }
      });

$("#lixovidro").droppable({
      accept: "#vidro1, #vidro2",
        over: function( event, ui){
           $("#lixovidro").attr('src',"img/lixeiravidro_aberta.png");
           $("#lixovidro").css("top", "70.4%");

        },

        out: function( event, ui){
           $("#lixovidro").attr('src',"img/lixeiravidro_fechada.png");
           $("#lixovidro").css("top", "80%");

        },

        drop: function( event, ui ) {         
          $("#lixovidro").attr('src',"img/lixeiravidro_fechada.png");
          $("#lixovidro").css("top", "80%"); 
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");         
          }
      });

$("#lixoorganico").droppable({
      accept: "#organico1, #organico2",
         over: function( event, ui){
           $("#lixoorganico").attr('src',"img/lixeiraorganico_aberta.png");
           $("#lixoorganico").css("top", "70.4%");

        },

        out: function( event, ui){
           $("#lixoorganico").attr('src',"img/lixeiraorganico_fechada.png");
           $("#lixoorganico").css("top", "80%");

        },

        drop: function( event, ui ) {                    
          $("#lixoorganico").attr('src',"img/lixeiraorganico_fechada.png");
          $("#lixoorganico").css("top", "80%"); 
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");         
          }
      });

// Desafio Plantar -----------------------------------------------------------------

$('#buraco1').click(function(){
  if ($('#buraco1').attr('src')== "img/buraco.png"){
    $("#buraco1").attr('src', "");  
    $("#buraco1").attr('src',"img/cenoura1.png");
    $("#buraco1").css("top", "66%");
    $("#buraco1").removeClass('bcr1');
    $("#buraco1").addClass('bc1');

  }

  else if($('#buraco1').attr('src')== "img/cenoura1.png"){
    $("#buraco1").attr('src', "");
    $("#buraco1").attr('src',"img/cenoura2.png");
    $("#buraco1").css("top", "60%");
    $("#buraco1").removeClass('bc1');
    $("#buraco1").addClass('brcp1');
  } else if ($('#buraco1').attr('src')== "img/cenoura2.png") {
    alert("aaaaa");
    $("#buraco1").attr('src',"");
    $('#cenouracesta1').css('display', 'block');

  }  

});


$('#buraco2').click(function(){
    if ($('#buraco2').attr('src')== "img/buraco.png"){
      $("#buraco2").attr('src', ""); 
      $("#buraco2").attr('src',"img/cenoura1.png");
      $("#buraco2").css("top", "71%");
      $("#buraco2").removeClass('bcr2');
      $("#buraco2").addClass('bc2');
  }

  else if($('#buraco2').attr('src')== "img/cenoura1.png"){
    $("#buraco2").attr('src', "");
    $("#buraco2").attr('src',"img/cenoura2.png");
    $("#buraco2").css("top", "66%");
    $("#buraco2").removeClass('bc2');
    $("#buraco2").addClass('brcp2');
  } else if ($('#buraco2').attr('src')== "img/cenoura2.png") {
    alert("aaaaa");
    $("#buraco2").attr('src',"");
    $('#cenouracesta2').css('display', 'block');

  }
   
});

$('#buraco3').click(function(){
    if ($('#buraco3').attr('src')== "img/buraco.png"){
      $("#buraco3").attr('src', ""); 
      $("#buraco3").attr('src',"img/tomate1.png");
      $("#buraco3").css("top", "61%");
      $("#buraco3").removeClass('bcr3');
      $("#buraco3").addClass('bc3');
  }

  else if($('#buraco3').attr('src')== "img/tomate1.png"){
    $("#buraco3").attr('src', "");
    $("#buraco3").attr('src',"img/tomate2.png");
    $("#buraco3").css("top", "54%");
    $("#buraco3").removeClass('bc3');
    $("#buraco3").addClass('brcp3');
  } else if ($('#buraco3').attr('src')== "img/tomate2.png") {
    alert("aaaaa");
    $("#buraco3").attr('src',"");
    $('#tomatecesta1').css('display', 'block');

  }
});

$('#buraco4').click(function(){
    if ($('#buraco4').attr('src')== "img/buraco.png"){
      $("#buraco4").attr('src', ""); 
      $("#buraco4").attr('src',"img/tomate1.png");
      $("#buraco4").css("top", "68%");
      $("#buraco4").removeClass('bcr4');
      $("#buraco4").addClass('bc4');
  }

  else if($('#buraco4').attr('src')== "img/tomate1.png"){
    $("#buraco4").attr('src', "");
    $("#buraco4").attr('src',"img/tomate2.png");
    $("#buraco4").css("top", "62%");
    $("#buraco4").removeClass('bc4');
    $("#buraco4").addClass('brcp4');
  } else if ($('#buraco4').attr('src')== "img/tomate2.png") {
    alert("aaaaa");
    $("#buraco4").attr('src',"");
    $('#tomatecesta2').css('display', 'block');

  }
});

$('#buraco5').click(function(){
    if ($('#buraco5').attr('src')== "img/buraco.png"){
      $("#buraco5").attr('src', ""); 
      $("#buraco5").attr('src',"img/alface1.png");
      $("#buraco5").css("top", "67%");
      $("#buraco5").removeClass('bcr5');
      $("#buraco5").addClass('bc5');
  }

  else if($('#buraco5').attr('src')== "img/alface1.png"){
    $("#buraco5").attr('src', ""); 
    $("#buraco5").attr('src',"img/alface2.png");
    $("#buraco5").css("top", "64%");
    $("#buraco5").removeClass('bc5');
    $("#buraco5").addClass('brcp5');
  } else if ($('#buraco5').attr('src')== "img/alface2.png") {
    alert("aaaaa");
    $("#buraco5").attr('src',"");
    $('#alfacecesta1').css('display', 'block');

  }
});

$('#buraco6').click(function(){
    if ($('#buraco6').attr('src')== "img/buraco.png"){
      $("#buraco6").attr('src', ""); 
      $("#buraco6").attr('src',"img/alface1.png");
      $("#buraco6").css("top", "73%");
      $("#buraco6").removeClass('bcr6');
      $("#buraco6").addClass('bc6');
  }

  else if($('#buraco6').attr('src')== "img/alface1.png"){
    $("#buraco6").attr('src', ""); 
    $("#buraco6").attr('src',"img/alface2.png"); 
    $("#buraco6").css("top", "70%");
    $("#buraco6").removeClass('bc6');
    $("#buraco6").addClass('brcp6');
  } else if ($('#buraco6').attr('src')== "img/alface2.png") {
    alert("aaaaa");
    $("#buraco6").attr('src',"");
    $('#alfacecesta2').css('display', 'block');

  }
});

// Desafio Cozinha  -----------------------------------------------------------------

document.getElementById('C_cestavazia3').draggable = false;


$( "#C_cenouracesta1, #C_cenouracesta2, #C_alfacecesta1, #C_alfacecesta2, #C_tomatecesta1, #C_tomatecesta2").draggable({
      revert: true,
      revertDuration: 600,
      cursor: "grabbing",
      containment: '#moverlegumes',
        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
       
       }
    });


var qntLegumesPia = 0;

$("#droplegumes").droppable({
      

        drop: function( event, ui ) {       
          var draggableId = ui.draggable.attr("id");
          draggableId= '"#'+ draggableId+'"';
         // $(this).css('z-index', '1000'); 
          // $(ui.draggable).css(' z-index','1'); 
          
          if (draggableId=='"#C_tomatecesta2"' || draggableId=='"#C_tomatecesta1"'){ 
              $(ui.draggable).css('top','42%');
          }  

           if (draggableId=='"#C_alfacecesta2"' || draggableId=='"#C_alfacecesta1"'){ 
              $(ui.draggable).css('top','40%');
          }  

           if (draggableId=='"#C_cenouracesta2"' || draggableId=='"#C_cenouracesta1"'){ 
              $(ui.draggable).css('top','35%');
          }    

          qntLegumesPia++;

            if (qntLegumesPia==6){
            
              $(".legumesCesta").addClass("legumesCestaClick");             
              $( ".legumesCestaClick").click(function() {
                 $(this).css('display', 'none');
                 var legumeaparecer= '#'+this.id +'B';
                 alert(this.id +"B");
                 $(legumeaparecer).css('display', 'block');

              });

            }       

          $( draggableId ).draggable( "disable" );


          }
      });





var graus1 =90;
var graus2 =0;
var ultClickID = undefined;

$( ".pecasCozinha").click(function() {

  if (this.id == ultClickID){   
  } else {
    ultClickID=this.id;
    graus1 =90;
    graus2 =0;
  }
  
  if (this.id=="peca1" || this.id=="peca8"){
      document.getElementById(this.id).style.transform = "rotate("+graus1+"deg)";
      graus1 = graus1 +90;
        if (graus1==90){
          console.log("ta na posicao certa");
          $(this).toggleClass("canoCerto");
        } else{
          $(this).toggleClass("canoCerto", false);
        }
  } else {
    document.getElementById(this.id).style.transform = "rotate("+graus2+"deg)";
    graus2 = graus2 +90;
      if (this.id =="peca3" || this.id =="peca4" || this.id =="peca7" || this.id =="peca9"){
        if (graus2==90 || graus2==270) {
          console.log("ta na posicao certa");
          $(this).toggleClass("canoCerto");
        } else {
          $(this).toggleClass("canoCerto", false);
        }
      }

      if (this.id =="peca2" || this.id =="peca5" || this.id =="peca6" || this.id =="peca10"){
        if (graus2==90) {
          console.log("ta na posicao certa");
          $(this).toggleClass("canoCerto");
        } else {
          $(this).toggleClass("canoCerto", false);
        }
      }


  }

  if (graus1==360){
    graus1=0;
  }

  if (graus2==360){
    graus2=0;
  }

  var totalCanos = $(".pecasCozinha.canoCerto").length;

  if (totalCanos==10){

    //alert("AEEEeEEEeEEEeeEeeeEe");
    $('#cobrirCozinha').css('display', 'none');
  } else {
    $('#cobrirCozinha').css('display', 'block');
  }



  //var idPeca = "";
  //var graus= 0;
  //dPeca = "#"+ this.id;
 
  
  console.log(graus1 , graus2);


});



// ---------------------------------------------------------------------------------
});





