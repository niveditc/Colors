//
//  COLVertexView.h
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "COLVertex.h"

#define VERTEX_RADIUS 10.0f

@interface COLVertexView : UIView

@property (strong, nonatomic) COLVertex *vertex;

- (id)initWithVertex:(COLVertex *)vertex;

@end
