//----------------Audios Geral Config
function playSom(som) {
  console.log(som[0].duration)
  $(".sound").click(function() {
    som[0].pause();
    som[0].currentTime = 0;
  })

  if (sessionStorage.getItem('sound') == 'on') {
    som[0].currentTime = 0;
    var promise = som[0].play();

    if (promise !== undefined) {
      promise.then(_ => {
      }).catch(error => {
      });
    }
  }

}

function stopSom(som) {
  som[0].pause();
  som[0].currentTime = 0;
}

function pauseSom(som) {
  som[0].pause();
}
//-------------------------------


//configHep
function helpConfig(som, animation, time) {
  playSom(som)
  robozinAzul_create(animation, '46%', '80%')
  robozinAzul_play(animation, time)
  $('#close-btn').click(function() {
    stopSom(som)
  })
  $('#robot-help-mini').click(function() {
    stopSom(som)
    playSom(som)
    robozinAzul_again(animation, time)
  })
  $('#repeat-btn').click(function() {
    stopSom(som)
    playSom(som)
    robozinAzul_again(animation, time)
  })
}


var audio_botaoClick = new Audio('sounds/feedback/Botao 01.wav');

function playAudioButton() {
  if (sessionStorage.getItem('sound') == 'on') {
    var promise = audio_botaoClick.load();
    var promise = audio_botaoClick.play();

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

//------------------- Audios Botão HELPER
  $('#buraco1, #repeat-btn, #close-btn').click(function(){
    playAudioButton();
  })


//------------------------ audios do quiz
function stopAllSongBadgeDetails() {
  var edu = $("#S_edu");  var eco = $("#S_eco");  var gov = $("#S_gov");  var ino = $("#S_ino");  var laz = $("#S_laz");  var sau = $("#S_sau");  var mei = $("#S_mei")
  stopSom(eco); stopSom(gov); stopSom(edu); stopSom(ino); stopSom(laz); stopSom(sau); stopSom(sau); stopSom(mei)
}

function configMouseOverBadges() {
  $("#edu, #eco, #gov, #ino, #laz, #sau, #mei").mouseover(function() {
    var img = this.id
    var edu = $("#S_edu")
    var eco = $("#S_eco")
    var gov = $("#S_gov")
    var ino = $("#S_ino")
    var laz = $("#S_laz")
    var sau = $("#S_sau")
    var mei = $("#S_mei")
    stopAllSongBadgeDetails()
    stopPerguntasQuiz()
    switch (img) {
      case 'edu':
        playSom(edu)
        break;
      case "eco":
        playSom(eco)
        break;
      case "gov":
        playSom(gov)
        break;
      case "ino":
        playSom(ino)
        break;
      case "laz":
        playSom(laz)
        break;
      case 'sau':
        playSom(sau)
        break;
      case 'mei':
        playSom(mei)
        break;
    }

    $("#edu, #eco, #gov, #ino, #laz, #sau, #mei").mouseleave(function() {
      stopAllSongBadgeDetails();
    })

  });
}


function stopAudiosStartDesafios() {
    var edu = $("#A_edu");  var eco = $("#A_eco");  var gov = $("#A_gov");  var ino = $("#A_ino");  var laz = $("#A_laz");  var sau = $("#A_sau");  var mei = $("#A_mei")
    stopSom(eco); stopSom(gov); stopSom(edu); stopSom(ino); stopSom(laz); stopSom(sau); stopSom(sau); stopSom(mei)
}

function playAudioStartDesafios() {
  var edu = $("#A_edu");  var eco = $("#A_eco");  var gov = $("#A_gov");  var ino = $("#A_ino");  var laz = $("#A_laz");  var sau = $("#A_sau");  var mei = $("#A_mei")
  stopAudiosStartDesafios()
  switch (actual_badge.id) {
    case 'edu':
      playSom(edu)
      break;
    case "eco":
      playSom(eco)
      break;
    case "gov":
      playSom(gov)
      break;
    case "ino":
      playSom(ino)
      break;
    case "laz":
      playSom(laz)
      break;
    case 'sau':
      playSom(sau)
      break;
    case 'mei':
      playSom(mei)
      break;
  }
}

//------------

var audio_mouseover = new Audio('sounds/feedback/Mouse Over Itens.wav');

function AudioMouseOver() {
  if (sessionStorage.getItem('sound') == 'on') {
    var promise2 = audio_mouseover.load();
    var promise2 = audio_mouseover.play();

    if (promise2 !== undefined) {
      promise2.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
    }
  }

}

function playAudioMouseOver() {
  $("button, .button.toggle.repeat").mouseover(function() {
    AudioMouseOver();
  });

}

function playAudioMS() {
  AudioMouseOver();
}

playAudioMouseOver();
//--------------------

//--------------------

var audio_aguapingando = new Audio('sounds/feedback/inovacao/aguapingando.mp3');
audio_aguapingando.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);


function AudioAguaPingando() {
  if (sessionStorage.getItem('sound') == 'on') {
    var promise2 = audio_aguapingando.play();

    if (promise2 !== undefined) {
      promise2.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
    }
  }

}

function playSound(id) {
  if (sessionStorage.getItem('sound') == 'on') {
    id.load();
    id.play();
  }
}

//-----Robo Bolinha Laranja Animacao
function robozinLaranja_create(id, width, height){
  $(id).jsMovie({
    sequence: 'Circulo_Loop_Laranja_000##.png',
    from: 0,
    to: 46,
    fps: 10,
    width: width, //'75%',
    height: height, //'65%',
    folder: "img/animation/robozin/laranja/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "falando", 7, 22) //17 frames
  $(id).jsMovie("addClip", "falando_to_parado", 23, 26) //2 frames
  $(id).jsMovie("addClip", "parado", 27, 44) //17 frames
  $(id).jsMovie("addClip", "parado_to_falando", 46, 47) //2 frames
}

function robozinLaranja_play(id, time) {
  $(".sound").click(function() {
    $(id).jsMovie("playClip", "parado", true);
  })
  if(sessionStorage.getItem('sound') == 'on') {
    t = time*1000
    $(id).jsMovie('play', 7, 22, true, false); // loop_falando
      setTimeout(function(){ //depois de x segundos
        $(id).jsMovie('play', 27, 44, true, false); //loop_parado
      }, t);
    } else {
      $(id).jsMovie('play', 27, 44, true, false); //loop_parado
    }
}

function robozinLaranja_again(id, time) {
  $(".sound").click(function() {
    $(id).jsMovie("playClip", "parado", true);
  })
  if(sessionStorage.getItem('sound') == 'on') {
    t = time*1000
    $(id).jsMovie("playClip", "falando", true); // loop_falando
      setTimeout(function(){ //depois de x segundos
        $(id).jsMovie('play', 27, 44, true, false); //loop_parado
      }, t);
    } else {
      $(id).jsMovie('play', 27, 44, true, false); //loop_parado
    }
}

//-----Robo Bolinha Azul Animacao
function robozinAzul_create(id, width, height){
  $(id).jsMovie({
    sequence: 'Circulo_Loop_Azul_000##.png',
    from: 0,
    to: 45,
    fps: 10,
    width: width, //'75%',
    height: height, //'65%',
    folder: "img/animation/robozin/azul/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "falando", 7, 22) //17 frames
  $(id).jsMovie("addClip", "falando_to_parado", 23, 26) //2 frames
  $(id).jsMovie("addClip", "parado", 27, 44) //17 frames
  $(id).jsMovie("addClip", "parado_to_falando", 45, 46) //2 frames
}

function robozinAzul_play(id, time) {
  $(".sound").click(function() {
    $(id).jsMovie("playClip", "parado", true);
  })
  if(sessionStorage.getItem('sound') == 'on') {
    t = time*1000
    $(id).jsMovie('play', 7, 22, true, false); // loop_falando
      setTimeout(function(){ //depois de x segundos
        $(id).jsMovie('play', 27, 44, true, false); //loop_parado
      }, t);
    } else {
      $(id).jsMovie('play', 27, 44, true, false); //loop_parado
    }
}

function robozinAzul_again(id, time) {
  $(".sound").click(function() {
    $(id).jsMovie("playClip", "parado", true);
  })
  if(sessionStorage.getItem('sound') == 'on') {
    t = time*1000
    $(id).jsMovie("playClip", "falando", true); // loop_falando
      setTimeout(function(){ //depois de x segundos
        $(id).jsMovie('play', 27, 44, true, false); //loop_parado
      }, t);
    } else {
      $(id).jsMovie('play', 27, 44, true, false); //loop_parado
    }
}

//----- Robo Inteiro

function robozinInteiro_create(id, width, height){
  $(id).jsMovie({
    sequence: 'Fala_Loop_000##.png',
    from: 0,
    to: 45,
    fps: 10,
    width: width, //'75%',
    height: height, //'65%',
    folder: "img/animation/robozin/inteiro/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "falando", 7, 22) //17 frames
  $(id).jsMovie("addClip", "falando_to_parado", 23, 26) //2 frames
  $(id).jsMovie("addClip", "parado", 27, 44) //17 frames
  $(id).jsMovie("addClip", "parado_to_falando", 45, 46) //2 frames
}

function robozinInteiro_play(id, time) {
  $(".sound").click(function() {
    $(id).jsMovie("playClip", "parado", true);
  })
  if(sessionStorage.getItem('sound') == 'on') {
    t = time*1000
    $(id).jsMovie('play', 7, 22, true, false); // loop_falando
      setTimeout(function(){ //depois de x segundos
        $(id).jsMovie('play', 27, 43, true, false); //loop_parado
      }, t);
    } else {
      $(id).jsMovie('play', 27, 43, true, false); //loop_parado
    }
}

function robozinInteiro_again(id, time) {
  $(".sound").click(function() {
    $(id).jsMovie("playClip", "parado", true);
  })
  if(sessionStorage.getItem('sound') == 'on') {
    t = time*1000
    $(id).jsMovie("playClip", "falando", true); // loop_falando
      setTimeout(function(){ //depois de x segundos
        $(id).jsMovie('play', 27, 43, true, false); //loop_parado
      }, t);
    } else {
      $(id).jsMovie('play', 27, 43, true, false); //loop_parado
    }
}

//-----

function A_RoboInteiro_create(id) {
  $(id).jsMovie({
    sequence: 'Robo_Fala_Completo_000##.png',
    from: 6,
    to: 79,
    fps: 10,
    width: '71%',
    height: '61%',
    folder: "img/animation/robo/Robo_Fala_Completo/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "roboInteiro", 1, 74);
  $(id).jsMovie("addClip", "loop", 28, 52);
  $(id).jsMovie("addClip", "parou", 59, 74);// parar
}

function A_RoboInteiro_play(id, time) {

  $(".sound").click(function() {
    $(id).jsMovie("playClip", "parou", true);
  })

  if (sessionStorage.getItem('sound') == 'on') {
    t = time*1000
    $(id).jsMovie('play', 1, 74, false, false); //primeira vez
    $(id).jsMovie('play', 28, 52, true, false); // loop_falando
      setTimeout(function(){
        $(id).jsMovie('play', 59, 74, true, false); //final
      }, t);
    } else {
      A_RoboInteiro_loop(id)
    }
}

function A_RoboInteiro_again(id, time) {

  $(".sound").click(function() {
    $(id).jsMovie("playClip", "parou", true);
  })

  if (sessionStorage.getItem('sound') == 'on') {
    t = time *1000
    $(id).jsMovie("playClip", "loop", true);
    setTimeout(function(){
      $(id).jsMovie('play', 59, 74, true, false); //final
    }, t);
  } else{
    A_RoboInteiro_loop(id)
  }

}

function A_RoboInteiro_loop(id) {
  $(id).jsMovie('play', 59, 74, true, false);
}

//----------------------------
function destroyAnimation(id) {
  $(id).jsMovie("destroy");
}

function deleteQuiz() {
  sessionStorage.removeItem('mei');
  sessionStorage.removeItem('laz');
  sessionStorage.removeItem('ino');
  sessionStorage.removeItem('edu');
  sessionStorage.removeItem('eco');
  sessionStorage.removeItem('sau');
  sessionStorage.removeItem('gov');
  sessionStorage.removeItem('badge');
}

function backStage(){
  var actSection = $('section').attr('id');
 
  switch (actSection) {
    case 'cutscene':
      updateSectionAJAX('menu')
      break;
    case 'form':
      destroyAnimation('#AnimacaoRoboForm')
      updateSectionAJAX('cutscene')     
      break;
    case 'mapa':
      comment_name = "about_region"
      destroyAnimation('#AnimacaoRoboHelp')
      destroyAnimation('#AnimacaoArrastarMapa')
      updateSectionAJAX("form")
      break;
    case 'quiz':
      destroyAnimation('#animacaoRoboQuiz')
      updateSectionAJAX("map")
      break;
    case 'desafiolixos': // sustentabilidade
      destroyAnimation('#AnimacaoRoboHelp')
      destroyAnimation('#AnimacaoArrastarLixos')
      deleteQuiz()
      updateSectionAJAX('quiz')
      break;
    case 'desafioplantar':
      destroyAnimation('#animacaoClickPlantar')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('mei_0')     
      break;
    case 'desafiocozinha':
      destroyAnimation('#animacaoTorneiraPia')
      destroyAnimation('#AnimacaoClickCanos')
      destroyAnimation('#AnimacaoClickLegumesCesta')
      destroyAnimation('#AnimacaoClickLegumesPia')
      destroyAnimation('#animacaocanos')      
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('mei_1')
      break;
    case 'desafiocampinho': // governo
      destroyAnimation('#AnimacaoArrastarCamp')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('quiz')
      break;
    case 'desafioONG':
      destroyAnimation('#AnimacaoClickONG')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('gov_0')
      break;
    case 'desafioRadio':
      destroyAnimation('#AnimacaoClickRadio')
      destroyAnimation('#antenaRadio')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('gov_1')
      break;
    case 'desafioPrefeitura':
      destroyAnimation('#AnimacaoClickPrefeitura')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('gov_2')
      break;
    case 'desafioalbum1': // lazer
      destroyAnimation('#AnimacaoRoboHelp')
      destroyAnimation('#AnimacaoArrastarAlbum1')
      updateSectionAJAX('quiz')
      break;
    case 'desafioalbum2':
      destroyAnimation('#AnimacaoClickAlbum2')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('laz_0')
      break;
    case 'desafio7erros':
      destroyAnimation('#AnimacaoClick7erros')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('laz_1')
      break;  
    case 'desafioprato': // saude
      destroyAnimation('#AnimacaoArrastarPrato')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('quiz')
      break;
    case 'desafioparquinho':
      destroyAnimation('#animacaoGangorra')
      destroyAnimation('#animacaoEscorregador')
      destroyAnimation('#animacaoCelular')
      destroyAnimation('#animacaoBalanco')
      destroyAnimation('#animacaoCampo')
      destroyAnimation('#AnimacaoClickParquinho')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('sau_0')
      break;
    case 'desafioescolafora': // educacao
      destroyAnimation('#AnimacaoClickEscolaFora')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('quiz')
      break;
    case 'desafioescoladentro':
      destroyAnimation('#AnimacaoClickEscolaDentro')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('edu_0')
      break;
    case 'desafioescolasala':
      destroyAnimation('#AnimacaoClickEscolaSala')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('edu_1')
      break;
    case 'desafiocasa': // economia
      destroyAnimation('#AnimacTecladoCasa')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('quiz')
      break;
    case 'desafiomonstrinhos':
      destroyAnimation('#animacaoEduc')
      destroyAnimation('#animacaoSaude')
      destroyAnimation('#animacaoLazer')
      destroyAnimation('#AnimacaoClickMonstrinhos')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('eco_0')
      break;
    case 'desafiobebedouro': // inovacao
      destroyAnimation('#animacaoPingando')
      destroyAnimation('#AnimacaoArrastBebedouro')
      destroyAnimation('#AnimacaoArrastBebedouro2')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('quiz')
      break;
    case 'desafiofoguete':
      destroyAnimation('#AnimacaoFoguete')
      destroyAnimation('#AnimacaoClickFoguete')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('ino_0')
      break;
    case 'desafiocarrinho':
      destroyAnimation('#AnimClickCarrinho')
      destroyAnimation('#AnimacaoRoboHelp')
      updateSectionAJAX('ino_1')
      break;
    case 'feedback': //-----------------
      destroyAnimation('#AnimacaoRoboFeedback')
      updateSectionAJAX('comment')
      break;
    case 'certificate': //-----------------
      destroyAnimation('#AnimacaoRoboCertificate')
      updateSectionAJAX('feedback')
      break;      
    default:
      break;
  }

}