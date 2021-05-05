---
title: vim の設定ファイルを公開します
date: '2020-11-07T00:00:00.000Z'
description: 'vim の設定ファイルを公開します.'
group: ''
---

## vimrc (~/.vimrc)

```.vimrc
" 行番号を表示
set number
" vim の矩形選択で文字が無くても右へ進める
set virtualedit=block
" 全角文字専用の設定
set ambiwidth=double
" 検索するときに大文字小文字を区別しない
set ignorecase
" 小文字で検索すると大文字と小文字を無視して検索
set smartcase
" 検索がファイル末尾まで進んだら、ファイル先頭から再び検索
set wrapscan
" 検索結果をハイライト表示
set hlsearch
" コマンドラインの履歴を10000件保存する
set history=10000
" タブキー押下時に挿入される文字幅を指定
set softtabstop=2
" インデント幅
set shiftwidth=2
" ファイル内にあるタブ文字の表示幅
set tabstop=2
" Tab文字を半角スペースにする
set expandtab
" 対応する括弧を強調表示
set showmatch

" dracula
packadd! dracula
syntax enable
colorscheme dracula
```
