//
//  COLVertexView.h
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "COLVertex.h"

@interface COLVertexView : UIView

@property (strong, nonatomic) COLVertex *vertex;

- (id)initWithVertex:(COLVertex *)vertex;

@end
