// Mapa ----------------------------
$(document).ready(function() {

$(function () {
  $('[data-toggle="popover"]').popover({html:true})
})   

// Desafio Lixo -----------------------------------------------------------------
if ($("#desafiolixos").length) {
  createInvokeHelp(helps_texts["mei0"])

$( "#papel1, #metal1, #plastico1, #vidro1, #organico1, #papel2, #metal2, #plastico2, #vidro2, #organico2").draggable({
      revert: true,
      revertDuration: 600,
       cursor: "grabbing",



        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
       	 $('[data-toggle="popover"]').popover('hide');
        
       }
    });

var contagemLixoDrop=0;

function verificaLixo(){
  if (contagemLixoDrop==10){
    alert("Parabéns, agora vamos plantar!");
    window.location.href = "desafio plantar.html"
  }

}

$("#lixometal").droppable({
      accept: "#metal1, #metal2",
         over: function( event, ui){
           $("#lixometal").css("visibility", "hidden");
           $("#lixometalaberto").css("display", "block");


        },

        out: function( event, ui){
          $("#lixometalaberto").css("display", "none");
          $("#lixometal").css("visibility", "visible");

        },

        drop: function( event, ui ) {         
          $("#lixometalaberto").css("display", "none");
          $("#lixometal").css("visibility", "visible");
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none");

          contagemLixoDrop++;
          verificaLixo();

          }
      });

$("#lixopapel").droppable({
      accept: "#papel1, #papel2",
       over: function( event, ui){
           $("#lixopapel").css("visibility", "hidden");
           $("#lixopapelaberto").css("display", "block");
        },

        out: function( event, ui){
          $("#lixopapelaberto").css("display", "none");
          $("#lixopapel").css("visibility", "visible");

        },

        drop: function( event, ui ) {        
          $("#lixopapelaberto").css("display", "none");
          $("#lixopapel").css("visibility", "visible");
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none"); 

          contagemLixoDrop++;
          verificaLixo();         
          }
      });

$("#lixoplastico").droppable({
      accept: "#plastico1, #plastico2",
        over: function( event, ui){
           $("#lixoplastico").css("visibility", "hidden");
           $("#lixoplasticoaberto").css("display", "block");

        },

        out: function( event, ui){
           $("#lixoplasticoaberto").css("display", "none");
           $("#lixoplastico").css("visibility", "visible");

        },

        drop: function( event, ui ) {               
          $("#lixoplasticoaberto").css("display", "none");
          $("#lixoplastico").css("visibility", "visible");
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none"); 

          contagemLixoDrop++;
          verificaLixo();        
          }
      });

$("#lixovidro").droppable({
      accept: "#vidro1, #vidro2",
        over: function( event, ui){
         $("#lixovidro").css("visibility", "hidden");
          $("#lixovidroaberto").css("display", "block");
        },

        out: function( event, ui){
          $("#lixovidroaberto").css("display", "none");
          $("#lixovidro").css("visibility", "visible");

        },

        drop: function( event, ui ) {         
           $("#lixovidroaberto").css("display", "none");
           $("#lixovidro").css("visibility", "visible");
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none"); 
          contagemLixoDrop++;
          verificaLixo();        
          }
      });

$("#lixoorganico").droppable({
      accept: "#organico1, #organico2",
         over: function( event, ui){
          $("#lixoorganico").css("visibility", "hidden");
          $("#lixoorganicoaberto").css("display", "block");

        },

        out: function( event, ui){
            $("#lixoorganicoaberto").css("display", "none");
           $("#lixoorganico").css("visibility", "visible");
        },

        drop: function( event, ui ) {                    
           $("#lixoorganicoaberto").css("display", "none");
           $("#lixoorganico").css("visibility", "visible");
          var draggableId = ui.draggable.attr("id");
          draggableId= '#'+ draggableId;    
          $(draggableId).css("display", "none"); 
          contagemLixoDrop++;
          verificaLixo();        
          }
      });

// Desafio Plantar -----------------------------------------------------------------
} else if ($("#desafioplantar").length) {
  createInvokeHelp(helps_texts["mei1"])

var verificaLegumes = 0;

function verificaLegumesOK(){
  if (verificaLegumes==6){
    alert("Você conseguiu!");
    window.location.href = "desafio cozinha.html"
  }
}

$('#buraco1').click(function(){
  if ($('#buraco1').attr('src')== "img/desafios/sustentabilidade/buraco.png"){
    $("#buraco1").attr('src', "");  
    $("#buraco1").attr('src',"img/desafios/sustentabilidade/cenoura1.png");
    $("#buraco1").css("top", "66%");
    $("#buraco1").removeClass('bcr1');
    $("#buraco1").addClass('bc1');

  }

  else if($('#buraco1').attr('src')== "img/desafios/sustentabilidade/cenoura1.png"){
    $("#buraco1").attr('src', "");
    $("#buraco1").attr('src',"img/desafios/sustentabilidade/cenoura2.png");
    $("#buraco1").css("top", "60%");
    $("#buraco1").removeClass('bc1');
    $("#buraco1").addClass('brcp1');
  } else if ($('#buraco1').attr('src')== "img/desafios/sustentabilidade/cenoura2.png") {
    
    $("#buraco1").attr('src',"");
    $("#buraco1").css('display',"none");
    $('#cenouracesta1').css('display', 'block');
    verificaLegumes++;
    verificaLegumesOK();

  }  

});


$('#buraco2').click(function(){
    if ($('#buraco2').attr('src')== "img/desafios/sustentabilidade/buraco.png"){
      $("#buraco2").attr('src', ""); 
      $("#buraco2").attr('src',"img/desafios/sustentabilidade/cenoura1.png");
      $("#buraco2").css("top", "71%");
      $("#buraco2").removeClass('bcr2');
      $("#buraco2").addClass('bc2');
  }

  else if($('#buraco2').attr('src')== "img/desafios/sustentabilidade/cenoura1.png"){
    $("#buraco2").attr('src', "");
    $("#buraco2").attr('src',"img/desafios/sustentabilidade/cenoura2.png");
    $("#buraco2").css("top", "66%");
    $("#buraco2").removeClass('bc2');
    $("#buraco2").addClass('brcp2');
  } else if ($('#buraco2').attr('src')== "img/desafios/sustentabilidade/cenoura2.png") {
    
    $("#buraco2").attr('src',"");
    $("#buraco2").css('display',"none");
    $('#cenouracesta2').css('display', 'block');
     verificaLegumes++;
    verificaLegumesOK();


  }
   
});

$('#buraco3').click(function(){
    if ($('#buraco3').attr('src')== "img/desafios/sustentabilidade/buraco.png"){
      $("#buraco3").attr('src', ""); 
      $("#buraco3").attr('src',"img/desafios/sustentabilidade/tomate1.png");
      $("#buraco3").css("top", "61%");
      $("#buraco3").removeClass('bcr3');
      $("#buraco3").addClass('bc3');
  }

  else if($('#buraco3').attr('src')== "img/desafios/sustentabilidade/tomate1.png"){
    $("#buraco3").attr('src', "");
    $("#buraco3").attr('src',"img/desafios/sustentabilidade/tomate2.png");
    $("#buraco3").css("top", "54%");
    $("#buraco3").removeClass('bc3');
    $("#buraco3").addClass('brcp3');
  } else if ($('#buraco3').attr('src')== "img/desafios/sustentabilidade/tomate2.png") {
   
    $("#buraco3").attr('src',"");
    $("#buraco3").css('display',"none");
    $('#tomatecesta1').css('display', 'block');
     verificaLegumes++;
    verificaLegumesOK();


  }
});

$('#buraco4').click(function(){
    if ($('#buraco4').attr('src')== "img/desafios/sustentabilidade/buraco.png"){
      $("#buraco4").attr('src', ""); 
      $("#buraco4").attr('src',"img/desafios/sustentabilidade/tomate1.png");
      $("#buraco4").css("top", "68%");
      $("#buraco4").removeClass('bcr4');
      $("#buraco4").addClass('bc4');
  }

  else if($('#buraco4').attr('src')== "img/desafios/sustentabilidade/tomate1.png"){
    $("#buraco4").attr('src', "");
    $("#buraco4").attr('src',"img/desafios/sustentabilidade/tomate2.png");
    $("#buraco4").css("top", "62%");
    $("#buraco4").removeClass('bc4');
    $("#buraco4").addClass('brcp4');
  } else if ($('#buraco4').attr('src')== "img/desafios/sustentabilidade/tomate2.png") {
    
    $("#buraco4").attr('src',"");
    $("#buraco4").css('display',"none");
    $('#tomatecesta2').css('display', 'block');
     verificaLegumes++;
    verificaLegumesOK();


  }
});

$('#buraco5').click(function(){
    if ($('#buraco5').attr('src')== "img/desafios/sustentabilidade/buraco.png"){
      $("#buraco5").attr('src', ""); 
      $("#buraco5").attr('src',"img/desafios/sustentabilidade/alface1.png");
      $("#buraco5").css("top", "67%");
      $("#buraco5").removeClass('bcr5');
      $("#buraco5").addClass('bc5');
  }

  else if($('#buraco5').attr('src')== "img/desafios/sustentabilidade/alface1.png"){
    $("#buraco5").attr('src', ""); 
    $("#buraco5").attr('src',"img/desafios/sustentabilidade/alface2.png");
    $("#buraco5").css("top", "64%");
    $("#buraco5").removeClass('bc5');
    $("#buraco5").addClass('brcp5');
  } else if ($('#buraco5').attr('src')== "img/desafios/sustentabilidade/alface2.png") {
    
    $("#buraco5").attr('src',"");
    $("#buraco5").css('display',"none");
    $('#alfacecesta1').css('display', 'block');
     verificaLegumes++;
    verificaLegumesOK();


  }
});

$('#buraco6').click(function(){
    if ($('#buraco6').attr('src')== "img/desafios/sustentabilidade/buraco.png"){
      $("#buraco6").attr('src', ""); 
      $("#buraco6").attr('src',"img/desafios/sustentabilidade/alface1.png");
      $("#buraco6").css("top", "73%");
      $("#buraco6").removeClass('bcr6');
      $("#buraco6").addClass('bc6');
  }

  else if($('#buraco6').attr('src')== "img/desafios/sustentabilidade/alface1.png"){
    $("#buraco6").attr('src', ""); 
    $("#buraco6").attr('src',"img/desafios/sustentabilidade/alface2.png"); 
    $("#buraco6").css("top", "70%");
    $("#buraco6").removeClass('bc6');
    $("#buraco6").addClass('brcp6');
  } else if ($('#buraco6').attr('src')== "img/desafios/sustentabilidade/alface2.png") {
    
    $("#buraco6").attr('src',"");
    $("#buraco6").css('display',"none");
    $('#alfacecesta2').css('display', 'block');
     verificaLegumes++;
    verificaLegumesOK();
  }
});

// Desafio Cozinha  -----------------------------------------------------------------
} else if ($("#desafiocozinha").length) {
  createInvokeHelp(helps_texts["mei2"])

document.getElementById('C_cestavazia3').draggable = false;
var verificaCanos = false;
var verificaLegumesCesta = 0;

function verificaLegumesCestaOK(){
  if (verificaLegumesCesta==6 && verificaCanos){
    alert("Terminou! Parabéns!")
  }
}




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
              alert("Agora CLICA nos legumes para tirar da pia")
            
              $(".legumesCesta").addClass("legumesCestaClick");             
              $( ".legumesCestaClick").click(function() {
                 $(this).css('display', 'none');
                 var legumeaparecer= '#'+this.id +'B';
                // alert(this.id +"B");

                 $(legumeaparecer).css('display', 'block');
                 verificaLegumesCesta++;
                 verificaLegumesCestaOK()


              });

            }       

          $(ui.draggable).draggable({revert:false});
        $(ui.draggable).draggable({disabled:true});


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
    $('#cobrirCozinha').css('display', 'none');
    verificaCanos = true;
     alert("Arrasta as coisas pra pia");
     verificaLegumesCestaOK()
  } else {
    $('#cobrirCozinha').css('display', 'block');
    verificaCanos = false;
    verificaLegumesCestaOK()
  }
  console.log(graus1 , graus2);
});


// Desafio Foguete ---------------------------------------------------------------------------------
} else if ($("#desafiofoguete").length) {
createInvokeHelp(helps_texts["mei2"])
  
var bico = 0;
var meio = 0;
var rabo = 0;

$( ".prev1").click(function() { if (bico==0){bico=3; mudaPeca();} else {bico--;mudaPeca();}});
$( ".next1").click(function() { if (bico==3){bico=0; mudaPeca();} else {bico++;mudaPeca();}});
$( ".prev2").click(function() { if (meio==0){meio=3; mudaPeca();} else {meio--;mudaPeca();}});
$( ".next2").click(function() { if (meio==3){meio=0; mudaPeca();} else {meio++;mudaPeca();}});
$( ".prev3").click(function() { if (rabo==0){rabo=3; mudaPeca();} else {rabo--;mudaPeca();}});
$( ".next3").click(function() { if (rabo==3){rabo=0; mudaPeca();} else {rabo++;mudaPeca();}});


function mudaPeca(){
  switch (bico){
    case 0:
    $('#bico0').css('display', 'block');$('#bico1').css('display', 'none'); $('#bico2').css('display', 'none'); $('#bico3').css('display', 'none');break;
    case 1:
    $('#bico1').css('display', 'block');$('#bico2').css('display', 'none'); $('#bico3').css('display', 'none'); $('#bico0').css('display', 'none');break;
    case 2:
    $('#bico1').css('display', 'none');$('#bico2').css('display', 'block');$('#bico3').css('display', 'none'); $('#bico0').css('display', 'none');break;
    case 3:
    $('#bico1').css('display', 'none');$('#bico2').css('display', 'none');$('#bico3').css('display', 'block'); $('#bico0').css('display', 'none');break;
  }

  switch (meio){
    case 0:
    $('#meio0').css('display', 'block');$('#meio1').css('display', 'none');$('#meio2').css('display', 'none'); $('#meio3').css('display', 'none');break;
    case 1:
    $('#meio1').css('display', 'block');$('#meio2').css('display', 'none');$('#meio3').css('display', 'none'); $('#meio0').css('display', 'none');break;
    case 2:
    $('#meio1').css('display', 'none');$('#meio2').css('display', 'block');$('#meio3').css('display', 'none'); $('#meio0').css('display', 'none');break;
    case 3:
    $('#meio1').css('display', 'none');$('#meio2').css('display', 'none');$('#meio3').css('display', 'block'); $('#meio0').css('display', 'none');break;
  }

   switch (rabo){
    case 0:
    $('#rabo0').css('display', 'block');$('#rabo1').css('display', 'none');$('#rabo2').css('display', 'none'); $('#rabo3').css('display', 'none');break;
    case 1:
    $('#rabo1').css('display', 'block');$('#rabo2').css('display', 'none');$('#rabo3').css('display', 'none'); $('#rabo0').css('display', 'none');break;
    case 2:
    $('#rabo1').css('display', 'none');$('#rabo2').css('display', 'block');$('#rabo3').css('display', 'none'); $('#rabo0').css('display', 'none');break;
    case 3:
    $('#rabo1').css('display', 'none');$('#rabo2').css('display', 'none');$('#rabo3').css('display', 'block'); $('#rabo0').css('display', 'none');break;
  }
  }
}


// Desafio do bebedouro ---------------------------------------------------------------------------------

$( "#imgVaso, #imgGarrafao, #imgBalde").draggable({
      revert: true,
      revertDuration: 600,
       cursor: "grabbing",
        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
         $('[data-toggle="popover"]').popover('hide');
        
       }
    });

$("#aceitaBalde").droppable({
      accept: "#imgBalde",
       over: function( event, ui){         
        },

        out: function( event, ui){      
        },

        drop: function( event, ui ) {      
          $("#imgBalde").css("display", "none");
          $("#imgBaldeOK").css("display", "block");
          alert("conseguiu");
          }
      });


// Desafio do Prato ---------------------------------------------------------------------------------
var contIndex=1;
var bilotoLeft = 49.4;

$( ".alimentosSaudaveis , .alimentosNaoSaudaveis ").draggable({
      revert: true,
      revertDuration: 600,
       cursor: "grabbing",
        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
        contIndex++;
         $('[data-toggle="popover"]').popover('hide');
         $(this).css("z-index", contIndex);

        
       }
    });

$("#imgPrato").droppable({
  tolerance: "fit",
       over: function( event, ui){         
        },

        out: function( event, ui){ 

           $(ui.draggable).removeClass('tanoprato');

          if($(ui.draggable).hasClass('alimentosSaudaveis')){
              bilotoLeft = bilotoLeft-1.6;                
               $( "#biloto" ).animate({
                    left: bilotoLeft+"%"                   
                  })


            } else{
              bilotoLeft = bilotoLeft+8;
               $( "#biloto" ).animate({
                    left: bilotoLeft+"%"                   
                  })
            }

        },

        drop: function(event,ui) { 

          if ($(ui.draggable).hasClass('tanoprato')){

          } else {

             $(ui.draggable).draggable({revert:false});
            //$(ui.draggable).draggable({disabled:true});

            if($(ui.draggable).hasClass('alimentosSaudaveis')){
              bilotoLeft = bilotoLeft+1.6;             
                $( "#biloto" ).animate({
                    left: bilotoLeft+"%"                   
                  })

            } else{
              bilotoLeft = bilotoLeft-8;
               $( "#biloto" ).animate({
                    left: bilotoLeft+"%"                   
                  })
            }

          }

          $(ui.draggable).addClass('tanoprato');           
                  
          }
      });



$( "#btn-enviar-prato").click(function() {

  if (bilotoLeft<=55.7){
    alert("Seu prato não está saúdavel ainda")
  } else{
    alert("Prato saúdavel! *enviar*")
  }

})
  
// Desafio Campinho ------------------------------------------------------------------
var contIndexC=1;


$( ".criancaAmarela , .criancaVermelha").draggable({
      //revert: true,
      revertDuration: 600,
       cursor: "grabbing",
       containment: "#gramadotodo",
        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
        contIndexC++;
         $('[data-toggle="popover"]').popover('hide');
         $(this).css("z-index", contIndexC);

        
       }
    });
var amareloTrue = false;
var vermelhoTrue = false;

$("#campinhoVermelho").droppable({
   accept: ".criancaVermelha",
  //tolerance: 10%,
       over: function( event, ui){         
        },

        out: function( event, ui){ 

        $(ui.draggable).removeClass('tanocampo'); 

        },

        drop: function(event,ui) {   
         
            var totalCriancaVermelha = $(".criancaVermelha.tanocampo").length;

            if($(ui.draggable).hasClass('tanocampo')){             

                } else{            
                  if (totalCriancaVermelha==2) {
                    vermelhoTrue =true;
                      if (vermelhoTrue && amareloTrue){
                        alert("ta tudo organizado")
                      }
                  }
                  
                 }
         $(ui.draggable).addClass('tanocampo');        
                  
        }
});

$("#campinhoAmarelo").droppable({
   accept: ".criancaAmarela",
  //tolerance: 10%,
       over: function( event, ui){         
        },

        out: function( event, ui){ 
        $(ui.draggable).removeClass('tanocampo');  
        },

        drop: function(event,ui) {        
        var totalCriancaAmarela = $(".criancaAmarela.tanocampo").length;
        if($(ui.draggable).hasClass('tanocampo')){            

            } else{

              if (totalCriancaAmarela==2) {
                amareloTrue=true;

                if (vermelhoTrue && amareloTrue){
                  alert("ta tudo organizado")
                }
              }              
            } 

        $(ui.draggable).addClass('tanocampo');         
                  
        }
});

// ---------------------------------------------------------------------------------
});


function mapa() {
  createInvokeHelp(helps_texts["map"])

  $( "#pecaMesa1, #pecaMesa2, #pecaMesa3, #pecaMesa4, #pecaMesa5, #pecaMesa6, #pecaMesa7").draggable({
       revert: true,
        revertDuration: 600,
       cursor: "grabbing",

        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
        $('[data-toggle="popover"]').popover('hide');
        
       }
    });

 var contagemPecaMapa=0;

 function verificaPecaMapa(){
  if(contagemPecaMapa==7){
    alert("Você montou todas as peças!");
    window.location.href = "fala.html"
  }
 }


  $("#pecaMapa1").droppable({
        accept: "#pecaMesa1",
          over: function( event, ui){     },

          out: function( event, ui){      },

          drop: function( event, ui ) {         
            $("#pecaMesa1").css("display", "none");
            $("#pecaMapa1").css("visibility", "visible"); 
            contagemPecaMapa++;
            verificaPecaMapa();       
            }
        });

  $("#pecaMapa2").droppable({
        accept: "#pecaMesa2",
          over: function( event, ui){     },

          out: function( event, ui){      },

          drop: function( event, ui ) {         
            $("#pecaMesa2").css("display", "none");
            $("#pecaMapa2").css("visibility", "visible");
            contagemPecaMapa++;
            verificaPecaMapa();         
            }
        });

  $("#pecaMapa3").droppable({
        accept: "#pecaMesa3",
          over: function( event, ui){     },

          out: function( event, ui){      },

          drop: function( event, ui ) {         
            $("#pecaMesa3").css("display", "none");
            $("#pecaMapa3").css("visibility", "visible");
            contagemPecaMapa++;
            verificaPecaMapa();         
            }
        });

  $("#pecaMapa4").droppable({
        accept: "#pecaMesa4",
          over: function( event, ui){     },

          out: function( event, ui){      },

          drop: function( event, ui ) {         
            $("#pecaMesa4").css("display", "none");
            $("#pecaMapa4").css("visibility", "visible");
            contagemPecaMapa++;
            verificaPecaMapa();         
            }
        });


  $("#pecaMapa5").droppable({
        accept: "#pecaMesa5",
          over: function( event, ui){     },

          out: function( event, ui){      },

          drop: function( event, ui ) {         
            $("#pecaMesa5").css("display", "none");
            $("#pecaMapa5").css("visibility", "visible"); 
            contagemPecaMapa++;
            verificaPecaMapa();        
            }
        });

  $("#pecaMapa6").droppable({
        accept: "#pecaMesa6",
          over: function( event, ui){     },

          out: function( event, ui){      },

          drop: function( event, ui ) {         
            $("#pecaMesa6").css("display", "none");
            $("#pecaMapa6").css("visibility", "visible"); 
            contagemPecaMapa++;
            verificaPecaMapa();        
            }
        });


  $("#pecaMapa7").droppable({
        accept: "#pecaMesa7",
          over: function( event, ui){     },

          out: function( event, ui){      },

          drop: function( event, ui ) {         
            $("#pecaMesa7").css("display", "none");
            $("#pecaMapa7").css("visibility", "visible"); 
            contagemPecaMapa++;
            verificaPecaMapa();        
            }
        }); 
}
