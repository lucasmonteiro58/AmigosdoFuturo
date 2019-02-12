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

// Check if it's in form section or in quiz section.
// It choose the correct array of questions
if($("#form").length) {
  questions_array = questions_texts
} else if ($("#quiz").length) {
  questions_array = quiz_texts
}

createQuestion(questions_array[question_number],"questions-next")
prevNextDisable()

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
    createQuestion(questions_array[number],"questions-submit")
  } else {
    createQuestion(questions_array[number],"questions-next")
  }
}
function createQuestion(question,button_id) {
  //Form reusable div
  var questionHTML = ""
  if (question["type"] == "options") {
    var optionsHTML = ""
    for (var o in question["options"]){
      optionsHTML += "<input id='"+question["name"]+o+"' type='radio' name='"+question["name"]+"' value='"+question["options"][o]+"' class='action orange'>"+
      "<label for='"+question["name"]+o+"' class='action orange'>"+question["options"][o]+"</label></input>"
    }
    questionHTML = "<li class='center-title'><h4 class='title'>"+question["title"]+"</h4></li>"+
    "<li><form>"+optionsHTML+"</form></li>"+
    "<li><button id='"+button_id+"' class='action orange'>"+question["button_text"]+"</button></li>"
  } else {
    questionHTML = "<li><h4 class='title'>"+question["title"]+"</h4></li>"+
    "<li><form><input type='"+question["type"]+"' name='"+question["name"]+"' placeholder='"+question["placeholder"]+"'></form></li>"+
    "<li><button id='"+button_id+"' class='action orange'>"+question["button_text"]+"</button></li>"
  }
  $("#question-content").html(questionHTML)

  if (question["name"]=="city") {
    autocompleteCities()
  }
  if (button_id == "questions-submit") {
    $("#questions-submit").click(function () { submitButtonClick() })
    enterKeydown(true)
  } else {
    $("#questions-next").click(function () { doneButtonClick() })
    enterKeydown(false)
  }

  //Able and Disable prev and next arrow buttons 
  prevNextDisable()

  //Fill with saved data
  if (question["type"] == "options") {
    $("input[value='"+getFromStorage(question["name"])+"']").prop("checked", true);
  } else {
    $("input").val(getFromStorage(question["name"]))
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
  // if (question["type"] == ""options) {
  //   saveInputInStorage("input.selected")
  // } else {
    saveInputInStorage()
  // }
  nextQuestion()
}
function submitButtonClick() {
    saveInputInStorage()

    var data = {}
    for (var q in questions_array) {
      var question_input_name = questions_array[q]["name"]
      var value = getFromStorage(question_input_name)
      data[question_input_name] = value;
    }

    submitAJAX(data)
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
  } else if (question_number>=questions_array.length-1){
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





});
