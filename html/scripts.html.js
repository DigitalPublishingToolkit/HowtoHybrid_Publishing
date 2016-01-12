  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
  <script>
  	$(document).ready(function(){
  		console.log('jquery initiated')

    //       $(".level1").click(function () {
    //  $(this).toggleClass("color");
    //  $(this).find('.level2, .level3').toggleClass("color");
    // });
   	})

    $(function() {
      $( ".level1, .links, #header" ).resizable({
        handles: 'e'
      });
    });

  </script>
