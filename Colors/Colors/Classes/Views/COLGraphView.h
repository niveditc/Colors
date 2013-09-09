//
//  COLGraphView.h
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "COLGraph.h"

@interface COLGraphView : UIView

@property (strong, nonatomic) COLGraph *graph;

- (void)renderGraph:(COLGraph *)graph;

@end
