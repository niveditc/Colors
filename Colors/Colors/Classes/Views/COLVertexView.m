//
//  COLVertexView.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLVertexView.h"

#define DEGREES_TO_RADIANS(degrees)  ((M_PI * degrees)/ 180)
#define VERTEX_RADIUS 10.0f

@implementation COLVertexView

- (id)initWithVertex:(COLVertex *)vertex
{
    self = [super initWithFrame:CGRectMake(vertex.loc.x,
                                           vertex.loc.y,
                                           2*VERTEX_RADIUS,
                                           2*VERTEX_RADIUS)];
    if (self) {
        self.backgroundColor = [UIColor clearColor];
    }
    return self;
}

- (void)drawRect:(CGRect)rect
{
    CGContextRef ctx = UIGraphicsGetCurrentContext();
    CGPoint center = CGPointMake(self.frame.size.width / 2, self.frame.size.height / 2);
    CGContextSetFillColorWithColor(ctx, [UIColor redColor].CGColor);
    CGContextAddArc(ctx, center.x, center.y, VERTEX_RADIUS, 0, 2*M_PI, NO);
    CGContextDrawPath(ctx, kCGPathFill);
}

@end
