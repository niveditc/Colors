//
//  COLGraph.h
//  Colors
//
//  Created by Isaac Lim on 9/7/13.
//  Copyright (c) 2013 isaacl.net. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface COLGraph : NSObject

@property (assign, nonatomic, readonly) NSInteger numVertices;
@property (strong, nonatomic) NSArray *vertices;

+ (instancetype)randomlyGenerateWithNumVertices:(NSInteger)numVertices;

@end
