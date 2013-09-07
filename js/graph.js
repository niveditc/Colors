function Vertex(index){
	this.index = index;
    this.neighbors = [];
    this.color = 0;
}

function Graph(numVertices) {
    this.numVertices = numVertices;
    this.vertices = new Array(numVertices);
    for(var i = 0; i < num_vertices; i++){
        this.vertices[i] = new Vertex(i);
    }
}

/* G: Graph, V: Vertex */
function checkNeighbors(G, V) {
	
	V.neighbors.each(function(i) {
		var nVertex = G.vertices[i];
		if(V.color == nVertex.color) {
			return false;
		}
	});

	return true;
}