package com.ashera.absolutelayout;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

public class CordovaAbsoluteLayoutPlugin extends CordovaPlugin {
	@Override
	public void initialize(CordovaInterface cordova, CordovaWebView webView) {
		super.initialize(cordova, webView);
		AbsoluteLayoutPlugin.initPlugin();
	}
}
