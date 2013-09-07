var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* grey (default), red, blue, green, orange, purple */
var colors = ["#D0D0D0", "#FF6347", "#40E0D0", "#9ACD32", "#FFA500", "#6A5ACD"];
var radius = 10;
var line = 3;

function circle(ctx, cx, cy, radius) {
    ctx.arc(cx, cy, radius, 0, 2*Math.PI, true);
}

/* G: Graph */
function renderFirstGraph(G) {
	ctx.clearRect(0, 0, 700, 700);

	//generate array of "random" locations
	var locs = setLocs(G.numVertices);

	//set vertices at locations
	for(var i = 0; i < G.numVertices; i++) {
		G.vertices[i].loc = locs[i];
	}

	//draw graph edges
	for(var i = 0; i < G.numVertices; i++) {
		ctx.lineWidth = line;

		var currVertex = G.vertices[i];
		var numNeighbors = currVertex.neighbors.length;
		var p1 = currVertex.loc;

		for(var i = 0; i < numNeighbors; i++) {
			var p2 = currVertex.neighbors[i].loc;
			
			ctx.moveTo(p1.x, p1.y);
			ctx.lineTo(p2.x, p2.y);
			ctx.stroke();
		}
	}

	updateColors(G);
}

/* G: Graph */
function updateColors(G) {

	for(var i = 0; i < G.numVertices; i++) {
		var V = G.numVertices[i];

		ctx.fillStyle = V.color;

		ctx.beginPath();
		var cx = V.loc.x;
		var cy = V.loc.y;
		circle(ctx, cx, cy, radius);
		ctx.fill();
	}
}

/* i: number of vertices, returns: array of points */
function setLocs(i) {
	//min radius: 100, max radius: 300


	for(int j = 0; j < i; j++) {

	}
}

