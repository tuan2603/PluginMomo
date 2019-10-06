package vn.kpis.momo;

import android.content.Intent;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.SecondActivity;

import static android.content.ContentValues.TAG;

@NativePlugin()
public class MomoPlugin extends Plugin {

    static final int REQUEST_IMAGE_PICK = 12345;

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");


        saveCall(call);
        // Unique code
        Intent intent=new Intent(getContext(), SecondActivity.class);

        startActivityForResult(call, intent, REQUEST_IMAGE_PICK);


        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }


    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);
        Log.d(TAG, "handleOnActivityResult: ");

        // Get the previously saved call
        PluginCall savedCall = getSavedCall();

        if (savedCall == null) {
            return;
        }
        if (requestCode == REQUEST_IMAGE_PICK) {
            // Do something with the data
        }
    }
}
