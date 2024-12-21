---
layout: post
title: Setup notes
date: 2024-12-21 01:09:00
description: Some notes on setup
tags: formatting code
categories: sample-posts
featured: true
---

## _Vim stuff_
------

#### Add new plugin via vim-plug

In `.vimrc`:

```viml
call plug#begin()

Plug '<PLUGIN NAME>'

call plug#end()
```

Then run the following in Vim:

```viml
:PlugInstall 
```
to install the plugins. See [here](https://github.com/junegunn/vim-plug).

#### Snippets

Snippets are stored in `~/.vim/UltiSnips/`. To add new snippets to a certain file type, open a file with that type using Vim, and run:

```viml
:UltiSnipsEdit
```

