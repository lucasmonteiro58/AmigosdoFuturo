
$(document).ready(function() {

  $(function () {
    $('[data-toggle="popover"]').popover({html:true})
  })  

  // function function_name(argument) {
  //   var isDragging = $(".ui-draggable").hasClass(".ui-draggable-dragging")
  //   if(!isDragging) {
  //     $(".ui-draggable").addClass("hover-big")
  //   }
  // }

// Desafio Foguete ---------------------------------------------------------------------------------
if ($("#desafiofoguete").length) {
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

// Desafio ONG --------------------------------------------------------------------------------------
var contAlimentoRua =0;
$( ".alimentosRua" ).click(function() {
 contAlimentoRua ++;
 var idAlimentoRua = "#" + $(this).attr('id') + "cesta";
 //alert(idAlimentoRua);

 $(idAlimentoRua).css('display','block');
 $(this).css('display','none');

 if (contAlimentoRua==4){
  alert("Você conseguiu");
 }


});

// Desafio Radio --------------------------------------------------------------------------------------
var contJornalRua =0;
$( ".jornalRua" ).click(function() {
 contJornalRua ++;
 var idJornalRua = "#" + $(this).attr('id') + "cesta";

 $(idJornalRua).css('display','block');
 $(this).css('display','none');

 if (contJornalRua==4){
  alert("Você conseguiu");
 }


}); 


// Desafio Prefeitura  --------------------------------------------------------------------------------------
var contLei=0;
$( ".btnLei" ).click(function() {
  if (contLei==0) {
    $('#titulolei').text("Lei 456");
    $('#textolei').text("Todos devem plantar uma árvore e dar um nome a ela.");
    contLei++;
  } else if(contLei==1) {
    $('#titulolei').text("Lei 9564");
    $('#textolei').text("Pode ser preso aquele que não der bom dia ao porteiro.");
    contLei++;
  } else{
    alert("terminou");
  }
  
}); 

});

// Desafio carrinho --------------------------------------------------------------------------------------
var liberarBotaoCarrinho= false;
$( ".pecasforacarro" ).click(function() {
 
 var idPecaCarro = "#" + $(this).attr('id') + "dentro";

 if ($(idPecaCarro).hasClass('tanocarro')){
  $(idPecaCarro).css('display','none');
  $(idPecaCarro).removeClass('tanocarro');
  verificarPecasCarro();


 } else {

   $(idPecaCarro).css('display','block');
   $(idPecaCarro).addClass('tanocarro');
   verificarPecasCarro();
  }
 
}); 

function verificarPecasCarro(){
  liberarBotaoCarrinho=false;
  var totalpecasCarro = $(".pecasnocarro.tanocarro").length;
  if (totalpecasCarro==5){
    liberarBotaoCarrinho=true;

  }
}



$( "#btn_next_carrinho" ).click(function() {
  if (liberarBotaoCarrinho) {
    $('.carrofunciona').css('display', 'block');
  } else {
     $('.carrofuncionaNAO').css('display', 'block');
  }
})

$( "#btnOKcarro" ).click(function() {
  alert("proximo desafio");
})

$( "#btnOKcarroNAO" ).click(function() {
  $('.carrofuncionaNAO').css('display', 'none');
})

function voltarpecas(){
  $('#infopeca').text("INFORMAÇÃO SOBRE A PEÇA");
  $('#infopeca').css('color','black');
  $('#infopeca').css('opacity','0.4');
  $('#infopeca').css('font-size','2.6vw');
  $('#infopeca').css('bottom','5%');
}

$('#sensorprox_carro').hover(        
   function () {
      $(this).css("opacity","1");
      $('#infopeca').text("RECONHECE UMA COR");
      $('#infopeca').css('color','#3E6DAC');
      $('#infopeca').css('opacity','1');
   },function () {
    $(this).css('opacity','0.5');
    voltarpecas();
  }
);

$('#roda_carro').hover(        
   function () {
      $(this).css("opacity","1");
      $('#infopeca').text("PERMITE QUE O CARRINHO ANDE");
      $('#infopeca').css('color','#3E6DAC');
      $('#infopeca').css('opacity','1');
   },function () {
     $(this).css('opacity','0.5');
    voltarpecas();}
);

$('#leds_carro').hover(        
   function () {
      $(this).css("opacity","1");
      $('#infopeca').text("ADICIONA LUZES AO CARRINHO");
      $('#infopeca').css('color','#3E6DAC');
      $('#infopeca').css('opacity','1');
   },function () {
    $(this).css('opacity','0.5');
    voltarpecas();}
);

$('#motor_carro').hover(        
   function () {
      $(this).css("opacity","1");
      $('#infopeca').text("AJUDA AS RODAS GIRAREM");
      $('#infopeca').css('color','#3E6DAC');
      $('#infopeca').css('opacity','1');
   },function () {
     $(this).css('opacity','0.5');
     voltarpecas();}
);

$('#placa_carro').hover(        
   function () {
      $(this).css("opacity","1");
      $('#infopeca').text("GUARDA OS CÓDIGOS QUE FAZEM O CARRINHO ANDAR");
      $('#infopeca').css('color','#3E6DAC');
      $('#infopeca').css('opacity','1');
      $('#infopeca').css('font-size','2.2vw');
      $('#infopeca').css('bottom','1%');
   },function () {
     $(this).css('opacity','0.5');
     voltarpecas();}
);


// Desafio Escola Fora --------------------------------------------------------------------------------------

var contElementsEFora = 0;
var clickSendEFora= false;

function validarSendEFora(){
  if (contElementsEFora>=5){
    clickSendEFora=true;
   // alert(contElementsEFora);
  } else{
    clickSendEFora=false;
   // alert(contElementsEFora)
  }
}

var acessibilidadeBOL= false;
var PintarBOL= false;
var arborizarBOL= false;
var onibusBOL= false;
var parquinhoBOL= false;
var hortaBOL= false;
var lixoBOL= false;

$( "#icon_acessibilidade2" ).click(function() {
  if (clickSendEFora==false) {
    $("#rampaacessibilidade").css('display','block');
    contElementsEFora++;
    acessibilidadeBOL= true;
    validarSendEFora();

  }
})
$( "#icon_acessibilidade4" ).click(function() {
  $("#rampaacessibilidade").css('display','none');
  contElementsEFora--;
  acessibilidadeBOL= false;
  validarSendEFora();
})


$( "#icon_pintar2" ).click(function() {
  if (clickSendEFora==false) {
    $("#escolafora_pintada").css('display','block');
    contElementsEFora++;
    PintarBOL= true;
    validarSendEFora();
  }
})
$( "#icon_pintar4" ).click(function() {
  $("#escolafora_pintada").css('display','none');
  contElementsEFora--;
  PintarBOL=false;
  validarSendEFora();
})


$( "#icon_arborizar2" ).click(function() {
  if (clickSendEFora==false) {
    $("#arvoreescola1").css('display','block');
    $("#arvoreescola2").css('display','block');
    contElementsEFora++;
    arborizarBOL= true;
    validarSendEFora();
  }
})
$( "#icon_arborizar4" ).click(function() {
  $("#arvoreescola1").css('display','none');
  $("#arvoreescola2").css('display','none');
  contElementsEFora--;
  arborizarBOL= false;
  validarSendEFora();
})


$( "#icon_onibus2" ).click(function() {
  if (clickSendEFora==false) {
    $("#onibusescolar").css('display','block');
    contElementsEFora++;
    onibusBOL= true;
    validarSendEFora();
  }
})
$( "#icon_onibus4" ).click(function() {
  $("#onibusescolar").css('display','none');
  contElementsEFora--;
  onibusBOL= false;
  validarSendEFora();
})


$( "#icon_horta2" ).click(function() {
  if (clickSendEFora==false) {
    $("#hortaescola").css('display','block');
    contElementsEFora++;
    hortaBOL= true;
    validarSendEFora();
  }
})
$( "#icon_horta4" ).click(function() {
  $("#hortaescola").css('display','none');
  contElementsEFora--;
  hortaBOL= false;
  validarSendEFora();
})


$( "#icon_parquinho2" ).click(function() {
  if (clickSendEFora==false) {
    $("#parquinhoescola").css('display','block');
    contElementsEFora++;
    parquinhoBOL= true;
    validarSendEFora();
  }
})
$( "#icon_parquinho4" ).click(function() {
  $("#parquinhoescola").css('display','none');
  contElementsEFora--;
  parquinhoBOL= false;
  validarSendEFora();
})


$( "#icon_lixo2" ).click(function() {
  if (clickSendEFora==false) {
    $("#lixeirasseletivas").css('display','block');
    contElementsEFora++;
    lixoBOL= true;
    validarSendEFora();
  }
})
$( "#icon_lixo4" ).click(function() {
  $("#lixeirasseletivas").css('display','none');
  contElementsEFora--;
  lixoBOL=false;
  validarSendEFora();
})

//-----------------------

var idIconEscolaFora;
var idIconEscolaFora1;
var clickIconAdd=false;
var clickIconCheck=false;


$( ".iconNormal" ).mouseenter(function() {

    if (clickSendEFora==false){    
          idIconEscolaFora = "#"+$(this).attr('id');
          idIconEscolaFora1 = idIconEscolaFora.substr(0, idIconEscolaFora.length -1);
          idIconEscolaFora1 = idIconEscolaFora1+"2";   
          $(idIconEscolaFora).css('display','none');
          $(idIconEscolaFora1).css('display','block');
          clickIconAdd=false; 

          $( ".iconAdd" ).click(function() {      
            idIconEscolaFora = "#"+$(this).attr('id');
            idIconEscolaFora1 = idIconEscolaFora.substr(0, idIconEscolaFora.length -1);
            idIconEscolaFora1 = idIconEscolaFora1+"3";
            $(idIconEscolaFora).css('display','none');
            $(idIconEscolaFora1).css('display','block'); 
            clickIconAdd=true;
          }); 
    } 

      }) 



  $( ".iconAdd" ).mouseleave(function() {

    idIconEscolaFora = "#"+$(this).attr('id');
    idIconEscolaFora1 = idIconEscolaFora.substr(0, idIconEscolaFora.length -1);
    idIconEscolaFora1 = idIconEscolaFora1+"1";
    $(idIconEscolaFora).css('display','none');
    $(idIconEscolaFora1).css('display','block');

      $( ".iconAdd" ).click(function() {      
      idIconEscolaFora = "#"+$(this).attr('id');
      idIconEscolaFora1 = idIconEscolaFora.substr(0, idIconEscolaFora.length -1);
      idIconEscolaFora1 = idIconEscolaFora1+"3";
      $(idIconEscolaFora).css('display','none');
      $(idIconEscolaFora1).css('display','block'); 
      clickIconAdd=true;

      });

    if (clickIconAdd) {
    
    idIconEscolaFora = "#"+$(this).attr('id');
    idIconEscolaFora1 = idIconEscolaFora.substr(0, idIconEscolaFora.length -1);
    idIconEscolaFora1 = idIconEscolaFora1+"3";
    $(idIconEscolaFora).css('display','none');
    $(idIconEscolaFora1).css('display','block');
    }

})

  //---------------


   $( ".iconCheck" ).mouseenter(function() {   
    idIconEscolaFora = "#"+$(this).attr('id');
    idIconEscolaFora1 = idIconEscolaFora.substr(0, idIconEscolaFora.length -1);
    idIconEscolaFora1 = idIconEscolaFora1+"4";   
    $(idIconEscolaFora).css('display','none');
    $(idIconEscolaFora1).css('display','block');
     clickIconCheck=false;

    $( ".iconMenos" ).click(function() {      
      idIconEscolaFora = "#"+$(this).attr('id');
      idIconEscolaFora1 = idIconEscolaFora.substr(0, idIconEscolaFora.length -1);
      idIconEscolaFora1 = idIconEscolaFora1+"1";
      $(idIconEscolaFora).css('display','none');
      $(idIconEscolaFora1).css('display','block'); 
      clickIconCheck=true;
    });  

  })

   $( ".iconMenos" ).mouseleave(function() {
  
   
  $(idIconEscolaFora).css('display','block');
  $(idIconEscolaFora1).css('display','none');

  $( ".iconMenos" ).click(function() {      
      idIconEscolaFora = "#"+$(this).attr('id');
      idIconEscolaFora1 = idIconEscolaFora.substr(0, idIconEscolaFora.length -1);
      idIconEscolaFora1 = idIconEscolaFora1+"1";
      $(idIconEscolaFora).css('display','none');
      $(idIconEscolaFora1).css('display','block'); 
      clickIconCheck=true;

      });

    if (clickIconCheck) {
    
    $(idIconEscolaFora).css('display','none');
    $(idIconEscolaFora1).css('display','block');
    }
})
//-----------------

var posicaoEF=1;
$( "#btnNextEscola" ).click(function() {
  if(clickSendEFora){    

   

    if(acessibilidadeBOL){
      $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escola fora/bts/bt_acessib_normal.png');
      $("#TxtEscolaFora"+posicaoEF).text("Facilidade para quem usa cadeira de rodas");
      posicaoEF++;
    }

    if(PintarBOL){
      $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escola fora/bts/bt_pintar_normal.png');
      $("#TxtEscolaFora"+posicaoEF).text("Cores bonitas");
      posicaoEF++;
    }

    if(arborizarBOL){
      $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escola fora/bts/bt_arbori_normal.png');
      $("#TxtEscolaFora"+posicaoEF).text("Mais sombra e ar fresco");
      posicaoEF++;
    }

    if(onibusBOL){
      $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escola fora/bts/bt_bus_normal.png');
      $("#TxtEscolaFora"+posicaoEF).text("Mais aulas pela cidade");
      posicaoEF++;
    }

    if(parquinhoBOL){
      $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escola fora/bts/bt_parque_normal.png');
      $("#TxtEscolaFora"+posicaoEF).text("Um recreio divertido");
      posicaoEF++;
    }

    if(hortaBOL){
      $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escola fora/bts/bt_horta_normal.png');
      $("#TxtEscolaFora"+posicaoEF).text("Alimentos colhidos da horta");
      posicaoEF++;
    }

    if(lixoBOL){
      $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escola fora/bts/bt_lixo_normal.png');
      $("#TxtEscolaFora"+posicaoEF).text("Lixo separadinho");
      posicaoEF++;
    }

     $('.popoverEF').css('display', 'block'); //alert("entou");

   
  } else{
    alert("escolha 5 opcoes antes de enviar")
  }

})


$("#btnTrocarEF" ).click(function() {
  $('.popoverEF').css('display', 'none');
   posicaoEF=1;

   for (i = 0; i < cars.length; i++) { 
     $("#imgEscolaFora"+i).attr('src', '');
     $("#TxtEscolaFora"+i).text("");
  }
  acessibilidadeBOL= false;
  PintarBOL= false;
  arborizarBOL= false;
  onibusBOL= false;
  parquinhoBOL= false;
  hortaBOL= false;
  lixoBOL= false;
})

$("#btnSalvarEF" ).click(function() {
  alert('*INSIRA* código para o proximo desafio')
})

  
//Desafio escola dentro------------------------------------------------------------------------------------------------------------------

var posicaoSalaVazia1=true;
var posicaoSalaVazia2=true;
var posicaoSalaVazia3=true;
var posicaoSalaVazia4=true
var posicaoSalaVazia5=true;


var salaVazia1="";
var salaVazia2="";
var salaVazia3="";
var salaVazia4="";
var salaVazia5="";


function posicaoSalas(idImagemSala){

  if (posicaoSalaVazia1){
      $(idImagemSala).css('display', 'block');
      $(idImagemSala).css('top', '26.1%');
      $(idImagemSala).css('left', '26.6%');
      $(idImagemSala).css('width', '13.7%');
      posicaoSalaVazia1=false;
      salaVazia1 = idImagemSala;

  } else if (posicaoSalaVazia2){
      $(idImagemSala).css('display', 'block');
      $(idImagemSala).css('top', '45%');
      $(idImagemSala).css('left', '26.6%');
      $(idImagemSala).css('width', '13.7%');
      posicaoSalaVazia2=false;
      salaVazia2 = idImagemSala;
  } else if (posicaoSalaVazia3){
       $(idImagemSala).css('display', 'block');
      $(idImagemSala).css('top', '18.8%');
      $(idImagemSala).css('left', '43.4%');
      $(idImagemSala).css('width', '13%');
      posicaoSalaVazia3=false;
      salaVazia3 = idImagemSala;
  } else if (posicaoSalaVazia4){
       $(idImagemSala).css('display', 'block');
      $(idImagemSala).css('top', '26.1%');
      $(idImagemSala).css('left', '59.6%');
      $(idImagemSala).css('width', '13.7%');
      posicaoSalaVazia4=false;
       salaVazia4 = idImagemSala;
  } else if (posicaoSalaVazia5){
     $(idImagemSala).css('display', 'block');
      $(idImagemSala).css('top', '45%');
      $(idImagemSala).css('left', '59.6%');
      $(idImagemSala).css('width', '13.7%');
      posicaoSalaVazia5=false;
      salaVazia5 = idImagemSala;
  }

}

function deixarTrueSalas(idimg){
  habilitarBtnProximo=false;
  if (salaVazia1==idimg){
    posicaoSalaVazia1=true;
  } else if(salaVazia2==idimg){
    posicaoSalaVazia2=true;
  } else if(salaVazia3==idimg){
    posicaoSalaVazia3=true;
  } else if(salaVazia4==idimg){
    posicaoSalaVazia4=true;
  } else if(salaVazia5==idimg){
    posicaoSalaVazia5=true;
  }
}

var idImgSala="";
var todasSalasOcupadas= false;
var habilitarBtnProximo = false;

function todosOcupados(){
  if (posicaoSalaVazia1==false && posicaoSalaVazia2==false && posicaoSalaVazia3==false && posicaoSalaVazia4==false && posicaoSalaVazia5==false){
    todasSalasOcupadas=true;
  } else {
    todasSalasOcupadas=false;
  }
}

function FaseDentroOK(){
  habilitarBtnProximo=true;
}

$( "#icon_biblioteca1" ).click(function() {
    todosOcupados();
  if (todasSalasOcupadas){
      FaseDentroOK();
  } else{
    idImgSala="#imgBiblioteca";
    posicaoSalas(idImgSala);  
    $(this).css('display', 'none');
    $('#icon_biblioteca2').css('display', 'block')
    todosOcupados();
  }
})
$( "#icon_biblioteca2" ).click(function() {
  idImgSala="#imgBiblioteca";
  $(idImgSala).css('display', 'none');
  deixarTrueSalas(idImgSala);  
  $(this).css('display', 'none');
  $('#icon_biblioteca1').css('display', 'block')
})


$( "#icon_teatro1" ).click(function() {
  todosOcupados();
  if (todasSalasOcupadas){
      FaseDentroOK();
  } else{
  idImgSala="#imgTeatro";
  posicaoSalas(idImgSala);  
  $(this).css('display', 'none');
  $('#icon_teatro2').css('display', 'block')
  todosOcupados();
}
})
$( "#icon_teatro2" ).click(function() {
  idImgSala="#imgTeatro";
   $(idImgSala).css('display', 'none');
  deixarTrueSalas(idImgSala);
  $(this).css('display', 'none');
  $('#icon_teatro1').css('display', 'block')
})


$( "#icon_cantina1" ).click(function() {
  todosOcupados();
  if (todasSalasOcupadas){
      FaseDentroOK();
  } else{
  idImgSala="#imgCantina";
  posicaoSalas(idImgSala);
  
  $(this).css('display', 'none');
  $('#icon_cantina2').css('display', 'block')
  todosOcupados();
}
})
$( "#icon_cantina2" ).click(function() {
   idImgSala="#imgCantina";
    $(idImgSala).css('display', 'none');
  deixarTrueSalas(idImgSala);
  $(this).css('display', 'none');
  $('#icon_cantina1').css('display', 'block')
})


$( "#icon_musica1" ).click(function() {
  todosOcupados();
  if (todasSalasOcupadas){
      FaseDentroOK();
  } else{
  idImgSala="#imgMusica";
  posicaoSalas(idImgSala);
  $(this).css('display', 'none');
  $('#icon_musica2').css('display', 'block')
  todosOcupados();
}
})
$( "#icon_musica2" ).click(function() {
  idImgSala="#imgMusica";
   $(idImgSala).css('display', 'none');
   deixarTrueSalas(idImgSala);
  $(this).css('display', 'none');
  $('#icon_musica1').css('display', 'block')
})


$( "#icon_informatica1" ).click(function() {
  todosOcupados();
  if (todasSalasOcupadas){
      FaseDentroOK();
  } else{
  idImgSala="#imgInformatica";
  posicaoSalas(idImgSala);
  $(this).css('display', 'none');
  $('#icon_informatica2').css('display', 'block')
  todosOcupados();
}
})
$( "#icon_informatica2" ).click(function() {
  idImgSala="#imgInformatica";
   $(idImgSala).css('display', 'none');
   deixarTrueSalas(idImgSala);
  $(this).css('display', 'none');
  $('#icon_informatica1').css('display', 'block')
})


$( "#icon_quimica1" ).click(function() {
  todosOcupados();
  if (todasSalasOcupadas){
      FaseDentroOK();
  } else{
  idImgSala="#imgQuimica";
  posicaoSalas(idImgSala);
  $(this).css('display', 'none');
  $('#icon_quimica2').css('display', 'block')
  todosOcupados();
}
})
$( "#icon_quimica2" ).click(function() {
   idImgSala="#imgQuimica";
    $(idImgSala).css('display', 'none');
    deixarTrueSalas(idImgSala);
  $(this).css('display', 'none');
  $('#icon_quimica1').css('display', 'block')
})


$( "#icon_danca1" ).click(function() {
  todosOcupados();
  if (todasSalasOcupadas){
      FaseDentroOK();
  } else{
   idImgSala="#imgDanca";
  $(this).css('display', 'none');
  posicaoSalas(idImgSala);
  $('#icon_danca2').css('display', 'block')
  todosOcupados();
  }
})
$( "#icon_danca2" ).click(function() {
   idImgSala="#imgDanca";
    $(idImgSala).css('display', 'none');
    deixarTrueSalas(idImgSala);
  $(this).css('display', 'none');
  $('#icon_danca1').css('display', 'block')
})


$( "#btnNextEscolaDentro" ).click(function() {
  todosOcupados();
 if (habilitarBtnProximo){
  alert("insira aqui codigo pra proxima fase");
 } else {
    alert("selecione 5");
 }
})




  


//------------------------------------------------------------------------------------------------------------------


  function popoverInfo() {
    $('[data-toggle="popover"]').popover({html:true})
  } 

// MODIFICACOES DEBORA-----------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// Mapa -------------------------------------------------------------------------------------------------------------
  function map() {
    createInvokeHelp(helps_texts["map"])
    popoverInfo()

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

   var contagemPecaMapa = 0;

   function verificaPecaMapa() {
    if(contagemPecaMapa == 7){
      comment_name = "start_quiz"
      createComment(comments_texts[comment_name])
      $(".robot-comment").fadeIn(300)
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
              verificaPecaMapa();}
          });
    $("#pecaMapa2").droppable({
          accept: "#pecaMesa2",
            over: function( event, ui){     },
            out: function( event, ui){      },
            drop: function( event, ui ) {         
              $("#pecaMesa2").css("display", "none");
              $("#pecaMapa2").css("visibility", "visible");
              contagemPecaMapa++;
              verificaPecaMapa();  }
          });
    $("#pecaMapa3").droppable({
          accept: "#pecaMesa3",
            over: function( event, ui){     },
            out: function( event, ui){      },
            drop: function( event, ui ) {         
              $("#pecaMesa3").css("display", "none");
              $("#pecaMapa3").css("visibility", "visible");
              contagemPecaMapa++;
              verificaPecaMapa();  }
          });
    $("#pecaMapa4").droppable({
          accept: "#pecaMesa4",
            over: function( event, ui){     },
            out: function( event, ui){      },
            drop: function( event, ui ) {         
              $("#pecaMesa4").css("display", "none");
              $("#pecaMapa4").css("visibility", "visible");
              contagemPecaMapa++;
              verificaPecaMapa();}
          });
    $("#pecaMapa5").droppable({
          accept: "#pecaMesa5",
            over: function( event, ui){     },
            out: function( event, ui){      },
            drop: function( event, ui ) {         
              $("#pecaMesa5").css("display", "none");
              $("#pecaMapa5").css("visibility", "visible"); 
              contagemPecaMapa++;
              verificaPecaMapa()}
          });
    $("#pecaMapa6").droppable({
          accept: "#pecaMesa6",
            over: function( event, ui){     },
            out: function( event, ui){      },
            drop: function( event, ui ) {         
              $("#pecaMesa6").css("display", "none");
              $("#pecaMapa6").css("visibility", "visible"); 
              contagemPecaMapa++;
              verificaPecaMapa(); }
          });
    $("#pecaMapa7").droppable({
          accept: "#pecaMesa7",
            over: function( event, ui){     },
            out: function( event, ui){      },
            drop: function( event, ui ) {         
              $("#pecaMesa7").css("display", "none");
              $("#pecaMapa7").css("visibility", "visible"); 
              contagemPecaMapa++;
              verificaPecaMapa(); }
          }); 
  }

// Desafio Lixo -----------------------------------------------------------------
  function mei_0() {
    createInvokeHelp(helps_texts["mei0"])
    popoverInfo()

    $( "#papel1, #metal1, #plastico1, #vidro1, #organico1, #papel2, #metal2, #plastico2, #vidro2, #organico2").draggable({
        revert: true,
        revertDuration: 600,
         cursor: "grabbing",
          //snap: true,
         scroll:false,
         drag: function( event, ui ) {
           $('[data-toggle="popover"]').popover('hide'); }
      });

    var contagemLixoDrop = 0;

    function verificaLixo() {
      if (contagemLixoDrop == 10){
        congrats_name = "mei_0"
        level_stars = ["full", "empty", "empty"]
        updateSectionAJAX("congrats")
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
            verificaLixo();}
        });

    $("#lixopapel").droppable({
        accept: "#papel1, #papel2",
         over: function( event, ui){
             $("#lixopapel").css("visibility", "hidden");
             $("#lixopapelaberto").css("display", "block");
          },
          out: function( event, ui){
            $("#lixopapelaberto").css("display", "none");
            $("#lixopapel").css("visibility", "visible")
          },
          drop: function( event, ui ) {        
            $("#lixopapelaberto").css("display", "none");
            $("#lixopapel").css("visibility", "visible");
            var draggableId = ui.draggable.attr("id");
            draggableId= '#'+ draggableId;    
            $(draggableId).css("display", "none"); 
            contagemLixoDrop++;
            verificaLixo();  }
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
            verificaLixo(); }
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
            verificaLixo();}
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
  }

// Desafio Plantar -----------------------------------------------------------------
  function mei_1() {
    createInvokeHelp(helps_texts["mei1"])
    popoverInfo()

    var verificaLegumes = 0;

    function verificaLegumesOK(){
      if (verificaLegumes==6){
        congrats_name = "mei_1"
        level_stars = ["full", "full", "empty"]
        updateSectionAJAX("congrats")
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
  }

// Desafio Cozinha  -----------------------------------------------------------------
  function mei_2() {
    createInvokeHelp(helps_texts["mei2"])
    popoverInfo()

    document.getElementById('C_cestavazia3').draggable = false;
    var verificaCanos = false;
    var verificaLegumesCesta = 0;

    function verificaLegumesCestaOK(){
      if (verificaLegumesCesta==6 && verificaCanos){
        congrats_name = "mei_2"
        level_stars = ["full", "full", "full"]
        updateSectionAJAX("congrats")
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
  }

