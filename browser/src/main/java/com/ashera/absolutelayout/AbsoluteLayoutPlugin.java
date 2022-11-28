package com.ashera.absolutelayout;

import com.ashera.widget.WidgetFactory;

public class AbsoluteLayoutPlugin  {
    public static void initPlugin() {
    	//start - widgets
    	WidgetFactory.register(new com.ashera.absolutelayout.AbsoluteLayoutImpl());
    	//end - widgets
    }
}
