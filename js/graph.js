function Point(x,y) {
	this.x = x;
	this.y = y;
}

function Vertex(index){
    this.index = index;
    this.neighbors = [];
    this.color = 0;
    this.loc = new Point(0,0);
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

function verifyColoring(G){
    for(var j = 0; j < G.numVertices; j++){
        if(!checkNeighbors(G, G.vertices[j])){
            return false;
        }
    }
    return true;
}

function isConnected(G){
  outer: for(var i = 1; i < G.numVertices; i++){
        //BFS
        var queue = [i];
        var visited = G.vertices.map(function(i){ return false;});
        while(queue.length > 0){
            var current = queue.shift();
            if(current == 0) continue outer;
            visited[current] = true;
            var addToQ = G.vertices[current].neighbors.filter(function(i){
                    return !visited[i];
                });
            queue = queue.concat(addToQ);

        }
        //vertex i is not connected to vertex 0 (not reached)
        return false;
    }
    return true;
}



