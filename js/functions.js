//----------------Audios Geral Config
function playSom(som) {
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
function helpConfig(som) {
  playSom(som)
  $('#close-btn').click(function() {
    stopSom(som)
  })
  $('#robot-help-mini').click(function() {
    stopSom(som)
    playSom(som)
  })
  $('#repeat-btn').click(function() {
    stopSom(som)
    playSom(som)
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

var audio_parabens = new Audio('sounds/feedback/sucesso.mp3');

function playAudioParabens() {
  if (sessionStorage.getItem('sound') == 'on') {
    var promise = audio_parabens.load();
    var promise = audio_parabens.play();

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

//---------------------Robo Bolinha Laranja 1
function A_RoboLaranja1_create(id) {
  $(id).jsMovie({
    sequence: 'Robo_Fala_1_000##.png',
    from: 0,
    to: 39,
    fps: 10,
    width: '75%',
    height: '65%',
    folder: "img/animation/robo/Robo_Fala_1/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "roboLaranja1", 5, 40);
}

function A_RoboLaranja1_play(id) {
  $(id).jsMovie('play', 5, 40, false, false);
  $(id).jsMovie('play', 27, 40, true, false);
}

function A_RoboLaranja1_again(id) {
  $(id).jsMovie("playClip", "roboLaranja1", false);
  $(id).jsMovie('play', 27, 40, true, false);
}

function A_RoboLaranja1_loop(id) {
  $(id).jsMovie('play', 27, 40, true, false);
}

//-------------------Robo Bolinha Laranja 2

function A_RoboLaranja2_create(id) {
  $(id).jsMovie({
    sequence: 'Fala_Robo_2_000##.png',
    from: 0,
    to: 39,
    fps: 10,
    width: '78%',
    height: '65%',
    folder: "img/animation/robo/Fala_Robo_2/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "roboLaranja2", 5, 40);
}

function A_RoboLaranja2_play(id) {
  $(id).jsMovie('play', 5, 40, false, false);
  $(id).jsMovie('play', 27, 40, true, false);
}

function A_RoboLaranja2_again(id) {
  $(id).jsMovie("playClip", "roboLaranja2", false);
  $(id).jsMovie('play', 27, 40, true, false);
}

function A_RoboLaranja2_loop(id) {
  $(id).jsMovie('play', 27, 40, true, false);
}

//------------------------------------ Robo Inteiro

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
}

function A_RoboInteiro_play(id) {
  $(id).jsMovie('play', 1, 74, false, false);
  $(id).jsMovie('play', 59, 74, true, false);
}

function A_RoboInteiro_again(id) {
  $(id).jsMovie("playClip", "roboInteiro", false);
  $(id).jsMovie('play', 59, 74, true, false);
}

function A_RoboInteiro_loop(id) {
  $(id).jsMovie('play', 59, 74, true, false);
}



//-------------------Robo Quiz

function A_RoboQuiz_create(id) {
  $(id).jsMovie({
    sequence: 'Fala_Robo_2_000##.png',
    from: 0,
    to: 39,
    fps: 10,
    width: '52%',
    height: '58%',
    folder: "img/animation/robo/Fala_Robo_2/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "roboQuiz", 5, 40);
}

function A_RoboQuiz_play(id) {
  $(id).jsMovie('play', 5, 40, false, false);
  $(id).jsMovie('play', 27, 40, true, false);
}

function A_RoboQuiz_again(id) {
  $(id).jsMovie("playClip", "roboQuiz", false);
  $(id).jsMovie('play', 27, 40, true, false);
}

function A_RoboQuiz_loop(id) {
  $(id).jsMovie('play', 27, 40, true, false);
}


//-------------------Robo Feedback

function A_RoboFeedback_create(id) {
  $(id).jsMovie({
    sequence: 'Fala_Robo_2_000##.png',
    from: 0,
    to: 39,
    fps: 10,
    width: '78%',
    height: '69%',
    folder: "img/animation/robo/Fala_Robo_2/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "Feedback", 5, 40);
}

function A_RoboFeedback_play(id) {
  $(id).jsMovie('play', 5, 40, false, false);
  $(id).jsMovie('play', 27, 40, true, false);
}

function A_RoboFeedback_again(id) {
  $(id).jsMovie("playClip", "Feedback", false);
  $(id).jsMovie('play', 27, 40, true, false);
}

function A_RoboFeedback_loop(id) {
  $(id).jsMovie('play', 27, 40, true, false);
}

//---------------------Robo HELPER
function A_RoboHelp_create(id) {
  $(id).jsMovie({
    sequence: 'Robo_Fala_1_Azul_000##.png',
    from: 5,
    to: 39,
    fps: 10,
    width: '46%',
    height: '80%',
    folder: "img/animation/robo/Robo_Fala_1_Azul/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "roboHelp", 1, 35);
}

function A_RoboHelp_play(id) {
  $(id).jsMovie('play', 1, 35, false, false);
  $(id).jsMovie('play', 22, 35, true, false);
}



function A_RoboHelp_again(id) {
  setTimeout(function() {
    $(id).jsMovie("playClip", "roboHelp", false);
    $(id).jsMovie('play', 22, 35, true, false);
  }, 300);

}

function A_RoboHelp_loop(id) {
  $(id).jsMovie('play', 22, 35, true, false);
}

//---------------------Robo Congrats
function A_RoboCongrats_create(id) {
  $(id).jsMovie({
    sequence: 'Robo_Fala_1_Azul_000##.png',
    from: 5,
    to: 39,
    fps: 10,
    width: '75%',
    height: '63%',
    folder: "img/animation/robo/Robo_Fala_1_Azul/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "roboHelp", 1, 35);
}

function A_RoboCongrats_play(id) {
  $(id).jsMovie('play', 1, 35, false, false);
  $(id).jsMovie('play', 22, 35, true, false);
}

function A_RoboCongrats_again(id) {
  $(id).jsMovie("playClip", "roboHelp", false);
  $(id).jsMovie('play', 22, 35, true, false);
}

function A_RoboCongrats_loop(id) {
  $(id).jsMovie('play', 22, 35, true, false);
}


//---------------------Robo Certificate
function A_RoboCertificate_create(id) {
  $(id).jsMovie({
    sequence: 'Robo_Fala_1_Azul_000##.png',
    from: 5,
    to: 39,
    fps: 10,
    width: '53%',
    height: '58%',
    folder: "img/animation/robo/Robo_Fala_1_Azul/",
    playOnLoad: false
  });
  $(id).jsMovie("addClip", "roboCertificate", 1, 35);
}

function A_RoboCertificate_play(id) {
  $(id).jsMovie('play', 1, 35, false, false);
  $(id).jsMovie('play', 22, 35, true, false);
}

function A_RoboCertificate_again(id) {
  $(id).jsMovie("playClip", "roboCertificate", false);
  $(id).jsMovie('play', 22, 35, true, false);
}

function A_RoboCertificate_loop(id) {
  $(id).jsMovie('play', 22, 35, true, false);
}









function destroyAnimation(id) {
  $(id).jsMovie("destroy");
}
