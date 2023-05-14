# How To Run GaGa On Linux

>How to easily install a GaGaNode on Linux.

[[toc]]

## Install Dependencies Packages

If you get notifications like `-bash: curl: command not found` telling that you can't use this command, please install `curl`, `tar`, `ca-certificates` by using command first.

**Ubuntu / Debian:** 

```bash
sudo apt-get update -y && sudo apt-get -y install curl tar ca-certificates
```

**CentOS / Fedora:**

```bash
sudo yum update -y && sudo yum install -y curl tar ca-certificates
```

## 1.Download & Install

<CodeGroup>

  <CodeGroupItem title="Linux 64-bit">

```bash
curl -o apphub-linux-amd64.tar.gz https://assets.coreservice.io/public/package/60/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-linux-amd64.tar.gz && rm -f apphub-linux-amd64.tar.gz && cd ./apphub-linux-amd64 && sudo ./apphub service install
```

  </CodeGroupItem>

  <CodeGroupItem title="Linux 32-bit">

```bash
curl -o apphub-linux-386.tar.gz https://assets.coreservice.io/public/package/70/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-linux-386.tar.gz && rm -f apphub-linux-386.tar.gz && cd ./apphub-linux-386 && sudo ./apphub service install
```

  </CodeGroupItem>

</CodeGroup>

console output:

```bash
meson@meson-server:~$ curl -o apphub-linux-amd64.tar.gz https://assets.coreservice.io/public/package/60/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-linux-amd64.tar.gz && rm -f apphub-linux-amd64.tar.gz && cd ./apphub-linux-amd64 && sudo ./apphub service install
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 7752k  100 7752k    0     0  4171k      0  0:00:01  0:00:01 --:--:-- 4170k
[sudo] password for meson:
2022/12/13 06:52:47 [info] systemd detected
Install app service:					[  OK  ]
```


## 2.Start Service

::: tip 🚧 TIP
To shut down the old version of Gaganode if it exists in the system, please use the following command.
<br>
`
sudo ./apphub service remove
`
:::


```bash
sudo ./apphub service start
```

console output:

```bash
meson@meson-server:~/app-linux-amd64$ sudo ./apphub service start
2022/12/13 06:52:57 [info] systemd detected
Starting app service:					[  OK  ]
```

## 3.Check APP Status

```bash
./apphub status
```

check gaganode status is RUNNING

console output:

```bash
meson@meson-server:~/app-linux-amd64$ ./apphub status
[gaganode]:		local version:[1.0.3] latest version:[1.0.3] status:[DOWNLOADED]
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
sudo ./apps/gaganode/gaganode config set --token=`your token`
```

console output:

```bash
meson@meson-server:~/app-linux-amd64$ sudo ./apps/gaganode/gaganode config set --token=albrcgctlhzgdhramuywpwje
new config generated
restart for the new configuration to take effect
```

## 5.Restart APP

```bash
./apphub restart
```

console output:

```bash
meson@meson-server:~/app-linux-amd64$ ./apphub restart
restart command send, system will reboot...
```

## Commands Reference

```bash
sudo ./apphub service install                    # install node
sudo ./apphub service start                      # start node
sudo ./apphub service stop                       # stop node
sudo ./apphub service remove                     # remove node
./apphub status                                  # check node running status
./apphub restart                                 # restart node
./apphub upgrade                                 # upgrade node
./apphub log                                     # check logs
./apphub -h                                      # check help
```

## Terminal Rsecording

<a href="https://asciinema.org/a/545183" target="_blank"><img src="https://asciinema.org/a/545183.svg" /></a>