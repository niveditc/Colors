//
//  HWFont.m
//  HisWords
//
//  Created by Isaac Lim on 8/13/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import "COLFont.h"

#define BaseName @"HelveticaNeue"

@implementation COLFont

+ (UIFont *)smallFont
{
    return [UIFont fontWithName:FontType(@"Light") size:16];
}

+ (UIFont *)mediumFont
{
    return [UIFont fontWithName:FontType(@"Light") size:22];
}

+ (UIFont *)largeFont
{
    return [UIFont fontWithName:FontType(@"Light") size:28];
}

+ (UIFont *)variableSizeFont:(CGFloat)size
{
    return [UIFont fontWithName:FontType(@"Light") size:size];
}

+ (UIFont *)smallBoldFont
{
    return [UIFont fontWithName:FontType(@"Medium") size:16];
}

+ (UIFont *)mediumBoldFont
{
    return [UIFont fontWithName:FontType(@"Medium") size:22];
}

+ (UIFont *)largeBoldFont
{
    return [UIFont fontWithName:FontType(@"Medium") size:28];
}

+ (UIFont *)variableSizeBoldFont:(CGFloat)size
{
    return [UIFont fontWithName:FontType(@"Medium") size:size];
}

#pragma mark - Helper

NSString *FontType(NSString *type)
{
    return [NSString stringWithFormat:@"%@-%@", BaseName, type];
}

@end
