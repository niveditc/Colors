//
//  COLVertex.h
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef enum {
    COLColorNone = 0,
    COLColorRed,
    COLColorBlue
} COLColor;

@interface COLVertex : NSObject

@property (assign, nonatomic) NSInteger index;
@property (strong, nonatomic) NSMutableArray *neighbors; /* Contains NSNumbers */
@property (assign, nonatomic) COLColor color;
@property (assign, nonatomic) CGPoint loc;

- (BOOL)isColored;
- (BOOL)isNeighborOf:(COLVertex *)vertex;
- (void)joinWithEdge:(COLVertex *)vertex;

@end
