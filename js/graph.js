/***** Models *****/

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

Vertex.prototype.isEqual = function(v) {
    return (this.index === v.index);
}

Vertex.prototype.toString = function() {
    var str = "{ Index: ";
    str = str.concat(this.index + ", ");
    str = str.concat("Neighbors: [" + this.neighbors + "], ");
    str = str.concat("Color: " + this.color);
    str = str.concat(" }");

    return str;
}

function Graph(numVertices) {
    this.numVertices = numVertices;
    this.vertices = new Array(numVertices);
    for(var i = 0; i < numVertices; i++){
        this.vertices[i] = new Vertex(i);
    }
}

Graph.prototype.toString = function() {
    var str = "No. of vertices: ";
    str = str.concat(this.vertices.length + "\n\n");
    str = str.concat("Vertices: [");

    for (var i = 0; i < this.vertices.length; i++) {
        var vertex = this.vertices[i];
        var vertexStr = vertex.toString();
        str = str.concat(vertexStr + ", ");
    }

    return str;
}


/***** Functions *****/

function areNeighbors(v1, v2) {
    for (var i = 0; i < v1.neighbors.length; i++) {
        if (v1.neighbors[i] === v2.index) {
            /* Assuming vertex equality if have index equality */
            return true;
        }
    }

    return false;
}

function shouldJoinWithEdge(v1, v2) {
    var maxDegree = 3;

    if (v1.isEqual(v2) === true)
        return false;
    if (areNeighbors(v1, v2) === true)
        return false;
    if (v1.neighbors.length >= maxDegree)
        return false;
    if (v2.neighbors.length >= maxDegree)
        return false;

    return true;
}

/* Add v2's index to v1's neighbors, & vice versa */
function joinWithEdge(v1, v2) {
    v1.neighbors.push(v2.index);
    v2.neighbors.push(v1.index);
}

function randVertex(graph) {
    var numVertices = graph.vertices.length;
    var idx = Math.floor((Math.random()*numVertices));
    return graph.vertices[idx];
}

function generateGraph(numVertices, numEdges) {
    var graph = new Graph(numVertices);
    var edgeCount = 0;

    while (edgeCount < numEdges) {
        var v1 = randVertex(graph)
        var v2 = randVertex(graph)

        if (shouldJoinWithEdge(v1, v2)) {
            joinWithEdge(v1, v2);
            edgeCount++;
        }
    }

    return graph
}

var G = generateGraph(10, 15);
console.log(G.toString());

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

function verifyColoring(G) {
    for(var j = 0; j < G.numVertices; j++){
        if(!checkNeighbors(G, G.vertices[j])){
            return false;
        }
    }
    return true;
}

function isConnected(G) {
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
