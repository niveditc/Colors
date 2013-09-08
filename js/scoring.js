function determineColorsUsed(graph){
    var colors = [false, false, false, false, false]; //<= 5 colors always
    for(var i = 0; i < graph.numVertices; i++){
        var curV = graph.vertices[i];
        colors[curV.color] = true;
    }

    var numUsed = 0;
    for(var i = 0; i < 5; i++) {
        if(colors[i]) {
            numUsed ++;
        }
    }
    return numUsed;
}

//Number of colors left are the bonus
function getBonus(graph){
    var numColors = 5;
    return numColors - determineColorsUsed(graph);
}

// + 10*(level/10 + 1) for each color left after finishing the coloring
// Level number * 10 for clearing the level
function calculateScore(level, graph){
    var score = level*10;
    score += 10*(level/10 + 1)*getBonus(graph);
    return score;
}
