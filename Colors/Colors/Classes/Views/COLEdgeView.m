//
//  COLEdgeView.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLEdgeView.h"
#import "COLVertex.h"
#import "COLVertexView.h"

@implementation COLEdgeView

- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        self.backgroundColor = [UIColor clearColor];
    }
    return self;
}

- (void)drawRect:(CGRect)rect
{
    CGContextRef context = UIGraphicsGetCurrentContext();
    if ([self isTopLeftBottomRight]) {
        CGContextMoveToPoint(context, 0, 0);
        CGContextAddLineToPoint(context, CGRectGetWidth(self.frame), CGRectGetHeight(self.frame));
    }
    else {
        CGContextMoveToPoint(context, 0, CGRectGetHeight(self.frame));
        CGContextAddLineToPoint(context, CGRectGetWidth(self.frame), 0);
    }
    CGContextStrokePath(context);
}

+ (instancetype)connect:(COLVertex *)v1 to:(COLVertex *)v2
{
    CGRect bounding = boundingRect(v1, v2);
    COLEdgeView *edge = [[COLEdgeView alloc] initWithFrame:bounding];
    edge.v1 = v1;
    edge.v2 = v2;
    [edge setNeedsDisplay];

    return edge;
}

CGPoint vMidPoint(COLVertex *v)
{
    return CGPointMake(v.loc.x+VERTEX_RADIUS, v.loc.y+VERTEX_RADIUS);
}

- (BOOL)isTopLeftBottomRight
{
    CGPoint v1p = vMidPoint(self.v1);
    CGPoint v2p = vMidPoint(self.v2);

    return (v2p.x <= v1p.x) && (v2p.y <= v1p.y);
}

CGRect boundingRect(COLVertex *v1, COLVertex *v2)
{
    CGPoint v1p = vMidPoint(v1);
    CGPoint v2p = vMidPoint(v2);

    return CGRectMake(fminf(v1p.x, v2p.x),
                      fminf(v1p.y, v2p.y),
                      fabsf(v1p.x-v2p.x),
                      fabsf(v1p.y-v2p.y));
}

@end
