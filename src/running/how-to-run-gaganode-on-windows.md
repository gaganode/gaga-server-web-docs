# How To Run GaGa On Windows

>How to easily install a GaGaNode on Windows.

[[toc]]

## Register

[https://dashboard.gaganode.com/register](https://dashboard.gaganode.com/register)

![](./../images/running/register-v2.png)

Click the button “[Install & Run](https://dashboard.gaganode.com/install_run)” and you can find out your token and installation tutorial in this page.

![](./../images/running/install_run_3.png)

## Open PowerShell in Windows

### Use the “Run” window to open PowerShell

You can open Windows PowerShell with administrator privileges from Run. A quick way to launch this window is to press the `Win` + `R` keys on the keyboard. Then, type `powershell` and press Enter or click OK.

<div align="center">
<img src="./images/../../images/running/windows-03.png" alt="Windows PowerShell will open in admin mode" />
</div>

Switch from PowerShell to PowerShell Admin. If you’re already working in PowerShell but you need to switch over to `admin` mode, you can do so without closing PowerShell. Just run this command:

```bash
start-process powershell -verb runas
```

<div align="center">
<img src="./images/../../images/running/windows-04.png" alt="A new instance of PowerShell will open with admin privileges" />
</div>

### Use the WinX Power User Menu to start PowerShell

You can also launch Windows PowerShell as an admin from the Windows Power User menu. To access the Power User menu, right-click the Start menu (Windows icon) in the bottom-left corner of the desktop. The Power User menu will appear. Here, click `Windows Terminal (Admin)` & `Windows PowerShell (Admin)`.

<div align="center">
<img src="./images/../../images/running/windows-01.png" height="400" alt="" />
</div>

## 1.Download & Install

<CodeGroup>

  <CodeGroupItem title="Windows 64-bit">

```bash
wget -Uri "https://assets.coreservice.io/public/package/59/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz" -OutFile "apphub-windows-amd64.tar.gz" ; tar -zxf apphub-windows-amd64.tar.gz ; rm -Force apphub-windows-amd64.tar.gz ; cd ./apphub-windows-amd64 ; ./apphub.exe service install
```

  </CodeGroupItem>

  <CodeGroupItem title="Windows 32-bit">

```bash
wget -Uri "https://assets.coreservice.io/public/package/59/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz" -OutFile "apphub-windows-amd64.tar.gz" ; tar -zxf apphub-windows-amd64.tar.gz ; rm -Force apphub-windows-amd64.tar.gz ; cd ./apphub-windows-amd64 ; ./apphub.exe service install
```

  </CodeGroupItem>

</CodeGroup>

console output:

```bash
PS C:\Users\Administrator> wget -Uri "https://assets.coreservice.io/public/package/59/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz" -OutFile "apphub-windows-amd64.tar.gz" ; tar -zxf apphub-windows-amd64.tar.gz ; rm -Force apphub-windows-amd64.tar.gz ; cd ./apphub-windows-amd64 ; ./apphub.exe service install
```

## 2.Start Service

```bash
./apphub.exe service start
```

console output:

```bash
PS C:\Users\Administrator\app-windows-amd64> ./apphub.exe service start
Starting app service: completed.
```


## 3.Check APP Status

```bash
./apphub.exe status
```

check gaganode status is RUNNING

Status List:

```bash
TO_DOWNLOAD                     # app to download
DOWNLOADED                      # app downloaded
INSTALLED                       # app installed
RUNNING                         # app running
```

console output:

```bash
PS C:\Users\Administrator\app-windows-amd64> ./apphub.exe status
[gaganode]:             local version:[1.0.3] latest version:[1.0.3] status:[TO_DOWNLOAD]
```

## 4.Set Token

```bash
./apps/gaganode/gaganode.exe config set --token=`your token`
```

console output:

```bash
PS C:\Users\Administrator\app-windows-amd64> ./apps/gaganode/gaganode.exe config set --token=rhhectvdiitzmvqhbulqiljo
new config generated
restart for the new configuration to take effect
```

## 5.Restart APP

```bash
./apphub.exe restart
```

console output:

```bash
PS C:\Users\Administrator\app-windows-amd64> ./apphub.exe restart
restart command send, system will reboot...
```



![](./images/../../images/running/windows-02.png)

After 1-3 minutes, you will have a new terminal record at terminals open in new node .

![](./images/../../images/running/windows-07.png)

## Commands Reference

```bash
./apphub.exe service install                    # install node
./apphub.exe service start                      # start node
./apphub.exe service stop                       # stop node
./apphub.exe service remove                     # remove node
./apphub.exe status                             # check node running status
./apphub.exe restart                            # restart node
./apphub.exe upgrade                            # upgrade node
./apphub.exe log                                # check logs
./apphub.exe -h                                 # check help
```