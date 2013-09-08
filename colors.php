<!DOCTYPE html>
<html>

<head>
  <title>Colors</title>
  <meta charset="UTF-8">
  <link href='http://fonts.googleapis.com/css?family=Cabin:400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/style.css">

  <link rel="icon" type="image/png" href="img/favicon.png" />
  <link rel="icon" href="img/favicon.ico" type="image/x-icon">
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="js/graph.js"></script>
  <script src="js/scoring.js"></script>
</head>

<body>
  <div id="header">
    <div id="logo">
      <img src="img/favicon.png" />
      <h1>Colors</h1>
    </div>
<!--    <div id="user">
      <img src="" />
      <h2 id="name"></h2>
      <h2 id="logout" onClick="logout();">Logout</h2>
    </div> -->
  </div>

	<canvas id="myCanvas" width="700" height="750">
		No canvas available!
	</canvas>

  <h3 id="scoreTracker">Score: 0</h3>

  <div id="rulesModal" class="modal">
    <h1>Welcome to Colors!</h1>
    <h2>Rules</h2>
    <p>Dots connected by a line can't have the same color.</p>
    <p>You have 30 seconds to complete each level.</p>
    <p>Press 'P' to pause.</p>
    <p>You get bonus points for using less than 5 colors.</p>
    <div id="startGame">Start Game</div>
    <p id="names">Created by <a href="http://raemadeline.com" target="_blank">Madeline Horowitz</a>, <a href="http://isaacl.net" target="_blank">Isaac Lim</a>, and Nivedita Chopra</p>
  </div>

  <div id="nextLevelModal" class="modal">
    <h1></h1>
    <p>
      <span class="fontawesome-star"></span>
      <span class="fontawesome-star"></span>
      <span class="fontawesome-star"></span>
      <span class="fontawesome-star"></span>
      <span class="fontawesome-star"></span>
    </p>
    <h2></h2>
  </div>

  <div id="invalidColorModal" class="modal">
    <h2>You can't have two neighbors of the same color</h2>
  </div>

  <div id="pauseModal" class="modal">
    <h1>Paused</h1>
    <h2>Press 'P' or Click Screen to Continue</h2>
  </div>

  <div id="endGameModal" class="modal">
    <h1>Your time is up!</h1>
    <h2></h2>
    <div id="playAgain">
      Play Again?
    </div>
  </div>

<script type="text/javascript" src="js/ui.js"></script>
</body>
</html>
