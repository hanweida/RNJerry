package com.rnjerry;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.uimanager.IllegalViewOperationException;

/**
 * Created by jerry on 2017/3/26.
 */
public class UIManagerModule extends ReactContextBaseJavaModule {
    public UIManagerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UIManagerModule";
    }

//    public void measureLayout(
//            int tag,
//            int ancestorTag,
//            Callback errorCallback,
//            Callback successCallback
//    ){
//        try{
//            measureLayout(tag, ancestorTag, mMeasureBuffer);
//        } catch (IllegalViewOperationException e){
//            errorCallback.invoke(e.getMessage());
//        }
//    }
}
