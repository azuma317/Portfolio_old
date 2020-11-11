---
title: tmux の設定ファイル
date: '2020-11-06T00:00:00.000Z'
description: 'tmux の設定ファイルを公開します.'
group: ''
---

## .tmux.conf

``` .tmux.conf
# Prefix
set -g prefix C-t
bind-key C-t send-prefix
unbind-key C-b

# Escキーの遅延を解消
set -s escape-time 0

# ウィンドウのインデックスを1から始める
set -g base-index 1

# prefix + -で水平分割
bind - split-window -v -c '#{pane_current_path}'
# prefix + \で垂直分割
bind \\ split-window -h -c '#{pane_current_path}'

# アクティブウィンドウのハイライト
setw -g window-style 'bg=#44475a'
setw -g window-active-style 'bg=#1d1e26'

# viのキーバインドを使用する
setw -g mode-keys vi

#マウスデフォルトはOFF
setw -g mouse on

# ペイン切り替え(Vim風)
bind -r j select-pane -D #down
bind -r k select-pane -U #up
bind -r h select-pane -L #left
bind -r l select-pane -R #right

# カーソルキーでペインの大きさ変更
bind -r Up    resize-pane -U 3
bind -r Down  resize-pane -D 3
bind -r Left  resize-pane -L 3
bind -r Right resize-pane -R 3

# セッション切り替え
bind -r n choose-session

# セッション移動
bind -r f switch-client -p
bind -r b switch-client -n

# コピーモード
set -g default-command "exec reattach-to-user-namespace -l $SHELL"
setw -g mode-keys vi
unbind -T copy-mode MouseDragEnd1Pane
bind-key -T copy-mode-vi v send-keys -X begin-selection
bind-key -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "reattach-to-user-namespace pbcopy"
bind-key -T copy-mode-vi Enter send-keys -X copy-pipe-and-cancel "reattach-to-user-namespace pbcopy"

# tmuxのオートスタート
set -g @continuum-boot 'on'
set -g @continuum-restore 'on'

# Dracula Theme
set -g @plugin 'dracula/tmux'

# Status line
## status line を更新する間隔を1秒にする
set -g status-interval 1
## バッテリー容量を削除
set -g @dracula-show-battery false
## Wifi名を削除
set -g @dracula-show-network false
## 華氏から摂氏に変更
set -g @dracula-show-fahrenheit false
## タイムゾーン削除
set -g @dracula-show-timezone false
## CPU使用率表示
set -g @dracula-cpu-usage true
## よくわからんけど?みたいなやつがつくからその対処
set -g @dracula-show-left-sep ""
set -g @dracula-show-right-sep ""

# Session保存
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'

# 同時操作
bind e setw synchronize-panes on
bind E setw synchronize-panes off

# tpmを起動
run -b '~/.tmux/plugins/tpm/tpm'
```
