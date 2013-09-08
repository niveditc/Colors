//
//  COLGameViewController.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLGameViewController.h"
#import "COLGraphView.h"
#import "COLColorControls.h"

@interface COLGameViewController ()

@property (strong, nonatomic) COLGraphView *graphView;
@property (strong, nonatomic) COLColorControls *colorControl;

@end

@implementation COLGameViewController

- (id)init
{
    self = [super init];
    if (self) {
        CGFloat colorControlHeight = 70;
        _colorControl = [[COLColorControls alloc] initWithFrame:CGRectMake(5,
                                                                           self.view.frame.size.height-colorControlHeight,
                                                                           self.view.frame.size.width,
                                                                           colorControlHeight)];
        [self.view addSubview:_colorControl];
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];

    self.navigationItem.title = @"Colors";
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"New game"
                                                                             style:UIBarButtonItemStyleBordered
                                                                            target:self
                                                                            action:@selector(newGame:)];


    [self newGame:nil];
}

- (IBAction)newGame:(id)sender
{
    if (_graphView) {
        [_graphView removeFromSuperview];
    }
    
    CGSize selfSize = self.view.frame.size;
    _graphView = [[COLGraphView alloc] initWithFrame:CGRectMake(0,
                                                                (selfSize.height-selfSize.width)/2,
                                                                selfSize.width,
                                                                selfSize.width)];
    [self.view addSubview:_graphView];

    COLGraph *graph = [COLGraph randomlyGenerateWithNumVertices:5];
    [_graphView renderGraph:graph];
}

@end
