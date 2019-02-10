$(document).ready(function() {
// General  -----------------------
$(".sound").click(function () {
  $(this).toggleClass("off")
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
createQuestion(questions_texts[question_number],"questions-next","Pronto")
prevNextDisable()

function nextQuestion() {
  if ($("input").val() == "") {
    alert("Preencha todos os campos para continuar.")
    return
  }
  question_number = question_number+1
  goToQuestion(question_number)
}
function previousQuestion() {
  question_number = question_number-1
  goToQuestion(question_number)  
}

function goToQuestion(number) {
  if (number == questions_texts.length-1) {
    createQuestion(questions_texts[number],"questions-submit","Enviar")
  } else {
    createQuestion(questions_texts[number],"questions-next","Pronto")
  }
}
function createQuestion(question,button_id,button_text) {
  //Form reusable div
  $(".form-question .content").html("<li><h4>"+question["title"]+"</h4></li>"+
  "<li><form><input id='"+question["input_id"]+"' type='"+question["input_type"]+"' name='"+question["input_name"]+"' placeholder='"+question["placeholder"]+"'></form></li>"+
  "<li><button id='"+button_id+"' class='play-btn action'>"+button_text+"</button></li>")

  if (question["input_id"]=="city-name") {
    autocompleteCities()
  }
  if (button_id=="questions-submit") {

    $("#questions-submit").click(function () { submitButtonClick() })
    enterKeydown(true)
  } else {
    $("#questions-next").click(function () { doneButtonClick() })
    enterKeydown(false)
  }
  prevNextDisable()
  $("input").val(getFromStorage(question["input_name"]))
}
function autocompleteCities() {
  $("#city-name").autocomplete({
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
    saveInputInStorage()
    nextQuestion()
}
function submitButtonClick() {
    saveInputInStorage()

    var data = {}
    for (var q in questions_texts) {
      var question_input_name = questions_texts[q]["input_name"]
      var value = getFromStorage(question_input_name)
      data[question_input_name] = value;
    }

    submitAJAX(data)
}
function saveInputInStorage() {
  var inputName = $("input").attr("name")
  var value = $("input").val()
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
  } else if (question_number>=questions_texts.length-1){
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
