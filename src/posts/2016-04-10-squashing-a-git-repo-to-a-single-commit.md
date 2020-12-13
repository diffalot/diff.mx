---
layout: post
title: 'Squashing a Git Repository to a Single Commit'
date: 2016-04-10 12:00:00
categories: [development]
tags: [git, development, git rebase]
---

1. Rebase the repository to 2 commits

```shell
git rebase -i $CHECKSUM_OF_FIRST_COMMIT
```

2. Soft Reset the last commit

```shell
git reset --soft "HEAD^"
```

3. Use the softly reset staging area as an `--amend` commit

```shell
git commit --amend -m "Squashed repo to a single commit"
```
