package com.tns.gen.android.bluetooth;

public class BluetoothAdapter_LeScanCallback implements android.bluetooth.BluetoothAdapter.LeScanCallback {
	public BluetoothAdapter_LeScanCallback() {
		com.tns.Runtime.initInstance(this);
	}

	public void onLeScan(android.bluetooth.BluetoothDevice param_0, int param_1, byte[] param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onLeScan", void.class, args);
	}

}
