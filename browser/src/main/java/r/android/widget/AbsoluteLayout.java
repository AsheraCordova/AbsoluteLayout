package r.android.widget;
import r.android.view.View;
import r.android.view.ViewGroup;
public class AbsoluteLayout extends ViewGroup {
  protected void onMeasure(  int widthMeasureSpec,  int heightMeasureSpec){
    int count=getChildCount();
    int maxHeight=0;
    int maxWidth=0;
    measureChildren(widthMeasureSpec,heightMeasureSpec);
    for (int i=0; i < count; i++) {
      View child=getChildAt(i);
      if (child.getVisibility() != GONE) {
        int childRight;
        int childBottom;
        AbsoluteLayout.LayoutParams lp=(AbsoluteLayout.LayoutParams)child.getLayoutParams();
        childRight=lp.x + child.getMeasuredWidth();
        childBottom=lp.y + child.getMeasuredHeight();
        maxWidth=Math.max(maxWidth,childRight);
        maxHeight=Math.max(maxHeight,childBottom);
      }
    }
    maxWidth+=mPaddingLeft + mPaddingRight;
    maxHeight+=mPaddingTop + mPaddingBottom;
    maxHeight=Math.max(maxHeight,getSuggestedMinimumHeight());
    maxWidth=Math.max(maxWidth,getSuggestedMinimumWidth());
    setMeasuredDimension(resolveSizeAndState(maxWidth,widthMeasureSpec,0),resolveSizeAndState(maxHeight,heightMeasureSpec,0));
  }
  protected ViewGroup.LayoutParams generateDefaultLayoutParams(){
    return new LayoutParams(LayoutParams.WRAP_CONTENT,LayoutParams.WRAP_CONTENT,0,0);
  }
  protected void onLayout(  boolean changed,  int l,  int t,  int r,  int b){
    int count=getChildCount();
    for (int i=0; i < count; i++) {
      View child=getChildAt(i);
      if (child.getVisibility() != GONE) {
        AbsoluteLayout.LayoutParams lp=(AbsoluteLayout.LayoutParams)child.getLayoutParams();
        int childLeft=mPaddingLeft + lp.x;
        int childTop=mPaddingTop + lp.y;
        child.layout(childLeft,childTop,childLeft + child.getMeasuredWidth(),childTop + child.getMeasuredHeight());
      }
    }
  }
  protected boolean checkLayoutParams(  ViewGroup.LayoutParams p){
    return p instanceof AbsoluteLayout.LayoutParams;
  }
public static class LayoutParams extends ViewGroup.LayoutParams {
    public int x;
    public int y;
    public LayoutParams(    int width,    int height,    int x,    int y){
      super(width,height);
      this.x=x;
      this.y=y;
    }
    public LayoutParams(    ViewGroup.LayoutParams source){
      super(source);
    }
  }
class AbsoulteLayout {
  }
}
