$(document).ready(function() {

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
