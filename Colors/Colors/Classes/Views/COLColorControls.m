//
//  COLColorControls.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLColorControls.h"
#import "ILSideScrollView.h"

@implementation COLColorControls

- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        [self setupScroller];
    }
    return self;
}

- (void)setupScroller {
    NSMutableArray *items = [NSMutableArray array];

    ILSideScrollViewItem *item1 = [ILSideScrollViewItem item];
    item1.defaultTitleColor = [UIColor redColor];
    [items addObject:item1];

    ILSideScrollViewItem *item2 = [ILSideScrollViewItem item];
    item2.defaultTitleColor = [UIColor greenColor];
    [items addObject:item2];

    ILSideScrollViewItem *item3 = [ILSideScrollViewItem item];
    item3.defaultTitleColor = [UIColor purpleColor];
    [items addObject:item3];

    ILSideScrollViewItem *item4 = [ILSideScrollViewItem item];
    item4.defaultTitleColor = [UIColor blueColor];
    [items addObject:item4];

    scroller1 = [[ILSideScrollView alloc] initWithFrame:
                 CGRectMake(0,
                            0,
                            self.view.frame.size.width,
                            100)];
    [scroller1 populateSideScrollViewWithItems:items];

    [self.view addSubview:scroller1];
}

@end
