package com.ashera.absolutelayout;
// start - imports
import java.util.*;

import r.android.annotation.SuppressLint;
import r.android.content.Context;
import r.android.os.Build;
import r.android.view.*;
import r.android.widget.*;
import r.android.view.View.*;

import com.ashera.widget.BaseHasWidgets;

import r.android.annotation.SuppressLint;

import com.ashera.core.IFragment;
import com.ashera.widget.bus.*;
import com.ashera.converter.*;
import com.ashera.widget.bus.Event.*;
import com.ashera.widget.*;
import com.ashera.widget.IWidgetLifeCycleListener.*;
import com.ashera.layout.*;

import org.teavm.jso.dom.html.HTMLElement;

import static com.ashera.widget.IWidget.*;
//end - imports

public class AbsoluteLayoutImpl extends BaseHasWidgets {
	//start - body
	private HTMLElement htmlElement;
	public final static String LOCAL_NAME = "AbsoluteLayout"; 
	public final static String GROUP_NAME = "AbsoluteLayout";
	private r.android.widget.AbsoluteLayout absoluteLayout;
	

	
	@Override
	public void loadAttributes(String localName) {
		ViewGroupImpl.register(localName);

	
		WidgetFactory.registerAttribute(localName, new WidgetAttribute.Builder().withName("layout_x").withType("dimension").forChild());
		WidgetFactory.registerAttribute(localName, new WidgetAttribute.Builder().withName("layout_y").withType("dimension").forChild());
	}
	
	public AbsoluteLayoutImpl() {
		super(GROUP_NAME, LOCAL_NAME);
	}
	public  AbsoluteLayoutImpl(String localname) {
		super(GROUP_NAME, localname);
	}
	public  AbsoluteLayoutImpl(String groupName, String localname) {
		super(groupName, localname);
	}

	@Override
	public IWidget newInstance() {
		return new AbsoluteLayoutImpl();
	}
	
	@SuppressLint("NewApi")
	@Override
	public void create(IFragment fragment, Map<String, Object> params) {
		super.create(fragment, params);
		absoluteLayout = new AbsoluteLayoutExt();
		
		nativeCreate(params);
		
		
		ViewGroupImpl.registerCommandConveter(this);
	}

	@Override
	public Object asWidget() {
		return absoluteLayout;
	}

	@Override
	public boolean remove(IWidget w) {
		boolean remove = super.remove(w);
		absoluteLayout.removeView((View) w.asWidget());
         ViewGroupImpl.nativeRemoveView(w);            
		return remove;
	}
	
	@Override
    public boolean remove(int index) {
		IWidget widget = widgets.get(index);
        boolean remove = super.remove(index);

        if (index + 1 <= absoluteLayout.getChildCount()) {
            absoluteLayout.removeViewAt(index);
            ViewGroupImpl.nativeRemoveView(widget);            
        }    
        return remove;
    }
	
	@Override
	public void add(IWidget w, int index) {
		if (index != -2) {
			View view = (View) w.asWidget();
			createLayoutParams(view);
			    if (index == -1) {
			        absoluteLayout.addView(view);
			    } else {
			        absoluteLayout.addView(view, index);
			    }
		}
		
		ViewGroupImpl.nativeAddView(asNativeWidget(), w.asNativeWidget());
		super.add(w, index);
	}
	
	private void createLayoutParams(View view) {
		r.android.widget.AbsoluteLayout.LayoutParams layoutParams = (r.android.widget.AbsoluteLayout.LayoutParams) view.getLayoutParams();
		
		layoutParams = (r.android.widget.AbsoluteLayout.LayoutParams) view.getLayoutParams();
		if (layoutParams == null) {
			layoutParams = new r.android.widget.AbsoluteLayout.LayoutParams(-2, -2, 0, 0);
			view.setLayoutParams(layoutParams);
		}  else {
			layoutParams.height = -2;
			layoutParams.width = -2;
		}
	}
	
	private r.android.widget.AbsoluteLayout.LayoutParams getLayoutParams(View view) {
		return (r.android.widget.AbsoluteLayout.LayoutParams) view.getLayoutParams();		
	}
	
	@SuppressLint("NewApi")
	@Override
	public void setChildAttribute(IWidget w, WidgetAttribute key, String strValue, Object objValue) {
		View view = (View) w.asWidget();
		r.android.widget.AbsoluteLayout.LayoutParams layoutParams = getLayoutParams(view);
		ViewGroupImpl.setChildAttribute(w, key, objValue, layoutParams);		
		
		switch (key.getAttributeName()) {
		case "layout_width":
			layoutParams.width = (int) objValue;
			break;	
		case "layout_height":
			layoutParams.height = (int) objValue;
			break;
			case "layout_x": {
				
							layoutParams.x=(int)objValue;
				
			}
			break;
			case "layout_y": {
				
							layoutParams.y=(int)objValue;
				
			}
			break;
		default:
			break;
		}
		
		
		view.setLayoutParams(layoutParams);		
	}
	
	@SuppressLint("NewApi")
	@Override
	public Object getChildAttribute(IWidget w, WidgetAttribute key) {
		Object attributeValue = ViewGroupImpl.getChildAttribute(w, key);		
		if (attributeValue != null) {
			return attributeValue;
		}
		View view = (View) w.asWidget();
		r.android.widget.AbsoluteLayout.LayoutParams layoutParams = getLayoutParams(view);

		switch (key.getAttributeName()) {
		case "layout_width":
			return layoutParams.width;
		case "layout_height":
			return layoutParams.height;
			case "layout_x": {
return layoutParams.x;			}

			case "layout_y": {
return layoutParams.y;			}

		}
		
		return null;

	}
	
		
	public class AbsoluteLayoutExt extends r.android.widget.AbsoluteLayout implements ILifeCycleDecorator, com.ashera.widget.IMaxDimension{
		private MeasureEvent measureFinished = new MeasureEvent();
		private OnLayoutEvent onLayoutEvent = new OnLayoutEvent();
		private int mMaxWidth = -1;
		private int mMaxHeight = -1;
		@Override
		public void setMaxWidth(int width) {
			mMaxWidth = width;
		}
		@Override
		public void setMaxHeight(int height) {
			mMaxHeight = height;
		}
		@Override
		public int getMaxWidth() {
			return mMaxWidth;
		}
		@Override
		public int getMaxHeight() {
			return mMaxHeight;
		}

		public AbsoluteLayoutExt() {
			
			
			
			
			super();
			
			
		}
		
		@Override
		public void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {

			if(mMaxWidth > 0) {
	        	widthMeasureSpec = MeasureSpec.makeMeasureSpec(mMaxWidth, MeasureSpec.AT_MOST);
	        }
	        if(mMaxHeight > 0) {
	            heightMeasureSpec = MeasureSpec.makeMeasureSpec(mMaxHeight, MeasureSpec.AT_MOST);

	        }

	        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
			IWidgetLifeCycleListener listener = (IWidgetLifeCycleListener) getListener();
			if (listener != null) {
			    measureFinished.setWidth(getMeasuredWidth());
			    measureFinished.setHeight(getMeasuredHeight());
				listener.eventOccurred(EventId.measureFinished, measureFinished);
			}
		}
		
		@Override
		protected void onLayout(boolean changed, int l, int t, int r, int b) {
			super.onLayout(changed, l, t, r, b);
			ViewImpl.setDrawableBounds(AbsoluteLayoutImpl.this, l, t, r, b);
			ViewImpl.nativeMakeFrame(asNativeWidget(), l, t, r, b);
			replayBufferedEvents();
	        ViewImpl.redrawDrawables(AbsoluteLayoutImpl.this);
			
			IWidgetLifeCycleListener listener = (IWidgetLifeCycleListener) getListener();
			if (listener != null) {
				onLayoutEvent.setB(b);
				onLayoutEvent.setL(l);
				onLayoutEvent.setR(r);
				onLayoutEvent.setT(t);
				onLayoutEvent.setChanged(changed);
				listener.eventOccurred(EventId.onLayout, onLayoutEvent);
			}
			
			if (isInvalidateOnFrameChange() && isInitialised()) {
				AbsoluteLayoutImpl.this.invalidate();
			}
		}	
		
		@Override
		public void execute(String method, Object... canvas) {
			
		}

		public void updateMeasuredDimension(int width, int height) {
			setMeasuredDimension(width, height);
		}


		@Override
		public ILifeCycleDecorator newInstance(IWidget widget) {
			throw new UnsupportedOperationException();
		}

		@Override
		public void setAttribute(WidgetAttribute widgetAttribute,
				String strValue, Object objValue) {
			throw new UnsupportedOperationException();
		}		
		

		@Override
		public List<String> getMethods() {
			throw new UnsupportedOperationException();
		}
		
		@Override
		public void initialized() {
			throw new UnsupportedOperationException();
		}
		
        @Override
        public Object getAttribute(WidgetAttribute widgetAttribute) {
            throw new UnsupportedOperationException();
        }
        @Override
        public void drawableStateChanged() {
        	super.drawableStateChanged();
        	ViewImpl.drawableStateChanged(AbsoluteLayoutImpl.this);
        }
		@Override
		public void offsetTopAndBottom(int offset) {
			super.offsetTopAndBottom(offset);
			ViewImpl.nativeMakeFrame(asNativeWidget(), getLeft(), getTop(), getRight(), getBottom());
		}
		@Override
		public void offsetLeftAndRight(int offset) {
			super.offsetLeftAndRight(offset);
			ViewImpl.nativeMakeFrame(asNativeWidget(), getLeft(), getTop(), getRight(), getBottom());
		}
        @Override
        public void setVisibility(int visibility) {
            super.setVisibility(visibility);
            ((HTMLElement)asNativeWidget()).getStyle().setProperty("display", visibility != View.VISIBLE ? "none" : "block");
            
        }
	}
	
	public void updateMeasuredDimension(int width, int height) {
		((AbsoluteLayoutExt) absoluteLayout).updateMeasuredDimension(width, height);
	}
	

	@SuppressLint("NewApi")
	@Override
	public void setAttribute(WidgetAttribute key, String strValue, Object objValue, ILifeCycleDecorator decorator) {
		ViewGroupImpl.setAttribute(this, key, strValue, objValue, decorator);
		Object nativeWidget = asNativeWidget();

	}
	
	@Override
	@SuppressLint("NewApi")
	public Object getAttribute(WidgetAttribute key, ILifeCycleDecorator decorator) {
		Object attributeValue = ViewGroupImpl.getAttribute(this, key, decorator);
		if (attributeValue != null) {
			return attributeValue;
		}
		Object nativeWidget = asNativeWidget();
		return null;
	}


	@Override
    public Object asNativeWidget() {
        return htmlElement;
    }
    private void nativeCreate(Map<String, Object> params) {
    	htmlElement = org.teavm.jso.dom.html.HTMLDocument.current().createElement("div");
    	htmlElement.getStyle().setProperty("box-sizing", "border-box");
    }
    
    @Override
    public void requestLayout() {
    	if (isInitialised()) {
    		ViewImpl.requestLayout(this, asNativeWidget());
    	}
    }
    
    @Override
    public void invalidate() {
    	if (isInitialised()) {
    		ViewImpl.invalidate(this, asNativeWidget());
    	}
    }
    
	

	@Override
	public void setId(String id){
		if (id != null && !id.equals("")){
			super.setId(id);
			absoluteLayout.setId(IdGenerator.getId(id));
		}
	}
	
    

	
private AbsoluteLayoutCommandBuilder builder;
private AbsoluteLayoutBean bean;
public Object getPlugin(String plugin) {
	return WidgetFactory.getAttributable(plugin).newInstance(this);
}
public AbsoluteLayoutBean getBean() {
	if (bean == null) {
		bean = new AbsoluteLayoutBean();
	}
	return bean;
}
public AbsoluteLayoutCommandBuilder getBuilder() {
	if (builder == null) {
		builder = new AbsoluteLayoutCommandBuilder();
	}
	return builder;
}


public  class AbsoluteLayoutCommandBuilder extends com.ashera.layout.ViewGroupImpl.ViewGroupCommandBuilder <AbsoluteLayoutCommandBuilder> {
    public AbsoluteLayoutCommandBuilder() {
	}
	
	public AbsoluteLayoutCommandBuilder execute(boolean setter) {
		if (setter) {
			executeCommand(command, null, IWidget.COMMAND_EXEC_SETTER_METHOD);
			getFragment().remeasure();
		}
		executeCommand(command, null, IWidget.COMMAND_EXEC_GETTER_METHOD);
return this;	}

}
public class AbsoluteLayoutBean extends com.ashera.layout.ViewGroupImpl.ViewGroupBean{
		public AbsoluteLayoutBean() {
			super(AbsoluteLayoutImpl.this);
		}
}


private AbsoluteLayoutCommandParamsBuilder paramsBuilder;
private AbsoluteLayoutParamsBean paramsBean;

public AbsoluteLayoutParamsBean getParamsBean() {
	if (paramsBean == null) {
		paramsBean = new AbsoluteLayoutParamsBean();
	}
	return paramsBean;
}
public AbsoluteLayoutCommandParamsBuilder getParamsBuilder() {
	if (paramsBuilder == null) {
		paramsBuilder = new AbsoluteLayoutCommandParamsBuilder();
	}
	return paramsBuilder;
}



public class AbsoluteLayoutParamsBean extends com.ashera.layout.ViewGroupImpl.ViewGroupParamsBean{
public Object getLayoutX(IWidget w) {
	java.util.Map<String, Object> layoutParams = new java.util.HashMap<String, Object>();
	java.util.Map<String, Object> command = getParamsBuilder().reset().tryGetLayoutX().getCommand();
	
	layoutParams.put("layoutParams", command);
	w.executeCommand(layoutParams, null, COMMAND_EXEC_GETTER_METHOD); 
	return getParamsBuilder().getLayoutX();
}
public void setLayoutX(IWidget w, String value) {
	java.util.Map<String, Object> layoutParams = new java.util.HashMap<String, Object>();
	layoutParams.put("layoutParams", getParamsBuilder().reset().setLayoutX(value).getCommand());
	w.executeCommand(layoutParams, null, COMMAND_EXEC_SETTER_METHOD);
	w.getFragment().remeasure();
}

public Object getLayoutY(IWidget w) {
	java.util.Map<String, Object> layoutParams = new java.util.HashMap<String, Object>();
	java.util.Map<String, Object> command = getParamsBuilder().reset().tryGetLayoutY().getCommand();
	
	layoutParams.put("layoutParams", command);
	w.executeCommand(layoutParams, null, COMMAND_EXEC_GETTER_METHOD); 
	return getParamsBuilder().getLayoutY();
}
public void setLayoutY(IWidget w, String value) {
	java.util.Map<String, Object> layoutParams = new java.util.HashMap<String, Object>();
	layoutParams.put("layoutParams", getParamsBuilder().reset().setLayoutY(value).getCommand());
	w.executeCommand(layoutParams, null, COMMAND_EXEC_SETTER_METHOD);
	w.getFragment().remeasure();
}

}





public class AbsoluteLayoutCommandParamsBuilder extends com.ashera.layout.ViewGroupImpl.ViewGroupCommandParamsBuilder<AbsoluteLayoutCommandParamsBuilder>{
public AbsoluteLayoutCommandParamsBuilder tryGetLayoutX() {
	Map<String, Object> attrs = initCommand("layout_x");
	attrs.put("type", "attribute");
	attrs.put("getter", true);
	attrs.put("orderGet", ++orderGet);
return this;}

public Object getLayoutX() {
	Map<String, Object> attrs = initCommand("layout_x");
	return attrs.get("commandReturnValue");
}
public AbsoluteLayoutCommandParamsBuilder setLayoutX(String value) {
	Map<String, Object> attrs = initCommand("layout_x");
	attrs.put("type", "attribute");
	attrs.put("setter", true);
	attrs.put("orderSet", ++orderSet);

	attrs.put("value", value);
return this;}
public AbsoluteLayoutCommandParamsBuilder tryGetLayoutY() {
	Map<String, Object> attrs = initCommand("layout_y");
	attrs.put("type", "attribute");
	attrs.put("getter", true);
	attrs.put("orderGet", ++orderGet);
return this;}

public Object getLayoutY() {
	Map<String, Object> attrs = initCommand("layout_y");
	return attrs.get("commandReturnValue");
}
public AbsoluteLayoutCommandParamsBuilder setLayoutY(String value) {
	Map<String, Object> attrs = initCommand("layout_y");
	attrs.put("type", "attribute");
	attrs.put("setter", true);
	attrs.put("orderSet", ++orderSet);

	attrs.put("value", value);
return this;}
}

	//end - body
}
