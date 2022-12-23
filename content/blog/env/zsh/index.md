---
title: zsh の設定ファイルを公開します
date: '2020-11-07T00:00:00.000Z'
createdDate: '2020-11-07T00:00:00.000Z'
updatedDate: '2021-05-17T00:00:00.000Z'
description: 'zsh の設定ファイルを公開します.'
group: ''
tags: ['zsh', 'env']
---

### zshrc (~/.zshrc)

```.zshrc
# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

# If you come from bash you might have to change your $PATH.
export PATH=$HOME/.nodebrew/current/bin:$HOME/.rd/bin:$HOME/bin:/usr/local/opt/mysql-client/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/usr/local/opt/libpq/bin

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

# setoptの読み込み
. $ZSH_HOME/setopt_env

# Java11
export JAVA_HOME=/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home
# Java1.8
#export JAVA_HOME=/Library/Java/JavaVirtualMachines/amazon-corretto-8.jdk/Contents/Home

### zsh-autosuggestionsの設定（補完の色を変更）
export ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#aeb6bf,bg=clear,bold,underline"

### history 設定
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000

# pecoの読み込み
. $ZSH_HOME/peco_env

export LDFLAGS="-L/usr/local/opt/mysql-client/lib"
export CPPFLAGS="-I/usr/local/opt/mysql-client/include"
```

### .alias_env(~/.zsh/alias_env)

```.alias_env
# alias
```

### .env(~/.zsh/env)

```.env
# Global veriable
```

### .peco_env(~/.zsh/peco_env)

```.peco_env
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

## SSH先検索
function pssh() {
  local host=$(cat ~/.ssh/config | grep "Host " | awk '{print $2}' | peco)
  if [ -n "$host" ]; then
    ssh $host
  fi
}

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

```.zplug_env
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

### zplugのロード
zplug load

### 補完
autoload -U compinit; compinit -C
## 補完候補をキャッシュする。
zstyle ':completion:*' use-cache yes
zstyle ':completion:*' cache-path ~/.zsh/cache
### 補完候補に色を付ける。
zstyle ':completion:*' list-colors "${(s.:.)LS_COLORS}"
```
