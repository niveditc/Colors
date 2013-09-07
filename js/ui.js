function Game() {
	this.graph = generateGraph(15);
	this.activeColor = 0;
	console.log(this.graph.toString());
}

var game = new Game();
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* grey (default), red, blue, green, orange, purple */
var colors = ["#D0D0D0", "#FF6347", "#40E0D0", "#9ACD32", "#FFA500", "#6A5ACD"];
var radius = 10;
var cRadius = 14;
var line = 1;

function circle(ctx, cx, cy, radius) {
	ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2*Math.PI, true);
    ctx.closePath();
}

renderFirstGraph(game.graph);

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
				ctx.moveTo(p1.x, p1.y);
				ctx.lineTo(p2.x, p2.y);
				ctx.stroke();
			}
			else {
				console.log('empty neighbor');
			}
		}
	}

	updateColors(G);
	colorControls();
}

function colorControls() {
	for(var i = 1; i < colors.length; i++) {
		ctx.fillStyle = colors[colors.length - i];
		circle(ctx, 700 - 34*i, 670, cRadius);
		ctx.fill();
	}
}

/* G: Graph */
function updateColors(G) {

	for(var i = 0; i < G.numVertices; i++) {
		var V = G.vertices[i];

		if(V) {
			console.log(V.color);
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
    var x = event.pageX - canvas.offsetLeft;  // do not use event.x, it's not cross-browser!!!
    var y = event.pageY - canvas.offsetTop;
    
    console.log("Clicked!");
}
canvas.addEventListener('mousedown', onMouseDown, false);

/* x1, y1 testing point, x2, y2 center circle, r radius */
function inCircle(x1, y1, x2, y2, r) {
	var square_dist = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    return (square_dist <= Math.pow(r, 2));
}
 
