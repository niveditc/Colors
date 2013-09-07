function Vertex{
    this.neighbors = [];
    this.color = 0;
}

function Graph(numVertices) {
    this.numVertices = numVertices;
    this.vertices = new Array(numVertices);
    for(var i = 0; i < num_vertices; i++){
        this.vertices[i] = new Vertex();
    }
}


var verifyColoring = function(g){
    for(var j = 0; j < g.numVertices; j++){
        if(!checkNeighbors(g.vertices[i])){
            return false;
        }
    }
    return true;
}
