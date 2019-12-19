// Chamar ajuda no inicio da funcao
// setupLevel()

// Se passar de Fase
// congratsNextLevel(["full","full","full"], false) //true se tiver terminado


// Mapa -------------------------------------------------------------------------------------------------------------
  function map() {
  //configura #som e #animacao # e tempodo helper
  helpConfig($('#help_mapa'), '#AnimacaoRoboHelp', 8)
  playAudioMouseOver();
  createInvokeHelp(helps_texts["map"])

  $('[data-toggle="popover"]').popover({
    html: true
  })

  ////A_RoboHelp_create('#AnimacaoRoboHelp');
  ////A_RoboHelp_play('#AnimacaoRoboHelp')


  $('#AnimacaoArrastarMapa').jsMovie({
    sequence: 'drag_000##.png',
    from: 0,
    to: 29,
    fps: 10,
    width: '67%',
    height: '60%',
    folder: "img/animation/cursor/drag/",
    playOnLoad: true
  });

  $("#pecaMesa1, #pecaMesa2, #pecaMesa3, #pecaMesa4, #pecaMesa5, #pecaMesa6, #pecaMesa7").draggable({
    revert: true,
    revertDuration: 600,
    //cursor: "img/Pointers/pointermove.png",
    //snap: true,
    scroll: false,
    drag: function(event, ui) {
      //  $(this).css('cursor',' url(img/Pointers/pointerverde.png), auto');
      $('[data-toggle="popover"]').popover('hide');

      $('#AnimacaoArrastarMapa').css('display', 'none');

      //$(this).css('cursor', 'url(../img/Pointers/pointermove.png)');
    }
  });

  robozinInteiro_create('#AnimacaoRoboCommentMapa', '76%', '65%');


  var contagemPecaMapa = 0;
  var audioParabensMapa = "";

  if (sessionStorage.getItem('gender') == 'Menina') {
    audioParabensMapa = $('#parabens_mapa_menina')
  } else {
    audioParabensMapa = $('#parabens_mapa_menino')
  }

  var parabens = new Audio('sounds/feedback/mapa/Sucesso.mp3');
  



  function verificaPecaMapa() {
    if (contagemPecaMapa == 7) {
      playSound(parabens)
      setTimeout(function () {
        comment_name = "start_quiz"
        destroyAnimation('#AnimacaoRoboHelp');
        createComment(comments_texts[comment_name])
         if (sessionStorage.getItem('gender') == 'Menina') {
           $('#id-text-coment').text('Bom trabalho! Agora, precisamos saber que tipo de Amiga do Futuro você é. Responda as perguntas')
         }
        $("button.toggle.repeat").click(function () {
          if (sessionStorage.getItem('sound') == 'on') {
            robozinInteiro_again('#AnimacaoRoboCommentMapa', 5)
            playSom(audioParabensMapa);
          }
        });

        $("button#go-comment.action.blue").click(function () {
          stopSom(audioParabensMapa);
        });

        
        if (sessionStorage.getItem('sound') == 'on') {
          playSom(audioParabensMapa);
        }

        $(".robot-comment").fadeIn(300);
        robozinInteiro_play('#AnimacaoRoboCommentMapa', 5)
        $("#AnimacaoArrastarMapa").jsMovie("destroy");


      }, 1000);
      

    }
  }

    var somdrop = new Audio('sounds/feedback/mapa/drag.wav');

  $("#pecaMapa1").droppable({
    accept: "#pecaMesa1",
    over: function(event, ui) {},
    out: function(event, ui) {},
    drop: function(event, ui) {
      $("#pecaMesa1").css("display", "none");
      $("#pecaMapa1").css("visibility", "visible");
      playSound(somdrop)
      contagemPecaMapa++;
      verificaPecaMapa();
    }
  });
  $("#pecaMapa2").droppable({
    accept: "#pecaMesa2",
    over: function(event, ui) {},
    out: function(event, ui) {},
    drop: function(event, ui) {
      $("#pecaMesa2").css("display", "none");
      $("#pecaMapa2").css("visibility", "visible");
      playSound(somdrop)
      contagemPecaMapa++;
      verificaPecaMapa();
    }
  });
  $("#pecaMapa3").droppable({
    accept: "#pecaMesa3",
    over: function(event, ui) {},
    out: function(event, ui) {},
    drop: function(event, ui) {
      $("#pecaMesa3").css("display", "none");
      $("#pecaMapa3").css("visibility", "visible");
      playSound(somdrop)
      contagemPecaMapa++;
      verificaPecaMapa();
    }
  });
  $("#pecaMapa4").droppable({
    accept: "#pecaMesa4",
    over: function(event, ui) {},
    out: function(event, ui) {},
    drop: function(event, ui) {
      $("#pecaMesa4").css("display", "none");
      $("#pecaMapa4").css("visibility", "visible");
      playSound(somdrop)
      contagemPecaMapa++;
      verificaPecaMapa();
    }
  });
  $("#pecaMapa5").droppable({
    accept: "#pecaMesa5",
    over: function(event, ui) {},
    out: function(event, ui) {},
    drop: function(event, ui) {
      $("#pecaMesa5").css("display", "none");
      $("#pecaMapa5").css("visibility", "visible");
      playSound(somdrop)
      contagemPecaMapa++;
      verificaPecaMapa()
    }
  });
  $("#pecaMapa6").droppable({
    accept: "#pecaMesa6",
    over: function(event, ui) {},
    out: function(event, ui) {},
    drop: function(event, ui) {
      $("#pecaMesa6").css("display", "none");
      $("#pecaMapa6").css("visibility", "visible");
      playSound(somdrop)
      contagemPecaMapa++;
      verificaPecaMapa();
    }
  });
  $("#pecaMapa7").droppable({
    accept: "#pecaMesa7",
    over: function(event, ui) {},
    out: function(event, ui) {},
    drop: function(event, ui) {
      $("#pecaMesa7").css("display", "none");
      $("#pecaMapa7").css("visibility", "visible");
      playSound(somdrop)
      contagemPecaMapa++;
      verificaPecaMapa();
    }
  });
}

// Desafio mei_0 Lixo -----------------------------------------------------------------
  function mei_0() {
    helpConfig($('#help_mei0'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

     $('#AnimacaoArrastarLixos').jsMovie({
      sequence: 'drag_000##.png',
      from: 0,
      to: 29,
      fps: 10,
      width:'67%',
      height: '60%',
      folder : "img/animation/cursor/drag/",
      playOnLoad:true
    });

    $( "#papel1, #metal1, #plastico1, #vidro1, #organico1, #papel2, #metal2, #plastico2, #vidro2, #organico2").draggable({
        revert: true,
        revertDuration: 600,
        // cursor: "grabbing",
          //snap: true,
         scroll:false,
         drag: function( event, ui ) {
        //   $(this).css('cursor',' url(img/Pointers/pointerverde.png), auto');
           $('[data-toggle="popover"]').popover('hide');
           $('#AnimacaoArrastarLixos').css('display', 'none')
           }
      });

    var contagemLixoDrop = 0;

    function verificaLixo() {
      if (contagemLixoDrop == 10){

        setTimeout(function () {
         $('#AnimacaoArrastarLixos').jsMovie("destroy");
          var audio_lixo = new Audio('sounds/falas/desafios/mei/parabens1.wav') ;
         destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "empty", "empty"], false, audio_lixo)

        }, 300);

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
            playAudioButton()
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
            playAudioButton()
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
            playAudioButton()
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
            playAudioButton()
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
            playAudioButton()
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

// Desafio mei_1 Plantar -----------------------------------------------------------------
  function mei_1() {
    helpConfig($('#help_mei1'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

   
    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

    var verificaLegumes = 0;

      $('#animacaoClickPlantar').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });

    function verificaLegumesOK(){
      if (verificaLegumes==6){

        setTimeout(function () {
         $('#animacaoClickPlantar').jsMovie('destroy');
          var audio_plantar = new Audio('sounds/falas/desafios/mei/parabens2.wav') ;
        destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "full", "empty"], false, audio_plantar)
      }, 300);

      }
    }

    $('#buraco1').click(function(){
      playAudioButton()
      $('#animacaoClickPlantar').css('display', 'none');
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
      playAudioButton()
       $('#animacaoClickPlantar').css('display', 'none');
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
      playAudioButton()
       $('#animacaoClickPlantar').css('display', 'none');
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
      playAudioButton()
       $('#animacaoClickPlantar').css('display', 'none');
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
      playAudioButton()
       $('#animacaoClickPlantar').css('display', 'none');
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
      playAudioButton()
       $('#animacaoClickPlantar').css('display', 'none');
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

// Desafio mei_2 Cozinha  -----------------------------------------------------------------
  function mei_2() {
    helpConfig($('#help_mei2'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    $('#modalSust2C').click(function () {
      $('#modalSust2').modal('hide')
    })


    var audio_canos = new Audio('sounds/feedback/sustentabilidade/Canos.wav');

    function playAudioCanos(){
        if(sessionStorage.getItem('sound')=='on'){
            var promise =audio_canos.load();
            var promise =audio_canos.play();

              if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }
          }
    }


    var audio_frutas = new Audio('sounds/feedback/Botao 01.wav');

    function playAudioFrutas(){
        if(sessionStorage.getItem('sound')=='on'){
            var promise =audio_frutas.load();
            var promise =audio_frutas.play();

              if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }
          }
    }


    var audio_aguapia= new Audio('sounds/feedback/sustentabilidade/aguapia.mp3');

    function playAudioAguaPia(){
        if(sessionStorage.getItem('sound')=='on'){
            var promise =audio_aguapia.load();
            var promise =audio_aguapia.play();

              if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }
          }
    }



    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

    $('#AnimacaoClickCanos').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });

 $('#AnimacaoClickLegumesCesta').jsMovie({
      sequence: 'drag_000##.png',
      from: 0,
      to: 29,
      fps: 10,
      width: '67%',
      height: '60%',
      folder: "img/animation/cursor/drag/",
      playOnLoad: true
    });


  $('#AnimacaoClickLegumesPia').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });


    $('#animacaoTorneiraPia').jsMovie({
      sequence: 'torneira_0000#.png',
      from: 0,
      to: 9,
      fps: 8,
      width:'28%',
      height: '47%',
      folder : "img/animation/torneira/",
      playOnLoad:false
    });


    document.getElementById('C_cestavazia3').draggable = false;
    var verificaCanos = false;
    var verificaLegumesCesta = 0;


     $('#animacaocanos').jsMovie({
      sequence: 'canos_000##.png',
      from: 1,
      to: 25,
      fps: 8,
      width:'88%',
      height: '84%',
      folder : "img/animation/canos/",
      playOnLoad:false
    });




    function verificaLegumesCestaOK(){
      if (verificaLegumesCesta==6 && verificaCanos){

        setTimeout(function () {
            $('#AnimacaoClickCanos').jsMovie('destroy');
             $('#AnimacaoClickLegumesCesta').jsMovie('destroy');
              $('#AnimacaoClickLegumesPia').jsMovie('destroy');
              $('#animacaoTorneiraPia').jsMovie('destroy');
          var audio_cozinha = new Audio('sounds/falas/desafios/mei/parabens3.wav') ;
            destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "full", "full"], true, audio_cozinha)
        }, 300);

      }
    }

  var contLegumesCesta=0;

  //  $( "#C_cenouracesta1, #C_cenouracesta2, #C_alfacecesta1, #C_alfacecesta2, #C_tomatecesta1, #C_tomatecesta2").click(function() {
  //     playAudioFrutas()

  //   $('#AnimacaoClickLegumesCesta').css('display', 'none');
  //  var legumeclicado = "#"+ this.id+'C';

  //  $(this).css('display', 'none');
  //  $(legumeclicado).css('display', 'block');
  //  contLegumesCesta++;

  //    if(contLegumesCesta==6){
  //             $('#animacaoTorneiraPia').jsMovie('play',1,10,false, true);
  //             playAudioAguaPia()
  //                         setTimeout(function () {
  //                         $('#modalSust1').modal('show')
  //                //alert("Agora CLICA nos legumes para tirar da pia")
  //                $('#AnimacaoClickLegumesPia').css('display', 'block');
  //         }, 1600);


  //                 $(".legumesAgua").addClass("legumesCestaClick");


  //                 $( ".legumesCestaClick").click(function() {
  //                   playAudioFrutas()
  //                    $('#AnimacaoClickLegumesPia').css('display', 'none');
  //                    $(this).css('display', 'none');
  //                    var legumeaparecer= '#'+this.id +'B';
  //                   // alert(this.id +"B");
  //                    $(legumeaparecer).css('display', 'block');
  //                    verificaLegumesCesta++;
  //                    verificaLegumesCestaOK()
  //                 });
  //    }
  //  })

    $("#C_cenouracesta1, #C_cenouracesta2, #C_alfacecesta1, #C_alfacecesta2, #C_tomatecesta1, #C_tomatecesta2").draggable({
      revert: true,
      revertDuration: 600,
      cursor: "grabbing",
      containment: '#moverlegumes',
      //snap: true,
      scroll: false,
      drag: function (event, ui) {
        $('#AnimacaoClickLegumesCesta').css('display', 'none');
      }
    });


    var qntLegumesPia = 0;

    $("#droplegumes").droppable({


      drop: function (event, ui) {
        var draggableId = ui.draggable.attr("id");
        draggableId = '"#' + draggableId + '"';
        // $(this).css('z-index', '1000'); 
        // $(ui.draggable).css(' z-index','1'); 
        playAudioFrutas()

        if (draggableId == '"#C_tomatecesta2"' || draggableId == '"#C_tomatecesta1"') {
          $(ui.draggable).css('top', '42%');
        }

        if (draggableId == '"#C_alfacecesta2"' || draggableId == '"#C_alfacecesta1"') {
          $(ui.draggable).css('top', '40%');
        }

        if (draggableId == '"#C_cenouracesta2"' || draggableId == '"#C_cenouracesta1"') {
          $(ui.draggable).css('top', '35%');
        }

        qntLegumesPia++;

        if (qntLegumesPia == 6) {
          $('#animacaoTorneiraPia').jsMovie('play', 1, 10, false, true);
          playAudioAguaPia()
          setTimeout(function () {
            verificaLegumesCesta = 6 
            verificaCanos = true
            verificaLegumesCestaOK()

          }, 1600);

        }

        $(draggableId).draggable("disable");


      }
    });



    var graus1 =90;
    var graus2 =0;
    var ultClickID = undefined;

    var somCano = new Audio('sounds/feedback/sustentabilidade/Canos.wav');
    PauseSond(somCano);


    $( ".pecasCozinha").click(function() {
      playAudioCanos()

      playSound(somCano);

      $('#AnimacaoClickCanos').css('display', 'none');
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
        $('#AnimacaoClickLegumesCesta').css('display', 'block');
        $('.pecasCozinha').css('display', 'none');
        $('#animacaocanos').css('display', 'block');




        verificaCanos = true;
        setTimeout(function () {

          // $('#modalSust2').modal('show')
        // alert("Clica nos legumes");
          $('#animacaocanos').jsMovie('play',1,25,false, false);
  }, 300);

         verificaLegumesCestaOK()
      } else {
        $('#cobrirCozinha').css('display', 'block');
        verificaCanos = false;
        verificaLegumesCestaOK()
      }
      console.log(graus1 , graus2);
    });
  }

// Desafio gov_0 Campinho ------------------------------------------------------------------
  function gov_0() {
    helpConfig($('#help_gov0'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');


 $('#AnimacaoArrastarCamp').jsMovie({
      sequence: 'drag_000##.png',
      from: 0,
      to: 29,
      fps: 10,
      width:'67%',
      height: '60%',
      folder : "img/animation/cursor/drag/",
      playOnLoad:true
    });



    var contIndexC=1;
    var totalCriancaVermelha = 0;
    var totalCriancaAmarela =0;

       $("#robot-help-mini").click(function() {
        contIndexC++;
       $('.robot-help').css("z-index", contIndexC);

       })

    $( ".criancaAmarela , .criancaVermelha").draggable({
         revert: true,
          revertDuration: 600,
           //cursor: "grabbing",
           containment: "#gramadotodo",
            //snap: true,
           scroll:false,
           drag: function( event, ui ) {
            // $(this).css('cursor',' url(img/Pointers/pointerverde.png), auto');
            contIndexC++;
             $('[data-toggle="popover"]').popover('hide');
             $(this).css("z-index", contIndexC);
             $('#AnimacaoArrastarCamp').css('display', 'none');


           }
        });



    var QntAmarelo = 0;
    var QntVermelho = 0;

    $("#campinhoVermelho").droppable({
       accept: ".criancaVermelha",
      //tolerance: 10%,
           over: function( event, ui){
            },

            out: function( event, ui){

            },

            drop: function(event,ui) {

            $( "#bandeiraV" ).effect( "shake" );

            $(ui.draggable).css("display", "none");
             var criancaAtual = "#"+ $(ui.draggable).attr('id')+"ok";
             $(criancaAtual).css("display", "block");
            QntVermelho++;

             if(QntVermelho==3 && QntAmarelo===3){
               setTimeout(function () {
                      $('#AnimacaoArrastarCamp').jsMovie('destroy');
                 var audio_campinho = new Audio('sounds/falas/desafios/gov/parabens1.wav') ;
                      destroyAnimation('#AnimacaoRoboHelp')
                      congratsNextLevel(["full","empty","empty"], false, audio_campinho)
                  }, 300);

             }
           }

})


    $("#campinhoAmarelo").droppable({
       accept: ".criancaAmarela",
      //tolerance: 10%,
           over: function( event, ui){
            },

            out: function( event, ui){
            },

            drop: function(event,ui) {

             $( "#bandeiraA" ).effect( "shake" );
             $(ui.draggable).css("display", "none");
             var criancaAtual = "#"+ $(ui.draggable).attr('id')+"ok";
             $(criancaAtual).css("display", "block");
               QntAmarelo++;

             if(QntVermelho==3 && QntAmarelo===3){
               setTimeout(function () {
                      $('#AnimacaoArrastarCamp').jsMovie('destroy');
                 var audio_campinho = new Audio('sounds/falas/desafios/gov/parabens1.wav') ;
                      destroyAnimation('#AnimacaoRoboHelp')
                      congratsNextLevel(["full","empty","empty"], false, audio_campinho)
                  }, 300);

             }






            }
    });
  }

// Desafio gov_1 ONG --------------------------------------------------------------------------------------
  function gov_1() {
    helpConfig($('#help_gov1'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()



    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

      $('#AnimacaoClickONG').jsMovie({
        sequence: 'drag_000##.png',
        from: 0,
        to: 29,
        fps: 10,
        width: '67%',
        height: '60%',
        folder: "img/animation/cursor/drag/",
        playOnLoad: true
    });


    var contAlimentoRua =0;

    $(".alimentosRua").draggable({
      revert: true,
      revertDuration: 600,
      cursor: "grabbing",
      containment: 'body',
      //snap: true,
      scroll: false,
      drag: function (event, ui) {
        $('#AnimacaoClickONG').css('display', 'none');
      }
    });


    $("#dropAlimentoONG").droppable({


      drop: function (event, ui) {
        playAudioButton()
        
        contAlimentoRua++;

        var idAlimentoRua = "#" + ui.draggable[0].id + "cesta";
        var esseAlimento = '#' + ui.draggable[0].id
        //alert(idAlimentoRua);

        $(idAlimentoRua).css('display', 'block');
        $(esseAlimento).css('display', 'none');
       
        if (contAlimentoRua == 4) {
          setTimeout(function () {
            $('#AnimacaoClickONG').jsMovie('destroy');
            var audio_ong = new Audio('sounds/falas/desafios/gov/parabens2.wav');
            destroyAnimation('#AnimacaoRoboHelp')
            congratsNextLevel(["full", "half", "empty"], false, audio_ong)
          }, 400);

        }

      }
    })

  }

// Desafio gov_2 Radio --------------------------------------------------------------------------------------
  function gov_2() {
    helpConfig($('#help_gov2'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()


    

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

      $('#AnimacaoClickRadio').jsMovie({
        sequence: 'drag_000##.png',
        from: 0,
        to: 29,
        fps: 10,
        width: '67%',
        height: '60%',
        folder: "img/animation/cursor/drag/",
        playOnLoad: true
    });


    $('#antenaRadio').jsMovie({
    sequence: 'antenaradio_0000#.png',
    from: 0,
    to: 7,
    fps: 8,
    width:'60%',
    height: '100%',
    folder : "img/animation/antenaradio/",
    playOnLoad:false

    });


    var contJornalRua =0;

    $(".jornalRua").draggable({
      revert: true,
      revertDuration: 600,
      cursor: "grabbing",
      containment: 'body',
      //snap: true,
      scroll: false,
      drag: function (event, ui) {
        $('#AnimacaoClickRadio').css('display', 'none');
      }
    });


    $("#dropRadio").droppable({


      drop: function (event, ui) {
        
        contJornalRua++;

        var idJornalRua = "#" + ui.draggable[0].id + "cesta";
        var esseJornal = '#' + ui.draggable[0].id
        //alert(idAlimentoRua);

        $(idJornalRua).css('display', 'block');
        $(esseJornal).css('display', 'none');
        $('#antenaRadio').jsMovie('play', 1, 8, false, true);

        if (contJornalRua == 4) {
          //alert("Você conseguiu");
          setTimeout(function () {
            $("#antenaRadio").jsMovie("destroy");
            $('#AnimacaoClickRadio').jsMovie('destroy');
            var audio_radio = new Audio('sounds/falas/desafios/gov/parabens3.wav');
            destroyAnimation('#AnimacaoRoboHelp')
            congratsNextLevel(["full", "full", "empty"], false, audio_radio)
          }, 300);

        }

      }
    })

  //   $( ".jornalRua" ).click(function() {
  //      $('#AnimacaoClickRadio').css('display', 'none');
  //    contJornalRua ++;
  //    var idJornalRua = "#" + $(this).attr('id') + "cesta";


  //    $(idJornalRua).css('display','block');
  //    $(this).css('display','none');
  //     $('#antenaRadio').jsMovie('play',1,8,false, true);

  //    if (contJornalRua==4){
  //     //alert("Você conseguiu");
  //     setTimeout(function () {
  //      $("#antenaRadio").jsMovie("destroy");
  //       $('#AnimacaoClickRadio').jsMovie('destroy');
  //      var audio_radio = new Audio('sounds/desafios/governo desafio 3.wav') ;
  //      destroyAnimation('#AnimacaoRoboHelp')
  //     congratsNextLevel(["full", "full", "empty"], false, audio_radio)
  // }, 300);

  //    }
  //   });
  }

// Desafio gov_3 Prefeitura  --------------------------------------------------------------------------------------
  function gov_3() {
    helpConfig($('#help_gov3'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

//A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');
      $('#AnimacaoClickPrefeitura').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });


    var contLei=0;
    $( ".btnLei" ).click(function() {
       $('#AnimacaoClickPrefeitura').css('display', 'none')
      if (contLei==0) {
        $('#titulolei').text("Lei 456");
        $('#textolei').text("Todos devem plantar uma árvore e dar um nome a ela.");
        contLei++;
      } else if(contLei==1) {
        $('#titulolei').text("Lei 9564");
        $('#textolei').text("Pode ser preso aquele que não der bom dia ao porteiro.");
        contLei++;
      } else{
        setTimeout(function () {
        $('#AnimacaoClickPrefeitura').jsMovie('destroy');
          var audio_prefeitura = new Audio('sounds/falas/desafios/gov/parabens4.wav') ;
         destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full","full","full"], true, audio_prefeitura);
  }, 200);

      }
    });
  }

// Desafio laz_0 Album 1 --------------------------------------------------------------------------------------
  function laz_0() {
    helpConfig($('#help_laz0'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    var audio_colarfigurinha = new Audio('sounds/feedback/lazer/Colar Figurinha.wav');

    function playAudioColarFigurinha(){
        if(sessionStorage.getItem('sound')=='on'){
            var promise =audio_colarfigurinha.load();
            var promise =audio_colarfigurinha.play();

              if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }
          }
    }


   
    
    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

      $('#AnimacaoArrastarAlbum1').jsMovie({
      sequence: 'drag_000##.png',
      from: 0,
      to: 29,
      fps: 10,
      width:'67%',
      height: '60%',
      folder : "img/animation/cursor/drag/",
      playOnLoad:true
    });

  $( "#A1fig1, #A1fig2, #A1fig3, #A1fig4 ").draggable({
        revert: true,
        revertDuration: 600,
         //cursor: "grabbing",
         scroll: false,
         drag: function( event, ui ) {
          // $(this).css('cursor',' url(img/Pointers/pointerverde.png), auto');
           $('[data-toggle="popover"]').popover('hide');
           $('#AnimacaoArrastarAlbum1').css('display', 'none') },
        stop: function( event, ui ) {
          $(this).css('top','84%');
        }
    });
    var contFigA1= 0;
    function habilitarNextA1(){
       if (contFigA1==4){
        $("#A1nextPage").css('display', 'block');
        $("#A1nextPageDis").css('display', 'none');
       }
    }
    $("#A1figOK1").droppable({
        accept: "#A1fig3",
           over: function( event, ui){
          },
          out: function( event, ui){
          },
          drop: function( event, ui ) {
            playAudioColarFigurinha()
          $(this).css('visibility','visible');
          $('#A1fig3').css('display', 'none');
          contFigA1++;
          habilitarNextA1();
            }
      });
    $("#A1figOK2").droppable({
        accept: "#A1fig2",
           over: function( event, ui){
          },
          out: function( event, ui){
          },
          drop: function( event, ui ) {
            playAudioColarFigurinha()
          $(this).css('visibility','visible');
          $('#A1fig2').css('display', 'none');
          contFigA1++;
          habilitarNextA1();
            }
      });
    $("#A1figOK3").droppable({
        accept: "#A1fig1",
           over: function( event, ui){
          },
          out: function( event, ui){
          },
          drop: function( event, ui ) {
            playAudioColarFigurinha()
          $(this).css('visibility','visible');
          $('#A1fig1').css('display', 'none');
          contFigA1++;
          habilitarNextA1();
            }
      });
    $("#A1figOK4").droppable({
        accept: "#A1fig4",
           over: function( event, ui){
          },
          out: function( event, ui){
          },
          drop: function( event, ui ) {
            playAudioColarFigurinha()
          $(this).css('visibility','visible');
          $('#A1fig4').css('display', 'none');
          contFigA1++;
          habilitarNextA1();
          }
      });
    $( "#A1nextPage" ).click(function() {
      $('#A1Pg1').css('display', 'none');
      $('#A1Pg2').css('display', 'block');
      
    })
    $( "#A2prevPage" ).click(function() {
      $('#A1Pg1').css('display', 'block');
      $('#A1Pg2').css('display', 'none');
      
    })
    $( "#A2nextPage" ).click(function() {


       setTimeout(function () {
         $('#AnimacaoArrastarAlbum1').jsMovie('destroy');
         var audio_ambum1 = new Audio('sounds/falas/desafios/laz/parabens1.wav') ;
         destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "empty", "empty"], false, audio_ambum1)

        }, 300);




    })
    $( "#A2fig1, #A2fig2, #A2fig3, #A2fig4 ").draggable({
        revert: true,
        revertDuration: 600,
         //cursor: "grabbing",
          //snap: true,
         scroll:false,
         drag: function( event, ui ) {
          // $(this).css('cursor',' url(img/Pointers/pointerverde.png), auto');
           $('[data-toggle="popover"]').popover('hide'); },
        stop: function( event, ui ) {
          $(this).css('top','84%');
        }
    });
    var contFigA2= 0;
    function habilitarNextA2(){
       if (contFigA2==4){
        $("#A2nextPage").css('display', 'block');
       $("#A2nextPageDis").css('display', 'none');
       }
    }
    $("#A2figOK1").droppable({
        accept: "#A2fig3",
           over: function( event, ui){
          },
          out: function( event, ui){
          },
          drop: function( event, ui ) {
            playAudioColarFigurinha()
          $(this).css('visibility','visible');
          $('#A2fig3').css('display', 'none');
          contFigA2++;
          habilitarNextA2();
            }
      });
    $("#A2figOK2").droppable({
        accept: "#A2fig4",
           over: function( event, ui){
          },
          out: function( event, ui){
          },
          drop: function( event, ui ) {
            playAudioColarFigurinha()
          $(this).css('visibility','visible');
          $('#A2fig4').css('display', 'none');
          contFigA2++;
          habilitarNextA2();
            }
      });
    $("#A2figOK3").droppable({
        accept: "#A2fig2",
           over: function( event, ui){
          },
          out: function( event, ui){
          },
          drop: function( event, ui ) {
            playAudioColarFigurinha()
          $(this).css('visibility','visible');
          $('#A2fig2').css('display', 'none');
          contFigA2++;
          habilitarNextA2();
            }
      });
    $("#A2figOK4").droppable({
        accept: "#A2fig1",
           over: function( event, ui){
          },
          out: function( event, ui){
          },
          drop: function( event, ui ) {
            playAudioColarFigurinha()
          $(this).css('visibility','visible');
          $('#A2fig1').css('display', 'none');
          contFigA2++;
          habilitarNextA2();
            }
      });
    }

// Desafio laz_1 Album 2 ------------------------------------------------------------------------------------------
  function laz_1() {
    helpConfig($('#help_laz1'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

      $('#AnimacaoClickAlbum2').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 12,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });


      $( "#AnimacaoClickAlbum2" ).click(function() {
        $(this).css('display', 'none');
        $('#check3').css('display', 'block');

      })

    $( ".checkClick" ).click(function() {

      $('#AnimacaoClickAlbum2').css('display', 'none');

      var idCheckDIV= $(this).attr('id');
        var idCheckOK = "#" + idCheckDIV.substr(3,(idCheckDIV.length - 0));

        if ($(idCheckOK).css('display')=='none'){
          $(idCheckOK).css('display', 'block');
        } else {
          $(idCheckOK).css('display', 'none');
        }

    })

    $( "#btnAlbum2" ).click(function() {
       setTimeout(function () {
         $('#AnimacaoClickAlbum2').jsMovie('destroy');
         var audio_album2 = new Audio('sounds/falas/desafios/laz/parabens2.wav') ;
         destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "full", "empty"], false,  audio_album2)

        }, 300);


    })
  }

// Desafio laz_2 7 erros------------------------------------------------------------------------------------------------------------------
  function laz_2() {
    helpConfig($('#help_laz2'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

  $('#AnimacaoClick7erros').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });


    var contErros=0;
    $(".divErros" ).click(function() {

       $("#AnimacaoClick7erros").css("display", "none");
      //alert('aaaa');
      $(this).css('display', 'none');
      var id7erros= $(this).attr('id');
      var id7erros1 = "#" + id7erros.substr(0,(id7erros.length - 3));
      $(id7erros1).css('display', 'block');
      contErros++;
      $('#txtContador0').text(contErros);
      if(contErros==7){
      setTimeout(function () {
        $('#AnimacaoClick7erros').jsMovie('destroy');
        var audio_7erros = new Audio('sounds/falas/desafios/laz/parabens3.wav') ;
         destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "full", "full"], false,  audio_7erros)

        }, 300);

      }
    })
  }

// Desafio ino_0 bebedouro ---------------------------------------------------------------------------------
  function ino_0() {
    helpConfig($('#help_ino0'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

     $('#AnimacaoArrastBebedouro').jsMovie({
      sequence: 'drag_000##.png',
      from: 0,
      to: 29,
      fps: 10,
      width:'67%',
      height: '60%',
      folder : "img/animation/cursor/drag/",
      playOnLoad:true
    });

       $('#AnimacaoArrastBebedouro2').jsMovie({
      sequence: 'drag_000##.png',
      from: 0,
      to: 29,
      fps: 10,
      width:'67%',
      height: '60%',
      folder : "img/animation/cursor/drag/",
      playOnLoad:true
    });




    $('#animacaoPingando').jsMovie({
      sequence: 'bebedouro_000##.png',
      from: 0,
      to: 10,
      fps: 8,
      width:'31%',
      height: '65%',
      folder : "img/animation/bebedouro/",
      playOnLoad:true
    });

    var contTetativasBebedouro= 0;

    $( "#imgVaso, #imgGarrafao, #imgBalde").draggable({
          revert: true,
          revertDuration: 600,

            //snap: true,
           scroll:false,
           drag: function( event, ui ) {
            // $(this).css('cursor',' url(img/Pointers/pointerverde.png), auto');
             $('[data-toggle="popover"]').popover('hide');
             $('#AnimacaoArrastBebedouro').css('display', 'none')
             $('#AnimacaoArrastBebedouro2').css('display', 'none')
           },
           stop: function( event, ui ) {
              contTetativasBebedouro++;
              if (contTetativasBebedouro==3) {
                //alert("aaa");
                $('#AnimacaoArrastBebedouro2').css('display','block');
              }
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
              $('#animacaoPingando').css("display", "none");
               audio_aguapingando.load();
                setTimeout(function () {
         $('#AnimacaoArrastBebedouro').jsMovie('destroy');
          $('#AnimacaoArrastBebedouro2').jsMovie('destroy');
          $('#animacaoPingando').jsMovie('destroy');
          var audio_bebedouro = ''
           if (sessionStorage.getItem('gender') == 'Menina') {
              audio_bebedouro = new Audio('sounds/falas/desafios/ino/parabens1M.wav');
           } else {
             audio_bebedouro = new Audio('sounds/falas/desafios/ino/parabens1.wav');
           }                  
         destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "empty", "empty"], false,  audio_bebedouro)

        }, 300);

              }
          });

  }

// Desafio ino_1 Foguete ---------------------------------------------------------------------------------
  function ino_1() {
    helpConfig($('#help_ino1'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

    var audio_trocapeca = new Audio('sounds/feedback/Botao 01.wav');

    function playAudioTrocaPeca(){
        if(sessionStorage.getItem('sound')=='on'){
            var promise =audio_trocapeca.load();
            var promise =audio_trocapeca.play();

              if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }
          }
    }

    var bico = 0;
    var meio = 0;
    var rabo = 0;


    $('#AnimacaoClickFoguete').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });

    $('#AnimacaoFoguete').jsMovie({
      sequence: 'Lancamento###.png',
      from: 75,
      to: 217,
      fps: 26,
      width:'100%',
      height: '100%',
      folder : "img/animation/foguete/",
      playOnLoad:false
    });


    function A_off(){
      $('#AnimacaoClickFoguete').css('display', 'none');
    }


    $( ".prev1").click(function() {  playAudioTrocaPeca(); A_off(); if (bico==0){bico=3; mudaPeca();} else {bico--;mudaPeca();}});
    $( ".next1").click(function() { playAudioTrocaPeca();  A_off(); if (bico==3){bico=0; mudaPeca();} else {bico++;mudaPeca();}});
    $( ".prev2").click(function() { playAudioTrocaPeca();  A_off(); if (meio==0){meio=3; mudaPeca();} else {meio--;mudaPeca();}});
    $( ".next2").click(function() { playAudioTrocaPeca();  A_off(); if (meio==3){meio=0; mudaPeca();} else {meio++;mudaPeca();}});
    $( ".prev3").click(function() { playAudioTrocaPeca();  A_off(); if (rabo==0){rabo=3; mudaPeca();} else {rabo--;mudaPeca();}});
    $( ".next3").click(function() { playAudioTrocaPeca();  A_off(); if (rabo==3){rabo=0; mudaPeca();} else {rabo++;mudaPeca();}});

    $( "#btn-lancar .action").click(function() {
      playAudioButton()
      setTimeout(function () {
       $('#AnimacaoClickFoguete').jsMovie('destroy');
       $('#AnimacaoFoguete').css('display', 'block');
       $('#AnimacaoFoguete').jsMovie('play',1,218,false,false);
                setTimeout(function () {
           $('#AnimacaoFoguete').jsMovie('destroy');
                  var audio_foguete = new Audio('sounds/falas/desafios/ino/parabens2.wav') ;
         destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "full", "empty"], false,  audio_foguete)

        }, 7000);

  }, 100);

    });


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

// Desafio ino_2 carrinho --------------------------------------------------------------------------------------
  function ino_2() {
    helpConfig($('#help_ino2'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

    var audio_trocapeca = new Audio('sounds/feedback/Botao 01.wav');

    function playAudioTrocaPeca(){
        if(sessionStorage.getItem('sound')=='on'){
            var promise =audio_trocapeca.load();
            var promise =audio_trocapeca.play();

              if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }
          }
    }

     $('#AnimClickCarrinho').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });



    var liberarBotaoCarrinho= false;
    $( ".pecasforacarro").click(function() {
      playAudioTrocaPeca()

      $('#AnimClickCarrinho').css('display', 'none');

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
      setTimeout(function () {
      $('#AnimClickCarrinho').jsMovie('destroy');
        var audio_carro = new Audio('sounds/falas/desafios/ino/parabens3.wav') ;
       destroyAnimation('#AnimacaoRoboHelp')
      congratsNextLevel(['full','full','full'], true, audio_carro)
  }, 100);

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
  }

// Desafio sau_0 Prato ---------------------------------------------------------------------------------
  function sau_0() {
    helpConfig($('#help_sau0'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

      var audio_frutas = new Audio('sounds/feedback/Botao 01.wav');

    function playAudioFrutas(){
        if(sessionStorage.getItem('sound')=='on'){
            var promise =audio_frutas.load();
            var promise =audio_frutas.play();

              if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }
          }
    }

    $('#AnimacaoArrastarPrato').jsMovie({
      sequence: 'drag_000##.png',
      from: 0,
      to: 29,
      fps: 10,
      width:'67%',
      height: '60%',
      folder : "img/animation/cursor/drag/",
      playOnLoad:true
    });

    var contIndex=1;
    var bilotoLeft = 49.4;

    var contAlimPrato=0;
    var NS_b = false;
    var NS_p = false;
    var NS_j = false;

    $( ".alimentosSaudaveis , .alimentosNaoSaudaveis, .alimentosSaudaveisP , .alimentosNaoSaudaveisP ").draggable({
          revert: true,
          revertDuration: 600,
           //cursor: "grabbing",
            //snap: true,
           scroll:false,
           drag: function( event, ui ) {
            // $(this).css('cursor',' url(img/Pointers/pointerverde.png), auto');
            //contIndex++;
             $('[data-toggle="popover"]').popover('hide');
              $('#AnimacaoArrastarPrato').css('display', 'none');

           }
        });


     $("#todoespacoP").droppable({
           over: function( event, ui){
            },
            out: function( event, ui){
            },
            drop: function(event,ui) {
              playAudioFrutas()

              if($(ui.draggable).hasClass('alimentosSaudaveisP') || $(ui.draggable).hasClass('alimentosNaoSaudaveisP')){
                    var alimentoNoPrato= '#'+$(ui.draggable).attr('id');
                    var alimentoNoPrato2 = alimentoNoPrato.substr(0,(alimentoNoPrato.length - 2));
                    $(alimentoNoPrato2).css('display', 'block');
                    $(ui.draggable).css('display', 'none');
                    AndarBilotoRemove(alimentoNoPrato2);
                    contAlimPrato--;
                       if ($(ui.draggable).hasClass('NSPbombom')){
                       NS_b= false;
                       }
                       if   ($(ui.draggable).hasClass('NSPpirulito')){
                        NS_p=false;
                       }
                        if ($(ui.draggable).hasClass('NSPjujuba')) {
                          NS_j = false;
                        }
                       


              } else{

               }

            }
          });

    $("#imgPrato").droppable({
           over: function( event, ui){
            },
            out: function( event, ui){
            },
            drop: function(event,ui) {
              playAudioFrutas()
            if (contAlimPrato==5) {
              $('#modalSaude1').modal('show')
              //alert("so 5 alimentos");
            } else{
              if($(ui.draggable).hasClass('alimentosSaudaveis') || $(ui.draggable).hasClass('alimentosNaoSaudaveis')){

                    var alimentoNoPrato= '#'+$(ui.draggable).attr('id')+'OK';
                    $(ui.draggable).css('display', 'none');
                    $(alimentoNoPrato).css('display', 'block');
                     AndarBilotoAdd(alimentoNoPrato);
                     contAlimPrato++;
                       if ($(ui.draggable).hasClass('NSbombom')){
                       NS_b= true;
                       }
                       if   ($(ui.draggable).hasClass('NSpirulito')){
                        NS_p=true;
                       }
                if ($(ui.draggable).hasClass('NSjujuba')) {
                  NS_j = true;
                }

              }
            }
          }
          });

    function AndarBilotoAdd(alimento){
      if (alimento == "#P-alfaceOK" || alimento == "#P-bananaOK" || alimento == "#P-carneOK" || alimento == "#P-batataOK" || alimento == "#P-laranjaOK" || alimento == "#P-queijoOK" || alimento == "#P-ovoOK"){
        bilotoLeft = bilotoLeft + 3.44; $( "#biloto" ).animate({left: bilotoLeft+"%"})
      }
      if(alimento=="#P-arrozOK"){
        bilotoLeft = bilotoLeft + 3.44; $( "#biloto" ).animate({left: bilotoLeft+"%"})
      }
      if(alimento=="#P-feijaoOK" || alimento=="#P-cenouraOK"){
        bilotoLeft = bilotoLeft + 3.44; $( "#biloto" ).animate({left: bilotoLeft+"%"})
      }
      if (alimento == "#P-bombomOK" || alimento == "#P-pirulitoOK" || alimento == "#P-jujubaOK") {
        bilotoLeft = bilotoLeft - 3.44; $( "#biloto" ).animate({left: bilotoLeft+"%"})
      }

    }


    function AndarBilotoRemove(alimento){
      if (alimento == "#P-alface" || alimento == "#P-banana" || alimento == "#P-carne" || alimento == "#P-batata" || alimento == "#P-laranja" || alimento == "#P-queijo" || alimento == "#P-ovo"){
        bilotoLeft = bilotoLeft - 3.44; $( "#biloto" ).animate({left: bilotoLeft+"%"})
      }
      if(alimento=="#P-arroz"){
        bilotoLeft = bilotoLeft - 3.44; $( "#biloto" ).animate({left: bilotoLeft+"%"})
      }
      if(alimento=="#P-feijao" || alimento=="#P-cenoura"){
        bilotoLeft = bilotoLeft - 3.44; $( "#biloto" ).animate({left: bilotoLeft+"%"})
      }
      if (alimento == "#P-bombom" || alimento == "#P-pirulito" || alimento == "#P-jujuba" ) {
        bilotoLeft = bilotoLeft + 3.44; $( "#biloto" ).animate({left: bilotoLeft+"%"})
      }

    }

    $( "#btn-enviar-prato").click(function() {

      if (contAlimPrato==5) {
                  if (bilotoLeft<=55.7){
                    $('#modalSaude2').modal('show')
                    //alert("Seu prato não está saúdavel ainda")
                  }

                  if (NS_b || NS_b || NS_j){
                    $('#modalSaude5').modal('show')
                   // alert("tem animento não sauável no seu prato");
                  } else{
                     $('#AnimacaoArrastarPrato').jsMovie('destroy');
                    var audio_prato = new Audio('sounds/falas/desafios/sau/parabens1.wav') ;
                  destroyAnimation('#AnimacaoRoboHelp')
                    congratsNextLevel(['full', 'half', 'empty'], false, audio_prato)
                  }
      } else{
        $('#modalSaude3').modal('show')
       //alert("adicione 5 aliment No Prato");
      }
    })
  }

// Desafio sau_1 Parquinho -----------------------------------------------------------------------------------
  function sau_1() {
    helpConfig($('#help_sau1'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

    var bilotoP = 49.4;
    var escorregador = false;
    var campinho = false;
    var balanco = false;
    var gangorra = false;
    var tablet = false;

     $('#AnimacaoClickParquinho').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });



    $('#animacaoGangorra').jsMovie({
    sequence: 'Gangorra_000##.png',
    from: 1,
    to: 47,
    fps: 10,
    width:'45%',
    height: '53.5%',
    folder : "img/animation/FaseLazer/Gangorra/",
    playOnLoad:false

    });

    $('#animacaoEscorregador').jsMovie({
    sequence: 'Escorrega_000##.png',
    from: 0,
    to: 15,
    fps: 10,
    width:'30%',
    height: '53.5%',
    folder : "img/animation/FaseLazer/Toboga/",
    playOnLoad:false

    });


    $('#animacaoCelular').jsMovie({
    sequence: 'Celular_000##.png',
    from: 0,
    to: 39,
    fps: 10,
    width:'43%',
    height: '60%',
    folder : "img/animation/FaseLazer/Celular/",
    playOnLoad:false

    });

    $('#animacaoBalanco').jsMovie({
    sequence: 'Balanco_000##.png',
    from: 1,
    to: 55,
    fps: 10,
    width:'43%',
    height: '64%',
    folder : "img/animation/FaseLazer/Balanco/",
    playOnLoad:false

    });


    $('#animacaoCampo').jsMovie({
    sequence: 'Bola_000##.png',
    from: 0,
    to: 21,
    fps: 10,
    width:'30%',
    height: '23%',
    folder : "img/animation/FaseLazer/Bola/",
    playOnLoad:false

    });





     $( "#escorregador").click(function() {
       $('#AnimacaoClickParquinho').css('display', 'none');
      if (escorregador){
      } else{
        $("#animacaoEscorregador").css('display','block');
        $('#animacaoEscorregador').jsMovie('play',1,16,false,false);
          setTimeout(function () {
               $("#animacaoEscorregador").css('display','none');
            $("#escorregador").css('opacity', 0.5)
        }, 1900);
        bilotoP= bilotoP+4.8;
        $( "#bilotoP" ).animate({
          left: bilotoP+"%"
        },1300)
        escorregador=true;
       
      }})

     $( ".campinho").click(function() {
      $('#AnimacaoClickParquinho').css('display', 'none');
      if (campinho){
      } else{
        $('#campinho_futebol').css('display', 'none');
        $('#campinho_futebol_none').css('display', 'block');
        $("#animacaoCampo").css('display','block');
        $('#animacaoCampo').jsMovie('play',1,22,false,false);
          setTimeout(function () {
               $("#animacaoCampo").css('display','none');
               $('#campinho_futebol').css('display', 'block');
               $('#campinho_futebol_none').css('display', 'none');
                $("#campinho_futebol").css('opacity', '0.5')
        }, 2500);
        bilotoP= bilotoP+5.8;
        $( "#bilotoP" ).animate({
          left: bilotoP+"%"
        }, 1300)
        campinho=true;
        
      }})

     $( "#balanco").click(function() {
      $('#AnimacaoClickParquinho').css('display', 'none');
      if (balanco){
      } else{
        $('#balanco').css('display','none');
        $("#animacaoBalanco").css('display','block');
        $('#animacaoBalanco').jsMovie('play',1,54,false,true);
          setTimeout(function () {
               $("#animacaoBalanco").css('display','none');
               $('#balanco').css('display','block');
               $("#balanco").css('opacity', '0.5')
        }, 4500);
        bilotoP= bilotoP+2.8;
        $( "#bilotoP" ).animate({
          left: bilotoP+"%"
        }, 1500)
        balanco=true;
        
      }})

      $( "#gangorra").click(function() {
        $('#AnimacaoClickParquinho').css('display', 'none');
      if (gangorra){
      } else{
        $('#gangorra').css('display', 'none');
         $("#animacaoGangorra").css('display','block');
          $('#animacaoGangorra').jsMovie('play',1,47,false,true);
          setTimeout(function () {
               $('#gangorra').css('display', 'block');
              $("#gangorra").css('opacity', 0.5)
               $("#animacaoGangorra").css('display','none');
        }, 5300);
        bilotoP= bilotoP+3.8;
        $( "#bilotoP" ).animate({
          left: bilotoP+"%"
         }, 3500)
        gangorra=true;
      }})

      $( "#tablet").click(function() {
        $('#AnimacaoClickParquinho').css('display', 'none');
      if (tablet){
      } else{
        $('#tablet').css('display','none');
        $('#tablet1').css('display','block');
        $("#animacaoCelular").css('display','block');
        $('#animacaoCelular').jsMovie('play',1,38,false,false);
          setTimeout(function () {
               $("#animacaoCelular").css('display','none');
               $('#tablet').css('display','block');
              $("#tablet").css('opacity', '0.5')
              $('#tablet1').css('display','none');
        }, 3500);
        bilotoP= bilotoP+0;
        $( "#bilotoP" ).animate({
          left: bilotoP+"%"
         })
        tablet=true;
      }})

       $( "#btn-enviar-parquinho").click(function() {
        if (bilotoP==66.6) {
         $('#AnimacaoClickParquinho').jsMovie('destroy');
          $('#animacaoGangorra').jsMovie('destroy');
          $('#animacaoEscorregador').jsMovie('destroy');
          $('#animacaoCelular').jsMovie('destroy');
          $('#animacaoBalanco').jsMovie('destroy');
          $('#animacaoCampo').jsMovie('destroy');

          var audio_parquinho = new Audio('sounds/falas/desafios/sau/parabens2.wav') ;
          destroyAnimation('#AnimacaoRoboHelp')
          congratsNextLevel(["full", "full", "full"], true, audio_parquinho)
        } else{
          $('#modalSaude4').modal('show')

         // alert("brinque mais")
        }
       })
  }

// Desafio edu_0 Escola Fora --------------------------------------------------------------------------------------
  function edu_0 () {
    helpConfig($('#help_edu0'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()
    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

     $('#AnimacaoClickEscolaFora').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });

    var acessibilidadeBOL= false;
    var pintarBOL= false;
    var arborizarBOL= false;
    var onibusBOL= false;
    var hortaBOL= false;
    var parquinhoBOL= false;
    var lixoBOL= false;

    var contCoisasEscolaF=0;
    var habilitarBtnPF=false;

    var posicaoEF=1;

    $( ".iconNormalF" ).click(function() {
      $('#AnimacaoClickEscolaFora').css('display', 'none');
    })


    $( "#btnNextEscola" ).click(function() {
      var totalImgs = $(".imagensEF.imgVisible").length;
      if (totalImgs==5) {
        if(acessibilidadeBOL){
          $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escolafora/itens/acessib_save.png');
          $("#TxtEscolaFora"+posicaoEF).text("Facilidade para quem usa cadeira de rodas");
          posicaoEF++;
        }
        if(pintarBOL){
          $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escolafora/itens/tinta_save.png');
          $("#TxtEscolaFora"+posicaoEF).text("Cores bonitas");
          posicaoEF++;
        }
        if(arborizarBOL){
          $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escolafora/itens/arvore_save.png');
          $("#TxtEscolaFora"+posicaoEF).text("Mais sombra e ar fresco");
          posicaoEF++;
        }
        if(onibusBOL){
          $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escolafora/itens/onibus_save.png');
          $("#TxtEscolaFora"+posicaoEF).text("Mais aulas pela cidade");
          posicaoEF++;
        }
        if(parquinhoBOL){
          $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escolafora/itens/parque_save.png');
          $("#TxtEscolaFora"+posicaoEF).text("Um recreio divertido");
          posicaoEF++;
        }
        if(hortaBOL){
          $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escolafora/itens/horta_save.png');
          $("#TxtEscolaFora"+posicaoEF).text("Alimentos colhidos da horta");
          posicaoEF++;
        }
        if(lixoBOL){
          $("#imgEscolaFora"+posicaoEF).attr('src', 'img/desafios/educacao/Escolafora/itens/lixo_save.png');
          $("#TxtEscolaFora"+posicaoEF).text("Lixo separadinho");
          posicaoEF++;
        }
         $('.popoverEF').css('display', 'block');
      } else{

        $('#modalEscola1').modal('show')
       //alert("selecione ate 5")
      }
    })

    $("#btnTrocarEF" ).click(function() {
      $('.popoverEF').css('display', 'none');
       posicaoEF=1;

       for (i = 0; i < i.length; i++) {
         $("#imgEscolaFora"+i).attr('src', '');
         $("#TxtEscolaFora"+i).text("");
      }
    })

    $("#btnSalvarEF" ).click(function() {
      $('#AnimacaoClickEscolaFora').jsMovie('destroy');
      var audio_escolaFora = new Audio('sounds/falas/desafios/edu/parabens1.wav') ;
      destroyAnimation('#AnimacaoRoboHelp')
      congratsNextLevel(['full','empty','empty'], false, audio_escolaFora)
    })

    $( "#icon_acessibilidade1" ).click(function() {
      if (contCoisasEscolaF==5){
        $('#modalEscola2').modal('show')
      } else{
        $(this).css('display', 'none');
        $('#rampaacessibilidade').css('display', 'block');
        $('#rampaacessibilidade').addClass('imgVisible')
        $('#icon_acessibilidade2').css('display', 'block');
        contCoisasEscolaF++;
        acessibilidadeBOL= true;
      }
    })
    $( "#icon_acessibilidade2" ).click(function() {
        $(this).css('display', 'none');
        $('#rampaacessibilidade').css('display', 'none');
        $('#rampaacessibilidade').removeClass('imgVisible')
        $('#icon_acessibilidade1').css('display', 'block');
        contCoisasEscolaF--;
        acessibilidadeBOL= false;
    })
    $( "#icon_pintar1" ).click(function() {
      if (contCoisasEscolaF==5){
        $('#modalEscola2').modal('show')
      } else{
        $(this).css('display', 'none');
        $('#escolafora_pintada').css('display', 'block');
        $('#escolafora_pintada').addClass('imgVisible');
        $('#icon_pintar2').css('display', 'block');
        contCoisasEscolaF++;
        pintarBOL= true;
      }
    })
    $( "#icon_pintar2" ).click(function() {
        $(this).css('display', 'none');
        $('#escolafora_pintada').css('display', 'none');
        $('#escolafora_pintada').removeClass('imgVisible');
        $('#icon_pintar1').css('display', 'block');
        contCoisasEscolaF--;
        pintarBOL= false;
    })
    $( "#icon_arborizar1" ).click(function() {
      if (contCoisasEscolaF==5){
        $('#modalEscola2').modal('show')

      } else{
        $(this).css('display', 'none');
        $('#arvoreescola1').css('display', 'block')
        $('#arvoreescola2').css('display', 'block')
        $('#arvoreescola2').addClass('imgVisible');
        $('#icon_arborizar2').css('display', 'block')
        contCoisasEscolaF++;
        arborizarBOL= true;
      }
    })
    $( "#icon_arborizar2" ).click(function() {
        $(this).css('display', 'none');
        $('#arvoreescola1').css('display', 'none')
        $('#arvoreescola2').css('display', 'none')
        $('#arvoreescola2').removeClass('imgVisible');
        $('#icon_arborizar1').css('display', 'block')
        contCoisasEscolaF--;
        arborizarBOL= false;
    })

    $( "#icon_onibus1" ).click(function() {
      if (contCoisasEscolaF==5){
        $('#modalEscola2').modal('show')
      } else{
        $(this).css('display', 'none');
        $('#onibusescolar').css('display', 'block');
        $('#icon_onibus2').css('display', 'block');
        $('#onibusescolar').addClass('imgVisible');
        contCoisasEscolaF++;
        onibusBOL= true;
      }
    })
    $( "#icon_onibus2" ).click(function() {

        $(this).css('display', 'none');
        $('#onibusescolar').css('display', 'none');
        $('#onibusescolar').removeClass('imgVisible');
        $('#icon_onibus1').css('display', 'block');
        contCoisasEscolaF--;
        onibusBOL= false;
    })
    $( "#icon_horta1" ).click(function() {
      if (contCoisasEscolaF==5){
        $('#modalEscola2').modal('show')
      } else{
        $(this).css('display', 'none');
        $('#hortaescola').css('display', 'block');
        $('#hortaescola').addClass('imgVisible');
        $('#icon_horta2').css('display', 'block');
        contCoisasEscolaF++;
        hortaBOL= true;
      }
    })
    $( "#icon_horta2" ).click(function() {
        $(this).css('display', 'none');
        $('#hortaescola').css('display', 'none');
        $('#hortaescola').removeClass('imgVisible');
        $('#icon_horta1').css('display', 'block');
        contCoisasEscolaF--;
        hortaBOL= false;
    })

    $( "#icon_parquinho1" ).click(function() {
      if (contCoisasEscolaF==5){
        $('#modalEscola2').modal('show')
      } else{
        $(this).css('display', 'none');
        $('#parquinhoescola').css('display', 'block');
        $('#parquinhoescola').addClass('imgVisible');
        $('#icon_parquinho2').css('display', 'block');
        contCoisasEscolaF++;
        parquinhoBOL= true;
      }
    })
    $( "#icon_parquinho2" ).click(function() {
        $(this).css('display', 'none');
        $('#parquinhoescola').css('display', 'none');
        $('#parquinhoescola').removeClass('imgVisible');
        $('#icon_parquinho1').css('display', 'block');
        contCoisasEscolaF--;
        parquinhoBOL= false;
    })

    $( "#icon_lixo1" ).click(function() {
      if (contCoisasEscolaF==5){
        $('#modalEscola2').modal('show')
      } else{
        $(this).css('display', 'none');
        $('#lixeirasseletivas').css('display', 'block');
        $('#lixeirasseletivas').addClass('imgVisible');
        $('#icon_lixo2').css('display', 'block');
        contCoisasEscolaF++;
        lixoBOL= true;
      }
    })
    $( "#icon_lixo2" ).click(function() {

        $(this).css('display', 'none');
        $('#lixeirasseletivas').css('display', 'none');
        $('#lixeirasseletivas').removeClass('imgVisible');
        $('#icon_lixo1').css('display', 'block');
        lixoBOL= false;
        contCoisasEscolaF--;
    })
  }

// Desafio edu_1 escola dentro------------------------------------------------------------------------------------------------------------------
  function edu_1() {
    helpConfig($('#help_edu1'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

      $('#AnimacaoClickEscolaDentro').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });

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

    var bibliotecaBOL= false;
    var teatroBOL= false;
    var cantinaBOL= false;
    var musicaBOL= false;
    var informaticaBOL= false;
    var quimicaBOL= false;
    var dancaBOL= false;


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

    $( ".iconNormalD" ).click(function() {
      $('#AnimacaoClickEscolaDentro').css('display', 'none');
    })

    var idImgSala="";
    var todasSalasOcupadas= false;
    var habilitarBtnProximo = false;

    function todosOcupados(){
      if (posicaoSalaVazia1==false && posicaoSalaVazia2==false && posicaoSalaVazia3==false && posicaoSalaVazia4==false && posicaoSalaVazia5==false){
        todasSalasOcupadas=true;
        FaseDentroOK();
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
        $('#modalEscola2').modal('show')
      } else{
        idImgSala="#imgBiblioteca";
        posicaoSalas(idImgSala);
        $(this).css('display', 'none');
        $('#icon_biblioteca2').css('display', 'block')
        todosOcupados();
        bibliotecaBOL= true;
      }
    })
    $( "#icon_biblioteca2" ).click(function() {
      idImgSala="#imgBiblioteca";
      $(idImgSala).css('display', 'none');
      deixarTrueSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_biblioteca1').css('display', 'block')
      bibliotecaBOL= false;
    })


    $( "#icon_teatro1" ).click(function() {
      todosOcupados();
      if (todasSalasOcupadas){
          FaseDentroOK();
        $('#modalEscola2').modal('show')
      } else{
      idImgSala="#imgTeatro";
      posicaoSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_teatro2').css('display', 'block')
      todosOcupados();
      teatroBOL=true;
    }
    })
    $( "#icon_teatro2" ).click(function() {
      idImgSala="#imgTeatro";
       $(idImgSala).css('display', 'none');
      deixarTrueSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_teatro1').css('display', 'block')
      teatroBOL=false;
    })


    $( "#icon_cantina1" ).click(function() {
      todosOcupados();
      if (todasSalasOcupadas){
          FaseDentroOK();
        $('#modalEscola2').modal('show')
      } else{
      idImgSala="#imgCantina";
      posicaoSalas(idImgSala);

      $(this).css('display', 'none');
      $('#icon_cantina2').css('display', 'block')
      todosOcupados();
      cantinaBOL=true;
    }
    })
    $( "#icon_cantina2" ).click(function() {
       idImgSala="#imgCantina";
        $(idImgSala).css('display', 'none');
      deixarTrueSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_cantina1').css('display', 'block')
      cantinaBOL=false;
    })


    $( "#icon_musica1" ).click(function() {
      todosOcupados();
      if (todasSalasOcupadas){
          FaseDentroOK();
        $('#modalEscola2').modal('show')
      } else{
      idImgSala="#imgMusica";
      posicaoSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_musica2').css('display', 'block')
      todosOcupados();
      musicaBOL=true;
    }
    })
    $( "#icon_musica2" ).click(function() {
      idImgSala="#imgMusica";
       $(idImgSala).css('display', 'none');
       deixarTrueSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_musica1').css('display', 'block')
      musicaBOL=false;
    })


    $( "#icon_informatica1" ).click(function() {
      todosOcupados();
      if (todasSalasOcupadas){
          FaseDentroOK();
        $('#modalEscola2').modal('show')
      } else{
      idImgSala="#imgInformatica";
      posicaoSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_informatica2').css('display', 'block')
      todosOcupados();
      informaticaBOL=true;
    }
    })
    $( "#icon_informatica2" ).click(function() {
      idImgSala="#imgInformatica";
       $(idImgSala).css('display', 'none');
       deixarTrueSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_informatica1').css('display', 'block')
      informaticaBOL=false;
    })


    $( "#icon_quimica1" ).click(function() {
      todosOcupados();
      if (todasSalasOcupadas){
          FaseDentroOK();
        $('#modalEscola2').modal('show')
      } else{
      idImgSala="#imgQuimica";
      posicaoSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_quimica2').css('display', 'block')
      todosOcupados();
      quimicaBOL=true;
    }
    })
    $( "#icon_quimica2" ).click(function() {
       idImgSala="#imgQuimica";
        $(idImgSala).css('display', 'none');
        deixarTrueSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_quimica1').css('display', 'block')
      quimicaBOL=false;
    })


    $( "#icon_danca1" ).click(function() {
      todosOcupados();
      if (todasSalasOcupadas){
          FaseDentroOK();
        $('#modalEscola2').modal('show')
      } else{
       idImgSala="#imgDanca";
      $(this).css('display', 'none');
      posicaoSalas(idImgSala);
      $('#icon_danca2').css('display', 'block')
      todosOcupados();
      dancaBOL=true;
      }
    })
    $( "#icon_danca2" ).click(function() {
       idImgSala="#imgDanca";
        $(idImgSala).css('display', 'none');
        deixarTrueSalas(idImgSala);
      $(this).css('display', 'none');
      $('#icon_danca1').css('display', 'block')
      dancaBOL=false;
    })


    var posicaoED=1;

    $( "#btnNextEscolaDentro" ).click(function() {
      todosOcupados();
     if (habilitarBtnProximo){
       if(bibliotecaBOL){
          $("#imgEscolaDentro"+posicaoED).attr('src', 'img/desafios/educacao/Escoladentro/itens/biblioteca_save.png');
          $("#TxtEscolaDentro"+posicaoED).text("Muito conhecimento");
          posicaoED++;
        }
        if(teatroBOL){
          $("#imgEscolaDentro"+posicaoED).attr('src', 'img/desafios/educacao/Escoladentro/itens/teatro_save.png');
          $("#TxtEscolaDentro"+posicaoED).text("Peças teatrais feitas pelos meus amigos");
          posicaoED++;
        }
        if(cantinaBOL){
          $("#imgEscolaDentro"+posicaoED).attr('src', 'img/desafios/educacao/Escoladentro/itens/cantina_save.png');
          $("#TxtEscolaDentro"+posicaoED).text("Comidas muito gostosas");
          posicaoED++;
        }
        if(musicaBOL){
          $("#imgEscolaDentro"+posicaoED).attr('src', 'img/desafios/educacao/Escoladentro/itens/musica_save.png');
          $("#TxtEscolaDentro"+posicaoED).text("Muitos músicos");
          posicaoED++;
        }
        if(informaticaBOL){
          $("#imgEscolaDentro"+posicaoED).attr('src', 'img/desafios/educacao/Escoladentro/itens/info_save.png');
          $("#TxtEscolaDentro"+posicaoED).text("Um mundo digital");
          posicaoED++;
        }
        if(quimicaBOL){
          $("#imgEscolaDentro"+posicaoED).attr('src', 'img/desafios/educacao/Escoladentro/itens/quimica_save.png');
          $("#TxtEscolaDentro"+posicaoED).text("Um lugar para fazer experimentos");
          posicaoED++;
        }
        if(dancaBOL){
          $("#imgEscolaDentro"+posicaoED).attr('src', 'img/desafios/educacao/Escoladentro/itens/danca_save.png');
          $("#TxtEscolaDentro"+posicaoED).text("Muitos dançarinos");
          posicaoED++;
        }
        $('.popoverED').css('display', 'block'); //alert("entou");
     } else {
       $('#modalEscola1').modal('show')
       // alert("selecione 5");
     }
    })

    $("#btnTrocarED" ).click(function() {
      $('.popoverED').css('display', 'none');
       posicaoED=1;

       for (i = 0; i < cars.length; i++) {
         $("#imgEscolaDentro"+i).attr('src', '');
         $("#TxtEscolaDentro"+i).text("");
      }
      var bibliotecaBOL= false;
      var teatroBOL= false;
      var cantinaBOL= false;
      var musicaBOL= false;
      var informaticaBOL= false;
      var quimicaBOL= false;
      var dancaBOL= false;
    })

    $("#btnSalvarED" ).click(function() {
      $('#AnimacaoClickEscolaDentro').jsMovie('destroy');
      var audio_escolaDentro = new Audio('sounds/falas/desafios/edu/parabens2.wav') ;
      destroyAnimation('#AnimacaoRoboHelp')
      congratsNextLevel(['full','full','empty'], false, audio_escolaDentro)
    })
  }

// Desafio edu_2 Escola Sala -------------------------------------------------------------------------------------------------------------------
  function edu_2() {
    helpConfig($('#help_edu2'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

    $('#AnimacaoClickEscolaSala').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });

    $( ".iconNormalS" ).click(function() {
      $('#AnimacaoClickEscolaSala').css('display', 'none');
    })

    var cadeirasBOL=false;
    var livrosBOL=false;
    var lapisBOL=false;
    var quadroBOL=false;
    var globoBOL=false;
    var lixeiraBOL=false;
    var luzBOL= false;

    var contCoisasEscolaS=0;
    var habilitarBtnPS=false;

    var posicaoES=1;

    $( "#btnNextSala" ).click(function() {
      var totalImgsS = $(".imgEscolaSala.imgVisibleS").length;
      //alert(totalImgsS );
      if (totalImgsS==5) {
        if(cadeirasBOL){
          $("#imgEscolaSala"+posicaoES).attr('src', 'img/desafios/educacao/Sala/itens/cadeira_save.png');
          $("#TxtEscolaSala"+posicaoES).text("Lugares confortáveis para escrever");
          posicaoES++;

        }
        if(livrosBOL){
          $("#imgEscolaSala"+posicaoES).attr('src', 'img/desafios/educacao/Sala/itens/livros_save.png');
          $("#TxtEscolaSala"+posicaoES).text("Livros com muitas aventuras");
          posicaoES++;
        }
       if(lapisBOL){
          $("#imgEscolaSala"+posicaoES).attr('src', 'img/desafios/educacao/Sala/itens/lapis_save.png');
          $("#TxtEscolaSala"+posicaoES).text("Lápis de todas as cores");
          posicaoES++;
        }
        if(quadroBOL){
          $("#imgEscolaSala"+posicaoES).attr('src', 'img/desafios/educacao/Sala/itens/quadro_save.png');
          $("#TxtEscolaSala"+posicaoES).text("Onde o professor escrever");
          posicaoES++;
        }
        if(globoBOL){
          $("#imgEscolaSala"+posicaoES).attr('src', 'img/desafios/educacao/Sala/itens/globo_save.png');
          $("#TxtEscolaSala"+posicaoES).text("Onde ver todos os países");
          posicaoES++;
        }
        if(lixeiraBOL){
          $("#imgEscolaSala"+posicaoES).attr('src', 'img/desafios/educacao/Sala/itens/lixeira_save.png');
          $("#TxtEscolaSala"+posicaoES).text("Chão limpo sempre");
          posicaoES++;
        }

        if(luzBOL){
          $("#imgEscolaSala"+posicaoES).attr('src', 'img/desafios/educacao/Sala/itens/luz_save.png');
          $("#TxtEscolaSala"+posicaoES).text("Iluminação boa");
          posicaoES++;
        }

         $('.popoverES').css('display', 'block');


      } else{
         $('#modalEscola1').modal('show')
        //alert("selecione ate 5")
      }
    })

    $("#btnTrocarES" ).click(function() {
      $('.popoverES').css('display', 'none');
       posicaoES=1;

       for (i = 0; i < i.length; i++) {
         $("#imgEscolaSala"+i).attr('src', '');
         $("#TxtEscolaSala"+i).text("");
      }
    })

    $("#btnSalvarES" ).click(function() {
      $('#AnimacaoClickEscolaSala').jsMovie('destroy');
      var audio_escolaSala = new Audio('sounds/falas/desafios/edu/parabens3.wav') ;
      destroyAnimation('#AnimacaoRoboHelp')
      congratsNextLevel(['full','full','full'],true, audio_escolaSala)
    })

    $( "#icon_cadeiras1" ).click(function() {
      if (contCoisasEscolaS==5){
        $('#modalEscola2').modal('show')

      } else{
        $(this).css('display', 'none');
        $('#SalaCadeiras').css('display', 'block');
        $('#SalaCadeiras').addClass('imgVisibleS')
        $('#icon_cadeiras2').css('display', 'block');
        contCoisasEscolaS++;
        cadeirasBOL= true;
      }
    })
    $( "#icon_cadeiras2" ).click(function() {
        $(this).css('display', 'none');
        $('#SalaCadeiras').css('display', 'none');
        $('#SalaCadeiras').removeClass('imgVisibleS')
        $('#icon_cadeiras1').css('display', 'block');
        contCoisasEscolaS--;
        cadeirasBOL= false;
    })
    $( "#icon_livros1" ).click(function() {
      if (contCoisasEscolaS==5){
        $('#modalEscola2').modal('show')

      } else{
        $(this).css('display', 'none');
        $('#SalaLivros').css('display', 'block');
        $('#SalaLivros').addClass('imgVisibleS')
        $('#icon_livros2').css('display', 'block');
        contCoisasEscolaS++;
        livrosBOL= true;
      }
    })
    $( "#icon_livros2" ).click(function() {
        $(this).css('display', 'none');
        $('#SalaLivros').css('display', 'none');
        $('#SalaLivros').removeClass('imgVisibleS')
        $('#icon_livros1').css('display', 'block');
        contCoisasEscolaS--;
        livrosBOL= false;
    })
    $( "#icon_lapis1" ).click(function() {
      if (contCoisasEscolaS==5){
        $('#modalEscola2').modal('show')

      } else{
        $(this).css('display', 'none');
        $('#SalaLapis').css('display', 'block');
        $('#SalaLapis').addClass('imgVisibleS')
        $('#icon_lapis2').css('display', 'block');
        contCoisasEscolaS++;
        lapisBOL= true;
      }
    })
    $( "#icon_lapis2" ).click(function() {
        $(this).css('display', 'none');
        $('#SalaLapis').css('display', 'none');
        $('#SalaLapis').removeClass('imgVisibleS')
        $('#icon_lapis1').css('display', 'block');
        contCoisasEscolaS--;
        lapisBOL= false;
    })
    $( "#icon_quadro1" ).click(function() {
      if (contCoisasEscolaS==5){
        $('#modalEscola2').modal('show')
      } else{
        $(this).css('display', 'none');
        $('#SalaQuadro').css('display', 'block');
        $('#SalaQuadro').addClass('imgVisibleS')
        $('#icon_quadro2').css('display', 'block');
        contCoisasEscolaS++;
        quadroBOL= true;
      }
    })
    $( "#icon_quadro2" ).click(function() {
        $(this).css('display', 'none');
        $('#SalaQuadro').css('display', 'none');
        $('#SalaQuadro').removeClass('imgVisibleS')
        $('#icon_quadro1').css('display', 'block');
        contCoisasEscolaS--;
        quadroBOL= false;
    })
    $( "#icon_globo1" ).click(function() {
      if (contCoisasEscolaS==5){
        $('#modalEscola2').modal('show')

      } else{
        $(this).css('display', 'none');
        $('#SalaGlobo').css('display', 'block');
        $('#SalaGlobo').addClass('imgVisibleS')
        $('#icon_globo2').css('display', 'block');
        contCoisasEscolaS++;
        globoBOL= true;
      }
    })
    $( "#icon_globo2" ).click(function() {
        $(this).css('display', 'none');
        $('#SalaGlobo').css('display', 'none');
        $('#SalaGlobo').removeClass('imgVisibleS')
        $('#icon_globo1').css('display', 'block');
        contCoisasEscolaS--;
        globoBOL= false;

    })
    $( "#icon_lixeira1" ).click(function() {
      if (contCoisasEscolaS==5){
        $('#modalEscola2').modal('show')

      } else{
        $(this).css('display', 'none');
        $('#SalaLixeira').css('display', 'block');
        $('#SalaLixeira').addClass('imgVisibleS')
        $('#icon_lixeira2').css('display', 'block');
        contCoisasEscolaS++;
        lixeiraBOL= true;
      }
    })
    $( "#icon_lixeira2" ).click(function() {
        $(this).css('display', 'none');
        $('#SalaLixeira').css('display', 'none');
        $('#SalaLixeira').removeClass('imgVisibleS')
        $('#icon_lixeira1').css('display', 'block');
        contCoisasEscolaS--;
        lixeiraBOL= false;

    })
    $( "#icon_luz1" ).click(function() {
      if (contCoisasEscolaS==5){
        $('#modalEscola2').modal('show')

      } else{
        $(this).css('display', 'none');
        $('#SalaLuz').css('display', 'block');
        $('#SalaLuz').addClass('imgVisibleS')
        $('#icon_luz2').css('display', 'block');
        contCoisasEscolaS++;
        luzBOL= true;
      }
    })
    $( "#icon_luz2" ).click(function() {
        $(this).css('display', 'none');
        $('#SalaLuz').css('display', 'none');
        $('#SalaLuz').removeClass('imgVisibleS')
        $('#icon_luz1').css('display', 'block');
        contCoisasEscolaS--;
        luzBOL= false;
    })
  }

// Desafio eco_0 Casa -----------------------------------------------------------------------------------------------------------------
  function eco_0() {
    helpConfig($('#help_eco0'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()

    var moedaEntrando = new Audio('sounds/feedback/economia/Moeda Entrando.wav');
    var moedaSaindo = new Audio('sounds/feedback/economia/Moeda Saindo.wav')

    moedaEntrando.load();
    moedaEntrando.play();

    moedaSaindo.load();
    moedaSaindo.play();

    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

     $('#AnimacTecladoCasa').jsMovie({
      sequence: 'keyboard_000##.png',
      from: 0,
      to: 39,
      fps: 10,
      width:'55%',
      height: '60%',
      folder : "img/animation/cursor/keyboard/",
      playOnLoad:true
    });


    var qtd_moedas= 0;
    var DivA = document.querySelector("#icon_pers_move")
    var DivB = document.querySelector("#icon_bola")
    var DivC = document.querySelector("#icon_bola2")
    var DivD = document.querySelector("#icon_dog")
    var DivE = document.querySelector("#icon_vo")
    var DivF = document.querySelector("#icon_vaso")
    var DivG = document.querySelector("#icon_pirulito")
    var DivH = document.querySelector("#icon_biscoito")
    var DivI = document.querySelector('#divplantacasa')

    setInterval(movePlane, 20);
    var keys = {}

    $(document).keydown(function(e) {
        keys[e.keyCode] = true;
    });

    $(document).keyup(function(e) {
        delete keys[e.keyCode];
    });

    //Função de utilidade
    var rangeIntersect = function(min0, max0, min1, max1) {
        return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1)
    }
    //Função para detectar se 2 BoundingClientRect's estão colidindo
    var rectIntersect = function (r0, r1) {
        return rangeIntersect(r0.left, r0.right, r1.left, r1.right) && rangeIntersect(r0.top, r0.bottom, r1.top, r1.bottom)
    }

    var CasaBola = false;
    var CasaDog = false;
    var CasaVo = false;
    var CasaBiscoito = false;

    var endlevel = false

    function verificarPegouCB(qtd_m){
      if (CasaBola && CasaVo && CasaDog && CasaBiscoito && !endlevel){
        endlevel = true


setTimeout(function () {
      $('#AnimacTecladoCasa').jsMovie('destroy');
  var audio_casa = new Audio('sounds/falas/desafios/eco/parabens1.wav') ;
     destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "half", "empty"], false, audio_casa)
  }, 300);

        var qtd_moedass = qtd_m
        console.log("Total de moedas= "+qtd_moedass)
        saveInStorage("moedas", qtd_moedass)
        return qtd_moedass;
         // passar qtd moedas para proxima fase (Monstrinhos)
      }
    }

    function collision($div1, $div2) {
      if (!endlevel) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;
      }

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return true;
      return false;
    }

    var armazenar1 = false;
    var armazenar2 = false;
    var armazenar3 = false;
    var armazenar4 = false;

    function movePlane() {

      for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;

        if (endlevel) return

        if (direction == 37) {
          armazenar1 = collision($('#icon_pers_move'), $('#divplantacasa1'));
          if (armazenar1) {
             $("#icon_pers_move").animate({left: "-=5"}, 0);
              $('#AnimacTecladoCasa').css('display', 'none');
          }
        }
        if (direction == 38) {
        armazenar2 = collision($('#icon_pers_move'), $('#divplantacasa2'));
          if (armazenar2) {
            $("#icon_pers_move").animate({top: "-=5"}, 0);
             $('#AnimacTecladoCasa').css('display', 'none');
          }

        }

        if (direction == 39) {
           armazenar3 = collision($('#icon_pers_move'), $('#divplantacasa3'));
          if (armazenar3) {
            $("#icon_pers_move").animate({left: "+=5"}, 0);
             $('#AnimacTecladoCasa').css('display', 'none');
          }

        }
        if (direction == 40) {
          armazenar4 = collision($('#icon_pers_move'), $('#divplantacasa4'));
          if (armazenar4) {
            $("#icon_pers_move").animate({top: "+=5"}, 0);
             $('#AnimacTecladoCasa').css('display', 'none');
          }

        }

        var BBoxA = DivA.getBoundingClientRect()
        var BBoxB = DivB.getBoundingClientRect()
        var BBoxC = DivC.getBoundingClientRect()
        var BBoxD = DivD.getBoundingClientRect()
        var BBoxE = DivE.getBoundingClientRect()
        var BBoxF = DivF.getBoundingClientRect()
        var BBoxG = DivG.getBoundingClientRect()
        var BBoxH = DivH.getBoundingClientRect()

        if(rectIntersect(BBoxA, BBoxB)){
          $('#icon_bola').css('display', 'none');
          $('#imgtexto_maismoedas').css('display', 'block');
          $('#txt_maismoedas').css('display', 'block');
          $('#txt_maismoedas').text('+10 por vender um brinquedo antigo')
          $('#txt_maismoedas').css('color','#2BCB8D')
          qtd_moedas=qtd_moedas+10;
          moedaEntrando.load();
          moedaEntrando.play();
          $('#qtd_moeda').text(qtd_moedas);
          $('#icon_bola2').css('display', 'block');
          $('#icon_dog').css('display', 'block');
          CasaBola= true;
          verificarPegouCB(qtd_moedas);
        }

        if(rectIntersect(BBoxA, BBoxC)){
          $('#icon_bola2').css('display', 'none');
          $('#imgtexto_maismoedas').css('display', 'block');
          $('#txt_maismoedas').css('display', 'block');
          $('#txt_maismoedas').text('-10 por comprar dois brinquedos')
          $('#txt_maismoedas').css('color','#ea493a')
          qtd_moedas=qtd_moedas-10;
           moedaSaindo.load();
         moedaSaindo.play();
          $('#qtd_moeda').text(qtd_moedas);
        }

        if(rectIntersect(BBoxA, BBoxD)){
          $('#icon_dog').css('display', 'none');
          $('#imgtexto_maismoedas').css('display', 'block');
          $('#txt_maismoedas').css('display', 'block');
          $('#txt_maismoedas').text('+10 por passear com o cão da vizinha')
          $('#txt_maismoedas').css('color','#2BCB8D')
          qtd_moedas=qtd_moedas+10;
          moedaEntrando.load();
         moedaEntrando.play();
          $('#qtd_moeda').text(qtd_moedas);
          $('#icon_vo').css('display', 'block');
          CasaDog= true;
          verificarPegouCB(qtd_moedas);
        }

        if(rectIntersect(BBoxA, BBoxE)){
          $('#icon_vo').css('display', 'none');
          $('#imgtexto_maismoedas').css('display', 'block');
          $('#txt_maismoedas').css('display', 'block');
          $('#txt_maismoedas').text('+10 por ganhar moedas da avó')
          $('#txt_maismoedas').css('color','#2BCB8D')
          qtd_moedas=qtd_moedas+10;
                    moedaEntrando.load();
         moedaEntrando.play();
          $('#qtd_moeda').text(qtd_moedas);
           $('#icon_vaso').css('display', 'block');
          $('#icon_pirulito').css('display', 'block');
          $('#icon_biscoito').css('display', 'block');
          CasaVo= true;
          verificarPegouCB(qtd_moedas);
        }

         if(rectIntersect(BBoxA, BBoxF)){
          $('#icon_vaso').css('display', 'none');
          $('#imgtexto_maismoedas').css('display', 'block');
          $('#txt_maismoedas').css('display', 'block');
          $('#txt_maismoedas').text('-10 por quebrar o vaso da mãe')
          $('#txt_maismoedas').css('color','#ea493a')
          qtd_moedas=qtd_moedas-10;
           moedaSaindo.load();
          moedaSaindo.play();

          $('#qtd_moeda').text(qtd_moedas);
        }

        if(rectIntersect(BBoxA, BBoxG)){
          $('#icon_pirulito').css('display', 'none');
          $('#imgtexto_maismoedas').css('display', 'block');
          $('#txt_maismoedas').css('display', 'block');
          $('#txt_maismoedas').text('-10 por gastar dinheiro com doces')
          $('#txt_maismoedas').css('color','#ea493a')
          qtd_moedas=qtd_moedas-10;
           moedaSaindo.load();
           moedaSaindo.play();

          $('#qtd_moeda').text(qtd_moedas);
        }

         if(rectIntersect(BBoxA, BBoxH)){
          $('#icon_biscoito').css('display', 'none');
          $('#imgtexto_maismoedas').css('display', 'block');
          $('#txt_maismoedas').css('display', 'block');
          $('#txt_maismoedas').text('+10 por vender biscoitos na rua')
          $('#txt_maismoedas').css('color','#2BCB8D')
          qtd_moedas=qtd_moedas+10;
          moedaEntrando.load();
         moedaEntrando.play();
          $('#qtd_moeda').text(qtd_moedas);
          CasaBiscoito= true;
          verificarPegouCB(qtd_moedas);
        }
      }
    }
  }

// Desafio eco_1 Monstrinhos ----------------------------------------------------------------------------------------------------------
  function eco_1() {
    helpConfig($('#help_eco1'), '#AnimacaoRoboHelp', 7)
    playAudioMouseOver();
    setupLevel()
    //A_RoboHelp_create('#AnimacaoRoboHelp');
    //A_RoboHelp_play('#AnimacaoRoboHelp');

    var moedaEntrando = new Audio('sounds/feedback/economia/Moeda Entrando.wav');
    var moedaSaindo = new Audio('sounds/feedback/economia/mos.wav')


    var cont_bola_edu=1;
    var cont_bola_sau=1;
    var cont_bola_laz=1;
    var qntMoedasM = getFromStorage("moedas"); //pegar da variavel da fase anterior

    $("#qtd_moedaM").text(qntMoedasM)

      $('#AnimacaoClickMonstrinhos').jsMovie({
      sequence: 'click_000##.png',
      from: 0,
      to: 19,
      fps: 10,
      width:'45%',
      height: '60%',
      folder : "img/animation/cursor/click/",
      playOnLoad:true
    });

    $('#animacaoEduc').jsMovie({
    sequence: 'maquinaeduc_000##.png',
    from: 0,
    to: 14,
    fps: 8,
    width:'30%',
    height: '53.5%',
    folder : "img/animation/maquinaeduc/",
    playOnLoad:false

    });

    $('#animacaoSaude').jsMovie({
    sequence: 'maquinasaude_000##.png',
    from: 0,
    to: 14,
    fps: 8,
    width:'30%',
    height: '53.5%',
    folder : "img/animation/maquinasaude/",
    playOnLoad:false
    });


     $('#animacaoLazer').jsMovie({
    sequence: 'maquinalazer_000##.png',
    from: 0,
    to: 14,
    fps: 8,
    width:'30%',
    height: '53.5%',
    folder : "img/animation/maquinalazer/",
    playOnLoad:false
    });

    var addMoedaEdu=true;
    var addMoedaSau=true;
    var addMoedaLaz=true;

    var semMonstrinho=true;

    function retirarAddMoeda(){
      addMoedaEdu=false;
      addMoedaSau=false;
      addMoedaLaz=false;
    }
    function adicionarAddMoeda(){
      addMoedaEdu=true;
      addMoedaSau=true;
      addMoedaLaz=true;
    }


    $(".addMoedaEdu1").click(function() {

      if(semMonstrinho){
          $('#AnimacaoClickMonstrinhos').css('display', 'none');
          semMonstrinho=false;
           if (addMoedaEdu){
            if(qntMoedasM==0){

            } else {

               playSound(moedaEntrando)
                qntMoedasM = qntMoedasM-10;
                $('#qtd_moedaM').text(qntMoedasM);
                retirarAddMoeda();
                $("#animacaoEduc").css('display','block');
                 $('#animacaoEduc').jsMovie('play',1,15,false,true);
                 // $("#animacaoEduc").css('display','none');
                if(cont_bola_edu==1){

                  setTimeout(function () {
                  $('#bolaEduc3').css('display', 'none');
                  $('#bolaEduc1').css('display', 'block');
                  cont_bola_edu=2;
                   playSound(moedaSaindo)
                 }, 1300);

                  setTimeout(function () {
                    $("#bolaEduc1")[0].click();
                  }, 1500);

      
                } else if(cont_bola_edu==2){
                   setTimeout(function () {
                  $('#bolaEduc1').css('display', 'none');
                  $('#bolaEduc2').css('display', 'block');
                  cont_bola_edu=3
                   playSound(moedaSaindo)
                 }, 1300);

                  setTimeout(function () {
                    $("#bolaEduc2")[0].click();
                  }, 1500);


                } else if(cont_bola_edu==3){
                   setTimeout(function () {
                  $('#bolaEduc2').css('display', 'none');
                  $('#bolaEduc3').css('display', 'block');
                   cont_bola_edu=1;
                   playSound(moedaSaindo)
                 }, 1300);

                  setTimeout(function () {
                    $("#bolaEduc3")[0].click();
                  }, 1500);

                }
            }
          }
        } else{
           $('#modalMonstrinhos').modal('show')
        }
    })
    $(".addMoedaSau1").click(function() {
      if(semMonstrinho){
             $('#AnimacaoClickMonstrinhos').css('display', 'none');
             semMonstrinho=false;
            if(addMoedaSau){
                 if(qntMoedasM==0){

                } else {
                   playSound(moedaEntrando)
                  qntMoedasM= qntMoedasM-10;
                  $('#qtd_moedaM').text(qntMoedasM);
                  retirarAddMoeda();
                  $("#animacaoSaude").css('display','block');
                     $('#animacaoSaude').jsMovie('play',1,15,false,true);
                  if(cont_bola_sau==1){
                    setTimeout(function () {
                    $('#bolaSau3').css('display', 'none');
                    $('#bolaSau1').css('display', 'block');
                    cont_bola_sau=2;
                     playSound(moedaSaindo)
                    }, 1300);

                     setTimeout(function () {
                       $("#bolaSau1")[0].click();
                     }, 1500);


                  } else if(cont_bola_sau==2){
                    setTimeout(function () {
                    $('#bolaSau1').css('display', 'none');
                    $('#bolaSau2').css('display', 'block');
                    cont_bola_sau=3
                    playSound(moedaSaindo)
                    }, 1300);

                    setTimeout(function () {
                      $("#bolaSau2")[0].click();
                    }, 1500);


                  } else if(cont_bola_sau==3){
                    setTimeout(function () {
                      $('#bolaSau2').css('display', 'none');
                    $('#bolaSau3').css('display', 'block');
                     cont_bola_sau=1;
                      playSound(moedaSaindo)
                    }, 1300);

                    setTimeout(function () {
                      $("#bolaSau3")[0].click();
                    }, 1500);


                  }
                }
              }
            } else{
             $('#modalMonstrinhos').modal('show')
            }
    })
    $(".addMoedaLaz1").click(function() {
      if(semMonstrinho){
       $('#AnimacaoClickMonstrinhos').css('display', 'none');
       semMonstrinho=false;
        if(addMoedaLaz){
           if(qntMoedasM==0){

          } else {
            playSound(moedaEntrando)
            qntMoedasM= qntMoedasM-10;
            $('#qtd_moedaM').text(qntMoedasM);
            retirarAddMoeda();
            $("#animacaoLazer").css('display','block');
            $('#animacaoLazer').jsMovie('play',1,15,false,true);
            if(cont_bola_laz==1){
              setTimeout(function () {
              $('#bolaLaz3').css('display', 'none');
              $('#bolaLaz1').css('display', 'block');
              cont_bola_laz=2;
               playSound(moedaSaindo)
              }, 1300);

              setTimeout(function () {
                $("#bolaLaz1")[0].click();
              }, 1500);

            } else if(cont_bola_laz==2){
              setTimeout(function () {
              $('#bolaLaz1').css('display', 'none');
              $('#bolaLaz2').css('display', 'block');
              cont_bola_laz=3
               playSound(moedaSaindo)
              }, 1300);

              setTimeout(function () {
                $("#bolaLaz2")[0].click();
              }, 1500);

            } else if(cont_bola_laz==3){
              setTimeout(function () {
              $('#bolaLaz2').css('display', 'none');
              $('#bolaLaz3').css('display', 'block');
               cont_bola_laz=1;
                playSound(moedaSaindo)
              }, 1300);

              setTimeout(function () {
                $("#bolaLaz3")[0].click();
              }, 1500);

            }
          }
        }
      } else{
         $('#modalMonstrinhos').modal('show')
      }
    })
    $("#bolaEduc1").click(function() {
      adicionarAddMoeda();
      $(this).css('display', 'none');
      $('#img_monstrinho').attr('src', 'img/desafios/economia/Monstrinhos/ciencito_educ.png');
      $('#nome_monstrinho').text("CIENCITO");
      $('#nome_monstrinho').css('color', ' #376DC4');
      $('#desc_monstrinho').text("Te dá o poder de fazer invenções incríveis.");
      $('.div_monstrinhos').css('display', 'block');
    })
    $("#bolaEduc2").click(function() {
      adicionarAddMoeda();
      $(this).css('display', 'none');
      $('#img_monstrinho').attr('src', 'img/desafios/economia/Monstrinhos/mapamax_educ.png');
      $('#nome_monstrinho').text("MAPAMAX");
      $('#nome_monstrinho').css('color', ' #376DC4');
      $('#desc_monstrinho').text("Coloca na sua cabeça o nome de todos os lugares do mundo.");
      $('.div_monstrinhos').css('display', 'block');
    })
    $("#bolaEduc3").click(function() {
      adicionarAddMoeda();
      $(this).css('display', 'none');
      $('#img_monstrinho').attr('src', 'img/desafios/economia/Monstrinhos/livrex_educ.png');
      $('#nome_monstrinho').text("LIVREX");
      $('#nome_monstrinho').css('color', ' #376DC4');
      $('#desc_monstrinho').text("Te dar o poder de devorar vários livros em pouco tempo.");
      $('.div_monstrinhos').css('display', 'block');
    })
    $("#bolaSau1").click(function() {
      adicionarAddMoeda();
      $(this).css('display', 'none');
      $('#img_monstrinho').attr('src', 'img/desafios/economia/Monstrinhos/remeldino_saude.png');
      $('#nome_monstrinho').text("REMELDINO");
      $('#nome_monstrinho').css('color', '#E54141');
      $('#desc_monstrinho').text("Te cura sempre que ficar doente.");
      $('.div_monstrinhos').css('display', 'block');
    })
    $("#bolaSau2").click(function() {
      adicionarAddMoeda();
      $(this).css('display', 'none');
      $('#img_monstrinho').attr('src', 'img/desafios/economia/Monstrinhos/higiento_saude.png');
      $('#nome_monstrinho').text("HIGIENTO");
      $('#nome_monstrinho').css('color', '#E54141');
      $('#desc_monstrinho').text("Te deixa sempre limpo e longe de bichinhos.");
      $('.div_monstrinhos').css('display', 'block');
    })
    $("#bolaSau3").click(function() {
      adicionarAddMoeda();
      $(this).css('display', 'none');
      $('#img_monstrinho').attr('src', 'img/desafios/economia/Monstrinhos/alimeniro_saude.png');
      $('#nome_monstrinho').text("ALIMENIRO");
      $('#nome_monstrinho').css('color', '#E54141');
      $('#desc_monstrinho').text("Transforma toda a sua comida em coisas saudáveis.");
      $('.div_monstrinhos').css('display', 'block');
    })
    $("#bolaLaz1").click(function() {
      adicionarAddMoeda();
      $(this).css('display', 'none');
      $('#img_monstrinho').attr('src', 'img/desafios/economia/Monstrinhos/aventurim_lazer.png');
      $('#nome_monstrinho').text("AVENTURIM");
      $('#nome_monstrinho').css('color', '#E8AD2A');
      $('#desc_monstrinho').text("Te transporta para dentro dos filmes que você quiser.");
      $('.div_monstrinhos').css('display', 'block');
    })
    $("#bolaLaz2").click(function() {
      adicionarAddMoeda();
      $(this).css('display', 'none');
      $('#img_monstrinho').attr('src', 'img/desafios/economia/Monstrinhos/esportanto_lazer.png');
      $('#nome_monstrinho').text("ESPORTANTO");
      $('#nome_monstrinho').css('color', '#E8AD2A');
      $('#desc_monstrinho').text("Te deixa craque em qualquer esporte.");
      $('.div_monstrinhos').css('display', 'block');
    })
    $("#bolaLaz3").click(function() {
      adicionarAddMoeda();
      $(this).css('display', 'none');
      $('#img_monstrinho').attr('src', 'img/desafios/economia/Monstrinhos/dancitar_lazer.png');
      $('#nome_monstrinho').text("DANCITAR");
      $('#nome_monstrinho').css('color', '#E8AD2A');
      $('#desc_monstrinho').text("Te faz um expert em qualquer tipo de dança.");
      $('.div_monstrinhos').css('display', 'block');
    })
    $("#guardar_monstrinhos").click(function() {
      playAudioButton()
      semMonstrinho=true;
      if(qntMoedasM==0){
        $('.div_monstrinhos').css('display', 'none');
         $('#AnimacaoClickMonstrinhos').jsMovie('destroy');
          $('#animacaoEduc').jsMovie('destroy');
            $('#animacaoSaude').jsMovie('destroy');
               $('#animacaoLazer').jsMovie('destroy');
        var audio_monstrinhos = new Audio('sounds/falas/desafios/eco/parabens2.wav') ;
        destroyAnimation('#AnimacaoRoboHelp')
        congratsNextLevel(["full", "full", "full"], true, audio_monstrinhos)
      } else{
      $('.div_monstrinhos').css('display', 'none');
    }
    })

    $("#BmodalMonstrinhos").click(function() {
       $('#modalMonstrinhos').modal('hide')
     })
  }
