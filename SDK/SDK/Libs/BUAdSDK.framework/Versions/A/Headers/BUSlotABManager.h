//
//  BUSlotABManager.h
//  BUAdSDK
//
//  Created by shenqichen on 2021/11/2.
//

#import <Foundation/Foundation.h>
#import "BUAdSlot.h"

NS_ASSUME_NONNULL_BEGIN

typedef void (^BUSlotABFetchCompletion)(NSString * _Nullable slotId, BUAdSlotAdType slotType, NSError * _Nullable error);

@interface BUSlotABManager : NSObject

+ (instancetype)sharedInstance;

/// Decide the slot to load ad for AB test.
/// @param codeGroupId unique id for slot ab test
/// @param completion callback in main thread, return the slot info to load ad
- (void)fetchSlotWithCodeGroupId:(NSInteger)codeGroupId completion:(BUSlotABFetchCompletion)completion;

@end

NS_ASSUME_NONNULL_END
