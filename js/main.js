$(document).ready(function() {
// General  -----------------------
$(".sound").click(function () {
  $(this).toggleClass("sound")
  $(this).toggleClass("mute")
  console.log("Inserir logica de mutar o som, aqui!")
})

// Modal fulscreen -----------------------
$('#myModal').modal('show')

$("#openFullscreen").click(function () {
  openFullscreen()
  $('#myModal').modal('hide')
})

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

// Form  ----------------------------
var question_number = 0 //first question
var questions_array = [] //actual array of questions
var actual_section = undefined

// Check if it's in form section or in quiz section.
// It choose the correct array of questions
if($("#form").length) {
  questions_array = questions_texts
  actual_section = "form"
  createQuestion(questions_array[question_number],"questions-next")
  prevNextDisable()
} else if ($("#quiz").length) {
  questions_array = quiz_texts
  actual_section = "quiz"
  createQuestion(questions_array[question_number],"questions-next")
  prevNextDisable()
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
  // Recalculate quiz result values
  // if (actual_section == 'quiz') {
  //   var answer = quizYesOrNo()
  //   if (answer == "Sim") {
  //     //Saber se a pessoa mudou o que marcou antes
  //     for (f in final_pont) {
  //       final_pont[f]["points"] += matrix_questions_pont[question_number][f]
  //     }

  //   }
  // }

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
  alert(obj)
  // alert(form_data)
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
    $(".prev").prop('disabled', true);
  } else if (question_number >= questions_array.length-1){
    $(".next").prop('disabled', true);
  } else {
    $(".prev").prop('disabled', false);
    $(".next").prop('disabled', false);
  }
}

$(".prev").click(function () {
  prevNextDisable()
  previousQuestion()
})
$(".next").click(function () {
  prevNextDisable()
  nextQuestion()
})

// Quiz  ----------------------------
emptyBadgeDetails()

$(".all-badges img").mouseenter(function () {
  $(this).toggleClass("active")

  var badge_id = $(this).attr("id")
  for (b in badges_texts) {
    if (badges_texts[b]["id"] == badge_id) {
      var badge = badges_texts[b]
      createBadgeDetails(badge)
    }
  }
})

$(".all-badges img").mouseleave(function () {
  emptyBadgeDetails()
})

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

  if (badges_possible.length == 0) {
    alert(badges_possible[0])
  } else {
    //return a random number between 1 and max number of badges_possible
    var random_number = Math.floor((Math.random() * badges_possible.length-1) + 1);
    alert(badges_possible[random_number])
  }
}


// Comment  ----------------------------
createRobotComment(comments_texts[0])

function createRobotComment(comment) {
  var commentHTML = ""
  commentHTML = "<p>"+comment["text"]+"</p>"+
                "<button class='toggle repeat'></button>"
  $("#text-comment").html(commentHTML)

  if (comment["type"] == "region") {
    var region = ""
    region = ""
    $("#about-region").html(region)  

    commentButtonClicked("#region-btn")
  } else {
    commentButtonClicked("#comment-btn")
  }


}

function commentButtonClicked(selector) {
  $(selector).click(function () { 
    console.log("Botao cliclado VAMOS LA") 
  })
}

});