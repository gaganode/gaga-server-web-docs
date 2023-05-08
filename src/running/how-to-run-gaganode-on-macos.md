# How To Run GaGa On MacOS

>How to easily install a GaGaNode on MacOS.

[[toc]]

## Register

[https://dashboard.gaganode.com/register](https://dashboard.gaganode.com/register)

![](./../images/running/register.png)

Click the button “[Install & Run](https://dashboard.gaganode.com/install_run)” and you can find out your token and installation tutorial in this page.

![](./../images/running/install_run_2.png)

## 1.Download & Install

In the Terminal app <img src="./images/../../images/running/terminal.png" height="20"/> on [your Mac](https://support.apple.com/guide/terminal/welcome/2.13/mac), do one of the following:

```bash
curl -o apphub-darwin-amd64.tar.gz https://assets.coreservice.io/public/package/58/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-darwin-amd64.tar.gz && rm -f apphub-darwin-amd64.tar.gz && cd ./apphub-darwin-amd64 && ./apphub service install
```

console output:

```bash
curl -o apphub-darwin-amd64.tar.gz https://assets.coreservice.io/public/package/58/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-darwin-amd64.tar.gz && rm -f apphub-darwin-amd64.tar.gz && cd ./apphub-darwin-amd64 && ./apphub service install
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 8161k  100 8161k    0     0  3053k      0  0:00:02  0:00:02 --:--:-- 3061k
Install app service:					[  OK  ]
```

## 2.Start Service

```bash
./apphub service start
```

console output:

```bash
➜  apphub-darwin-amd64 ./apphub service start
Starting app service:					[  OK  ]
```

## 3.Check APP Status

```bash
./apphub status
```

console output:

```bash
➜  apphub-darwin-amd64 ./app status
[gaganode]:		local version:[1.0.3] latest version:[1.0.3] status:[TO_DOWNLOAD] 
```

Status List:

```bash
TO_DOWNLOAD                     # app to download
DOWNLOADED                      # app downloaded
INSTALLED                       # app installed
RUNNING                         # app running
```

## 4.Set Token

```bash
./apps/gaganode/gaganode config set --token=`your token`
```

console output:

```bash
➜  apphub-darwin-amd64 ./apps/gaganode/gaganode config set --token=`your token`
new config generated
restart for the new configuration to take effect
```


## 5.Restart APP

```bash
./apphub restart
```

console output:

```bash
➜  apphub-darwin-amd64 ./apphub restart
restart command send, system will reboot...
```

## Commands Reference

```bash
./apphub service install                         # install node
./apphub service start                           # start node
./apphub service stop                            # stop node
./apphub service remove                          # remove node
./apphub status                                  # check node running status
./apphub restart                                 # restart node
./apphub upgrade                                 # upgrade node
./apphub log                                     # check logs
./apphub -h                                      # check help
```

## Terminal Rsecording

<a href="https://asciinema.org/a/545224" target="_blank"><img src="https://asciinema.org/a/545224.svg" /></a>