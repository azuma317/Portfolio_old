---
title: Kubernetesの記事まとめ
date: '2020-09-25T00:00:00.000Z'
createdDate: '2021-07-10T00:00:00.000Z'
updatedDate: '2021-07-10T00:00:00.000Z'
description: 'ラズパイで Kubernetes クラスタを構築した際の手順です.'
group: 'Blog'
---

## 概要

[おうち Kubernetes](https://github.com/CyberAgentHack/home-kubernetes-2020) という記事を見て, Kubernetes の勉強がてらラズパイ買って構築してみようと思ったのが始まりです.

「先に動くものを作ってその後学ぶ」というのが自分の独学のやり方なので, ひとまず動くところまでを記事にしたいと思います。

## 初期設定

### Ubuntu の起動

ディスプレイやキーボードを接続し, 起動します.
初期状態だとユーザー名とパスワードが "ubuntu" になっているので, これを入力してログインできます.

### Wifi の設定

下記の設定の設定ファイルを変更して, Wifi に接続し, パソコン経由で SSH できるように設定します.

/etc/netplan/50-cloud-init.yaml

```
# This file is generated from information provided by the datasource.  Changes
# to it will not persist across an instance reboot.  To disable cloud-init's
# network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
    ethernets:
        eth0:
            dhcp4: true
            optional: true
    version: 2
    wifis:
        wlan0:
            optional: true
            dhcp4: true
            access-points:
                "SSID":
                    password: "PASSWORD"
```

設定を有効にするには, 下記のコマンドを実行します.
また, ip コマンドを使って, IP アドレスを取得します.

```
# Wifi 設定の有効化
$ sudo netplan --debug try
$ sudo netplan --debug generate
$ sudo netplan --debug apply

# 念の為, 再起動
$ sudo reboot

# IPアドレスを取得
$ ip route show
default via 192.168.3.1 dev wlan0 proto dhcp src 192.168.3.13 metric 600
192.168.3.0/24 dev wlan0 proto kernel scope link src 192.168.3.13
192.168.3.1 dev wlan0 proto dhcp scope link src 192.168.3.13 metric 600
```

wifi 経由で SSH するので, wlan0 の IP である `192.168.3.13` を使います.

この上記の設定をラズパイの数だけ設定します.

今回, 2 台のラズパイに設定し, `192.168.3.13` と `192.168.3.14` の IP を取得しました.

### Ethernet の設定

2 台分のラズパイの hostname を設定します.
以後, 1 台目を k8s1, 2 台目を k8s2 とします.

```
# 1台目
$ sudo hostnamectl set-hostname k8s1

# 2台目
$ sudo hostnamectl set-hostname k8s2
```

ifconfig コマンドを使用したいので, `net-tools` をインストールします.

```
# k8s1, k8s2
$ sudo apt install net-tools
$ ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet6 fe80::dea6:32ff:feda:58df  prefixlen 64  scopeid 0x20<link>
        ether dc:a6:32:da:58:df  txqueuelen 1000  (Ethernet)
        RX packets 2095108  bytes 203389811 (203.3 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 2112765  bytes 1145928435 (1.1 GB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 91493115  bytes 16514139253 (16.5 GB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 91493115  bytes 16514139253 (16.5 GB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.3.13  netmask 255.255.255.0  broadcast 192.168.3.255
        inet6 fe80::dea6:32ff:feda:58e0  prefixlen 64  scopeid 0x20<link>
        inet6 2400:2410:2f61:2100:dea6:32ff:feda:58e0  prefixlen 64  scopeid 0x0<global>
        ether dc:a6:32:da:58:e0  txqueuelen 1000  (Ethernet)
        RX packets 281309  bytes 370271836 (370.2 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 101144  bytes 11409916 (11.4 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

Ethernet の IPv4 を設定します.

```
# k8s1
$ sudo ifconfig eth0 10.0.0.11 netmask 255.255.255.0 broadcast 10.0.0.255

# k8s2
$ sudo ifconfig eth0 10.0.0.12 netmask 255.255.255.0 broadcast 10.0.0.255
```

IP の確認をします.

```
$ ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.0.0.11  netmask 255.255.255.0  broadcast 10.0.0.255
        inet6 fe80::dea6:32ff:feda:58df  prefixlen 64  scopeid 0x20<link>
        ether dc:a6:32:da:58:df  txqueuelen 1000  (Ethernet)
        RX packets 2096222  bytes 203499109 (203.4 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 2113989  bytes 1146636258 (1.1 GB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 91548925  bytes 16524361644 (16.5 GB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 91548925  bytes 16524361644 (16.5 GB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.3.13  netmask 255.255.255.0  broadcast 192.168.3.255
        inet6 fe80::dea6:32ff:feda:58e0  prefixlen 64  scopeid 0x20<link>
        inet6 2400:2410:2f61:2100:dea6:32ff:feda:58e0  prefixlen 64  scopeid 0x0<global>
        ether dc:a6:32:da:58:e0  txqueuelen 1000  (Ethernet)
        RX packets 281387  bytes 370277328 (370.2 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 101206  bytes 11421184 (11.4 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```
