---
title: Presto
date: '2020-05-01T00:00:00.000Z'
description: 'Prestoを触ってみて'
group: 'Blog'
---

## 概要

Presto とは, Facebook が公開した新しい分散処理基盤.
大規模なデータセットに対して, インタラクティブに結果を返すように開発されたものである.
PrestoはHiveやImpalaと同じ「SQL Query Engine」であり, 特に数百GBを超える大規模データに対してもインタラクティブなレスポンスを（コンマ0秒以下，遅くても2,3秒）返す.
[参考:『Prestoとは何か，Prestoで何ができるか』](https://tug.red/entry/2014/07/10/150250/)

現在, 使用されている Presto としては, [PrestoDB](https://prestodb.io/) と [Trino(PrestoSQL)](https://trino.io/) がある.
PrestoDB は 2012 年に Facebook で作成されていて, Trino は 2018 年に オープンソースコミュニティとして作成されたものである.

この記事は, Trino に関しての記事となっています.
