//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: D:\Java\github_ashera\AbsoluteLayout\ios\src\main\java\r\android\widget\AbsoluteLayout.java
//

#include "AbsoluteLayout.h"
#include "J2ObjC_source.h"
#include "View.h"
#include "ViewGroup.h"
#include "java/lang/Math.h"


@implementation ADAbsoluteLayout

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  ADAbsoluteLayout_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)onMeasureWithInt:(jint)widthMeasureSpec
                 withInt:(jint)heightMeasureSpec {
  jint count = [self getChildCount];
  jint maxHeight = 0;
  jint maxWidth = 0;
  [self measureChildrenWithInt:widthMeasureSpec withInt:heightMeasureSpec];
  for (jint i = 0; i < count; i++) {
    ADView *child = [self getChildAtWithInt:i];
    if ([((ADView *) nil_chk(child)) getVisibility] != ADView_GONE) {
      jint childRight;
      jint childBottom;
      ADAbsoluteLayout_LayoutParams *lp = (ADAbsoluteLayout_LayoutParams *) cast_chk([child getLayoutParams], [ADAbsoluteLayout_LayoutParams class]);
      childRight = ((ADAbsoluteLayout_LayoutParams *) nil_chk(lp))->x_ + [child getMeasuredWidth];
      childBottom = lp->y_ + [child getMeasuredHeight];
      maxWidth = JavaLangMath_maxWithInt_withInt_(maxWidth, childRight);
      maxHeight = JavaLangMath_maxWithInt_withInt_(maxHeight, childBottom);
    }
  }
  maxWidth += mPaddingLeft_ + mPaddingRight_;
  maxHeight += mPaddingTop_ + mPaddingBottom_;
  maxHeight = JavaLangMath_maxWithInt_withInt_(maxHeight, [self getSuggestedMinimumHeight]);
  maxWidth = JavaLangMath_maxWithInt_withInt_(maxWidth, [self getSuggestedMinimumWidth]);
  [self setMeasuredDimensionWithInt:ADView_resolveSizeAndStateWithInt_withInt_withInt_(maxWidth, widthMeasureSpec, 0) withInt:ADView_resolveSizeAndStateWithInt_withInt_withInt_(maxHeight, heightMeasureSpec, 0)];
}

- (ADViewGroup_LayoutParams *)generateDefaultLayoutParams {
  return new_ADAbsoluteLayout_LayoutParams_initWithInt_withInt_withInt_withInt_(ADViewGroup_LayoutParams_WRAP_CONTENT, ADViewGroup_LayoutParams_WRAP_CONTENT, 0, 0);
}

- (void)onLayoutWithBoolean:(jboolean)changed
                    withInt:(jint)l
                    withInt:(jint)t
                    withInt:(jint)r
                    withInt:(jint)b {
  jint count = [self getChildCount];
  for (jint i = 0; i < count; i++) {
    ADView *child = [self getChildAtWithInt:i];
    if ([((ADView *) nil_chk(child)) getVisibility] != ADView_GONE) {
      ADAbsoluteLayout_LayoutParams *lp = (ADAbsoluteLayout_LayoutParams *) cast_chk([child getLayoutParams], [ADAbsoluteLayout_LayoutParams class]);
      jint childLeft = mPaddingLeft_ + ((ADAbsoluteLayout_LayoutParams *) nil_chk(lp))->x_;
      jint childTop = mPaddingTop_ + lp->y_;
      [child layoutWithInt:childLeft withInt:childTop withInt:childLeft + [child getMeasuredWidth] withInt:childTop + [child getMeasuredHeight]];
    }
  }
}

- (jboolean)checkLayoutParamsWithADViewGroup_LayoutParams:(ADViewGroup_LayoutParams *)p {
  return [p isKindOfClass:[ADAbsoluteLayout_LayoutParams class]];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x4, 0, 1, -1, -1, -1, -1 },
    { NULL, "LADViewGroup_LayoutParams;", 0x4, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x4, 2, 3, -1, -1, -1, -1 },
    { NULL, "Z", 0x4, 4, 5, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(onMeasureWithInt:withInt:);
  methods[2].selector = @selector(generateDefaultLayoutParams);
  methods[3].selector = @selector(onLayoutWithBoolean:withInt:withInt:withInt:withInt:);
  methods[4].selector = @selector(checkLayoutParamsWithADViewGroup_LayoutParams:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "onMeasure", "II", "onLayout", "ZIIII", "checkLayoutParams", "LADViewGroup_LayoutParams;", "LADAbsoluteLayout_LayoutParams;LADAbsoluteLayout_AbsoulteLayout;" };
  static const J2ObjcClassInfo _ADAbsoluteLayout = { "AbsoluteLayout", "r.android.widget", ptrTable, methods, NULL, 7, 0x1, 5, 0, -1, 6, -1, -1, -1 };
  return &_ADAbsoluteLayout;
}

@end

void ADAbsoluteLayout_init(ADAbsoluteLayout *self) {
  ADViewGroup_init(self);
}

ADAbsoluteLayout *new_ADAbsoluteLayout_init() {
  J2OBJC_NEW_IMPL(ADAbsoluteLayout, init)
}

ADAbsoluteLayout *create_ADAbsoluteLayout_init() {
  J2OBJC_CREATE_IMPL(ADAbsoluteLayout, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(ADAbsoluteLayout)

@implementation ADAbsoluteLayout_LayoutParams

- (instancetype)initWithInt:(jint)width
                    withInt:(jint)height
                    withInt:(jint)x
                    withInt:(jint)y {
  ADAbsoluteLayout_LayoutParams_initWithInt_withInt_withInt_withInt_(self, width, height, x, y);
  return self;
}

- (instancetype)initWithADViewGroup_LayoutParams:(ADViewGroup_LayoutParams *)source {
  ADAbsoluteLayout_LayoutParams_initWithADViewGroup_LayoutParams_(self, source);
  return self;
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithInt:withInt:withInt:withInt:);
  methods[1].selector = @selector(initWithADViewGroup_LayoutParams:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "x_", "I", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "y_", "I", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "IIII", "LADViewGroup_LayoutParams;", "LADAbsoluteLayout;" };
  static const J2ObjcClassInfo _ADAbsoluteLayout_LayoutParams = { "LayoutParams", "r.android.widget", ptrTable, methods, fields, 7, 0x9, 2, 2, 2, -1, -1, -1, -1 };
  return &_ADAbsoluteLayout_LayoutParams;
}

@end

void ADAbsoluteLayout_LayoutParams_initWithInt_withInt_withInt_withInt_(ADAbsoluteLayout_LayoutParams *self, jint width, jint height, jint x, jint y) {
  ADViewGroup_LayoutParams_initWithInt_withInt_(self, width, height);
  self->x_ = x;
  self->y_ = y;
}

ADAbsoluteLayout_LayoutParams *new_ADAbsoluteLayout_LayoutParams_initWithInt_withInt_withInt_withInt_(jint width, jint height, jint x, jint y) {
  J2OBJC_NEW_IMPL(ADAbsoluteLayout_LayoutParams, initWithInt_withInt_withInt_withInt_, width, height, x, y)
}

ADAbsoluteLayout_LayoutParams *create_ADAbsoluteLayout_LayoutParams_initWithInt_withInt_withInt_withInt_(jint width, jint height, jint x, jint y) {
  J2OBJC_CREATE_IMPL(ADAbsoluteLayout_LayoutParams, initWithInt_withInt_withInt_withInt_, width, height, x, y)
}

void ADAbsoluteLayout_LayoutParams_initWithADViewGroup_LayoutParams_(ADAbsoluteLayout_LayoutParams *self, ADViewGroup_LayoutParams *source) {
  ADViewGroup_LayoutParams_initWithADViewGroup_LayoutParams_(self, source);
}

ADAbsoluteLayout_LayoutParams *new_ADAbsoluteLayout_LayoutParams_initWithADViewGroup_LayoutParams_(ADViewGroup_LayoutParams *source) {
  J2OBJC_NEW_IMPL(ADAbsoluteLayout_LayoutParams, initWithADViewGroup_LayoutParams_, source)
}

ADAbsoluteLayout_LayoutParams *create_ADAbsoluteLayout_LayoutParams_initWithADViewGroup_LayoutParams_(ADViewGroup_LayoutParams *source) {
  J2OBJC_CREATE_IMPL(ADAbsoluteLayout_LayoutParams, initWithADViewGroup_LayoutParams_, source)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(ADAbsoluteLayout_LayoutParams)

@implementation ADAbsoluteLayout_AbsoulteLayout

- (instancetype)initWithADAbsoluteLayout:(ADAbsoluteLayout *)outer$ {
  ADAbsoluteLayout_AbsoulteLayout_initWithADAbsoluteLayout_(self, outer$);
  return self;
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x0, -1, 0, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithADAbsoluteLayout:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "LADAbsoluteLayout;" };
  static const J2ObjcClassInfo _ADAbsoluteLayout_AbsoulteLayout = { "AbsoulteLayout", "r.android.widget", ptrTable, methods, NULL, 7, 0x0, 1, 0, 0, -1, -1, -1, -1 };
  return &_ADAbsoluteLayout_AbsoulteLayout;
}

@end

void ADAbsoluteLayout_AbsoulteLayout_initWithADAbsoluteLayout_(ADAbsoluteLayout_AbsoulteLayout *self, ADAbsoluteLayout *outer$) {
  NSObject_init(self);
}

ADAbsoluteLayout_AbsoulteLayout *new_ADAbsoluteLayout_AbsoulteLayout_initWithADAbsoluteLayout_(ADAbsoluteLayout *outer$) {
  J2OBJC_NEW_IMPL(ADAbsoluteLayout_AbsoulteLayout, initWithADAbsoluteLayout_, outer$)
}

ADAbsoluteLayout_AbsoulteLayout *create_ADAbsoluteLayout_AbsoulteLayout_initWithADAbsoluteLayout_(ADAbsoluteLayout *outer$) {
  J2OBJC_CREATE_IMPL(ADAbsoluteLayout_AbsoulteLayout, initWithADAbsoluteLayout_, outer$)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(ADAbsoluteLayout_AbsoulteLayout)