$(document).ready(function() {
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

function nextQuestion() {
  question_number = question_number+1
  // console.log(questions_texts.length+1)
  if (question_number == questions_texts.length-1) {
    createQuestion(questions_texts[question_number],"questions-submit","Enviar")
  } else {
    createQuestion(questions_texts[question_number],"questions-next","Pronto")
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
    submitButtonClick()
    console.log("submit")
  } else {
    nextButtonClick()
    console.log("next")
  }
}
function autocompleteCities() {
  $("#city-name").autocomplete({
    source: available_cities
  });
}
function nextButtonClick() {
  $("#questions-next").click(function () {
    nextQuestion()
  })
}
function submitButtonClick() {
  $("#questions-submit").click(function () {
    submitQuestions()
  })
}
function submitQuestions() {
  alert("submit to server here...")
  // submit to server here...
}


// Mapa ----------------------------
$(function () {
  $('[data-toggle="popover"]').popover()
})
	
	$( "#imgPeca1, #imgPeca2, #imgPeca3").draggable({
       cursor: "grabbing",

        //snap: true,
       scroll:false,
       drag: function( event, ui ) {
        console.log('aaaaaa');
       }
    });

    $("#imgPeca1x").droppable({
    	accept: "#imgPeca1",
        drop: function( event, ui ) {
          alert('xxxxxxxx');
          document.getElementById("imgPeca1").style.left = "0px";
          document.getElementById("imgPeca1").style.top = "0px";
          document.getElementById("imgPeca1").style.marginLeft = "70.25%";
          document.getElementById("imgPeca1").style.marginTop = "55.42%";
          $( "#imgPeca1" ).draggable( "disable" );
          }
      })  
    

     $("#imgPeca2x").droppable({
    	accept: "#imgPeca2",
        drop: function( event, ui ) {
          alert('aaaaaa');
          document.getElementById("imgPeca2").style.left = "0px";
          document.getElementById("imgPeca2").style.top = "0px";
          document.getElementById("imgPeca2").style.marginLeft = "61.27%";
          document.getElementById("imgPeca2").style.marginTop = "26.55%";

          $( "#imgPeca2" ).draggable( "disable" );
          }
      })

      $("#imgPeca3x").droppable({
    	accept: "#imgPeca3",
        drop: function( event, ui ) {
          alert('aaaaaa');
          document.getElementById("imgPeca3").style.left = "0px";
          document.getElementById("imgPeca3").style.top = "0px";
          document.getElementById("imgPeca3").style.marginLeft = "60%";
          document.getElementById("imgPeca3").style.marginTop = "10.1%";
          $( "#imgPeca3" ).draggable( "disable" );
          }
      })



});
