---
title: Presto(TrinoDB)をDockerで動かしてみた
date: '2021-05-01T00:00:00.000Z'
description: 'TrinoDBの設定や動作確認を行いました。'
group: 'Blog'
---

## 概要

Presto とは, Facebook が公開した新しい分散処理基盤.
大規模なデータセットに対して, インタラクティブに結果を返すように開発されたものである.
PrestoはHiveやImpalaと同じ「SQL Query Engine」であり, 特に数百GBを超える大規模データに対してもインタラクティブなレスポンスを（コンマ0秒以下，遅くても2,3秒）返す.
[参考:『Prestoとは何か，Prestoで何ができるか』](https://tug.red/entry/2014/07/10/150250/)

現在, 使用されている Presto としては,
[PrestoDB](https://prestodb.io/) と [Trino(旧PrestoSQL)](https://trino.io/) がある.
PrestoDB は 2012 年に Facebook で作成されていて, Trino は 2018 年に オープンソースコミュニティとして作成されたものである.

この記事は, Trino に関しての記事となっています.

## Trino

分散クエリを使用して, 大量のデータに効率的に取得するために設計されたツールです.
従来のリレーショナルデータベースや Cassandra など, さまざまな種類のデータソースで動作するように拡張できます.
また, 数種類のデータソース間でのデータ結合(JOIN)なども行うことができます.

## DEMO

MySQL と PostgreSQL の2つのデータソースを使って, 動作確認をしてみます.
今回は, DEMO 用にリポジトリ [trino-sample](https://github.com/azuma317/trino-sample) を作りました.
動作確認に関して, trino から Docker イメージが提供されているのでそちらを使用します.
[dockerhub - trino](https://hub.docker.com/r/trinodb/trino)

### Trino の設定

#### データソース

データソースの設定については, `/etc/trino/catalog/` 配下にデータソースごとの接続情報を記述します.

設定例

```properties
# MySQL
connector.name=mysql
connection-url=jdbc:mysql://mysql:3306?autoReconnect=true&useSSL=false
connection-user=root
connection-password=password

# PostgreSQL
connector.name=postgresql
connection-url=jdbc:postgresql://postgresql:5432/mydb
connection-user=postgres
connection-password=password
```

#### Config

`config.properties` で coordinator や worker の設定, ポートの設定等を行います.
検証等で, coordinator かつ worker として扱いたい場合は,
`node-scheduler.include-coordinator=true` の設定を付ける必要があります.

#### クラスタ

基本的に Presto は, coordinator, worker のクラスタで動作します.
`node.properties` でクラスタID: `node.environment` であったり,
ノードID: `node.id` であったりを設定します.

### 動作確認

```zsh
$ git clone git@github.com:azuma317/trino-sample.git
$ docker compose up -d
# mysql をデフォルトで接続したい場合
$ ./bin/trino --server localhost:8080 --catalog mysql --schema mydb
# postgresql をデフォルトで接続したい場合
$ ./bin/trino --server localhost:8080 --catalog postgresql --schema public

# mysql へのクエリの投げ方
trino:mydb> select * from mysql.mydb.users;
 id |        name
----+---------------------
  1 | Gary Singh Johnson
  2 | Nguyen Joseph Gupta
  3 | Raul Bryan Ruiz
  4 | Earl Craig Caldwell
  5 | Wes Sean Parks
(5 rows)

Query 20210505_055704_00011_6tmbi, FINISHED, 1 node
Splits: 17 total, 17 done (100.00%)
0.22 [5 rows, 0B] [22 rows/s, 0B/s]

# postgresql へのクエリの投げ方
trino:mydb> select * from postgresql.public.users;
 user_id |       user_name
---------+-----------------------
       1 | Danilo Hoang Bhandari
       2 | Jacques Ace Faulkner
       3 | Dipak Bubba Hopper
       4 | Mihir Aji Ace
       5 | Kabir Bayu Humphries
(5 rows)

Query 20210505_060105_00012_6tmbi, FINISHED, 1 node
Splits: 17 total, 17 done (100.00%)
0.22 [5 rows, 0B] [22 rows/s, 0B/s]

# mysql, postgresql へのクエリの投げ方
trino:mydb> select id, name from mysql.mydb.users
         -> union
         -> select user_id as id, user_name as name from postgresql.public.users
         -> order by id;
 id |         name
----+-----------------------
  1 | Danilo Hoang Bhandari
  1 | Gary Singh Johnson
  2 | Nguyen Joseph Gupta
  2 | Jacques Ace Faulkner
  3 | Dipak Bubba Hopper
  3 | Raul Bryan Ruiz
  4 | Earl Craig Caldwell
  4 | Mihir Aji Ace
  5 | Wes Sean Parks
  5 | Kabir Bayu Humphries
(10 rows)

Query 20210505_060327_00018_6tmbi, FINISHED, 1 node
Splits: 68 total, 68 done (100.00%)
0.22 [10 rows, 0B] [45 rows/s, 0B/s]
```
