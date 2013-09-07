function Game() {
	this.graph = generateGraph(4);
	this.activeColor = 0;
	this.level = 0;
	this.time = 45000;
	this.paused = false;
	console.log(this.graph.toString());
}

/* grey (default), red, blue, green, orange, purple */
var colors = ["#D0D0D0", "#FF6347", "#2ADCCB", "#9ACD32", "#FFA500", "#6A5ACD"];
var radius = 10;
var cRadius = 13;
var line = 1;

var game = new Game();
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
renderFirstGraph(game.graph);
// renderLevel();

var timeInt = setInterval(function() {updateTime();}, 1000);

function circle(ctx, cx, cy, radius) {
	ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2*Math.PI, true);
    ctx.closePath();
}

/* G: Graph */
function renderFirstGraph(G) {
	ctx.clearRect(0, 0, 700, 700);

	//generate array of "random" locations
	var locs = setLocs(G.numVertices);

	//set vertices at locations
	for(var i = 0; i < G.numVertices; i++) {
		G.vertices[i].loc.x = locs[i].x;
		G.vertices[i].loc.y = locs[i].y;
	}

	//draw graph edges
	for(var i = 0; i < G.numVertices; i++) {
		ctx.lineWidth = line;
		ctx.strokeStyle = "#666666";

		var currVertex = G.vertices[i];
		var numNeighbors = currVertex.neighbors.length;
		var p1 = currVertex.loc;

		for(var j = 0; j < numNeighbors; j++) {
			var p2 = G.vertices[currVertex.neighbors[j]].loc;
			if(p2) {
				ctx.beginPath();
				ctx.moveTo(p1.x, p1.y);
				ctx.lineTo(p2.x, p2.y);
				ctx.closePath();
				ctx.stroke();
			}
			else {
				console.log('empty neighbor');
			}
		}
	}

	updateColorDisplay(G);
	colorControls();
}

function colorControls() {
	ctx.clearRect(500, 650, 200, 50);

	for(var i = 1; i < colors.length; i++) {
		ctx.fillStyle = colors[colors.length - i];
		circle(ctx, 700 - 34*i, 670, cRadius);
		ctx.fill();

		/* active color state */
		if(game.activeColor == colors.length - i) {
			ctx.fillRect(700 - 34*i - cRadius, 670, 2*cRadius, 100);
			console.log('active');
		}

	}
}

/* G: Graph */
function updateColorDisplay(G) {

	for(var i = 0; i < G.numVertices; i++) {
		var V = G.vertices[i];
		if(V) {
			ctx.fillStyle = colors[V.color];

			var cx = V.loc.x;
			var cy = V.loc.y;
			circle(ctx, cx, cy, radius);
			ctx.fill();
		}
		else {
			console.log('invalid vertex');
		}
	}
}

/* i: number of vertices, returns: array of points */
/* min radius: 100, max radius: 300 */
function setLocs(i) {
	var locArray = new Array();

	//divide circle into i segments
	var deg = 2*Math.PI / i; 

	for(var j = 0; j < i; j++) {

		var angle = j*deg;
		var rad = Math.floor(Math.random()* 140) + 180;

		/* use trig to find position from (350, 350) */
		var changeX = rad * Math.cos(angle);
		var changeY = rad * Math.sin(angle);

		/* Add new point to array with offset from center */
		locArray[j] = new Point(350 + changeX, 350 + changeY);
	}

	return locArray;
}

/* MOUSE EVENT */
function onMouseDown(event) {
    var x = event.pageX - canvas.offsetLeft; 
    var y = event.pageY - canvas.offsetTop;
    
    /* Check if Toggle Color Controls */
    for(var i = 1; i < colors.length; i++) {
    	if(inCircle(x, y, 700 - 34*i, 670, cRadius)) {
			game.activeColor = colors.length - i;
			console.log(game.activeColor);

			colorControls();
			break;
    	}
    }

    /* Check if Changing Point Color */
    console.log(game.graph);
    for(var i = 0; i < game.graph.numVertices; i++) {
    	var V = game.graph.vertices[i];

    	if(inCircle(x, y, V.loc.x, V.loc.y, radius)) {
    		
    		/* valid color placement */
    		if(updateColor(game.graph, i, game.activeColor)) {
    			updateColorDisplay(game.graph);

	    		if(allColored(game.graph)) {
	    			console.log('all colored');

	    			if(verifyColoring(game.graph)) {
	    				winGame();
	    			}
	    		}

	    		break;
    		}
    		/* invalid */
    		else {
    			alert('bad color placement');
    		}
    	}
    }
}
canvas.addEventListener('mousedown', onMouseDown, false);

/* KEYBOARD EVENTS */
/* Z:1, X:2, C:3, V:4, B:5 */
function onKeyDown(event) {
    if (event.keyCode === 90) /* Z:1 */ {
        game.activeColor = 1;
		console.log(game.activeColor);

		colorControls();
    }
    else if (event.keyCode === 88) /* X:2 */ {
        game.activeColor = 2;
		console.log(game.activeColor);

		colorControls();
    }
    else if (event.keyCode === 67) /* C:3 */ {
        game.activeColor = 3;
		console.log(game.activeColor);

		colorControls();
    }
    else if (event.keyCode === 86) /* V:4 */ {
        game.activeColor = 4;
		console.log(game.activeColor);

		colorControls();
    }
    else if (event.keyCode === 66) /* B:5 */ {
        game.activeColor = 5;
		console.log(game.activeColor);

		colorControls();
    }

    else if (event.keyCode === 80) /* P:pause */ {
    	console.log("time: " + game.time);

    	if(game.paused) {
    		timeInt = window.setInterval(function() {updateTime();}, 1000);
    		game.paused = false;
    	}
    	else {
    		window.clearInterval(timeInt);
    		game.paused = true;
    	}
    }
}
window.addEventListener('keydown', onKeyDown, false);

/* x1, y1 testing point, x2, y2 center circle, r radius */
function inCircle(x1, y1, x2, y2, r) {
	var square_dist = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    return (square_dist <= Math.pow(r, 2));
}

// function renderLevel() {
// 	ctx.clearRect(600, 0, 100, 40);
// 	ctx.font = "20px Arial";
// 	ctx.textAlign = "right";
// 	ctx.fillText("Level " + game.level, 690, 30);
// }

function updateTime() {
	game.time -= 1000;
	if(game.time < 6000) {
		console.log(game.time);
	}
	if(game.time <= 0) {
		window.clearInterval(timeInt);
		gameOver();
	}
}
 
function winGame() {
	ctx.fillRect(0,0,700,700);
	ctx.fillStyle = "white";
	ctx.font = "60px Arial";
	ctx.textAlign = "center";
	ctx.fillText("You Did It!", 350, 200);
	ctx.font = "40px Arial";
	ctx.fillText("Get ready for the next board", 350, 400);

	setTimeout(function() {
		game.level ++;
		game.time += 45000;
		game.graph = generateGraph(4 + game.level);
		renderFirstGraph(game.graph);
		//renderLevel();
	}, 2000);
}

function gameOver() {
	alert('game over');
}
