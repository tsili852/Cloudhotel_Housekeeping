package com.tns.gen.android.bluetooth;

public class BluetoothGattCallback_ftns_modules_nativescript_bluetooth_bluetooth_l156_c69__ extends android.bluetooth.BluetoothGattCallback implements com.tns.NativeScriptHashCodeProvider {
	public BluetoothGattCallback_ftns_modules_nativescript_bluetooth_bluetooth_l156_c69__(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onConnectionStateChange(android.bluetooth.BluetoothGatt param_0, int param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onConnectionStateChange", void.class, args);
	}

	public void onServicesDiscovered(android.bluetooth.BluetoothGatt param_0, int param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onServicesDiscovered", void.class, args);
	}

	public void onCharacteristicRead(android.bluetooth.BluetoothGatt param_0, android.bluetooth.BluetoothGattCharacteristic param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onCharacteristicRead", void.class, args);
	}

	public void onCharacteristicChanged(android.bluetooth.BluetoothGatt param_0, android.bluetooth.BluetoothGattCharacteristic param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onCharacteristicChanged", void.class, args);
	}

	public void onCharacteristicWrite(android.bluetooth.BluetoothGatt param_0, android.bluetooth.BluetoothGattCharacteristic param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onCharacteristicWrite", void.class, args);
	}

	public void onDescriptorRead(android.bluetooth.BluetoothGatt param_0, android.bluetooth.BluetoothGattDescriptor param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onDescriptorRead", void.class, args);
	}

	public void onDescriptorWrite(android.bluetooth.BluetoothGatt param_0, android.bluetooth.BluetoothGattDescriptor param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onDescriptorWrite", void.class, args);
	}

	public void onReadRemoteRssi(android.bluetooth.BluetoothGatt param_0, int param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onReadRemoteRssi", void.class, args);
	}

	public void onMtuChanged(android.bluetooth.BluetoothGatt param_0, int param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onMtuChanged", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
