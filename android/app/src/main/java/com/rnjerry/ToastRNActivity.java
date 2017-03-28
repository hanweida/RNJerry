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

    // 调用原生Activity，手机联系人，后回调RN侧，调用方法
    public void sendMsgToRn(String message){
        //将消息发送给RN测
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("AndroidToRNMessage", message);    }

    @Override
    public String getName() {
        return "ToastRNModule";
    }
}
