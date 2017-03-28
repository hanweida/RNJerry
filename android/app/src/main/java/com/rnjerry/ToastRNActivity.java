package com.rnjerry;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.bridge.Promise;
/**
 * Created by jerry on 2017/3/26.
 */
public class ToastRNActivity extends ReactContextBaseJavaModule {
    private ReactApplicationContext mContext;


    public ToastRNActivity(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext =reactContext;
    }

    @ReactMethod
    public void show(String message){
        Toast.makeText(mContext, message, Toast.LENGTH_SHORT).show();
    //   调用原生Activity
    //   Intent intent = new Intent(mContext, MyActivity.class);
    //    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    //    mContext.startActivity(intent);
    
    // 调用原生Activity，手机联系人
         Intent intent = new Intent(Intent.ACTION_PICK, ContactsContract.Contacts.CONTENT_URI);
         Bundle bundle = new Bundle();
         mContext.startActivityForResult(intent, 1 ,bundle);
    }

    //##Start回调函数
    @ReactMethod
    public void measureLayout(Callback errorCallback, Callback successCallback){
         try {
            successCallback.invoke(100, 100, 200, 200);//调用回调函数，返回结果
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }
    //##End回调函数

    // 调用原生Activity，手机联系人，后回调RN侧，调用方法
    public void sendMsgToRn(String message){
        //将消息发送给RN测
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("AndroidToRNMessage", message);    
    }


    //调用原生方法_使用_Promise
    @ReactMethod
    public void rnCallNative_promise(String msg, Promise promise) {

        try {
            //业务逻辑处理
            Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();

            String componentName = getCurrentActivity().getComponentName().toString();

            promise.resolve(componentName);

        }catch (Exception e){

            promise.reject("100",e.getMessage());//promise 失败

        }
    }
    //调用原生方法_使用_Promise

    //原生暴露常量
      @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("URL","http://www.reactnative.vip/");
        constants.put("port","8081");
        constants.put("ip","192.168.1.100");
        constants.put("author","东方耀");
        constants.put("qq","309623978");
        return constants;
    }
    //原生暴露常量

    @Override
    public String getName() {
        return "ToastRNModule";
    }
}
