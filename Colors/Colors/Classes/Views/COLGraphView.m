//
//  COLGraphView.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLGraphView.h"
#import "COLVertexView.h"
#import "COLVertex.h"

@implementation COLGraphView

- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {

    }
    return self;
}

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect
{
    // Drawing code
}
*/

- (void)computeVertexLocations
{
    NSInteger numVertices = self.graph.numVertices;
    double deg = (M_PI * 2) / (double)numVertices;

    for (NSInteger j = 0; j < numVertices; j++) {
        double angle = j * deg;
        double rad = (arc4random() % 120) + 40;

        /* use trig to find position from (350, 350) */
		double changeX = rad * cos(angle);
		double changeY = rad * sin(angle);

		/* Add new point to array with offset from center */
        COLVertex *vertex = [self.graph.vertices objectAtIndex:j];
        vertex.loc = CGPointMake(160+changeX, 160+changeY);
    }
}

- (void)renderGraph:(COLGraph *)graph
{
    self.graph = graph;

    [self computeVertexLocations];

    for (NSInteger i = 0; i < self.graph.vertices.count; i++) {
        COLVertex *vertex = [self.graph.vertices objectAtIndex:i];
        COLVertexView *vertexView = [[COLVertexView alloc] initWithVertex:vertex];
        [self addSubview:vertexView];
    }
}

#pragma mark - Helpers


@end
