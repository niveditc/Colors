//
//  COLGameViewController.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLGameViewController.h"
#import "COLGraphView.h"

@interface COLGameViewController ()

@property (strong, nonatomic) COLGraphView *graphView;

@end

@implementation COLGameViewController

- (id)init
{
    self = [super init];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)loadView
{
    UIView *view = [[UIView alloc] initWithFrame:[UIScreen mainScreen].bounds];

    CGSize selfSize = view.frame.size;

    _graphView = [[COLGraphView alloc] initWithFrame:CGRectMake(0, 0, selfSize.width, selfSize.width)];
    _graphView.backgroundColor = [UIColor yellowColor];
    [view addSubview:_graphView];
    
    self.view = view;
}

//- (void)viewWillLayoutSubviews
//{
//    CGSize selfSize = self.view.frame.size;
//
//    
//}

- (void)viewDidLoad
{
    [super viewDidLoad];

    COLGraph *graph = [COLGraph randomlyGenerateWithNumVertices:15];
    [_graphView renderGraph:graph];
}

@end
