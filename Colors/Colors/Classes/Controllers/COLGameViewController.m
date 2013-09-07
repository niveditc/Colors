//
//  COLGameViewController.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLGameViewController.h"
#import "COLGraph.h"

@interface COLGameViewController ()

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


    
    self.view = view;
}

- (void)viewWillLayoutSubviews
{
    CGSize selfSize = self.view.frame.size;


}

- (void)viewDidLoad
{
    [super viewDidLoad];
}

@end
