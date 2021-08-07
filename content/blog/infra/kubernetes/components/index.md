---
title: Kubernetes のコンポーネント
date: '2021-07-22T00:00:00.000Z'
createdDate: '2021-07-22T00:00:00.000Z'
updatedDate: '2021-07-22T00:00:00.000Z'
description: 'Kubernetes のコンポーネントをまとめた記事です.'
group: 'Blog'
---

個人で勉強するため, [Kubernetes ドキュメント](https://kubernetes.io/ja/docs/concepts/overview/components/) を参考にまとめています.

Kubernetes クラスタは, コンテナ化されたアプリケーションを実行するノードと呼ばれるワーカーマシンの集合です.

ワーカーノードは, アプリケーションのコンポーネントである Pod をホストします.

マスターノードは, クラスタ内のワーカーノードと Pod を管理します.

コントロールプレーンは, クラスタ内のワーカーノードと Pod を管理します.

## コントロールプレーンコンポーネント

コントロールプレーンコンポーネントは, クラスタに関する全体的な決定（スケジューリングなど）を行います.

コントロールプレーンコンポーネントは, クラスタ内のどのマシンでも実行できますが, シンプルにするため, セットアップスクリプトは通常, すべてのコントロールプレーンコンポーネントを同じマシンで起動し, そのマシンではユーザーコンテナを実行します.

### kube-apiserver

API サーバーは, Kubernetes API を外部に提供する Kubernetes コントロールプレーンのコンポーネントです.
API サーバーは Kubernetes コントロールプレーンのフロントエンドになります.

Kubernetes API サーバーの主な実装は kube-apiserver です.
kube-apiserver は水平方向にスケールするように設計されています.
複数の kube-apiserver インスタンスを実行することで, インスタンス間でトラフィックを分散させることが可能です.

### etcd

一貫性, 高可用性を持ったキーバリューストアで, Kubernetes のすべてのクラスタ情報の保存場所として利用されています.

etcd を Kubernetes のデータストアとして使用する場合, 必ずデータの[バックアッププラン](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#backing-up-an-etcd-cluster)を作成してください

### kube-scheduler

コントロールプレーン上で動作するコンポーネントで, 新しく作られた Pod にノードが割り当てられているか監視し, 割り当てられていなかった場合にその Pod を実行するノードを選択します.

スケジューリングの決定は, Pod あるいは Pod 群のりソール要求量, ハードウェア/ソフトウェア/ポリシーによる制約, アフィニティ及びアンチアフィニティの指定, データの局所性, ワークロード間の干渉, 有効期限などを考慮して行われます.

### kube-controller-manager

コントロールプレーン上で動作するコンポーネントで, 複数のコントローラープロセスを実行しまう.

論理的には, 各コントローラーは個別のプロセスですが, 複雑さを減らすために一つの実行ファイルにまとめてコンパイルされ, 探知角プロセスとして動きます.

コントローラーには以下が含まれます.

- ノードコントローラー: ノードがダウンした場合の通知と対応を担当します.
- レプリケーションコントローラー: システム内の全レプリケーションコントローラーオブジェクトについて, Pod の数を正しく保つ枠割を持ちます.
- エンドポイントコントローラー: エンドポイントオブジェクトを注入します（つあり, Service と Pod を紐付けます）。
- サービスアカウントとトークンコントローラー: 新規の名前空間に対して, デフォルトアカウントと API アクセストークンを作成します.

## ノードコンポーネント

ノードコンポーネントはすべてのノードで実行され, 稼働中の Pod の管理や Kubernetes の実行環境を提供します.

### kubelet

クラスタ内の各ノードで実行されるエージェントです.
各コンテナが Pod で実行されていることを保証します.

Kubelet は, 様々なメカニズムを通じて提供される PodSpec のセットを取得し, それらの PodSpec に記述されているコンテナが正常に実行されている状態を保証します.kubelet は, Kubernetes が作成したものではないコンテナは管理しません.

### kube-proxy

kube-proxy はクラスタ内の各 node で動作しているネットワークプロキシで, Kubernetes の Service コンセプトの一部を実装しています.

kube-proxy は, Node のネットワークルールをメンテナンスします.
これらのネットワークルールにより, クラスタの内部または外部のネットワークセッションから Pod へのネットワーク通信が可能になります.

kube-proxy は, オペレーティングシステムにパケットフィルタリング層があり, かつ使用可能な場合, パケットフィルタリング層を使用します.それ以外の場合は自身でトラフィックを転送します.

### コンテナランタイム

コンテナランタイムは, コンテナの実行を担当するソフトウェアです.

Kubernetes は次の複数のコンテナランタイムをサポートします.
Docker, containerd, CRI-O, 及びすべての [Kubernetes CRI](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-node/container-runtime-interface.md) 実装です.