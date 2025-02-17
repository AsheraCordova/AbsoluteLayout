//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: D:\Java\github_ashera\AbsoluteLayout\ios\src\main\java\com\ashera\absolutelayout\AbsoluteLayoutImpl.java
//

#include "AbsoluteLayout.h"
#include "AbsoluteLayoutImpl.h"
#include "BaseHasWidgets.h"
#include "HasWidgets.h"
#include "IFragment.h"
#include "ILifeCycleDecorator.h"
#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "IWidget.h"
#include "IWidgetLifeCycleListener.h"
#include "J2ObjC_source.h"
#include "LayoutTransition.h"
#include "MeasureEvent.h"
#include "OnLayoutEvent.h"
#include "Rect.h"
#include "View.h"
#include "ViewGroup.h"
#include "ViewGroupImpl.h"
#include "ViewImpl.h"
#include "WidgetAttribute.h"
#include "WidgetFactory.h"
#include "java/lang/Integer.h"
#include "java/lang/Runnable.h"
#include "java/lang/UnsupportedOperationException.h"
#include "java/util/HashMap.h"
#include "java/util/List.h"
#include "java/util/Map.h"

#include <UIKit/UIKit.h>
#include "ASUIView.h"
#include "HasLifeCycleDecorators.h"

@protocol JavaUtilList;
@protocol JavaUtilMap;


#pragma clang diagnostic ignored "-Wprotocol"

@interface ASAbsoluteLayoutImpl () {
 @public
  id uiView_;
  ADAbsoluteLayout *absoluteLayout_;
}

- (void)setWidgetOnNativeClass;

- (void)nativeRemoveViewWithASIWidget:(id<ASIWidget>)widget;

- (void)createLayoutParamsWithADView:(ADView *)view;

- (ADAbsoluteLayout_LayoutParams *)getLayoutParamsWithADView:(ADView *)view;

@end

J2OBJC_FIELD_SETTER(ASAbsoluteLayoutImpl, uiView_, id)
J2OBJC_FIELD_SETTER(ASAbsoluteLayoutImpl, absoluteLayout_, ADAbsoluteLayout *)

__attribute__((unused)) static void ASAbsoluteLayoutImpl_setWidgetOnNativeClass(ASAbsoluteLayoutImpl *self);

__attribute__((unused)) static void ASAbsoluteLayoutImpl_nativeRemoveViewWithASIWidget_(ASAbsoluteLayoutImpl *self, id<ASIWidget> widget);

__attribute__((unused)) static void ASAbsoluteLayoutImpl_createLayoutParamsWithADView_(ASAbsoluteLayoutImpl *self, ADView *view);

__attribute__((unused)) static ADAbsoluteLayout_LayoutParams *ASAbsoluteLayoutImpl_getLayoutParamsWithADView_(ASAbsoluteLayoutImpl *self, ADView *view);

@interface ASAbsoluteLayoutImpl_AbsoluteLayoutExt () {
 @public
  __unsafe_unretained ASAbsoluteLayoutImpl *this$0_;
  ASMeasureEvent *measureFinished_;
  ASOnLayoutEvent *onLayoutEvent_;
  id<JavaUtilList> overlays_;
  jint mMaxWidth_;
  jint mMaxHeight_;
  id<JavaUtilMap> templates_;
}

@end

J2OBJC_FIELD_SETTER(ASAbsoluteLayoutImpl_AbsoluteLayoutExt, measureFinished_, ASMeasureEvent *)
J2OBJC_FIELD_SETTER(ASAbsoluteLayoutImpl_AbsoluteLayoutExt, onLayoutEvent_, ASOnLayoutEvent *)
J2OBJC_FIELD_SETTER(ASAbsoluteLayoutImpl_AbsoluteLayoutExt, overlays_, id<JavaUtilList>)
J2OBJC_FIELD_SETTER(ASAbsoluteLayoutImpl_AbsoluteLayoutExt, templates_, id<JavaUtilMap>)

@interface ASAbsoluteLayoutImpl_$Lambda$1 : NSObject < JavaLangRunnable > {
 @public
  id<ASIWidget> val$widget_;
}

- (void)run;

@end

J2OBJC_EMPTY_STATIC_INIT(ASAbsoluteLayoutImpl_$Lambda$1)

__attribute__((unused)) static void ASAbsoluteLayoutImpl_$Lambda$1_initWithASIWidget_(ASAbsoluteLayoutImpl_$Lambda$1 *self, id<ASIWidget> capture$0);

__attribute__((unused)) static ASAbsoluteLayoutImpl_$Lambda$1 *new_ASAbsoluteLayoutImpl_$Lambda$1_initWithASIWidget_(id<ASIWidget> capture$0) NS_RETURNS_RETAINED;

__attribute__((unused)) static ASAbsoluteLayoutImpl_$Lambda$1 *create_ASAbsoluteLayoutImpl_$Lambda$1_initWithASIWidget_(id<ASIWidget> capture$0);

NSString *ASAbsoluteLayoutImpl_LOCAL_NAME = @"AbsoluteLayout";
NSString *ASAbsoluteLayoutImpl_GROUP_NAME = @"AbsoluteLayout";

@implementation ASAbsoluteLayoutImpl

@synthesize uiView = uiView_;

- (void)loadAttributesWithNSString:(NSString *)localName {
  ASViewGroupImpl_register__WithNSString_(localName);
  ASWidgetFactory_registerAttributeWithNSString_withASWidgetAttribute_Builder_(localName, [((ASWidgetAttribute_Builder *) nil_chk([((ASWidgetAttribute_Builder *) nil_chk([new_ASWidgetAttribute_Builder_init() withNameWithNSString:@"layout_x"])) withTypeWithNSString:@"dimension"])) forChild]);
  ASWidgetFactory_registerAttributeWithNSString_withASWidgetAttribute_Builder_(localName, [((ASWidgetAttribute_Builder *) nil_chk([((ASWidgetAttribute_Builder *) nil_chk([new_ASWidgetAttribute_Builder_init() withNameWithNSString:@"layout_y"])) withTypeWithNSString:@"dimension"])) forChild]);
}

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  ASAbsoluteLayoutImpl_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (instancetype)initWithNSString:(NSString *)localname {
  ASAbsoluteLayoutImpl_initWithNSString_(self, localname);
  return self;
}

- (instancetype)initWithNSString:(NSString *)groupName
                    withNSString:(NSString *)localname {
  ASAbsoluteLayoutImpl_initWithNSString_withNSString_(self, groupName, localname);
  return self;
}

- (id<ASIWidget>)newInstance {
  return new_ASAbsoluteLayoutImpl_initWithNSString_withNSString_(groupName_, localName_);
}

- (void)createWithASIFragment:(id<ASIFragment>)fragment
              withJavaUtilMap:(id<JavaUtilMap>)params {
  [super createWithASIFragment:fragment withJavaUtilMap:params];
  absoluteLayout_ = new_ASAbsoluteLayoutImpl_AbsoluteLayoutExt_initWithASAbsoluteLayoutImpl_(self);
  [self nativeCreateWithJavaUtilMap:params];
  ASViewGroupImpl_registerCommandConveterWithASIWidget_(self);
  ASAbsoluteLayoutImpl_setWidgetOnNativeClass(self);
}

- (void)setWidgetOnNativeClass {
  ASAbsoluteLayoutImpl_setWidgetOnNativeClass(self);
}

- (id)asWidget {
  return absoluteLayout_;
}

- (jboolean)removeWithASIWidget:(id<ASIWidget>)w {
  jboolean remove = [super removeWithASIWidget:w];
  [((ADAbsoluteLayout *) nil_chk(absoluteLayout_)) removeViewWithADView:(ADView *) cast_chk([((id<ASIWidget>) nil_chk(w)) asWidget], [ADView class])];
  ASAbsoluteLayoutImpl_nativeRemoveViewWithASIWidget_(self, w);
  return remove;
}

- (jboolean)removeWithInt:(jint)index {
  id<ASIWidget> widget = [((id<JavaUtilList>) nil_chk(widgets_)) getWithInt:index];
  jboolean remove = [super removeWithInt:index];
  if (index + 1 <= [((ADAbsoluteLayout *) nil_chk(absoluteLayout_)) getChildCount]) {
    [((ADAbsoluteLayout *) nil_chk(absoluteLayout_)) removeViewAtWithInt:index];
    ASAbsoluteLayoutImpl_nativeRemoveViewWithASIWidget_(self, widget);
  }
  return remove;
}

- (void)nativeRemoveViewWithASIWidget:(id<ASIWidget>)widget {
  ASAbsoluteLayoutImpl_nativeRemoveViewWithASIWidget_(self, widget);
}

- (void)addWithASIWidget:(id<ASIWidget>)w
                 withInt:(jint)index {
  if (index != -2) {
    ADView *view = (ADView *) cast_chk([((id<ASIWidget>) nil_chk(w)) asWidget], [ADView class]);
    ASAbsoluteLayoutImpl_createLayoutParamsWithADView_(self, view);
    if (index == -1) {
      [((ADAbsoluteLayout *) nil_chk(absoluteLayout_)) addViewWithADView:view];
    }
    else {
      [((ADAbsoluteLayout *) nil_chk(absoluteLayout_)) addViewWithADView:view withInt:index];
    }
  }
  ASViewGroupImpl_nativeAddViewWithId_withId_([self asNativeWidget], [((id<ASIWidget>) nil_chk(w)) asNativeWidget]);
  [super addWithASIWidget:w withInt:index];
}

- (void)createLayoutParamsWithADView:(ADView *)view {
  ASAbsoluteLayoutImpl_createLayoutParamsWithADView_(self, view);
}

- (ADAbsoluteLayout_LayoutParams *)getLayoutParamsWithADView:(ADView *)view {
  return ASAbsoluteLayoutImpl_getLayoutParamsWithADView_(self, view);
}

- (void)setChildAttributeWithASIWidget:(id<ASIWidget>)w
                 withASWidgetAttribute:(ASWidgetAttribute *)key
                          withNSString:(NSString *)strValue
                                withId:(id)objValue {
  ADView *view = (ADView *) cast_chk([((id<ASIWidget>) nil_chk(w)) asWidget], [ADView class]);
  ADAbsoluteLayout_LayoutParams *layoutParams = ASAbsoluteLayoutImpl_getLayoutParamsWithADView_(self, view);
  ASViewGroupImpl_setChildAttributeWithASIWidget_withASWidgetAttribute_withId_withId_(w, key, objValue, layoutParams);
  switch (JreIndexOfStr([((ASWidgetAttribute *) nil_chk(key)) getAttributeName], (id[]){ @"layout_width", @"layout_height", @"layout_x", @"layout_y" }, 4)) {
    case 0:
    ((ADAbsoluteLayout_LayoutParams *) nil_chk(layoutParams))->width_ = [((JavaLangInteger *) nil_chk((JavaLangInteger *) cast_chk(objValue, [JavaLangInteger class]))) intValue];
    break;
    case 1:
    ((ADAbsoluteLayout_LayoutParams *) nil_chk(layoutParams))->height_ = [((JavaLangInteger *) nil_chk((JavaLangInteger *) cast_chk(objValue, [JavaLangInteger class]))) intValue];
    break;
    case 2:
    {
      ((ADAbsoluteLayout_LayoutParams *) nil_chk(layoutParams))->x_ = [((JavaLangInteger *) nil_chk((JavaLangInteger *) cast_chk(objValue, [JavaLangInteger class]))) intValue];
    }
    break;
    case 3:
    {
      ((ADAbsoluteLayout_LayoutParams *) nil_chk(layoutParams))->y_ = [((JavaLangInteger *) nil_chk((JavaLangInteger *) cast_chk(objValue, [JavaLangInteger class]))) intValue];
    }
    break;
    default:
    break;
  }
  [((ADView *) nil_chk(view)) setLayoutParamsWithADViewGroup_LayoutParams:layoutParams];
}

- (id)getChildAttributeWithASIWidget:(id<ASIWidget>)w
               withASWidgetAttribute:(ASWidgetAttribute *)key {
  id attributeValue = ASViewGroupImpl_getChildAttributeWithASIWidget_withASWidgetAttribute_(w, key);
  if (attributeValue != nil) {
    return attributeValue;
  }
  ADView *view = (ADView *) cast_chk([((id<ASIWidget>) nil_chk(w)) asWidget], [ADView class]);
  ADAbsoluteLayout_LayoutParams *layoutParams = ASAbsoluteLayoutImpl_getLayoutParamsWithADView_(self, view);
  switch (JreIndexOfStr([((ASWidgetAttribute *) nil_chk(key)) getAttributeName], (id[]){ @"layout_width", @"layout_height", @"layout_x", @"layout_y" }, 4)) {
    case 0:
    return JavaLangInteger_valueOfWithInt_(((ADAbsoluteLayout_LayoutParams *) nil_chk(layoutParams))->width_);
    case 1:
    return JavaLangInteger_valueOfWithInt_(((ADAbsoluteLayout_LayoutParams *) nil_chk(layoutParams))->height_);
    case 2:
    {
      return JavaLangInteger_valueOfWithInt_(((ADAbsoluteLayout_LayoutParams *) nil_chk(layoutParams))->x_);
    }
    case 3:
    {
      return JavaLangInteger_valueOfWithInt_(((ADAbsoluteLayout_LayoutParams *) nil_chk(layoutParams))->y_);
    }
  }
  return nil;
}

- (IOSClass *)getViewClass {
  return ASAbsoluteLayoutImpl_AbsoluteLayoutExt_class_();
}

- (void)setAttributeWithASWidgetAttribute:(ASWidgetAttribute *)key
                             withNSString:(NSString *)strValue
                                   withId:(id)objValue
                withASILifeCycleDecorator:(id<ASILifeCycleDecorator>)decorator {
  ASViewGroupImpl_setAttributeWithASIWidget_withASWidgetAttribute_withNSString_withId_withASILifeCycleDecorator_(self, key, strValue, objValue, decorator);
  id nativeWidget = [self asNativeWidget];
}

- (id)getAttributeWithASWidgetAttribute:(ASWidgetAttribute *)key
              withASILifeCycleDecorator:(id<ASILifeCycleDecorator>)decorator {
  id attributeValue = ASViewGroupImpl_getAttributeWithASIWidget_withASWidgetAttribute_withASILifeCycleDecorator_(self, key, decorator);
  if (attributeValue != nil) {
    return attributeValue;
  }
  id nativeWidget = [self asNativeWidget];
  return nil;
}

- (id)asNativeWidget {
  return uiView_;
}

- (jboolean)checkIosVersionWithNSString:(NSString *)v {
  return ([[[UIDevice currentDevice] systemVersion] compare:v options:NSNumericSearch] == NSOrderedDescending);
}

- (void)nativeCreateWithJavaUtilMap:(id<JavaUtilMap>)params {
  ASUIView* uiView = [ASUIView new];
  uiView.backgroundColor = [UIColor clearColor];
  uiView_ = uiView;
}

- (void)requestLayout {
  if ([self isInitialised]) {
    ASViewImpl_requestLayoutWithASIWidget_withId_(self, [self asNativeWidget]);
  }
}

- (void)invalidate {
  if ([self isInitialised]) {
    ASViewImpl_invalidateWithASIWidget_withId_(self, [self asNativeWidget]);
  }
}

- (void)setIdWithNSString:(NSString *)id_ {
  if (id_ != nil && ![id_ isEqual:@""]) {
    [super setIdWithNSString:id_];
    [((ADAbsoluteLayout *) nil_chk(absoluteLayout_)) setIdWithInt:[((JavaLangInteger *) nil_chk((JavaLangInteger *) cast_chk([self quickConvertWithId:id_ withNSString:@"id"], [JavaLangInteger class]))) intValue]];
  }
}

- (void)setVisibleWithBoolean:(jboolean)b {
  [((ADView *) nil_chk(((ADView *) cast_chk([self asWidget], [ADView class])))) setVisibilityWithInt:b ? ADView_VISIBLE : ADView_GONE];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, "V", 0x1, 0, 1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 2, -1, -1, -1, -1 },
    { NULL, "LASIWidget;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 3, 4, -1, 5, -1, -1 },
    { NULL, "V", 0x102, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSObject;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 6, 7, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 6, 8, -1, -1, -1, -1 },
    { NULL, "V", 0x2, 9, 7, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 10, 11, -1, -1, -1, -1 },
    { NULL, "V", 0x2, 12, 13, -1, -1, -1, -1 },
    { NULL, "LADAbsoluteLayout_LayoutParams;", 0x2, 14, 13, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 15, 16, -1, -1, -1, -1 },
    { NULL, "LNSObject;", 0x1, 17, 18, -1, -1, -1, -1 },
    { NULL, "LIOSClass;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 19, 20, -1, -1, -1, -1 },
    { NULL, "LNSObject;", 0x1, 21, 22, -1, -1, -1, -1 },
    { NULL, "LNSObject;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "Z", 0x101, 23, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x101, 24, 25, -1, 26, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 27, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 28, 29, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(loadAttributesWithNSString:);
  methods[1].selector = @selector(init);
  methods[2].selector = @selector(initWithNSString:);
  methods[3].selector = @selector(initWithNSString:withNSString:);
  methods[4].selector = @selector(newInstance);
  methods[5].selector = @selector(createWithASIFragment:withJavaUtilMap:);
  methods[6].selector = @selector(setWidgetOnNativeClass);
  methods[7].selector = @selector(asWidget);
  methods[8].selector = @selector(removeWithASIWidget:);
  methods[9].selector = @selector(removeWithInt:);
  methods[10].selector = @selector(nativeRemoveViewWithASIWidget:);
  methods[11].selector = @selector(addWithASIWidget:withInt:);
  methods[12].selector = @selector(createLayoutParamsWithADView:);
  methods[13].selector = @selector(getLayoutParamsWithADView:);
  methods[14].selector = @selector(setChildAttributeWithASIWidget:withASWidgetAttribute:withNSString:withId:);
  methods[15].selector = @selector(getChildAttributeWithASIWidget:withASWidgetAttribute:);
  methods[16].selector = @selector(getViewClass);
  methods[17].selector = @selector(setAttributeWithASWidgetAttribute:withNSString:withId:withASILifeCycleDecorator:);
  methods[18].selector = @selector(getAttributeWithASWidgetAttribute:withASILifeCycleDecorator:);
  methods[19].selector = @selector(asNativeWidget);
  methods[20].selector = @selector(checkIosVersionWithNSString:);
  methods[21].selector = @selector(nativeCreateWithJavaUtilMap:);
  methods[22].selector = @selector(requestLayout);
  methods[23].selector = @selector(invalidate);
  methods[24].selector = @selector(setIdWithNSString:);
  methods[25].selector = @selector(setVisibleWithBoolean:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "uiView_", "LNSObject;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "LOCAL_NAME", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 30, -1, -1 },
    { "GROUP_NAME", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 31, -1, -1 },
    { "absoluteLayout_", "LADAbsoluteLayout;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "loadAttributes", "LNSString;", "LNSString;LNSString;", "create", "LASIFragment;LJavaUtilMap;", "(Lcom/ashera/core/IFragment;Ljava/util/Map<Ljava/lang/String;Ljava/lang/Object;>;)V", "remove", "LASIWidget;", "I", "nativeRemoveView", "add", "LASIWidget;I", "createLayoutParams", "LADView;", "getLayoutParams", "setChildAttribute", "LASIWidget;LASWidgetAttribute;LNSString;LNSObject;", "getChildAttribute", "LASIWidget;LASWidgetAttribute;", "setAttribute", "LASWidgetAttribute;LNSString;LNSObject;LASILifeCycleDecorator;", "getAttribute", "LASWidgetAttribute;LASILifeCycleDecorator;", "checkIosVersion", "nativeCreate", "LJavaUtilMap;", "(Ljava/util/Map<Ljava/lang/String;Ljava/lang/Object;>;)V", "setId", "setVisible", "Z", &ASAbsoluteLayoutImpl_LOCAL_NAME, &ASAbsoluteLayoutImpl_GROUP_NAME, "LASAbsoluteLayoutImpl_AbsoluteLayoutExt;" };
  static const J2ObjcClassInfo _ASAbsoluteLayoutImpl = { "AbsoluteLayoutImpl", "com.ashera.absolutelayout", ptrTable, methods, fields, 7, 0x1, 26, 4, -1, 32, -1, -1, -1 };
  return &_ASAbsoluteLayoutImpl;
}

@end

void ASAbsoluteLayoutImpl_init(ASAbsoluteLayoutImpl *self) {
  ASBaseHasWidgets_initWithNSString_withNSString_(self, ASAbsoluteLayoutImpl_GROUP_NAME, ASAbsoluteLayoutImpl_LOCAL_NAME);
}

ASAbsoluteLayoutImpl *new_ASAbsoluteLayoutImpl_init() {
  J2OBJC_NEW_IMPL(ASAbsoluteLayoutImpl, init)
}

ASAbsoluteLayoutImpl *create_ASAbsoluteLayoutImpl_init() {
  J2OBJC_CREATE_IMPL(ASAbsoluteLayoutImpl, init)
}

void ASAbsoluteLayoutImpl_initWithNSString_(ASAbsoluteLayoutImpl *self, NSString *localname) {
  ASBaseHasWidgets_initWithNSString_withNSString_(self, ASAbsoluteLayoutImpl_GROUP_NAME, localname);
}

ASAbsoluteLayoutImpl *new_ASAbsoluteLayoutImpl_initWithNSString_(NSString *localname) {
  J2OBJC_NEW_IMPL(ASAbsoluteLayoutImpl, initWithNSString_, localname)
}

ASAbsoluteLayoutImpl *create_ASAbsoluteLayoutImpl_initWithNSString_(NSString *localname) {
  J2OBJC_CREATE_IMPL(ASAbsoluteLayoutImpl, initWithNSString_, localname)
}

void ASAbsoluteLayoutImpl_initWithNSString_withNSString_(ASAbsoluteLayoutImpl *self, NSString *groupName, NSString *localname) {
  ASBaseHasWidgets_initWithNSString_withNSString_(self, groupName, localname);
}

ASAbsoluteLayoutImpl *new_ASAbsoluteLayoutImpl_initWithNSString_withNSString_(NSString *groupName, NSString *localname) {
  J2OBJC_NEW_IMPL(ASAbsoluteLayoutImpl, initWithNSString_withNSString_, groupName, localname)
}

ASAbsoluteLayoutImpl *create_ASAbsoluteLayoutImpl_initWithNSString_withNSString_(NSString *groupName, NSString *localname) {
  J2OBJC_CREATE_IMPL(ASAbsoluteLayoutImpl, initWithNSString_withNSString_, groupName, localname)
}

void ASAbsoluteLayoutImpl_setWidgetOnNativeClass(ASAbsoluteLayoutImpl *self) {
  ((ASUIView*) [self asNativeWidget]).widget = self;
}

void ASAbsoluteLayoutImpl_nativeRemoveViewWithASIWidget_(ASAbsoluteLayoutImpl *self, id<ASIWidget> widget) {
  ADLayoutTransition *layoutTransition = [((ADAbsoluteLayout *) nil_chk(self->absoluteLayout_)) getLayoutTransition];
  if (layoutTransition != nil && ([layoutTransition isTransitionTypeEnabledWithInt:ADLayoutTransition_CHANGE_DISAPPEARING] || [layoutTransition isTransitionTypeEnabledWithInt:ADLayoutTransition_DISAPPEARING])) {
    [self addToBufferedRunnablesWithJavaLangRunnable:new_ASAbsoluteLayoutImpl_$Lambda$1_initWithASIWidget_(widget)];
  }
  else {
    ASViewGroupImpl_nativeRemoveViewWithASIWidget_(widget);
  }
}

void ASAbsoluteLayoutImpl_createLayoutParamsWithADView_(ASAbsoluteLayoutImpl *self, ADView *view) {
  ADAbsoluteLayout_LayoutParams *layoutParams = (ADAbsoluteLayout_LayoutParams *) cast_chk([((ADView *) nil_chk(view)) getLayoutParams], [ADAbsoluteLayout_LayoutParams class]);
  layoutParams = (ADAbsoluteLayout_LayoutParams *) cast_chk([view getLayoutParams], [ADAbsoluteLayout_LayoutParams class]);
  if (layoutParams == nil) {
    layoutParams = new_ADAbsoluteLayout_LayoutParams_initWithInt_withInt_withInt_withInt_(-2, -2, 0, 0);
    [view setLayoutParamsWithADViewGroup_LayoutParams:layoutParams];
  }
  else {
    layoutParams->height_ = -2;
    layoutParams->width_ = -2;
  }
}

ADAbsoluteLayout_LayoutParams *ASAbsoluteLayoutImpl_getLayoutParamsWithADView_(ASAbsoluteLayoutImpl *self, ADView *view) {
  return (ADAbsoluteLayout_LayoutParams *) cast_chk([((ADView *) nil_chk(view)) getLayoutParams], [ADAbsoluteLayout_LayoutParams class]);
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(ASAbsoluteLayoutImpl)

@implementation ASAbsoluteLayoutImpl_AbsoluteLayoutExt

- (id<ASIWidget>)getWidget {
  return this$0_;
}

- (void)setMaxWidthWithInt:(jint)width {
  mMaxWidth_ = width;
}

- (void)setMaxHeightWithInt:(jint)height {
  mMaxHeight_ = height;
}

- (jint)getMaxWidth {
  return mMaxWidth_;
}

- (jint)getMaxHeight {
  return mMaxHeight_;
}

- (instancetype)initWithASAbsoluteLayoutImpl:(ASAbsoluteLayoutImpl *)outer$ {
  ASAbsoluteLayoutImpl_AbsoluteLayoutExt_initWithASAbsoluteLayoutImpl_(self, outer$);
  return self;
}

- (void)onMeasureWithInt:(jint)widthMeasureSpec
                 withInt:(jint)heightMeasureSpec {
  if (mMaxWidth_ > 0) {
    widthMeasureSpec = ADView_MeasureSpec_makeMeasureSpecWithInt_withInt_(mMaxWidth_, ADView_MeasureSpec_AT_MOST);
  }
  if (mMaxHeight_ > 0) {
    heightMeasureSpec = ADView_MeasureSpec_makeMeasureSpecWithInt_withInt_(mMaxHeight_, ADView_MeasureSpec_AT_MOST);
  }
  [super onMeasureWithInt:widthMeasureSpec withInt:heightMeasureSpec];
  id<ASIWidgetLifeCycleListener> listener = [this$0_ getListener];
  if (listener != nil) {
    [((ASMeasureEvent *) nil_chk(measureFinished_)) setWidthWithInt:[self getMeasuredWidth]];
    [((ASMeasureEvent *) nil_chk(measureFinished_)) setHeightWithInt:[self getMeasuredHeight]];
    [listener eventOccurredWithASIWidgetLifeCycleListener_EventId:JreLoadEnum(ASIWidgetLifeCycleListener_EventId, measureFinished) withASWidgetEvent:measureFinished_];
  }
}

- (void)onLayoutWithBoolean:(jboolean)changed
                    withInt:(jint)l
                    withInt:(jint)t
                    withInt:(jint)r
                    withInt:(jint)b {
  [super onLayoutWithBoolean:changed withInt:l withInt:t withInt:r withInt:b];
  ASViewImpl_setDrawableBoundsWithASIWidget_withInt_withInt_withInt_withInt_(this$0_, l, t, r, b);
  if (![self isOverlay]) {
    ASViewImpl_nativeMakeFrameWithId_withInt_withInt_withInt_withInt_([this$0_ asNativeWidget], l, t, r, b);
  }
  [this$0_ replayBufferedEvents];
  ASViewImpl_redrawDrawablesWithASIWidget_(this$0_);
  overlays_ = ASViewImpl_drawOverlayWithASIWidget_withJavaUtilList_(this$0_, overlays_);
  id<ASIWidgetLifeCycleListener> listener = [this$0_ getListener];
  if (listener != nil) {
    [((ASOnLayoutEvent *) nil_chk(onLayoutEvent_)) setBWithInt:b];
    [((ASOnLayoutEvent *) nil_chk(onLayoutEvent_)) setLWithInt:l];
    [((ASOnLayoutEvent *) nil_chk(onLayoutEvent_)) setRWithInt:r];
    [((ASOnLayoutEvent *) nil_chk(onLayoutEvent_)) setTWithInt:t];
    [((ASOnLayoutEvent *) nil_chk(onLayoutEvent_)) setChangedWithBoolean:changed];
    [listener eventOccurredWithASIWidgetLifeCycleListener_EventId:JreLoadEnum(ASIWidgetLifeCycleListener_EventId, onLayout) withASWidgetEvent:onLayoutEvent_];
  }
  if ([this$0_ isInvalidateOnFrameChange] && [this$0_ isInitialised]) {
    [this$0_ invalidate];
  }
}

- (void)executeWithNSString:(NSString *)method
          withNSObjectArray:(IOSObjectArray *)canvas {
}

- (void)updateMeasuredDimensionWithInt:(jint)width
                               withInt:(jint)height {
  [self setMeasuredDimensionWithInt:width withInt:height];
}

- (id<ASILifeCycleDecorator>)newInstanceWithASIWidget:(id<ASIWidget>)widget {
  @throw new_JavaLangUnsupportedOperationException_init();
}

- (void)setAttributeWithASWidgetAttribute:(ASWidgetAttribute *)widgetAttribute
                             withNSString:(NSString *)strValue
                                   withId:(id)objValue {
  @throw new_JavaLangUnsupportedOperationException_init();
}

- (id<JavaUtilList>)getMethods {
  @throw new_JavaLangUnsupportedOperationException_init();
}

- (void)initialized {
  @throw new_JavaLangUnsupportedOperationException_init();
}

- (id)getAttributeWithASWidgetAttribute:(ASWidgetAttribute *)widgetAttribute {
  @throw new_JavaLangUnsupportedOperationException_init();
}

- (void)drawableStateChanged {
  [super drawableStateChanged];
  if (![this$0_ isWidgetDisposed]) {
    ASViewImpl_drawableStateChangedWithASIWidget_(this$0_);
  }
}

- (ADView *)inflateViewWithNSString:(NSString *)layout {
  if (templates_ == nil) {
    templates_ = new_JavaUtilHashMap_init();
  }
  id<ASIWidget> template_ = [templates_ getWithId:layout];
  if (template_ == nil) {
    template_ = (id<ASIWidget>) cast_check([this$0_ quickConvertWithId:layout withNSString:@"template"], ASIWidget_class_());
    (void) [((id<JavaUtilMap>) nil_chk(templates_)) putWithId:layout withId:template_];
  }
  id<ASIWidget> widget = [((id<ASIWidget>) nil_chk(template_)) loadLazyWidgetsWithASHasWidgets:this$0_];
  return (ADView *) cast_chk([((id<ASIWidget>) nil_chk(widget)) asWidget], [ADView class]);
}

- (void)remeasure {
  if ([this$0_ getFragment] != nil) {
    [((id<ASIFragment>) nil_chk([this$0_ getFragment])) remeasure];
  }
}

- (void)removeFromParent {
  [((id<ASHasWidgets>) nil_chk([this$0_ getParent])) removeWithASIWidget:this$0_];
}

- (void)getLocationOnScreenWithIntArray:(IOSIntArray *)appScreenLocation {
  *IOSIntArray_GetRef(nil_chk(appScreenLocation), 0) = ASViewImpl_getLocationXOnScreenWithId_([this$0_ asNativeWidget]);
  *IOSIntArray_GetRef(appScreenLocation, 1) = ASViewImpl_getLocationYOnScreenWithId_([this$0_ asNativeWidget]);
}

- (void)getWindowVisibleDisplayFrameWithADRect:(ADRect *)displayFrame {
  ((ADRect *) nil_chk(displayFrame))->left_ = ASViewImpl_getLocationXOnScreenWithId_([this$0_ asNativeWidget]);
  displayFrame->top_ = ASViewImpl_getLocationYOnScreenWithId_([this$0_ asNativeWidget]);
  displayFrame->right_ = displayFrame->left_ + [self getWidth];
  displayFrame->bottom_ = displayFrame->top_ + [self getHeight];
}

- (void)offsetTopAndBottomWithInt:(jint)offset {
  [super offsetTopAndBottomWithInt:offset];
  ASViewImpl_nativeMakeFrameWithId_withInt_withInt_withInt_withInt_([this$0_ asNativeWidget], [self getLeft], [self getTop], [self getRight], [self getBottom]);
}

- (void)offsetLeftAndRightWithInt:(jint)offset {
  [super offsetLeftAndRightWithInt:offset];
  ASViewImpl_nativeMakeFrameWithId_withInt_withInt_withInt_withInt_([this$0_ asNativeWidget], [self getLeft], [self getTop], [self getRight], [self getBottom]);
}

- (void)setMyAttributeWithNSString:(NSString *)name
                            withId:(id)value {
  if ([((NSString *) nil_chk(name)) isEqual:@"state0"]) {
    [self setState0WithId:value];
    return;
  }
  if ([name isEqual:@"state1"]) {
    [self setState1WithId:value];
    return;
  }
  if ([name isEqual:@"state2"]) {
    [self setState2WithId:value];
    return;
  }
  if ([name isEqual:@"state3"]) {
    [self setState3WithId:value];
    return;
  }
  if ([name isEqual:@"state4"]) {
    [self setState4WithId:value];
    return;
  }
  [this$0_ setAttributeWithNSString:name withId:value withBoolean:!([value isKindOfClass:[NSString class]])];
}

- (void)setVisibilityWithInt:(jint)visibility {
  [super setVisibilityWithInt:visibility];
  ASViewImpl_nativeSetVisibilityWithId_withBoolean_([this$0_ asNativeWidget], visibility != ADView_VISIBLE);
}

- (void)setState0WithId:(id)value {
  ASViewImpl_setStateWithASIWidget_withInt_withId_(this$0_, 0, value);
}

- (void)setState1WithId:(id)value {
  ASViewImpl_setStateWithASIWidget_withInt_withId_(this$0_, 1, value);
}

- (void)setState2WithId:(id)value {
  ASViewImpl_setStateWithASIWidget_withInt_withId_(this$0_, 2, value);
}

- (void)setState3WithId:(id)value {
  ASViewImpl_setStateWithASIWidget_withInt_withId_(this$0_, 3, value);
}

- (void)setState4WithId:(id)value {
  ASViewImpl_setStateWithASIWidget_withInt_withId_(this$0_, 4, value);
}

- (void)state0 {
  ASViewImpl_stateWithASIWidget_withInt_(this$0_, 0);
}

- (void)state1 {
  ASViewImpl_stateWithASIWidget_withInt_(this$0_, 1);
}

- (void)state2 {
  ASViewImpl_stateWithASIWidget_withInt_(this$0_, 2);
}

- (void)state3 {
  ASViewImpl_stateWithASIWidget_withInt_(this$0_, 3);
}

- (void)state4 {
  ASViewImpl_stateWithASIWidget_withInt_(this$0_, 4);
}

- (void)stateYes {
  ASViewImpl_stateYesWithASIWidget_(this$0_);
}

- (void)stateNo {
  ASViewImpl_stateNoWithASIWidget_(this$0_);
}

- (void)endViewTransitionWithADView:(ADView *)view {
  [super endViewTransitionWithADView:view];
  [this$0_ runBufferedRunnables];
}

- (void)__javaClone:(ASAbsoluteLayoutImpl_AbsoluteLayoutExt *)original {
  [super __javaClone:original];
  JreRelease(this$0_);
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, "LASIWidget;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 0, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 2, 1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 3, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 4, 5, -1, -1, -1, -1 },
    { NULL, "V", 0x4, 6, 7, -1, -1, -1, -1 },
    { NULL, "V", 0x81, 8, 9, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 10, 5, -1, -1, -1, -1 },
    { NULL, "LASILifeCycleDecorator;", 0x1, 11, 12, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 13, 14, -1, -1, -1, -1 },
    { NULL, "LJavaUtilList;", 0x1, -1, -1, -1, 15, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSObject;", 0x1, 16, 17, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LADView;", 0x1, 18, 19, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 20, 21, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 22, 23, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 24, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 25, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 26, 27, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 28, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 29, 30, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 31, 30, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 32, 30, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 33, 30, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 34, 30, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 35, 36, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(getWidget);
  methods[1].selector = @selector(setMaxWidthWithInt:);
  methods[2].selector = @selector(setMaxHeightWithInt:);
  methods[3].selector = @selector(getMaxWidth);
  methods[4].selector = @selector(getMaxHeight);
  methods[5].selector = @selector(initWithASAbsoluteLayoutImpl:);
  methods[6].selector = @selector(onMeasureWithInt:withInt:);
  methods[7].selector = @selector(onLayoutWithBoolean:withInt:withInt:withInt:withInt:);
  methods[8].selector = @selector(executeWithNSString:withNSObjectArray:);
  methods[9].selector = @selector(updateMeasuredDimensionWithInt:withInt:);
  methods[10].selector = @selector(newInstanceWithASIWidget:);
  methods[11].selector = @selector(setAttributeWithASWidgetAttribute:withNSString:withId:);
  methods[12].selector = @selector(getMethods);
  methods[13].selector = @selector(initialized);
  methods[14].selector = @selector(getAttributeWithASWidgetAttribute:);
  methods[15].selector = @selector(drawableStateChanged);
  methods[16].selector = @selector(inflateViewWithNSString:);
  methods[17].selector = @selector(remeasure);
  methods[18].selector = @selector(removeFromParent);
  methods[19].selector = @selector(getLocationOnScreenWithIntArray:);
  methods[20].selector = @selector(getWindowVisibleDisplayFrameWithADRect:);
  methods[21].selector = @selector(offsetTopAndBottomWithInt:);
  methods[22].selector = @selector(offsetLeftAndRightWithInt:);
  methods[23].selector = @selector(setMyAttributeWithNSString:withId:);
  methods[24].selector = @selector(setVisibilityWithInt:);
  methods[25].selector = @selector(setState0WithId:);
  methods[26].selector = @selector(setState1WithId:);
  methods[27].selector = @selector(setState2WithId:);
  methods[28].selector = @selector(setState3WithId:);
  methods[29].selector = @selector(setState4WithId:);
  methods[30].selector = @selector(state0);
  methods[31].selector = @selector(state1);
  methods[32].selector = @selector(state2);
  methods[33].selector = @selector(state3);
  methods[34].selector = @selector(state4);
  methods[35].selector = @selector(stateYes);
  methods[36].selector = @selector(stateNo);
  methods[37].selector = @selector(endViewTransitionWithADView:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "this$0_", "LASAbsoluteLayoutImpl;", .constantValue.asLong = 0, 0x1012, -1, -1, -1, -1 },
    { "measureFinished_", "LASMeasureEvent;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "onLayoutEvent_", "LASOnLayoutEvent;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "overlays_", "LJavaUtilList;", .constantValue.asLong = 0, 0x2, -1, -1, 37, -1 },
    { "mMaxWidth_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mMaxHeight_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "templates_", "LJavaUtilMap;", .constantValue.asLong = 0, 0x2, -1, -1, 38, -1 },
  };
  static const void *ptrTable[] = { "setMaxWidth", "I", "setMaxHeight", "LASAbsoluteLayoutImpl;", "onMeasure", "II", "onLayout", "ZIIII", "execute", "LNSString;[LNSObject;", "updateMeasuredDimension", "newInstance", "LASIWidget;", "setAttribute", "LASWidgetAttribute;LNSString;LNSObject;", "()Ljava/util/List<Ljava/lang/String;>;", "getAttribute", "LASWidgetAttribute;", "inflateView", "LNSString;", "getLocationOnScreen", "[I", "getWindowVisibleDisplayFrame", "LADRect;", "offsetTopAndBottom", "offsetLeftAndRight", "setMyAttribute", "LNSString;LNSObject;", "setVisibility", "setState0", "LNSObject;", "setState1", "setState2", "setState3", "setState4", "endViewTransition", "LADView;", "Ljava/util/List<Lcom/ashera/widget/IWidget;>;", "Ljava/util/Map<Ljava/lang/String;Lcom/ashera/widget/IWidget;>;" };
  static const J2ObjcClassInfo _ASAbsoluteLayoutImpl_AbsoluteLayoutExt = { "AbsoluteLayoutExt", "com.ashera.absolutelayout", ptrTable, methods, fields, 7, 0x1, 38, 7, 3, -1, -1, -1, -1 };
  return &_ASAbsoluteLayoutImpl_AbsoluteLayoutExt;
}

@end

void ASAbsoluteLayoutImpl_AbsoluteLayoutExt_initWithASAbsoluteLayoutImpl_(ASAbsoluteLayoutImpl_AbsoluteLayoutExt *self, ASAbsoluteLayoutImpl *outer$) {
  self->this$0_ = outer$;
  ADAbsoluteLayout_init(self);
  self->measureFinished_ = new_ASMeasureEvent_init();
  self->onLayoutEvent_ = new_ASOnLayoutEvent_init();
  self->mMaxWidth_ = -1;
  self->mMaxHeight_ = -1;
}

ASAbsoluteLayoutImpl_AbsoluteLayoutExt *new_ASAbsoluteLayoutImpl_AbsoluteLayoutExt_initWithASAbsoluteLayoutImpl_(ASAbsoluteLayoutImpl *outer$) {
  J2OBJC_NEW_IMPL(ASAbsoluteLayoutImpl_AbsoluteLayoutExt, initWithASAbsoluteLayoutImpl_, outer$)
}

ASAbsoluteLayoutImpl_AbsoluteLayoutExt *create_ASAbsoluteLayoutImpl_AbsoluteLayoutExt_initWithASAbsoluteLayoutImpl_(ASAbsoluteLayoutImpl *outer$) {
  J2OBJC_CREATE_IMPL(ASAbsoluteLayoutImpl_AbsoluteLayoutExt, initWithASAbsoluteLayoutImpl_, outer$)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(ASAbsoluteLayoutImpl_AbsoluteLayoutExt)

@implementation ASAbsoluteLayoutImpl_$Lambda$1

- (void)run {
  ASViewGroupImpl_nativeRemoveViewWithASIWidget_(val$widget_);
}

@end

void ASAbsoluteLayoutImpl_$Lambda$1_initWithASIWidget_(ASAbsoluteLayoutImpl_$Lambda$1 *self, id<ASIWidget> capture$0) {
  self->val$widget_ = capture$0;
  NSObject_init(self);
}

ASAbsoluteLayoutImpl_$Lambda$1 *new_ASAbsoluteLayoutImpl_$Lambda$1_initWithASIWidget_(id<ASIWidget> capture$0) {
  J2OBJC_NEW_IMPL(ASAbsoluteLayoutImpl_$Lambda$1, initWithASIWidget_, capture$0)
}

ASAbsoluteLayoutImpl_$Lambda$1 *create_ASAbsoluteLayoutImpl_$Lambda$1_initWithASIWidget_(id<ASIWidget> capture$0) {
  J2OBJC_CREATE_IMPL(ASAbsoluteLayoutImpl_$Lambda$1, initWithASIWidget_, capture$0)
}
