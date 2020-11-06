
## tmux (~/.tmux.conf)

```
# Prefix
set -g prefix C-t
bind-key C-t send-prefix
unbind-key C-b

# Escキーの遅延を解消
set -s escape-time 0

# ウィンドウのインデックスを1から始める
set -g base-index 1

# ウィンドウ履歴の最大行数
set-option -g history-limit 5000

# prefix + -で水平分割
bind - split-window -v -c '#{pane_current_path}'
# prefix + \で垂直分割
bind \\ split-window -h -c '#{pane_current_path}'

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

# ダブルクリック
bind-key -T copy-mode-vi DoubleClick1Pane \
    select-pane \; \
    send-keys -X select-word-no-clear \; \
    send-keys -X copy-pipe-no-clear "xclip -in -sel primary"
bind-key -n DoubleClick1Pane \
    select-pane \; \
    copy-mode -M \; \
    send-keys -X select-word \; \
    send-keys -X copy-pipe-no-clear "xclip -in -sel primary"

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

## vimrc (~/.vimrc)

```
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

## prezto

### インストール

~/.zshrc とか消えるので一旦退避する。

```
$ git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"
$ setopt EXTENDED_GLOB
for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/^README.md(.N); do
  ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"
done
```

### zshrc (~/.zshrc)

```
# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

# setup rbenv
eval "$(rbenv init -)"

# ZSH_HOME
export ZSH_HOME="${HOME}/.zsh"

# 環境変数読み込み
. $ZSH_HOME/env

# zplugの読み込み
. $ZSH_HOME/zplug_env

# aliasの読み込み
. $ZSH_HOME/alias_env

# MySQL Path
export PATH="/usr/local/opt/mysql@5.6/bin:$PATH"

# OpenSSL Path
export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"

# Java 11
export JAVA_HOME=`/usr/libexec/java_home -v 11`
# Java 8
# export JAVA_HOME=`/usr/libexec/java_home -v 1.8`

### zsh-autosuggestionsの設定（補完の色を変更）
export ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#5D6D7E,bg=clear"

### history 設定
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000

# mysqlのbundle installを通すのに必要だった
export LIBRARY_PATH=$LIBRARY_PATH:/usr/local/opt/openssl/lib/

# pecoの読み込み
. $ZSH_HOME/peco_env
```

### .alias_env(~/.zsh/alias_env)

```
# alias
```

### .zsh/.env(~/.zsh/env)

```
# Global veriable
```

### .peco_env(~/.zsh/peco_env)

```
# pecoの設定
## history検索
function peco-select-history() {
    local tac
    if which tac > /dev/null; then
        tac="tac"
    else
        tac="tail -r"
    fi
    BUFFER=$(\history -n 1 | \
        eval $tac | \
        peco --query "$LBUFFER")
    CURSOR=$#BUFFER
    zle clear-screen
}
zle -N peco-select-history
bindkey '^r' peco-select-history

## cdrからファイルを検索
#function peco-get-destination-from-cdr() {
#  cdr -l | \
#  sed -e 's/^[[:digit:]]*[[:blank:]]*//' | \
#  peco --query "$LBUFFER"
#}
#
## ファイルを検索してcd
#function peco-cdr() {
#  local destination="$(peco-get-destination-from-cdr)"
#  if [ -n "$destination" ]; then
#    BUFFER="cd $destination"
#    zle accept-line
#  else
#    zle reset-prompt
#  fi
#}
#zle -N peco-cdr
#bindkey '^j' peco-cdr
```

### .zplug_env(~/.zsh/zplug_env)

```
export ZPLUG_HOME=/usr/local/opt/zplug
source $ZPLUG_HOME/init.zsh
zplug "dracula/zsh", as:theme
zplug 'zsh-users/zsh-completions'
zplug 'zsh-users/zaw'
zplug 'zsh-users/zsh-syntax-highlighting', defer:2
zplug "zsh-users/zsh-autosuggestions"
zplug "zsh-users/zsh-history-substring-search"
zplug check || zplug install

### cdr の設定 (zplug load 前に書かないと zaw-cdr がスキップされる)
autoload -Uz chpwd_recent_dirs cdr add-zsh-hook is-at-least
if is-at-least 4.3.10; then
  add-zsh-hook chpwd chpwd_recent_dirs
  zstyle ':chpwd:*' recent-dirs-max 5000
  zstyle ':chpwd:*' recent-dirs-default yes
fi

### 補完
autoload -U compinit; compinit -C
## 補完候補をキャッシュする。
zstyle ':completion:*' use-cache yes
zstyle ':completion:*' cache-path ~/.zsh/cache
### 補完候補に色を付ける。
zstyle ':completion:*' list-colors "${(s.:.)LS_COLORS}"

zplug load
```

### .zpreztorc(~/.zpreztorc)

```
# Color output (auto set to 'no' on dumb terminals).
zstyle ':prezto:*:*' color 'yes'

# Set the Prezto modules to load (browse modules).
# The order matters.
zstyle ':prezto:load' pmodule \
  'environment' \
  'terminal' \
  'editor' \
  'history' \
  'directory' \
  'spectrum' \
  'utility' \
  'completion' \
  'prompt'

# Set the key mapping style to 'emacs' or 'vi'.
zstyle ':prezto:module:editor' key-bindings 'emacs'
```
