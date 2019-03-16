//First page
if ($("#menu").length) {
  menu()
}

// General  ---------------------------------------------------------------------
  $(document).ready(function() {

    toggleSoundSetup()

    // Toggle fullscreen
   // $('#myModal').modal('show')
    $("#openFullscreen").click(function () {
      openFullscreen()
      $('#myModal').modal('hide')
    })
  });

  function toggleSoundSetup() {
    // Toggle sound
    $(".sound").click(function () {
      $(this).toggleClass("sound")
      $(this).toggleClass("mute")
      console.log("Inserir logica de mutar o som, aqui!")
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

// Menu  -----------------------------------------------------------------
  function menu() {
    $("#start-game").click(function () {
      cutscene_name = "start"
      updateSectionAJAX("cutscene")
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
    } else if (question["type"] == "select") {
      var selectOptions = "<option value='' disabled selected>"+question["placeholder"]+"</option>"
      for (var i = 0; i < available_cities.length; i++) {
           row = available_cities[i];
           selectOptions += '<option value="'+row+'">'+row+'</option>'
      }

      questionHTML = "<li class='center-title'><h4 class='title'>"+question["title"]+"</h4></li>"+
      "<li><form><select name='"+question["name"]+"'>"+selectOptions+"</select></form></li>"+
      "<li><button id='questions-next' class='action orange'>"+question["button_text"]+"</button></li>"

      $("#question-content").html(questionHTML)
      configClick("select")
      
    } else {
      if (question["name"] == "age") {
        question["title"] = question["title"].replace("#name#", getFromStorage("name"));
      }

      questionHTML = "<li class='center-title'><h4 class='title'>"+question["title"]+"</h4></li>"+
      "<li><form><input type='"+question["type"]+"' name='"+question["name"]+"' placeholder='"+question["placeholder"]+"'></form></li>"+
      "<li><button id='questions-next' class='action orange'>"+question["button_text"]+"</button></li>"
      
      $("#question-content").html(questionHTML)
      configClick("input")
    }
    function configClickOptions(){
      // //Changes the button action if it's the end of the form
      actionButtonClicked('input[type="radio"]')
      //Able and Disable prev and next arrow buttons 
      prevNextDisable()
      //Fill with saved data
      $("input[value='"+getFromStorage(question["name"])+"']").prop("checked", true);
    }

    function configClick(selector) {  
      actionButtonClicked("#questions-next")
      prevNextDisable()
      $(selector).val(getFromStorage(question["name"]))
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

        //Next section
        comment_name = "start_game"
        updateSectionAJAX("comment")
      }
  }
  function saveInputInStorage(selector) {
    if (questions_array[question_number]["type"] == "select"){
      var inputName = $("select").attr("name")
    } else {
      var inputName = $("input").attr("name")
    }


    if (questions_array[question_number]["type"] == "options"){
      var value = $("input[name='"+inputName+"']:checked").val()
    } else if (questions_array[question_number]["type"] == "select") {
      var value = $("select").val()
    } else {
      var value = $("input").val()
    }
    saveInStorage(inputName,value)
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

    badgeDetailsToggle()
  }
  function badgeDetailsToggle() {
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
    var badge_choosen_id = badges_possible[random_number]
    actual_badge = badges_texts[badge_choosen_id]
    saveInStorage("badge", badge_choosen_id)

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
      comment["text"] = comment["text"].replace("#badge_title#", actual_badge["title"]);
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
          actual_level = 0
          console.log(actual_badge)
          console.log(actual_level)
          console.log(actual_badge+"_"+actual_level)
          updateSectionAJAX(actual_badge["id"]+"_"+actual_level)
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
      congrats["text"] = congrats["text"].replace("#badge_title#", actual_badge["title"]);
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

      $(".robot-congrats .content-right img").attr("src", "img/congrats/"+actual_badge["id"]+".png")

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
            if (actual_level+1 < actual_badge["levels"]) {
              actual_level += 1
              updateSectionAJAX(actual_badge["id"]+"_"+actual_level)
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
  $("#feedback .yes").click(function () {
    answerLike(this, "Sim")
  })
  $("#feedback .no").click(function () {
    answerLike(this, "Não")
  })
  $("#submit-feedback").click(function () {
    // Check if all the fields are full
    if ($("textarea").val() == "" || !(getFromStorage("like"))) {
       alert("Preencha todos os campos para continuar.") 
       return false
    }

    saveInStorage("feedback", $("textarea").val())
    submitFeedbackAJAX()
    updateSectionAJAX("certificate")
  })
}

function answerLike(button, answer) {
  $(button).toggleClass("active")

  var beforeAnswer = getFromStorage("like")
    // If already answered before
    if (beforeAnswer == "Sim") {
      if (answer == "Sim") {
        saveInStorage("like", null)
      }
      if (answer == "Não") {
        saveInStorage("like", "Não")
        $("#feedback .yes").toggleClass("active")
      }
    } else if (beforeAnswer == "Não") {
      if (answer == "Não") {
        saveInStorage("like", null)
      }
      if (answer == "Sim") {
        saveInStorage("like", "Sim")
        $("#feedback .no").toggleClass("active")
      }
    } else {
      // First time answering
      if (answer == "Sim") {
        saveInStorage("like", "Sim")
      } else if (answer == "Não") {
        saveInStorage("like", "Não")
      }
    }
}

function submitFeedbackAJAX() {
    var data = {}
    var like = getFromStorage("like")
    var feedback = getFromStorage("feedback")
    data["like"] = like
    data["feedback"] = feedback

    // $.ajax({
    //     type        : 'GET', // define the type of HTTP verb we want to use (POST for our form)
    //     url         : 'save_feedback.php', // the url where we want to POST
    //     data        : data, // our data object
    //     dataType    : 'json', // what type of data do we expect back from the server
    //     encode       : true
    // })
    //   .done(function(data) {
    //       console.log(data); 
    //   });

      // // stop the form from submitting the normal way and refreshing the page
      // event.preventDefault();
    var obj = JSON.stringify(data)
    alert(obj)
  }

// Certificate  -----------------------------------------------------------------
  function certificate() {
    setupFinishedBadges()
    activeAndShowDetails("#"+actual_badge["id"])

    setupActionsCertificate()

    generateCertificateImg()

    sendAllDataToServer()
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
    var like = getFromStorage("like")
    var feedback = getFromStorage("feedback")

    // variables
    var data = {
      "name" : name,
      "age" : age,
      "city" : city,
      "gender" : gender,
      "badge" : badge,
      "like" : like,
      "feedback" : feedback
    }

    $.ajax({
        type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url         : '/admin/php/controller/save_data.php', // the url where we want to POST
        data        : data, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode       : true
    })
      .done(function(data) {
          console.log(data); 
      });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
    
    var obj = JSON.stringify(data)
    alert(obj)       
  }

  function generateCertificateImg() {
    $("#certificate-img").attr("src", "img/certificate/cards/"+actual_badge["id"]+".png")

    var certificateText = "Eu "+getFromStorage("name")+", prometo honrar meu título de Amigo do Futuro"+
                       " e cuidar do Ceará até 2050 pois sei que posso melhorar ainda mais este lugar."

    $(".to-print p").text(certificateText)

    $(".to-print p").css("color", actual_badge["color"])

    toCanvas()
  }

  function toCanvas() {
    html2canvas(document.getElementsByClassName("to-print")[0], {
        onclone: function (clonedDoc) {
          $(clonedDoc).find('.to-screen').css('display', 'none');
          $(clonedDoc).find('.to-print').css('display', 'block');
        }
    }).then((canvas)=>{
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
    $(".all-badges img").click(function () {
      resetAllActivesBadges()
      activeAndShowDetails(this) 
    })
    $(".all-badges img + span").click(function () {
      resetAllActivesBadges()
      activeAndShowDetails($(this).prev("img")) 
    })

    $(".robot-certificate .print").click(function () {
      window.print()
    })
    $("#other-badges-btn").click(function () {
      $('.other-badges').fadeIn(300)
    })
    $(".other-badges .exit").click(function () {
      $('.other-badges').fadeOut(300)
    })
    $(".other-badges .home").click(function () {
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
    badgeHTML = "<li><h4>"+badge["title"]+"</h4></li>"+
                "<li><p>"+badge["description"]+"</p></li>"

    if (badge["finished"]) {
      badgeHTML += "<li><p><button class='action orange'>Recomeçar</button></p></li>"
    } else {
      badgeHTML += "<li><p><button class='action orange'>Começar</button></p></li>"
    }
    $("#single-badge-details").html(badgeHTML)  

    $(".other-badges .action").click(function () {
      // FIX Reset level information
      actual_level = 0
      actual_badge = badge

      updateSectionAJAX(actual_badge["id"]+"_"+actual_level)
    })
  }
  function emptyBadgeDetailsModal() {
    var badgeHTML = ""
    badgeHTML = "<li><h4>Escolha outro amigo do futuro!</h4></li>"+
                "<li><p>Clique no amigo que quer ajudar agora.</p></li>"

    $("#single-badge-details").html(badgeHTML)  
  }

// Video Cutscene  -----------------------------------------------------------------
  function cutscene() {
    $("#cutscene video source").attr("src", cutscenes_infos[cutscene_name]["src"])

    $("#cutscene .action").click(function () {
      updateSectionAJAX(cutscenes_infos[cutscene_name]["jump"])
    })

    // Play and pause actions
    $("#cutscene .play").click(function () {
      play()
      $("#cutscene .play").fadeOut(300)
    })
    $("#cutscene .pause").click(function () {
      pause()
      $("#cutscene .play").fadeIn(100)
    })

    //videoEnded()
  }
  function videoEnded() {
    var cutscene_video = document.getElementById("cutscene_video"); 
    cutscene_video.onended = function() {
      // FIX Go to correct question
      setTimeout(updateSectionAJAX("form"), 3000);
    };
  }
  function play() { 
    var cutscene_video = document.getElementById("cutscene_video"); 
    cutscene_video.play(); 
  }  
  function pause() { 
    var cutscene_video = document.getElementById("cutscene_video"); 
    cutscene_video.pause(); 
  }

// AJAX ----------------------------------------------------------------
  function updateSectionAJAX(name) {
    // Don't cache ajax or content won't be fresh
    $.ajaxSetup ({
        cache: false
    });
    // Image while loading
    var ajax_load = "<img class='centeredX' src='img/loading.gif' alt='Carregando...' />";

    var loadUrl = "views/"+name+".html";
    $("#main-div-content").html(ajax_load).load(loadUrl, function(){
     $(this).hide().fadeIn('slow');
     window[name](arguments)

     // Sound things
     toggleSoundSetup()
    });
  }

  function setupLevel(){
    createInvokeHelp(helps_texts[actual_badge["id"]+"_"+actual_level])
    $('[data-toggle="popover"]').popover({html:true})
  }


  function congratsNextLevel(stars, ended) {
    congrats_name = actual_badge["id"]+"_"+actual_level
    level_stars = stars
    if (ended) {
      actual_badge["finished"] = true //ended badge
    }
    updateSectionAJAX("congrats")
  } 