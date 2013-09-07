function Vertex(index){
    this.index = index;
    this.neighbors = [];
    this.color = 0;
}


function Graph(numVertices) {
    this.numVertices = numVertices;
    this.vertices = new Array(numVertices);
    for(var i = 0; i < numVertices; i++){
        this.vertices[i] = new Vertex(i);
    }
}


/* G: Graph, V: Vertex */
function checkNeighbors(G, V) {
    for(var j = 0; j < V.neighbors.length; j++){
        var nVertex = G.vertices[V.neighbors[j]];
        if(V.color == nVertex.color) {
            return false;
        }
    }
    return true;
}

/* G: Graph */
function allColored(G) {
	G.each(function(v) {
		if(V.color == 0) {
			return false
		}
	});

	return true;
}

/* G: Graph, v: vertex index, c: color index */
function updateColor(G, v, c) {
	var V = G.vertices[v];

	V.color = c;
	if(checkNeighbors(G, V)) {
		/* New Coloring is Valid */
		if(allColored(G)) {
			if(verifyColoring(G)) {
				/* User beat level */

			}

			return true;
		}
	}
	else {
		/* Alert user error */

		return false;
	}
}

var verifyColoring = function(g){
    for(var j = 0; j < g.numVertices; j++){
        if(!checkNeighbors(g, g.vertices[j])){
            return false;
        }
    }
    return true;
}


