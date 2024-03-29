var vertices = new Array(4);
vertices[0] = new Vertex(0, [1, 3], 1);
vertices[1] = new Vertex(1, [0, 2], 2);
vertices[2] = new Vertex(2, [1, 3], 1);
vertices[3] = new Vertex(3, [0, 2], 2);

var G1 = new Graph(4);
G1.vertices[0].neighbors = [1, 3];
G1.vertices[1].neighbors = [0, 2];
G1.vertices[2].neighbors = [1, 3];
G1.vertices[3].neighbors = [0, 2];
G1.vertices[0].color = 1;
G1.vertices[1].color = 2;
G1.vertices[2].color = 1;
G1.vertices[3].color = 2;


var G2 = new Graph(4);
G2.vertices[0].neighbors = [1, 3];
G2.vertices[1].neighbors = [0, 2];
G2.vertices[2].neighbors = [1, 3];
G2.vertices[3].neighbors = [0, 2];
G2.vertices[0].color = 1;
G2.vertices[1].color = 1;
G2.vertices[2].color = 2;
G2.vertices[3].color = 2;

var G3 = new Graph(4);
G3.vertices[0].neighbors = [1, 2, 3];
G3.vertices[1].neighbors = [0, 2];
G3.vertices[2].neighbors = [1, 3];
G3.vertices[3].neighbors = [0, 2];
G3.vertices[0].color = 1;
G3.vertices[1].color = 2;
G3.vertices[2].color = 2;
G3.vertices[3].color = 3;

var G4 = new Graph(4);
G4.vertices[0].neighbors = [1, 2, 3];
G4.vertices[1].neighbors = [0, 2];
G4.vertices[2].neighbors = [1, 3];
G4.vertices[3].neighbors = [0, 2];
G4.vertices[0].color = 1;
G4.vertices[1].color = 2;
G4.vertices[2].color = 3;
G4.vertices[3].color = 2;

var G5 = new Graph(4);
G5.vertices[0].neighbors = [1, 2, 3];
G5.vertices[1].neighbors = [0, 2, 3];
G5.vertices[2].neighbors = [0, 1, 3];
G5.vertices[3].neighbors = [0, 1, 2];
G5.vertices[0].color = 1;
G5.vertices[1].color = 2;
G5.vertices[2].color = 3;
G5.vertices[3].color = 4;


//DISJOINT GRAPHS FOLLOW - THESE ARE NOT VALID!!
var DG1 = new Graph(4);
DG1.vertices[0].neighbors = [];
DG1.vertices[1].neighbors = [];
DG1.vertices[2].neighbors = [];
DG1.vertices[3].neighbors = [];

var DG2 = new Graph(4);
DG2.vertices[0].neighbors = [1];
DG2.vertices[1].neighbors = [0];
DG2.vertices[2].neighbors = [];
DG2.vertices[3].neighbors = [];

var DG3 = new Graph(4);
DG3.vertices[0].neighbors = [1, 3];
DG3.vertices[1].neighbors = [0];
DG3.vertices[2].neighbors = [];
DG3.vertices[3].neighbors = [0];

var DG4 = new Graph(4);
DG4.vertices[0].neighbors = [1, 3];
DG4.vertices[1].neighbors = [0, 3];
DG4.vertices[2].neighbors = [0, 1];
DG4.vertices[3].neighbors = [];

var DG5 = new Graph(4);
DG5.vertices[0].neighbors = [1];
DG5.vertices[1].neighbors = [0];
DG5.vertices[2].neighbors = [3];
DG5.vertices[3].neighbors = [2];



console.log("TEST 1");
if(verifyColoring(G1) && isConnected(G1)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}


console.log("TEST 2");
if(!verifyColoring(G2) && isConnected(G2)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}


console.log("TEST 3");
if(!verifyColoring(G3) && isConnected(G3)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}


console.log("TEST 4");
if(verifyColoring(G4) && isConnected(G4)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}


console.log("TEST 5");
if(verifyColoring(G5) && isConnected(G5)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}

console.log("TEST 6");
if(!isConnected(DG1)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}


console.log("TEST 7");
if(!isConnected(DG2)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}

console.log("TEST 8");
if(!isConnected(DG3)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}

console.log("TEST 9");
if(!isConnected(DG4)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}

console.log("TEST 10");
if(!isConnected(DG5)){
    console.log("PASSED");
} else{
    console.log("FAILED");
}
//console.log('lol');
