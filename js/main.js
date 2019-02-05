$(document).ready(function() {
	
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
          //alert('aaaaaa');
          $( "#imgPeca1x" ).draggable( "disable" );
          }
      })

     $("#imgPeca2x").droppable({
    	accept: "#imgPeca2",
        drop: function( event, ui ) {
          //alert('aaaaaa');
          $( "#imgPeca2x" ).draggable( "disable" );
          }
      })

      $("#imgPeca3x").droppable({
    	accept: "#imgPeca3",
        drop: function( event, ui ) {
          //alert('aaaaaa');
          $( "#imgPeca3x" ).draggable( "disable" );
          }
      })



});
