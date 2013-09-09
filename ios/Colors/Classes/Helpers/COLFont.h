//
//  HWFont.h
//  HisWords
//
//  Created by Isaac Lim on 8/13/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface COLFont : NSObject

+ (UIFont *)smallFont;
+ (UIFont *)mediumFont;
+ (UIFont *)largeFont;

+ (UIFont *)smallBoldFont;
+ (UIFont *)mediumBoldFont;
+ (UIFont *)largeBoldFont;

+ (UIFont *)variableSizeFont:(CGFloat)size;
+ (UIFont *)variableSizeBoldFont:(CGFloat)size;

@end
