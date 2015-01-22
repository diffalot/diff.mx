---
layout: post
title:  "Git Subtree Ready Reference"
date:   2015-01-22 12:00:00
categories: [development]
tags: [git, development, git subtree, ]
---

Git Subtrees allow easily tracking and contributing to remote repositories.  The advantage over submodules is that the tracked subdirectory is contained within the current repository repository history so no initialization and update cycle is required when cloning the project.  Additionally, the history of the subtree may be fully tracked or squashed.

> these notes use the following articles as reference:
> 
> * [Alternatives To Git Submodule: Git Subtree](http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/)
> * [Managing Nested Libraries Using the GIT Subtree Merge Workflow](http://www.codeproject.com/Articles/562949/ManagingplusNestedplusLibrariesplusUsingplustheplu)
> * [6.7 Git Tools - Subtree Merging](http://git-scm.com/book/en/v1/Git-Tools-Subtree-Merging)
> * [Moving A Subdirectory Into A Separate Git Repository](http://airbladesoftware.com/notes/moving-a-subdirectory-into-a-separate-git-repository/)

# track a remote repository, squash commits

1. add subtree as a remote

    `git remote add -f $REMOTE_NAME $REMOTE_URI`

2. setup remote as a subtree with a relative local path.  this will fetch and merge.

    `git subtree add --prefix $LOCAL_PATH $REMOTE_NAME $REMOTE_BRANCH --squash`

3. fetch and merge (pull) when the subtree remote has updates

    `git fetch $REMOTE_NAME $REMOTE_BRANCH`

    `git subtree pull --prefix $LOCAL_PATH $REMOTE_NAME $REMOTE_BRANCH`

# track a subdirectory of a remote repository, squash commits

1. clone remote repository as a new project

    `git clone $REMOTE_URI`

2. discard everything but the subdirectory wanted, this will make the wanted directory the project root with full working history.

    `cd $CLONED_REPO`

    `git checkout -b $WORK_BRANCH`

    `git filter-branch --subdirectory-filter $WANTED_DIRECTORY HEAD -- --all`

    `git reset --hard`

    `git gc --aggressive`

    `git prune`

3. setup new remote to contain project, and push to master branch at that location

    `git remote add $NEW_REMOTE_NAME $NEW_REMOTE_URI`

    `git push --set-upstream $NEW_REMOTE_NAME $WORK_BRANCH:master`

4. use that new repository as a subtree.
