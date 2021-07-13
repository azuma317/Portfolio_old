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

### Wifi の設定

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
