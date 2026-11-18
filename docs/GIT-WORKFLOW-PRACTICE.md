# Git Workflow Practice

This document is a hands-on guide for practising a feature-branch workflow with TeamTask.

## 1. Check your current branch and working tree

```bash
git status
git branch
git branch --show-current
```

A clean working tree means there are no uncommitted changes.

## 2. Update your local view of GitHub

```bash
git fetch origin
git switch feature/project-setup
git pull origin feature/project-setup
```

- `git fetch` downloads remote branch and commit information without changing your working files.
- `git pull` fetches and integrates the selected remote branch into your current local branch.

## 3. Create a feature branch

Start from an up-to-date base branch:

```bash
git switch main
git pull origin main
git switch -c feature/your-feature-name
```

Use a descriptive branch name, for example `feature/task-search`.

## 4. Make and commit a change

After editing and testing your files:

```bash
git status
git diff
git add .
git status
git commit -m "feat: describe the change"
```

A commit is a saved snapshot in your local Git history. It is not on GitHub until you push it.

## 5. Push the feature branch

```bash
git push -u origin feature/your-feature-name
```

The `-u` option sets the upstream branch, so later you can usually use `git push` and `git pull` without repeating the remote and branch.

## 6. Open a Pull Request

On GitHub, open the repository's Pull requests tab and choose New pull request.

- Base: `main` — the branch receiving the change.
- Compare: your feature branch — the branch containing the change.

Review the changed files and commits. A Pull Request (PR) proposes changes; it does not merge them automatically.

## 7. Review and merge

Before merging:

1. Read the PR title and description.
2. Inspect the Files changed tab.
3. Check that only intended files changed.
4. Run the app and tests locally when applicable.
5. Resolve review comments and merge conflicts.

When ready, use GitHub's Merge pull request action. For this practice repository, use the merge method selected for the exercise and confirm the merge.

## 8. Update your local main branch

After the PR is merged:

```bash
git switch main
git pull origin main
```

Your local `main` now includes the merged work.

## 9. Clean up the feature branch

After confirming the merge:

```bash
git branch -d feature/your-feature-name
git fetch --prune
```

Delete the remote branch on GitHub only when you no longer need it.

## 10. Understand a merge conflict

A conflict occurs when Git cannot automatically combine competing edits, commonly when two branches change overlapping lines in the same file.

Typical practice workflow:

```bash
git switch feature/your-feature-name
git fetch origin
git merge origin/main
```

If Git reports a conflict:

1. Run `git status` to find conflicted files.
2. Open each conflicted file in VS Code.
3. Compare the Current Change and Incoming Change.
4. Edit the file so the final result contains the intended code.
5. Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
6. Save and test the result.
7. Stage the resolved file and finish the merge:

```bash
git add path/to/resolved-file
git commit
```

Do not choose Accept Current or Accept Incoming blindly. Understand both versions first.

## Quick command reference

| Command | Purpose |
| --- | --- |
| `git status` | Check working tree |
| `git branch` | List local branches |
| `git switch name` | Switch branches |
| `git switch -c name` | Create and switch branch |
| `git fetch origin` | Download remote history information |
| `git pull` | Fetch and integrate remote changes |
| `git diff` | Review unstaged changes |
| `git add .` | Stage changes |
| `git commit` | Create a local commit |
| `git push` | Publish commits |
| `git merge branch` | Merge another branch into the current branch |
| `git log --oneline --graph --all` | Visualise branch history |

Remember: commit locally, push to GitHub, open a PR, review it, and merge only when the proposed changes are ready.
