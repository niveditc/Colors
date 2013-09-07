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
  <!-- <script src="js/test.js"></script> -->
</head>

<body>
  <div id="header">
    <div id="logo">
      <img src="img/favicon.png" />
      <h1>Colors</h1>
    </div>
    <div id="user">
      <img src="" />
      <h2 id="name"></h2>
      <h2 id="logout" onClick="logout();">Logout</h2>
    </div>
  </div>

	<canvas id="myCanvas" width="700" height="730">
		No canvas available!
	</canvas>

  <div id="nextLevelModal" class="modal">
    <h1></h1>
  </div>

  <div id="invalidColorModal" class="modal">
    <h2>You can't have two neighbors of the same color</h2>
  </div>

  <div id="pauseModal" class="modal">
    <h1>Paused</h1>
    <h2>Press 'P' or Click Screen to Continue</h2>
  </div>

  <div id="endGameModal" class="modal">
    <h2>Game Over</h2>
  </div>

<script type="text/javascript" src="js/ui.js"></script>
</body>
</html>
