# Android SDK 101

>GaGaNode Android SDK integration Tutorial

- This document is a simple example of SDK integration.
- For official stable running application reference please go to [GaGaNode Android](https://github.com/gaganode/gaga_android).

## 1. Go to GitHub to download the latest version .jar SDK

`.jar` SDK: [gaga_android_sdk](https://github.com/gaganode/gaga_android_sdk)

```sh
git clone https://github.com/gaganode/gaga_android_sdk.git
```

## 2. Add the SDK.jar file to your libs folder and Add as library

![](./../images/sdk/android-sdk.jpeg)

## 3. Add the SDK.jar file to your libs folder and Add as library

```java
<uses-permission android:name="android.permission.INTERNET" >
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## 4. In your Activity start the SDK

```java
String token= "{your token}";
SharedPreferences miner_sdk_sp= getSharedPreferences("miner_sdk",MODE_PRIVATE);
long node_id=miner_sdk_sp.getLong("node_id", Math.abs(new Random().nextLong()));
miner_sdk_sp.edit().putLong(“node_id",node_id).apply();

MinerSdk.Init(token,node_id);
MinerSdk.Start();
```