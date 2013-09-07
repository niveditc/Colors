var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* grey (default), red, blue, green, orange, purple */
var colors = ["#D0D0D0", "#FF6347", "#40E0D0", "#9ACD32", "#FFA500", "#6A5ACD"];
var radius = 10;
var line = 2;

function circle(ctx, cx, cy, radius) {
    ctx.arc(cx, cy, radius, 0, 2*Math.PI, true);
}

renderFirstGraph(G1);

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
		ctx.strokeStyle = "#919191";

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
}

/* G: Graph */
function updateColors(G) {

	for(var i = 0; i < G.numVertices; i++) {
		var V = G.vertices[i];

		if(V) {
			console.log(V.color);
			ctx.fillStyle = colors[V.color];

			ctx.beginPath();
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
		var rad = Math.floor(Math.random()* 200) + 130;

		/* use trig to find position from (350, 350) */
		var changeX = rad * Math.cos(angle);
		var changeY = rad * Math.sin(angle);

		/* Add new point to array with offset from center */
		locArray[j] = new Point(350 + changeX, 350 + changeY);
	}

	return locArray;
}

