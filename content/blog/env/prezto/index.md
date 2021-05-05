---
title: prezto の設定ファイルを公開します
date: '2020-11-07T00:00:00.000Z'
description: 'prezto の設定ファイルを公開します.'
group: ''
---

### .zpreztorc(~/.zpreztorc)

```.zpreztorc
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
