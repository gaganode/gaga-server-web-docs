# How To Run GaGa On Raspberry Pi

>How to easily install a GaGaNode on Raspberry Pi.

[[toc]]

## Deploy Requirements

- Any [Raspberry Pi Products](https://www.raspberrypi.com/products/), Including Raspberry Pi 1 - 2, Raspberry Pi Zero 1 - 2
- Idle Home Broadband

## SetUp the Raspberry Pi

GaGaNode takes up a very small amount of space, does not affect previously running applications on the Raspberry Pi, and can be installed directly.

If the Raspberry Pi is brand new, you can use the [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to install the Raspberry Pi OS.

![](./../images/running/raspberry-pi-01.png)

Raspberry Pi Imager is a quick and easy way to install Raspberry Pi OS to a microSD card. Watch the [45-second video](https://www.youtube.com/watch?v=ntaXWS8Lk34) to learn how to install an operating system using Raspberry Pi Imager.

## Register

[https://dashboard.gaganode.com/register](https://dashboard.gaganode.com/register)

![](./../images/running/register.png)

Click the button “[Install & Run](https://dashboard.gaganode.com/install_run)” and you can find out your token and installation tutorial in this page.

![](./../images/running/install_run_2.png)

## 1.Download & Install

<CodeGroup>

  <CodeGroupItem title="Linux ARM 64-bit">

```bash
curl -o app-linux-arm64.tar.gz https://assets.coreservice.io/public/package/24/app/1.0.3/app-1_0_3.tar.gz && tar -zxf app-linux-arm64.tar.gz && rm -f app-linux-arm64.tar.gz && cd ./app-linux-arm64 && sudo ./app service install
```

  </CodeGroupItem>

  <CodeGroupItem title="Linux ARM 32-bit">

```bash
curl -o app-linux-arm32.tar.gz https://assets.coreservice.io/public/package/23/app/1.0.3/app-1_0_3.tar.gz && tar -zxf app-linux-arm32.tar.gz && rm -f app-linux-arm32.tar.gz && cd ./app-linux-arm32 && sudo ./app service install
```

  </CodeGroupItem>

</CodeGroup>

## 2.Start Service

```bash
sudo ./app service start
```

## 3.Check APP Status

```bash
./app status
```

## 4.Set Token

```bash
sudo ./apps/gaganode/gaganode config set --token=`your token`
```

## 5.Restart APP

```bash
./app restart
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

<a href="https://asciinema.org/a/545172" target="_blank"><img src="https://asciinema.org/a/545172.svg" /></a>