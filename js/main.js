//First page

$(function() {
  $("#includedContent").load("links.html");
});


if ($("#menu").length) {
  menu()
}

// General  ---------------------------------------------------------------------
$(document).ready(function() {
 
   
 
  sessionStorage.setItem("sound", "on");
  sessionStorage.setItem("music", "off");

  toggleSoundSetup()
  toggleMusicSetup()

  //fecharmodalquiz
  $("#modalQuestClose").click(function() {
    $('#modalQuest').modal('hide')
  })


  $("#modalSust1C").click(function() {
    $('#modalSust1').modal('hide')
  })

  $("#modalSust2C").click(function() {
    $('#modalSust2', '#modalEscola1').modal('hide')
  })

  $("#modalSaude1C").click(function() {
    $('#modalSaude1').modal('hide')
  })

  $("#modalSaude2C").click(function() {
    $('#modalSaude2').modal('hide')
  })

  $("#modalSaude3C").click(function() {
    $('#modalSaude3').modal('hide')
  })

  $("#modalSaude4C").click(function() {
    $('#modalSaude4').modal('hide')
  })

  $("#modalSaude5C").click(function() {
    $('#modalSaude5').modal('hide')
  })

  $("#modalEscola1C").click(function() {
    $('#modalEscola1').modal('hide')
  })

  $("#modalEscola2C").click(function () {
    $('#modalEscola2').modal('hide')
  })




  // Toggle fullscreen
  $('#myModal').modal({
    show: true,
    backdrop: 'static'
  })
  $("#openFullscreen").click(function() {

    openFullscreen()
    $('#myModal').modal('hide')
  })
});






function toggleSoundSetup() {
  var soundstage = sessionStorage.getItem('sound');
  if (soundstage == "on") {
    $('.sound').removeClass("mute")
    $('.sound').addClass("sound")
  } else {
    $(".sound").addClass("mute")
    $(".sound").removeClass("sound")

  }

  $(".sound").click(function() {
    $(this).toggleClass("sound")
    $(this).toggleClass("mute")

    if ($(this).hasClass('mute')) {
      sessionStorage.setItem("sound", "off");
      console.log('desligou o som')


    } else {
      sessionStorage.setItem("sound", "on");
      console.log('ligou o som')
    }

  })








  // Toggle sound
  /* $(".sound").click(function () {
  $(this).toggleClass("sound")
  $(this).toggleClass("mute")


  if($(this).hasClass('mute')){
  sessionStorage.setItem("sound", "off");
  console.log('desligou o som')


} else{
sessionStorage.setItem("sound", "on");
console.log('ligou o som')
}

})*/

  $(".mute").click(function() {
    $(this).toggleClass("sound")
    $(this).toggleClass("mute")

    if ($(this).hasClass('mute')) {
      sessionStorage.setItem("sound", "off");
    } else {
      sessionStorage.setItem("sound", "on");

    }
  })


}


function PauseSond(som) {
  $(".sound").click(function() {
    som.load();
  })



}




function toggleMusicSetup() {
  var musicstage = sessionStorage.getItem('music');

  if (musicstage == "on") {
    $('.music').removeClass("muteMusic")
    $('.music').addClass("music")
  } else {
    $(".music").addClass("muteMusic")
    $(".music").removeClass("music")

  }
  // Toggle sound


  //var audio_backgrounMusic = new Audio("sounds/fundo/Josefina.mp3");
  //audio_backgrounMusic.volume = 0.1;

  var audio_bg = $('#audio_bg');

  $(".music").click(function() {
    $(this).toggleClass("music")
    $(this).toggleClass("muteMusic")

    if ($(this).hasClass('muteMusic')) {
      sessionStorage.setItem("music", "off");
      stopSom(audio_bg)
    } else {
      sessionStorage.setItem("music", "on");
      playSom(audio_bg)
      audio_bg[0].volume = 0.06;
    }

  })

  $(".muteMusic").click(function() {
    $(this).toggleClass("music")
    $(this).toggleClass("muteMusic")

    if ($(this).hasClass('muteMusic')) {
      sessionStorage.setItem("music", "off");
      stopSom(audio_bg)
    } else {
      sessionStorage.setItem("music", "on");
      playSom(audio_bg)
      audio_bg[0].volume = 0.06;
    }

  })
}



// Modal fulscreen --------------------------------------------------------
function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

// Menu  ---------------------------------------------------------------------------------------------------------------------------------------------------------------
function menu() {
  playAudioMouseOver();

  $("#start-game").click(function() {
    openFullscreen()
    playAudioButton();
    cutscene_name = "start"
    destroyAnimation('#counter2')
    updateSectionAJAX("cutscene")    
    //updateSectionAJAX("quiz")
  })

  incrementAccess()

  function incrementAccess() {
    $.ajax({
      type: 'GET',
      url: "admin/php/controller/increment_access.php",
      dataType: 'json',
      contentType: 'application/json',
      crossDomain: true,
      cache: false,
      success: function(data) {
        leftPad(data["total_access"], 6)
      },
      error: function(jqXHR, textStatus, errorThrown) {
        //alert('Erro ao carregar');
        console.log(errorThrown);
      }
    });

    $(".infoCE").click(function() {
      $("#info-menu").fadeIn(300)
      playAudioButton()
    })

    $("#fechar-info").click(function() {
      $("#info-menu").fadeOut(300);
      playAudioButton()
    })

  }

  function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
      output = '0' + output;
    }
    $('#counter').text(output)
  }
  playContador();
}

// Form  -----------------------------------------------------------------
var audio_form = undefined
function repeat_form(){
  audio_form = $('#pergunta0')
  playSom(audio_form)
}


function form() {
  playAudioMouseOver();


  var pergunta0 = $('#pergunta0')
  var pergunta1 = $('#pergunta1')
  var pergunta2 = $('#pergunta2')
  var pergunta3 = $('#pergunta3')


  
  questions_array = questions_texts

  actual_section = "form"

  playSom(pergunta0);

  createQuestion(questions_array[question_number])
  configPrevNext()



  robozinLaranja_create('#AnimacaoRoboForm', '75%', '65%') // id width height
  robozinLaranja_again('#AnimacaoRoboForm', 6)
  //A_RoboLaranja1_play('#AnimacaoRoboForm', 6)

 

  
}

function stopPerguntasform() {
  var pergunta0 = $('#pergunta0')
  var pergunta1 = $('#pergunta1')
  var pergunta2 = $('#pergunta2')
  var pergunta3 = $('#pergunta3')

  stopSom(pergunta0)
  stopSom(pergunta1)
  stopSom(pergunta2)
  stopSom(pergunta3)
}



function configPrevNext() {
  var cont = 0;
  prevNextDisable()
  $("#prev").click(function() {
    prevNextDisable()
    previousQuestion()
  })
  $("#next").click(function() {
    prevNextDisable()
    nextQuestion()
  })
}

function nextQuestion() {
  stopPerguntasform()
  if (questions_array[question_number]["type"] == "options") {
    if (!$("input:checked").val()) {

      $('#modalQuest').modal('show')

      //alert("Preencha todos os campos para continuar.")
      return false
    }
  } else {
    if ($("input").val() == "") {
      $('#modalQuest').modal('show')
      // alert('aaaaaa')
      //alert("Preencha todos os campos para continuar.")
      return false
    }
      
  }
  question_number = question_number + 1
  goToQuestion(question_number)
  console.log($("input").val())
}

function previousQuestion() {
  stopPerguntasform()
  question_number = question_number - 1
  goToQuestion(question_number)
}

function goToQuestion(number) {
  var pergunta0 = $('#pergunta0')
  var pergunta1 = $('#pergunta1')
  var pergunta2 = $('#pergunta2')
  var pergunta3 = $('#pergunta3')

  if (actual_section == "quiz") {
    var pergunta4 = $('#pergunta4')
    var pergunta5 = $('#pergunta5')
    var pergunta6 = $('#pergunta6')
  }

  if (number == questions_array.length - 1) {
    createQuestion(questions_array[number], number)
    if (actual_section == "form") {
      switch (number) {
        case 0:
          playSom(pergunta0)
          audio_form = $('#pergunta0')
          robozinLaranja_again('#AnimacaoRoboForm', 6)
          break;
        case 1:
          playSom(pergunta1)
          audio_form = $('#pergunta1')
          robozinLaranja_again('#AnimacaoRoboForm', 2.6)
          break;
        case 2:
          playSom(pergunta2)
          audio_form = $('#pergunta2')
          robozinLaranja_again('#AnimacaoRoboForm', 4.4)
          break;
        case 3:
          playSom(pergunta3)
          audio_form = $('#pergunta3')
          robozinLaranja_again('#AnimacaoRoboForm', 3)
          break;
      }
    }

    if (actual_section == "quiz") {
      stopPerguntasQuiz()
      switch (number) {
        case 0:
          playSom(pergunta0)
          break;
        case 1:
          playSom(pergunta1)
          break;
        case 2:
          playSom(pergunta2)
        break;
        case 3:
          playSom(pergunta3)
        break;
        case 4:
          playSom(pergunta4)
        break;
        case 5:
          playSom(pergunta5)
        break;
        case 6:
          playSom(pergunta6)
        break;
        }

    }
  } else {
    createQuestion(questions_array[number], number)
    if (actual_section == "form") {
      switch (number) {
        case 0:
          playSom(pergunta0)
          robozinLaranja_again('#AnimacaoRoboForm', 6)
          break;
        case 1:
          playSom(pergunta1)
          robozinLaranja_again('#AnimacaoRoboForm', 2.6)
          break;
        case 2:
          playSom(pergunta2)
          robozinLaranja_again('#AnimacaoRoboForm', 4.4)
          break;
        case 3:
          playSom(pergunta3)
          robozinLaranja_again('#AnimacaoRoboForm', 3)
          break;
      }
    }
    if (actual_section == "quiz") {
      stopPerguntasQuiz()
      switch (number) {
        case 0:
          playSom(pergunta0)
          break;
        case 1:
          playSom(pergunta1)
          break;
        case 2:
          playSom(pergunta2)
        break;
        case 3:
          playSom(pergunta3)
        break;
        case 4:
          playSom(pergunta4)
        break;
        case 5:
          playSom(pergunta5)
        break;
        case 6:
          playSom(pergunta6)
        break;
        }

    }
  }
}

function createQuestion(question, number) {

  if (actual_section == "quiz") {
    robozinLaranja_again("#animacaoRoboQuiz", 5);
  }

  //Form reusable div
  var questionHTML = ""
  if (question["type"] == "options") {
    var optionsHTML = ""
    for (var o in question["options"]) {
      optionsHTML += "<input autofocus id='" + question["name"] + o + "' type='radio' name='" + question["name"] + "' value='" + question["options"][o] + "' class='action orange'>" +
        "<label for='" + question["name"] + o + "' class='action orange' onmouseover='playAudioMS()'>" + question["options"][o] + "</label></input>"
    }
    questionHTML = "<li class='center-title'><h4 class='title'>" + question["title"] + "</h4></li>" +
      "<li><form>" + optionsHTML + "</form></li>"

    $("#question-content").html(questionHTML)
    configClickOptions()
  } else if (question["type"] == "select") {
    var selectOptions = "<option value='' disabled selected>" + question["placeholder"] + "</option>"
    for (var i = 0; i < available_cities.length; i++) {
      row = available_cities[i];
      selectOptions += '<option value="' + row + '">' + row + '</option>'
    }

    questionHTML = "<li class='center-title'><h4 class='title'>" + question["title"] + "</h4></li>" +
      "<li><form><select class='select_city flexselect' name='" + question["name"] + "'>" + selectOptions + "</select></form></li>" +
      "<li><button id='questions-next' onclick='playAudioButton()' onclick='repeat_form()' onmouseover='playAudioMS()' class='action orange'>" + question["button_text"] + ""

    $("#question-content").html(questionHTML)
    configClick("select")

    // $('.select_city').select2({
    //   placeholder: "Escolha o nome da sua cidade",
    //   dropdownParent: $('.form-question')
    // });

    // $(".select_city").autocomplete({
    //   source: available_cities
    // });

    $("select.flexselect").flexselect();

  } else {
    if (question["name"] == "age") {
      question["title"] = question["title"].replace("#name#", getFromStorage("name"));
    }

    questionHTML = "<li class='center-title'><h4 class='title'>" + question["title"] + "</h4></li>" +
      "<li><form><input id='nome-input' min='0' autofocus type='" + question["type"] + "' name='" + question["name"] + "' placeholder='" + question["placeholder"] + "'></form></li>" +
      "<li><button id='questions-next' onclick='playAudioButton()' onmouseover='playAudioMS()' class='action orange'>" + question["button_text"] + "</button></li>"
      

    $("#question-content").html(questionHTML)
    configClick("input")
    document.getElementById('nome-input').focus()
  }

  function configClickOptions() {
    // //Changes the button action if it's the end of the form
    actionButtonClicked('input[type="radio"]')
    //Able and Disable prev and next arrow buttons
    prevNextDisable()
    //Fill with saved data
    $("input[value='" + getFromStorage(question["name"]) + "']").prop("checked", true);
  }

  function configClick(selector) {
    actionButtonClicked("#questions-next")
    prevNextDisable()
    $(selector).val(getFromStorage(question["name"]))
  }

 
}

function actionButtonClicked(selector) {
  //Changes the button action if it's the end of the form
  if (question_number >= questions_array.length - 1) {
    $(selector).click(function() {
      submitButtonClick()
    })
    enterKeydown(true)
    playAudioButton();
  } else {
    $(selector).click(function() {
      doneButtonClick()
    })
    enterKeydown(false)
    playAudioButton();
  }
}

function enterKeydown(end) {

  $('form').on('keyup keypress', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      if (end) {
        submitButtonClick()
      } else {
        doneButtonClick()
      }
      e.preventDefault()
      return false;
    }
  });
}

function doneButtonClick() {
  if (actual_section == 'quiz') {
    calculateInputQuiz()
  }

  saveInputInStorage()
  nextQuestion()
}

function submitButtonClick() {
  if (actual_section == 'quiz') {
    calculateInputQuiz()
    saveInputInStorage()
    resultQuiz()
  } else {
    saveInputInStorage()
    comment_name = "about_region"
    destroyAnimation('#AnimacaoRoboForm')
    updateSectionAJAX("comment")
    letraMaiuscula();
    
  }
}

function saveInputInStorage(selector) {
  if (questions_array[question_number]["type"] == "select") {
    var inputName = $("select").attr("name")
  } else {
    var inputName = $("input").attr("name")
  }


  if (questions_array[question_number]["type"] == "options") {
    var value = $("input[name='" + inputName + "']:checked").val()
  } else if (questions_array[question_number]["type"] == "select") {
   
    var value = $("select").val()
    if ($("select").val() == undefined) {
      var value = "Fortaleza"
    }
  } else {
    var value = $("input").val()
  }
  saveInStorage(inputName, value)

}

function saveInStorage(name, value) {
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem(name, value);
  } else {
    alert("Seu navegador não permite salvar dados na sessão.")
  }
}

function letraMaiuscula() {
  var nomeTemp = sessionStorage.getItem("name");
  nomeTemp = nomeTemp.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
  sessionStorage.setItem("name", nomeTemp);
}

function getFromStorage(name) {
  return sessionStorage.getItem(name);
}

function prevNextDisable() {
  if (question_number <= 0) {
    $("#prev").prop('disabled', true);
  } else if (question_number >= questions_array.length - 1) {
    $("#next").prop('disabled', true);
  } else {
    $("#prev").prop('disabled', false);
    $("#next").prop('disabled', false);
  }
}

// Quiz  ----------------------------------------------------------------
function quiz() {
  playAudioMouseOver();
  configMouseOverBadges();


  question_number = 0
  questions_array = quiz_texts
  actual_section = "quiz"
  var pergunta0 = $('#pergunta0')
  var pergunta1 = $('#pergunta1')
  var pergunta2 = $('#pergunta2')
  var pergunta3 = $('#pergunta3')
  var pergunta4 = $('#pergunta4')
  var pergunta5 = $('#pergunta5')
  var pergunta6 = $('#pergunta6')

  playSom(pergunta0)

  robozinLaranja_create('#animacaoRoboQuiz', '57%', '65%') //id width height
  robozinLaranja_play('#animacaoRoboQuiz', 5)


  createQuestion(questions_array[question_number])
  configPrevNext()
  emptyBadgeDetails()
  badgeDetailsToggle()
}

function stopPerguntasQuiz() {
  var pergunta0 = $('#pergunta0')
  var pergunta1 = $('#pergunta1')
  var pergunta2 = $('#pergunta2')
  var pergunta3 = $('#pergunta3')
  var pergunta4 = $('#pergunta4')
  var pergunta5 = $('#pergunta5')
  var pergunta6 = $('#pergunta6')

  stopSom(pergunta0)
  stopSom(pergunta1)
  stopSom(pergunta2)
  stopSom(pergunta3)
  stopSom(pergunta4)
  stopSom(pergunta5)
  stopSom(pergunta6)
}

function badgeDetailsToggle() {
  $(".all-badges img").mouseenter(function() {
    $(this).toggleClass("active")

    var badge_id = $(this).attr("id")
    var badge = badges_texts[badge_id]
    createBadgeDetails(badge)

  })
  $(".all-badges img").mouseleave(function() {
    emptyBadgeDetails()
  })
}

function createBadgeDetails(badge) {
  var badgeHTML = ""
  badgeHTML = "<li><span class='arrow centeredX'></span></li>" +
    "<li><img id='" + badge["id"] + "-badge' src='img/quiz/" + badge["id"] + "-badge-2x.png' title='" + badge["title"] + "'></li>" +
    "<li><h4>" + badge["title"] + "</h4></li>" +
    "<li><p>" + badge["description"] + "</p></li>"

  $("#single-badge-details").html(badgeHTML)
}

function emptyBadgeDetails() {
  var badgeHTML = ""
  badgeHTML = "<li><span class='arrow centeredX'></span></li>" +
    "<li><h4>Conheça<br>os poderes<br>dos amigos<br>do futuro!</h4></li>" +
    "<li><p>Passe o mouse nas medalhas<br>ali em cima.</p></li>"

  $("#single-badge-details").html(badgeHTML)
}

function quizYesOrNo() {

  var inputName = $("input").attr("name")
  var value = $("input[name='" + inputName + "']:checked").val()
  return value
}

//Calculate the value of the answered question
function calculateInputQuiz() {
  var inputName = $("input").attr("name")
  var answer = $("input[name='" + inputName + "']:checked").val()

  var beforeAnswer = getFromStorage(inputName)
  // If already answered before
  if (beforeAnswer == "Sim") {
    if (answer == "Não") {
      // Sum the final_pont array with the correspondent array
      for (f in final_pont) {
        final_pont[f]["points"] -= matrix_questions_pont[question_number][f]
      }
    }
  } else if (beforeAnswer == "Não") {
    if (answer == "Sim") {
      // Sum the final_pont array with the correspondent array
      for (f in final_pont) {
        final_pont[f]["points"] += matrix_questions_pont[question_number][f]
      }
    }

  } else { // First time answering
    if (answer == "Sim") {
      // Sum the final_pont array with the correspondent array
      for (f in final_pont) {
        final_pont[f]["points"] += matrix_questions_pont[question_number][f]
      }
    }
  }
}

// Result of quiz
function resultQuiz() {
  //ver qual [é o maior elemento do array]

  var max_point = -4
  var badges_possible = []
  for (f in final_pont) {
    if (final_pont[f]["points"] > max_point) {
      max_point = final_pont[f]["points"]
      badges_possible = [final_pont[f]["name"]]
    } else if (final_pont[f]["points"] == max_point) {
      badges_possible.push(final_pont[f]["name"])
    }
  }

  //Returns a random number between 1 and max number of badges_possible
  var random_number = Math.floor((Math.random() * badges_possible.length - 1) + 1);
  var badge_choosen_id = badges_possible[random_number]
  actual_badge = badges_texts[badge_choosen_id]
  saveInStorage("badge", badge_choosen_id)

  //Next section
  congrats_name = "badge"
  $('#animacaoRoboQuiz').jsMovie("destroy");
  updateSectionAJAX("congrats")


  setTimeout(function() {
    var audio_categoria = '';
     if (sessionStorage.getItem('gender') == 'Menina') {
       audio_categoria = new Audio("sounds/falas/amigos/" + actual_badge['id'] + "1.wav");
     } else {
       audio_categoria = new Audio("sounds/falas/amigos/" + actual_badge['id'] + ".wav");
     }
    
    PauseSond(audio_categoria);


    if (sessionStorage.getItem('sound') == 'on') {
      audio_categoria.play();
    }

    $("button.toggle.repeat").click(function() {
      if (sessionStorage.getItem('sound') == 'on') {
        robozinAzul_again('#AnimacaoRoboCongrats');
        audio_categoria.load();
        audio_categoria.play();
      }
    })


    $("button#go-congrats.toggle.next").click(function() {
      audio_categoria.load();
    })

  }, 1300);




}

// Comment  -------------------------------------------------------------
function comment() {
  playAudioMouseOver();
  if (comment_name == "about_region") {

    robozinInteiro_create('#AnimacaoRoboComment', '76%', '65%')
    robozinInteiro_play('#AnimacaoRoboComment', 6)

    


    //audio sobre a regiao
    var region = searchForRegion()
    if (region) {
      var audio_regiao = new Audio('sounds/falas/regiao/' + region["id"] + '.wav');
      createCommentRegion(comments_texts[comment_name], region)

      if (sessionStorage.getItem('sound') == 'on') {
        audio_regiao.play();
      }

      PauseSond(audio_regiao);

      $("#go-comment").mouseover(function () {
        playAudioMouseOver()
      });

      $("button.toggle.repeat").click(function() {
        playAudioButton()
        if (sessionStorage.getItem('sound') == 'on') {
          audio_regiao.load();
          audio_regiao.play();
          robozinInteiro_again('#AnimacaoRoboComment', 6)
        }
      });

      $("button#go-comment.toggle.next").click(function() {
        playAudioButton();
        audio_regiao.load();

      });

      //tocar musica
      //"music/"+region["id"]+".mp3"
    }
  } else {

    createComment(comments_texts[comment_name])

    playAudioStartDesafios()

    robozinInteiro_create('#AnimacaoRoboComment', '76%', '65%')
    robozinInteiro_play('#AnimacaoRoboComment', 6)

    $("button.toggle.repeat").click(function() {
      playAudioButton()
      if (sessionStorage.getItem('sound') == 'on') {
        robozinInteiro_again('#AnimacaoRoboComment', 6)
        playAudioStartDesafios()
      }
    });

    $("button#go-comment.toggle.next").click(function() {
      playAudioButton()
      stopAudiosStartDesafios()

    });


  }
}

function searchForRegion() {
  var city = getFromStorage("city")

  for (r in map_regions_texts) {
    var cities = map_regions_texts[r]["cities"]
    for (c in cities) {
      if (city == cities[c]) {
        return map_regions_texts[r]
      }
    }
  }
  return null
}

function createComment(comment) {
  if (comment_name == "start_game") {
    comment["text"] = comment["text"].replace("#name#", getFromStorage("name"));
  }

  if (comment_name == "start_challenge") {
    console.log(actual_badge["title"])
    switch (actual_badge["id"]) {
      case 'mei':
        comment["text"] = comment["text"].replace("#badge_title#", "da Sustentabilidade");
        break;
      case 'ino':
         comment["text"] = comment["text"].replace("#badge_title#", "da Inovação");
         break;
      case 'edu':
        comment["text"] = comment["text"].replace("#badge_title#", "da Educação");
        break;
      case 'laz':
        comment["text"] = comment["text"].replace("#badge_title#", "do Lazer");
        break;
      case 'sau':
        comment["text"] = comment["text"].replace("#badge_title#", "da Saúde");
        break;
      case 'eco':
        comment["text"] = comment["text"].replace("#badge_title#", "da Economia");
        break;
      case 'gov':
        comment["text"] = comment["text"].replace("#badge_title#", "do Governo");
        break;
    }
  }
  //Set comment text
  var commentHTML = ""
  commentHTML = "<p id='id-text-coment' >" + comment["text"] + "</p>" +
    "<button class='toggle repeat' onmouseover='playAudioMS()'></button>"
  $(".robot-comment #text-comment").html(commentHTML)

  //Set background color
  $(".robot-comment").attr('class', 'robot-comment');
  $(".robot-comment").addClass(comment["color"] + "-gradient")

  // Action for button clicked
  commentButtonClicked()
}

// Switch witch screen to go
function commentButtonClicked() {
  $("#go-comment").click(function() {
    switch (comment_name) {
      case "about_region":
        $('#AnimacaoRoboComment').jsMovie('destroy');
        updateSectionAJAX("map")
        break
      case "start_game":
        comment_name = "about_region"
        updateSectionAJAX("comment")
        break
      case "start_quiz":
        destroyAnimation('#AnimacaoRoboCommentMapa');
        updateSectionAJAX("quiz")
        break
      case "start_challenge":
        $('#AnimacaoRoboComment').jsMovie('destroy');
        actual_level = 0
        console.log(actual_badge)
        console.log(actual_level)
        console.log(actual_badge + "_" + actual_level)
        updateSectionAJAX(actual_badge["id"] + "_" + actual_level)
        break
    }
  })
}

function createCommentRegion(comment, region) {
  //Set comment text
  var commentHTML = ""
  commentHTML = "<p id='id-text-coment'>" + comment["text"] + "<span class='green-text'>" + region["name"] + "</span>?</p>" +
    "<button class='toggle repeat' onmouseover='playAudioMS()'></button>"
  $(".robot-comment #text-comment").html(commentHTML)

  //Set background color
  $(".robot-comment").attr('class', 'robot-comment');
  $(".robot-comment").addClass(comment["color"] + "-gradient")

  //Put region info
  var regionHTML = ""
  regionHTML = "<div id='about-region'>" +
    "<p>" + region["info"] + "</p>" +
    "<img src='img/desafios/mapa/pc_" + region["id"] + ".png'>" +
    "<button id='go-comment' class='toggle next'></button></div>"
  $(".robot-comment #more").html(regionHTML)

  // Action for button clicked
  commentButtonClicked()
}

// Help  --------------------------------------------------------------
function createInvokeHelp(help) {
  $(".robot-help .content h4").html(help["title"])
  $(".robot-help .content p").html(help["text"])

  if (help["tip"]) {
    $('.robot-help .content p a').attr("data-toggle", "popover")
    $('.robot-help .content p a').attr("data-trigger", "hover")
    $('.robot-help .content p a').attr("data-placement", "right")
    $('.robot-help .content p a').attr("data-content", help["tip"])
    $('[data-toggle="popover"]').popover({
      html: true
    })
  }

  $('#help').fadeIn(300)
  $("#close-btn").click(function() {
    hideHelp()
  })
  // $(".backdrop").click(function () { hideHelp() })
}

function showHelp() {
  $('#help').width("100%")

  $('#help #robot-help-mini').hide(300)
  $('#help .backdrop').fadeIn(300)
  $('#help .robot-help').show(300)
  //fazer o if

  $("#close-btn").click(function() {
    hideHelp()
  })
  // $(".backdrop").click(function () { hideHelp() })
}

function hideHelp() {
  $('#help .robot-help').hide(300)
  $('#help .backdrop').fadeOut(300)
  $('#help #robot-help-mini').show(300)
  $('#help').width("0%")
  $("#robot-help-mini img").click(function() {
    showHelp()
  //  A_RoboHelp_again('#AnimacaoRoboHelp');

  })
}

// Congragts starts ----------------------------------------------------------------
function congrats() {
  playAudioMouseOver();
  var parabens = $('#parabensSom')
  playSom(parabens)
  robozinAzul_create('#AnimacaoRoboCongrats', '75%', '63%');
  setTimeout(function () {
    robozinAzul_play('#AnimacaoRoboCongrats', 5) 
  }, 1000); 
  createCongrats(congrats_texts[congrats_name])

}


function createCongrats(congrats) {
  if (congrats_name == "badge") {
     if (sessionStorage.getItem('gender') == 'Menina') {
       switch (actual_badge["id"]) {
         case 'mei':
           congrats["text"] = congrats["text"].replace("#badge_title#", "uma amiga da Sustentabilidade");
           break;
         case 'ino':
           congrats["text"] = congrats["text"].replace("#badge_title#", "uma amiga da Inovação");
           break;
         case 'edu':
           congrats["text"] = congrats["text"].replace("#badge_title#", "uma amiga da Educação");
           break;
         case 'laz':
           congrats["text"] = congrats["text"].replace("#badge_title#", "uma amiga do Lazer");
           break;
         case 'sau':
           congrats["text"] = congrats["text"].replace("#badge_title#", "uma amiga da Saúde");
           break;
         case 'eco':
           congrats["text"] = congrats["text"].replace("#badge_title#", "uma amiga da Economia");
           break;
         case 'gov':
           congrats["text"] = congrats["text"].replace("#badge_title#", "uma amiga do Governo");
           break;
       }
     } else {
       congrats["text"] = congrats["text"].replace("#badge_title#", actual_badge["title"]);
     }
   
    $(".robot-congrats #text-comment p").addClass("badge-text-format")

  }


  $(".robot-congrats #text-comment p").html(congrats["text"])

  if (congrats["tip"]) {
    $('.robot-congrats #text-comment p a').attr("data-toggle", "popover")
    $('.robot-congrats #text-comment p a').attr("data-trigger", "hover")
    $('.robot-congrats #text-comment p a').attr("data-placement", "right")
    $('.robot-congrats #text-comment p a').attr("data-content", congrats["tip"])
    $('[data-toggle="popover"]').popover({
      html: true
    })
  }


  $(".robot-congrats .content-right img").attr("src", "img/congrats/" + actual_badge["id"] + ".png")



  //console.log(actual_badge["id"]);

  var starsHTML = ""
  for (var i = 0; i < level_stars.length; i++) {
    starsHTML += "<li><img src='img/congrats/star-" + level_stars[i] + ".png'></li>"
  }
  $('.robot-congrats .content-right #stars').html(starsHTML)



  // Action for button clicked
  congratsButtonClicked()

   if (sessionStorage.getItem('gender') == 'Menina') {
    if ($('#text-comment-p').text() == 'Bom trabalho. Isso sim é ser um grande amigo do lazer.') {
      $('#text-comment-p').text('Bom trabalho. Isso sim é ser uma grande amiga do lazer.')
    }
     if ($('#text-comment-p').text() == 'Parabéns! Um inventor precisa ser um ótimo observador.') {
       $('#text-comment-p').text('Parabéns! Uma inventora precisa ser uma ótima observadora.')
     }
   }
  

 

}

function congratsButtonClicked() {
  $("#go-congrats").click(function() {
    destroyAnimation('#AnimacaoRoboCongrats')
    switch (congrats_name) {
      case "badge":
        comment_name = "start_challenge"
        updateSectionAJAX("comment")
        break
      default:
        if (actual_level + 1 < actual_badge["levels"]) {
          actual_level += 1
          updateSectionAJAX(actual_badge["id"] + "_" + actual_level)
        } else {
          if (!answeredFeedback) {
            answeredFeedback = true
            updateSectionAJAX("feedback")
          } else {
            updateSectionAJAX("certificate")
          }
        }
        break
    }
  })
}

// Feedback ----------------------------------------------------------------
function feedback() {
  playAudioMouseOver();

  var audio_feedback = $('#fala_feedback');

  playSom(audio_feedback);

  robozinLaranja_create('#AnimacaoRoboFeedback', '75%', '70%');
  robozinLaranja_play('#AnimacaoRoboFeedback', 2.7);

  $("button.toggle.repeat").click(function() {
    playAudioButton()
    if (sessionStorage.getItem('sound') == 'on') {
      robozinLaranja_again('#AnimacaoRoboFeedback', 2.7)
      playSom(audio_feedback);
      // audio_regiao.load();
      // audio_regiao.play();

    }
  });

  $("button#go-comment.toggle.next").click(function() {
    // audio_regiao.load();
    playAudioButton()
  });





  $("#feedback .yes").click(function() {
    answerLike(this, "Sim")
  })
  $("#feedback .no").click(function() {
    answerLike(this, "Não")
  })
  $("#submit-feedback").click(function() {
    // Check if all the fields are full
    if (!(getFromStorage("liked"))) {

      $('#modalQuest').modal('show')
      //alert("Preencha todos os campos para continuar.")
      return false
    }

    saveInStorage("feedback", $("textarea").val())
    sendAllDataToServer()
    $('#AnimacaoRoboFeedback').jsMovie('destroy');
    cutscene_name = "end"
    updateSectionAJAX("cutscene2")
  })
}

function answerLike(button, answer) {
  $(button).toggleClass("active")

  var beforeAnswer = getFromStorage("liked")
  // If already answered before
  if (beforeAnswer == "Sim") {
    if (answer == "Sim") {
      saveInStorage("liked", null)
    }
    if (answer == "Não") {
      saveInStorage("liked", "Não")
      $("#feedback .yes").toggleClass("active")
    }
  } else if (beforeAnswer == "Não") {
    if (answer == "Não") {
      saveInStorage("liked", null)
    }
    if (answer == "Sim") {
      saveInStorage("liked", "Sim")
      $("#feedback .no").toggleClass("active")
    }
  } else {
    // First time answering
    if (answer == "Sim") {
      saveInStorage("liked", "Sim")
    } else if (answer == "Não") {
      saveInStorage("liked", "Não")
    }
  }
}

function sendAllDataToServer() {
  // Form
  var name = getFromStorage("name")
  var age = getFromStorage("age")
  var city = getFromStorage("city")
  var gender = getFromStorage("gender")
  // Badge
  var badge = getFromStorage("badge")
  // Feedback
  var liked = getFromStorage("liked")
  var feedback = getFromStorage("feedback")

  // variables
  var data = {
    "name": name,
    "age": age,
    "city": city,
    "gender": gender,
    "badge": badge,
    "liked": liked,
    "feedback": feedback
  }

  $.ajax({
    type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
    url: 'admin/php/controller/save_data.php', // the url where we want to POST
    data: data, // our data object
    dataType: 'json', // what type of data do we expect back from the server
    encode: true
  }).done(function(data) {
    var obj = JSON.stringify(data)
    alert(obj)
  });

  // stop the form from submitting the normal way and refreshing the page
  //event.preventDefault();
}

// Certificate  -----------------------------------------------------------------
function certificate() {
  playAudioMouseOver()
  setupFinishedBadges()

  var audio_certificate = $('#fala_certificate')

  $("#other-badges-btn").click(function () {
      stopSom(audio_certificate)
  })


  playSom(audio_certificate);

  robozinAzul_create('#AnimacaoRoboCertificate', '53%', '58%')
  robozinAzul_play('#AnimacaoRoboCertificate', 5)


  activeAndShowDetails("#" + actual_badge["id"])


  $("button.toggle.repeat").click(function() {
    playAudioButton()
    if (sessionStorage.getItem('sound') == 'on') {
      playSom(audio_certificate);
      robozinAzul_again('#AnimacaoRoboCertificate', 5)

    }
  });

  setupActionsCertificate()


  generateCertificateImg()

}

function generateCertificateImg() {
  $("#certificate-img").attr("src", "img/certificate/cards/" + actual_badge["id"] + ".png")

  var certificateText = "Eu " + getFromStorage("name") + ", prometo honrar meu título de Amigo do Futuro" +
    " e cuidar do Ceará até 2050 pois sei que posso melhorar ainda mais este lugar."

  $(".to-print p").text(certificateText)

  $(".to-print p").css("color", actual_badge["color"])

  toCanvas()
}

function toCanvas() {
  html2canvas(document.getElementsByClassName("to-print")[0], {
    onclone: function(clonedDoc) {
      $(clonedDoc).find('.to-screen').css('display', 'none');
      $(clonedDoc).find('.to-print').css('display', 'block');
    }
  }).then((canvas) => {
    var myImage = canvas.toDataURL();
    $("#small-certificate-img").attr("src", myImage)
    downloadURI(myImage, "meu_certificado_ceara2050.png");
  })
}

function downloadURI(uri, name) {
  var link = document.getElementById("download-btn")
  link.download = name;
  link.href = uri;
}


function setupFinishedBadges() {
  var badges_li = $('.all-badges li');

  for (var i = 0; i < badges_li.length; i++) {
    var this_badge_li = badges_li.eq(i)
    var this_badge_li_img = this_badge_li.find("img")
    var this_badge_li_name = this_badge_li_img[0].id


    if (badges_texts[this_badge_li_name]["finished"]) {
      this_badge_li_img.addClass("finished")

      var liHTML = this_badge_li.html()
      liHTML += "<span></span>"
      this_badge_li.html(liHTML)
    }
  }
}

function setupActionsCertificate() {
  $(".all-badges img").click(function() {
    resetAllActivesBadges()
    activeAndShowDetails(this)
  })
  $(".all-badges img + span").click(function() {
    resetAllActivesBadges()
    activeAndShowDetails($(this).prev("img"))
  })

  $(".robot-certificate .print").click(function() {
    window.print()
  })
  $("#other-badges-btn").click(function() {
    $('.other-badges').fadeIn(300)
  })
  $(".other-badges .exit").click(function() {
    $('.other-badges').fadeOut(300)
  })
  $(".other-badges .home").click(function() {
    // FIX Reset level information
    updateSectionAJAX("menu")
  })
}

function resetAllActivesBadges() {
  var badges_li = $('.all-badges li');
  for (var i = 0; i < badges_li.length; i++) {
    var this_badge_li = badges_li.eq(i)
    var this_badge_li_img = this_badge_li.find("img")
    this_badge_li_img.removeClass("active")
  }
}

function activeAndShowDetails(selector) {
  $(selector).addClass("active")
  var badge_id = $(selector).attr("id")
  var badge = badges_texts[badge_id]
  createBadgeDetailsModal(badge)
}

function createBadgeDetailsModal(badge) {
  var badgeHTML = ""
  badgeHTML = "<li><h4>" + badge["title"] + "</h4></li>" +
    "<li><p>" + badge["description"] + "</p></li>"

  if (badge["finished"]) {
    badgeHTML += "<li><p><button class='action orange'>Recomeçar</button></p></li>"
  } else {
    badgeHTML += "<li><p><button class='action orange'>Começar</button></p></li>"
  }
  $("#single-badge-details").html(badgeHTML)

  $(".other-badges .action").click(function() {
    // FIX Reset level information
    actual_level = 0
    actual_badge = badge

    updateSectionAJAX(actual_badge["id"] + "_" + actual_level)
  })
}

function emptyBadgeDetailsModal() {
  var badgeHTML = ""
  badgeHTML = "<li><h4>Escolha outro amigo do futuro!</h4></li>" +
    "<li><p>Clique no amigo que quer ajudar agora.</p></li>"

  $("#single-badge-details").html(badgeHTML)
}

// Video Cutscene  -----------------------------------------------------------------
function cutscene() {
  playAudioMouseOver();
  $("#cutscene video source").attr("src", cutscenes_infos[cutscene_name]["src"])

  $("#cutscene .action").click(function() {
    updateSectionAJAX(cutscenes_infos[cutscene_name]["jump"])
  })

  var video_cut = document.getElementById("cutscene_video");
  video_cut.onended = function () {
    updateSectionAJAX(cutscenes_infos[cutscene_name]["jump"])
  };


  $(".toggle.sound").click(function() {
    var cutscene_video = document.getElementById("cutscene_video");


    if ($(this).hasClass('sound')) {
      cutscene_video.muted = true;


    } else {
      cutscene_video.muted = false;
    }

  });



  // Play and pause actions
  $("#cutscene .play").click(function() {
    play()
    playAudioButton()
    $("#cutscene .play").fadeOut(300)
  })
  $("#cutscene .pause").click(function() {
    pause()
    playAudioButton()
    $("#cutscene .play").fadeIn(100)
  })

  //videoEnded()
}

function cutscene2() {
  playAudioMouseOver();
  $("#cutscene video source").attr("src", cutscenes_infos[cutscene_name]["src"])

  $("#cutscene .action").click(function () {
    updateSectionAJAX(cutscenes_infos[cutscene_name]["jump"])
  })

  var video_cut = document.getElementById("cutscene_video");
  video_cut.onended = function () {
    updateSectionAJAX(cutscenes_infos[cutscene_name]["jump"])
  };


  $(".toggle.sound").click(function () {
    var cutscene_video = document.getElementById("cutscene_video");


    if ($(this).hasClass('sound')) {
      cutscene_video.muted = true;


    } else {
      cutscene_video.muted = false;
    }

  });



  // Play and pause actions
  $("#cutscene .play").click(function () {
    play()
    playAudioButton()
    $("#cutscene .play").fadeOut(300)
  })
  $("#cutscene .pause").click(function () {
    pause()
    playAudioButton()
    $("#cutscene .play").fadeIn(100)
  })

  //videoEnded()
}

function videoEnded() {
  var cutscene_video = document.getElementById("cutscene_video");
  cutscene_video.onended = function() {
    // FIX Go to correct question
    setTimeout(updateSectionAJAX("certificate"), 3000);
  };
}

function play() {
  var cutscene_video = document.getElementById("cutscene_video");

  cutscene_video.play();
  if (sessionStorage.getItem('sound') == 'off') {
    cutscene_video.muted = true;
  }

}

function pause() {
  var cutscene_video = document.getElementById("cutscene_video");
  cutscene_video.pause();

}

// AJAX ----------------------------------------------------------------
function updateSectionAJAX(name) {
  // Don't cache ajax or content won't be fresh
  $.ajaxSetup({
    cache: false
  });
  // Image while loading
  var ajax_load = "<img class='centeredX' style='background-color: #EFEFEF; width: 100%;' src='img/loading.gif' alt='Carregando...' />";

  var loadUrl = "views/" + name + ".html";

  $("#main-div-content").html(ajax_load).load(loadUrl, function() {
    $(this).hide().fadeIn('slow');

    window[name](arguments)

    // Sound things

    toggleSoundSetup()
    toggleMusicSetup()
  });
}

function setupLevel() {
  createInvokeHelp(helps_texts[actual_badge["id"] + "_" + actual_level])
  $('[data-toggle="popover"]').popover({
    html: true
  })
}


function congratsNextLevel(stars, ended, sound) { 
  congrats_name = actual_badge["id"] + "_" + actual_level
  level_stars = stars
  if (sessionStorage.getItem('sound') == 'on') {
    setTimeout(function () {
      sound.play();
      PauseSond(sound);
    }, 1500);
    
  }

  if (ended) {
    actual_badge["finished"] = true //ended badge
  }
  updateSectionAJAX("congrats")

  setTimeout(function() {
     $('#stars').removeClass('none-stars')
    $("button.toggle.repeat").click(function() {
      if (sessionStorage.getItem('sound') == 'on') {
        robozinAzul_again('#AnimacaoRoboCongrats')
        sound.load();
        sound.play();
      }
    });

    PauseSond(sound);

    $("button#go-congrats.toggle.next").click(function() {
      sound.load();
    });

  }, 500);



}


//Contador

function playContador(){
  $('#counter2').jsMovie({
    sequence: 'contador_000##.png',
    from: 0,
    to: 10,
    fps: 8,
    width: '60%',
    height: '47%',
    folder: "img/animation/contador/",
    playOnLoad: false
  });

  $('#counter2').jsMovie('play', 1, 10, false, true);
}




