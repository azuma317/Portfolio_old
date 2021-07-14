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
