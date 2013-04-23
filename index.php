<!DOCTYPE html> 
<html lang='en-us'>
<head>
  <meta charset='utf-8'>
  <title>Whereami</title>
  <link rel='stylesheet' href='css/bootstrap.css' />
  <link rel='stylesheet' href='css/style.css' /> 
  <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>
  <script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCZOXlIZdfYBcn_W8UrY-JYrE3eueQq4_k&sensor=false&libraries=geometry'></script>
  <script type='text/javascript' src='js/rnd.js'></script>
  <script type='text/javascript' src='js/minimap.js'></script>
  <script type='text/javascript' src='js/streetviewmap.js'></script>
  <script type='text/javascript'>
  $(document).ready(function() {
    //
    // Setup
    //

    var round = 1;
    var points = 0;
    var roundScore = 0;
    var totalScore = 0;

    //
    //  Init maps
    //

    svinitialize();
    mminitialize();

  	//
  	// Scoreboard & Guess button event
  	//
  	
    $('#guessButton').click(function (){

      if (window.guessLatLng){

      	// Calculate distance between points function
      	function calcDistance (fromLat, fromLng, toLat, toLng) {
       		return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(fromLat, fromLng), new google.maps.LatLng(toLat, toLng));
      	};

        // Reset marker function
        function resetMarker() {
            //Reset marker
            if (guessMarker != null) {
                guessMarker.setMap(null);
            }
        };

      	// Explode latLng variables into separate variables for calcDistance function
      	locLatLongs = window.locLL.toString();
      	guessLatLongs = window.guessLatLng.toString();
      	
        // Make arrays and clean from (){} characters
      	locArray = locLatLongs.replace(/[\])}[{(]/g,'').split(',');
      	guessArray = guessLatLongs.replace(/[\])}[{(]/g,'').split(',');

        // Calculate distance between points, and convert to kilometers
        distance = Math.ceil(calcDistance(locArray[0], locArray[1], guessArray[0], guessArray[1]) / 1000);
        console.log(distance);

        // Calculate points awarded via guess proximity
        function inRange(x, min, max) {
            return (min <= x && x <= max);
        };

        if(inRange(distance, 1, 10)) {
          points = 7000;
        } else if(inRange(distance, 11, 50)) {
          points = 4000;
        } else if(inRange(distance, 51, 200)) {
          points = 3000;
        } else if(inRange(distance, 201, 500)) {
          points = 2000;
        } else if(inRange(distance, 501, 800)) {
          points = 1000;
        } else if(inRange(distance, 801, 1300)) {
          points = 500;
        } else if(inRange(distance, 1301, 1600)) {
          points = 400;
        } else if(inRange(distance, 1601, 2300)) {
          points = 300;
        } else if(inRange(distance, 2301, 2800)) {
          points = 200;
        } else if(inRange(distance, 2801, 3200)) {
          points = 100;
        } else if(inRange(distance, 3200, 4500)) {
          points = 50;
        } else if(inRange(distance, 4501, 6000)) {
          points = 25;
        } else {
          points = 0;
        };

        if (round < 5){
          round++
          roundScore = points;
          totalScore = totalScore + points;

          $('.round').html('Current Round: <b>'+round+'/5</b>');
          $('.roundScore').html('Last Round Score: <b>'+roundScore+'</b>');
          $('.totalScore').html('Total Score: <b>'+totalScore+'</b>');
          $('#roundEnd').html('<p>Your guess was<br/><strong><h1>'+distance+'</strong>km</h1> away from the actual location.<br/><br/> You have scored<br/><h1>'+roundScore+' points</h1> this round!<br/><br/><button class="btn btn-primary closeBtn" type="button">Continue</button></p></p>');
          $('#roundEnd').fadeIn();

          // Reload maps to refresh coords
          svinitialize();
          mminitialize();
        }

        if (round >= 5){

          roundScore = points;
          totalScore = totalScore + points;

          $('.round').html('Current Round: <b>'+round+'/5</b>');
          $('.roundScore').html('Last Round Score: <b>'+roundScore+'</b>');
          $('.totalScore').html('Total Score: <b>'+totalScore+'</b>');

          // Check if they've submitted their last guess, ending the game
          if (window.finished) {
            
            roundScore = points;
            totalScore = totalScore + points;

            $('#miniMap, #pano, #guessButton, #scoreBoard').hide();
            $('#endGame').html('<p><h1>Congrats!</h1><h2>Your final score was:</h2><h1>'+totalScore+'!</h1><br/>Share this on:<br/><br/><button class="btn" type="submit">Facebook</button> <button class="btn" type="submit">Twitter</button></p><br/><button class="btn btn-large btn-success" type="button">Play Again?</button>');
            $('#endGame').fadeIn(500);

          }

          // Reload maps to refresh coords
          svinitialize();
          mminitialize();

          // We're done with the game
          window.finished = true;

        }

      } else {
        alert('You need to make a guess first!');
      }

      window.guessLatLng = '';

    });

    $('#roundEnd').on('click', '.closeBtn', function () {
      $('#roundEnd').fadeOut(500);
    });

  });
  </script>
</head> 
<body>
  <div id='content'>
    <div id="roundEnd"></div>
    <div id="endGame"></div>
  	<div id='scoreBoard'>
  		<span class='round'>Current Round: <b>1/5</b></span><br/>
      <span class='roundScore'>Last Round Score: <b>0</b></span><br/>
  		<span class='totalScore'>Total Score: <b>0</b></span>
  	</div>
    <div id='miniMap'></div>
    <div id='guessButton' class="btn btn-large btn-danger">Make Your Guess</div>
    <div id='pano'></div>
  </div>
</body>
</html>