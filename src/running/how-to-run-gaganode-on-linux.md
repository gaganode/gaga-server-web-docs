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
curl -o app-linux-amd64.tar.gz https://assets.coreservice.io/public/package/22/app/1.0.3/app-1_0_3.tar.gz && tar -zxf app-linux-amd64.tar.gz && rm -f app-linux-amd64.tar.gz && cd ./app-linux-amd64 && sudo ./app service install
```

  </CodeGroupItem>

  <CodeGroupItem title="Linux 32-bit">

```bash
curl -o app-linux-386.tar.gz https://assets.coreservice.io/public/package/21/app/1.0.3/app-1_0_3.tar.gz && tar -zxf app-linux-386.tar.gz && rm -f app-linux-386.tar.gz && cd ./app-linux-386 && sudo ./app service install
```

  </CodeGroupItem>

</CodeGroup>

console output:

```bash
meson@meson-server:~$ curl -o app-linux-amd64.tar.gz https://assets.coreservice.io/public/package/22/app/1.0.3/app-1_0_3.tar.gz && tar -zxf app-linux-amd64.tar.gz && rm -f app-linux-amd64.tar.gz && cd ./app-linux-amd64 && sudo ./app service install
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 7752k  100 7752k    0     0  4171k      0  0:00:01  0:00:01 --:--:-- 4170k
[sudo] password for meson:
2022/12/13 06:52:47 [info] systemd detected
Install app service:					[  OK  ]
```


## 2.Start Service

```bash
sudo ./app service start
```

console output:

```bash
meson@meson-server:~/app-linux-amd64$ sudo ./app service start
2022/12/13 06:52:57 [info] systemd detected
Starting app service:					[  OK  ]
```

## 3.Check APP Status

```bash
./app status
```

check gaganode status is RUNNING

console output:

```bash
meson@meson-server:~/app-linux-amd64$ ./app status
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
./app restart
```

console output:

```bash
meson@meson-server:~/app-linux-amd64$ ./app restart
restart command send, system will reboot...
```

## Commands Reference

```bash
sudo ./app service install                    # install node
sudo ./app service start                      # start node
sudo ./app service stop                       # stop node
sudo ./app service remove                     # remove node
./app status                                  # check node running status
./app restart                                 # restart node
./app upgrade                                 # upgrade node
./app log                                     # check logs
./app -h                                      # check help
```

## Terminal Rsecording

<a href="https://asciinema.org/a/545183" target="_blank"><img src="https://asciinema.org/a/545183.svg" /></a>