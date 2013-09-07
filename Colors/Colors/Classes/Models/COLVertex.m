//
//  COLVertex.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLVertex.h"

@implementation COLVertex

- (instancetype)init
{
    self = [super init];
    if (self) {
        self.index = 0;
        self.neighbors = [NSMutableArray array];
        self.color = COLColorNone;
        self.loc = CGPointZero;
    }
    return self;
}

- (BOOL)isColored
{
    return self.color != COLColorNone;
}

- (BOOL)isEqual:(COLVertex *)vertex
{
    return self.index == vertex.index;
}

- (NSString *)description
{
    NSString *str = [NSString stringWithFormat:@"Index: %d", self.index];
    str = [str stringByAppendingFormat:@"Neighbors: %@", self.neighbors];
    str = [str stringByAppendingFormat:@"Color: %d", self.color];
    return str;
}

- (BOOL)isNeighborOf:(COLVertex *)vertex
{
    for (NSNumber *index in self.neighbors) {
        if ([index integerValue] == vertex.index) {
            return YES;
        }
    }

    return NO;
}

- (void)joinWithEdge:(COLVertex *)vertex
{
    [self.neighbors addObject:@(vertex.index)];
    [vertex.neighbors addObject:@(self.index)];
}

@end
