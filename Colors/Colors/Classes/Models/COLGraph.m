//
//  COLGraph.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLGraph.h"
#import "COLVertex.h"

@implementation COLGraph

- (instancetype)initWithNumVertices:(NSInteger)numVertices
{
    self = [super init];
    if (self) {
        NSMutableArray *tmpVertices = [NSMutableArray array];
        for (int i = 0; i < numVertices; i++) {
            COLVertex *vertex = [[COLVertex alloc] init];
            vertex.index = i;
            [tmpVertices addObject:vertex];
        }
        self.vertices = tmpVertices;
    }
    return self;
}

+ (instancetype)randomlyGenerateWithNumVertices:(NSInteger)numVertices
{
    COLGraph *graph = [[COLGraph alloc] initWithNumVertices:numVertices];
    NSInteger numEdges = graph.numVertices;
    NSInteger edgeCount = 0;

    while (edgeCount < numEdges) {
        COLVertex *v1, *v2;
        [graph twoRandVerticesFirst:&v1 second:&v2];

        if (![v1 isNeighborOf:v2]) {
            [v1 joinWithEdge:v2]; // Same as [v2 joinWithEdge:v1];
            edgeCount++;
        }
    }

    if (![graph isConnected]) {
        return [COLGraph randomlyGenerateWithNumVertices:numVertices];
    }

    return graph;
}

- (BOOL)checkNeighborsOfVertex:(COLVertex *)vertex
{
    for (NSNumber *idx in vertex.neighbors) {
        COLVertex *aVertex = [self vertexAtIndex:[idx integerValue]];
        if (aVertex.color == vertex.color) {
            return NO;
        }
    }

    return YES;
}

- (BOOL)allColored
{
    for (COLVertex *vertex in self.vertices) {
        if (![vertex isColored]) {
            return NO;
        }
    }

    return YES;
}

- (BOOL)updateColorofVertexAtIndex:(NSInteger)idx toColor:(COLColor)color
{
    COLVertex *vertex = [self vertexAtIndex:idx];
    vertex.color = color;

    if ([self checkNeighborsOfVertex:vertex]) {
        if ([self allColored]) {
            if ([self verifyColoring]) {
                /* User beat level */
            }
        }
    }
    else {
        /* Alert user error */
        return NO;
    }

    return YES;
}

- (BOOL)verifyColoring
{
    for (COLVertex *vertex in self.vertices) {
        if (![self checkNeighborsOfVertex:vertex]) {
            return NO;
        }
    }

    return YES;
}

- (BOOL)isConnected
{
    for (int i = 1; i < self.numVertices; i++) {
        //BFS
        NSMutableArray *queue = [NSMutableArray array];
        [queue addObject:@(i)];

        NSMutableArray *visited = [NSMutableArray array];

        for (int j = 0; j < self.numVertices; j++) {
            visited[j] = @(NO);
        }

        BOOL reached = NO;
        while (queue.count > 0) {
            NSInteger current = [[queue objectAtIndex:0] integerValue];
            [queue removeObjectAtIndex:0];

            if (current == 0) {
                reached = YES;
                break;
            }
            visited[current] = @(YES);

            COLVertex *v = self.vertices[current];
            for (int k = 0; k < v.neighbors.count; k++) {
                NSInteger nghIdx = [v.neighbors[k] integerValue];
                if (!visited[nghIdx]) {
                    [queue addObject:@(k)];
                }
            }
        }

        //unless reached, vertex i is not connected to vertex 0 (not reached)
        if (!reached) {
            return NO;
        }
    }
    return YES;
}

#pragma mark - Helpers

- (NSInteger)randNum
{
    return arc4random() % self.numVertices;
}

- (void)twoRandVerticesFirst:(COLVertex **)v1 second:(COLVertex **)v2
{
    NSInteger i1 = [self randNum];
    NSInteger i2 = [self randNum];
    while (i2 == i1) {
        i2 = [self randNum];
    }

    *v1 = [self vertexAtIndex:i1];
    *v2 = [self vertexAtIndex:i2];
}

- (COLVertex *)vertexAtIndex:(NSInteger)index
{
    return [self.vertices objectAtIndex:index];
}

- (NSInteger)numVertices
{
    return self.vertices.count;
}

- (NSString *)description
{
    NSString *str = [NSString stringWithFormat:@"No. of vertices: %d", self.numVertices];
    str = [str stringByAppendingFormat:@"Vertices: %@", self.vertices];
    return str;
}

@end
