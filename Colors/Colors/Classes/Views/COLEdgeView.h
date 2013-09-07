//
//  COLEdgeView.h
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import <UIKit/UIKit.h>

@class COLVertex;

@interface COLEdgeView : UIView

@property (strong, nonatomic) COLVertex *v1;
@property (strong, nonatomic) COLVertex *v2;

+ (instancetype)connect:(COLVertex *)v1 to:(COLVertex *)v2;

@end
