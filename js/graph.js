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

/* V: Vertex */
function checkNeighbors(V) {
	V.neighbors.each(function() {

	});
}