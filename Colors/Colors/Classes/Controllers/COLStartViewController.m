//
//  COLStartViewController.m
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLStartViewController.h"
#import "COLGameViewController.h"

@interface COLStartViewController ()

@property (strong, nonatomic) UIView *container;
@property (strong, nonatomic) UIImageView *logo;
@property (strong, nonatomic) UIButton *startButton;

@end

@implementation COLStartViewController

- (id)init
{
    self = [super init];
    if (self) {

    }
    return self;
}

- (void)loadView
{
    UIView *view = [[UIView alloc] initWithFrame:[UIScreen mainScreen].bounds];

    _container = [[UIView alloc] init];
    [view addSubview:_container];

    _logo = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"logo"]];
    [_container addSubview:_logo];

    _startButton = [UIButton buttonWithType:UIButtonTypeCustom];
    [_startButton setTitle:@"start" forState:UIControlStateNormal];
    [_startButton setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [_startButton setTitleColor:[UIColor grayColor] forState:UIControlStateHighlighted];
    _startButton.titleLabel.font = [COLFont mediumFont];
    [_startButton addTarget:self action:@selector(startNewGame:) forControlEvents:UIControlEventTouchUpInside];
    [_startButton sizeToFit];
    [_container addSubview:_startButton];

    self.view = view;
}

- (void)viewWillLayoutSubviews
{
    CGSize selfSize = self.view.frame.size;

    CGFloat totalHeight = CGRectGetHeight(_logo.frame)+CGRectGetHeight(_startButton.frame);

    _container.frame = CGRectMake(0,
                                  (selfSize.height-totalHeight)/2,
                                  selfSize.width,
                                  totalHeight);

    CGRect logoFrame = _logo.frame;
    logoFrame.origin = CGPointMake((selfSize.width-CGRectGetWidth(_logo.frame))/2,
                                   0);
    _logo.frame = logoFrame;

    CGRect startButtonFrame = _startButton.frame;
    startButtonFrame.origin = CGPointMake((selfSize.width-CGRectGetWidth(_startButton.frame))/2,
                                          CGRectGetMaxY(_logo.frame));
    _startButton.frame = startButtonFrame;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
}

- (IBAction)startNewGame:(id)sender
{
    [UIView animateWithDuration:0.3 delay:0 options:UIViewAnimationOptionCurveEaseInOut animations:^{

        CGRect containerFrame = _container.frame;
        containerFrame.origin.y = CGRectGetHeight(self.view.frame);
        _container.frame = containerFrame;

    } completion:^(BOOL finished) {
        [_container removeFromSuperview];

        COLGameViewController *gameViewController = [[COLGameViewController alloc] init];
        gameViewController.modalTransitionStyle = UIModalTransitionStyleCrossDissolve;
        [self presentViewController:gameViewController animated:YES completion:nil];
    }];
}

@end
