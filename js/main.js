//First page
if ($("#menu").length) {
  menu()
}

// General  ---------------------------------------------------------------------
$(document).ready(function() {
  $(function () { $('[data-toggle="popover"]').popover({html:true}) })

  // Toggle sound
  $(".sound").click(function () {
    $(this).toggleClass("sound")
    $(this).toggleClass("mute")
    console.log("Inserir logica de mutar o som, aqui!")
  })

  // Toggle fullscreen
  $('#myModal').modal('show')
  $("#openFullscreen").click(function () {
    openFullscreen()
    $('#myModal').modal('hide')
  })
});

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

// Menu  -----------------------------------------------------------------
  function menu() {
    $("#start-game").click(function () {
      updateSectionAJAX("certificate")
    })
  }

// Form  -----------------------------------------------------------------
  function form() {
    questions_array = questions_texts
    actual_section = "form"
    createQuestion(questions_array[question_number])
  
    configPrevNext()
  }

  function configPrevNext() {
    prevNextDisable()
    $("#prev").click(function () {
      prevNextDisable()
      previousQuestion()
    })
    $("#next").click(function () {
      prevNextDisable()
      nextQuestion()
    })
  }
  function nextQuestion() {
    if (questions_array[question_number]["type"] == "options") {
      if (!$("input:checked").val()) {
          alert("Preencha todos os campos para continuar.")
          return false
      }
    } else {
      if ($("input").val() == "") {
        alert("Preencha todos os campos para continuar.")
        return false
      }
    }
    question_number = question_number+1
    goToQuestion(question_number)
  }
  function previousQuestion() {
    question_number = question_number-1
    goToQuestion(question_number)  
  }
  function goToQuestion(number) {
    if (number == questions_array.length-1) {
      createQuestion(questions_array[number])
    } else {
      createQuestion(questions_array[number])
    }
  }
  function createQuestion(question) {
    //Form reusable div
    var questionHTML = ""
    if (question["type"] == "options") {
      var optionsHTML = ""
      for (var o in question["options"]){
        optionsHTML += "<input id='"+question["name"]+o+"' type='radio' name='"+question["name"]+"' value='"+question["options"][o]+"' class='action orange'>"+
        "<label for='"+question["name"]+o+"' class='action orange'>"+question["options"][o]+"</label></input>"
      }
      questionHTML = "<li class='center-title'><h4 class='title'>"+question["title"]+"</h4></li>"+
      "<li><form>"+optionsHTML+"</form></li>"
      
      $("#question-content").html(questionHTML)
      configClickOptions()
    } else {
      if (question["name"] == "age") {
        question["title"] = question["title"].replace("#name#", getFromStorage("name"));
      }

      questionHTML = "<li class='center-title'><h4 class='title'>"+question["title"]+"</h4></li>"+
      "<li><form><input type='"+question["type"]+"' name='"+question["name"]+"' placeholder='"+question["placeholder"]+"'></form></li>"+
      "<li><button id='questions-next' class='action orange'>"+question["button_text"]+"</button></li>"
      
      $("#question-content").html(questionHTML)
      configClick()
    }
    function configClickOptions(){
      // //Changes the button action if it's the end of the form
      actionButtonClicked('input[type="radio"]')
      //Able and Disable prev and next arrow buttons 
      prevNextDisable()
      //Fill with saved data
      $("input[value='"+getFromStorage(question["name"])+"']").prop("checked", true);
    }

    function configClick() {  
      if (question["name"]=="city") {
        autocompleteCities()
      }
      actionButtonClicked("#questions-next")
      prevNextDisable()
      $("input").val(getFromStorage(question["name"]))
    }
  }
  function actionButtonClicked(selector) {
    //Changes the button action if it's the end of the form
    if (question_number >= questions_array.length-1) {
      $(selector).click(function () { submitButtonClick() })
      enterKeydown(true)
    } else {
      $(selector).click(function () { doneButtonClick() })
      enterKeydown(false)
    }
  } 

  function autocompleteCities() {
    $("input").autocomplete({
      source: available_cities
    });
  }
  function enterKeydown(end) {
    $('form').on('keyup keypress', function(e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode === 13) { 
        if(end) {
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

        var data = {}
        for (var q in questions_array) {
          var question_input_name = questions_array[q]["name"]
          var value = getFromStorage(question_input_name)
          data[question_input_name] = value;
        }

        submitAJAX(data)
      }
  }
  function saveInputInStorage() {
    var inputName = $("input").attr("name")
    if (questions_array[question_number]["type"] == "options"){
      var value = $("input[name='"+inputName+"']:checked").val()
    } else {
      var value = $("input").val()
    }
    saveInStorage(inputName,value)
  }
  function submitAJAX(form_data) {
    // $.ajax({
    //     type        : 'GET', // define the type of HTTP verb we want to use (POST for our form)
    //     url         : 'save_questions.php', // the url where we want to POST
    //     data        : form_data, // our data object
    //     dataType    : 'json', // what type of data do we expect back from the server
    //     encode       : true
    // })
    //   .done(function(data) {
    //       console.log(data); 
    //   });

      // // stop the form from submitting the normal way and refreshing the page
      // event.preventDefault();
    var obj = JSON.stringify(form_data)
    //lert(obj)

    //Next section
    comment_name = "start_game"
    updateSectionAJAX("comment")
  }
  function saveInStorage(name, value) {
    if (typeof(Storage) !== "undefined") {
      sessionStorage.setItem(name, value);
    } else {
      alert("Seu navegador não permite salvar dados na sessão.")
    }
  }
  function getFromStorage(name) {
    return sessionStorage.getItem(name);
  }
  function prevNextDisable() {
    if (question_number<=0) {
      $("#prev").prop('disabled', true);
    } else if (question_number >= questions_array.length-1){
      $("#next").prop('disabled', true);
    } else {
      $("#prev").prop('disabled', false);
      $("#next").prop('disabled', false);
    }
  }

// Quiz  ----------------------------------------------------------------
  function quiz() {
    question_number = 0
    questions_array = quiz_texts
    actual_section = "quiz"
    createQuestion(questions_array[question_number])

    configPrevNext()
    emptyBadgeDetails()
  
    $(".all-badges img").mouseenter(function () {
      $(this).toggleClass("active")

      var badge_id = $(this).attr("id")
      var badge = badges_texts[badge_id]
      createBadgeDetails(badge)
 
    })
    $(".all-badges img").mouseleave(function () {
      emptyBadgeDetails()
    })
  }

  function createBadgeDetails(badge) {
    var badgeHTML = ""
    badgeHTML = "<li><span class='arrow centeredX'></span></li>"+
            "<li><img id='"+badge["id"]+"-badge' src='img/quiz/"+badge["id"]+"-badge-2x.png' title='"+badge["title"]+"'></li>"+
            "<li><h4>"+badge["title"]+"</h4></li>"+
            "<li><p>"+badge["description"]+"</p></li>"

    $("#single-badge-details").html(badgeHTML)  
  }
  function emptyBadgeDetails() {
    var badgeHTML = ""
    badgeHTML = "<li><span class='arrow centeredX'></span></li>"+
            "<li><h4>Conheça<br>os poderes<br>dos amigos<br>do futuro!</h4></li>"+
            "<li><p>Passe o mouse nas medalhas<br>ali em cima.</p></li>"

    $("#single-badge-details").html(badgeHTML)  
  }
  function quizYesOrNo() {
    var inputName = $("input").attr("name")
    var value = $("input[name='"+inputName+"']:checked").val()
    return value
  }

  //Calculate the value of the answered question
  function calculateInputQuiz() { 
    var inputName = $("input").attr("name")
    var answer = $("input[name='"+inputName+"']:checked").val()

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
    var random_number = Math.floor((Math.random() * badges_possible.length-1) + 1);
    kidBadge = badges_texts[badges_possible[random_number]]

    //Next section
    congrats_name = "badge"
    updateSectionAJAX("congrats")
  }

// Comment  -------------------------------------------------------------
  function comment() {
    if (comment_name == "about_region") {
      var region = searchForRegion()
      if (region) {
        createCommentRegion(comments_texts[comment_name], region)
      }
    } else {
      createComment(comments_texts[comment_name])
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
      comment["text"] = comment["text"].replace("#badge_title#", kidBadge["title"]);
    }
    //Set comment text
    var commentHTML = ""
    commentHTML = "<p>"+comment["text"]+"</p>"+
                  "<button class='toggle repeat'></button>"
    $(".robot-comment #text-comment").html(commentHTML)

    //Set background color
    $(".robot-comment").attr('class', 'robot-comment');
    $(".robot-comment").addClass(comment["color"]+"-gradient")

    // Action for button clicked
    commentButtonClicked()
  }

  // Switch witch screen to go
  function commentButtonClicked() {
    $("#go-comment").click(function () { 
      switch (comment_name) {
        case "about_region":
          updateSectionAJAX("map")
        break
        case "start_game":
          comment_name = "about_region"
          updateSectionAJAX("comment")
        break
        case "start_quiz":
          updateSectionAJAX("quiz")
        break
        case "start_challenge":
          actual_badge = kidBadge["id"]
          actual_level = 0
          updateSectionAJAX(actual_badge+"_"+actual_level)
        break
      }      
    })
  }
  function createCommentRegion(comment, region) {
    //Set comment text
    var commentHTML = ""
    commentHTML = "<p>"+comment["text"]+"<span class='green-text'>"+region["name"]+"</span>?</p>"+
                  "<button class='toggle repeat'></button>"
    $(".robot-comment #text-comment").html(commentHTML)

    //Set background color
    $(".robot-comment").attr('class', 'robot-comment');
    $(".robot-comment").addClass(comment["color"]+"-gradient")

    //Put region info
    var regionHTML = ""
    regionHTML = "<div id='about-region'>"+
                 "<p>"+region["info"]+"</p>"+
                 "<img src='img/desafios/mapa/pc_"+region["id"]+".png'>"+
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
      $('[data-toggle="popover"]').popover({html:true})
    }

    $('#help').fadeIn(300)
    $("#close-btn").click(function () { hideHelp() })
    // $(".backdrop").click(function () { hideHelp() })
  }

  function showHelp() {
    $('#help').width("100%")
    $('#help #robot-help-mini').hide(300)
    $('#help .backdrop').fadeIn(300)
    $('#help .robot-help').show(300)
    $("#close-btn").click(function () { hideHelp() })
    // $(".backdrop").click(function () { hideHelp() })
  }

  function hideHelp() {
    $('#help .robot-help').hide(300)
    $('#help .backdrop').fadeOut(300)
    $('#help #robot-help-mini').show(300)
    $('#help').width("0%")
    $("#robot-help-mini img").click(function () { showHelp() })
  }

// Congragts starts ----------------------------------------------------------------
  function congrats() {
    createCongrats(congrats_texts[congrats_name])
  }
  function createCongrats(congrats) {
    if (congrats_name == "badge") {
      congrats["text"] = congrats["text"].replace("#badge_title#", kidBadge["title"]);
      $(".robot-congrats #text-comment p").addClass("badge-text-format")
    }

      $(".robot-congrats #text-comment p").html(congrats["text"])

      if (congrats["tip"]) {
        $('.robot-congrats #text-comment p a').attr("data-toggle", "popover")
        $('.robot-congrats #text-comment p a').attr("data-trigger", "hover")
        $('.robot-congrats #text-comment p a').attr("data-placement", "right")
        $('.robot-congrats #text-comment p a').attr("data-content", congrats["tip"])
        $('[data-toggle="popover"]').popover({html:true})
      }

      $(".robot-congrats .content-right img").attr("src", "img/congrats/"+kidBadge["id"]+".png")

      var starsHTML = ""
      for (var i = 0; i < level_stars.length; i++) {
        starsHTML += "<li><img src='img/congrats/star-"+level_stars[i]+".png'></li>"
      }
      $('.robot-congrats .content-right #stars').html(starsHTML)

      // Action for button clicked
      congratsButtonClicked()
    }

    function congratsButtonClicked() {
      $("#go-congrats").click(function () { 
        switch (congrats_name) {
          case "badge":
            comment_name = "start_challenge"
            updateSectionAJAX("comment")
          break
          default:
            if (actual_level+1 < badges_texts[actual_badge]["levels"]) {
              actual_level += 1
              updateSectionAJAX(actual_badge+"_"+actual_level)
            } else {
              // alert("Finalizou. Form de feedback aqui.")
              updateSectionAJAX("feedback")
            }
          break
        }      
      })
    }

// Certificate  -----------------------------------------------------------------
  function certificate() {
    console.log(getFromStorage("name"))
  }

// AJAX ----------------------------------------------------------------
  function updateSectionAJAX(name) {
    //alert(name)
    // Don't cache ajax or content won't be fresh
    $.ajaxSetup ({
        cache: false
    });
    // Image while loading
    var ajax_load = "<img class='centeredX' src='img/loading.gif' alt='Carregando...' />";

    // URL for load
    // var loadUrl = name+".html";
    // $("body").html(ajax_load).load(loadUrl); 

    // setupSection(name)

    var loadUrl = "views/"+name+".html";
    $("#main-div-content").html(ajax_load).load(loadUrl, function(){
     $(this).hide().fadeIn('slow');
     window[name](arguments)
    });

    
  }

  //https://stackoverflow.com/questions/22577457/update-data-on-a-page-without-refreshing

  function nextLevelBadge(badge,level) {
    updateSectionAJAX(badge+"_"+level) //first challenge of badge
  }