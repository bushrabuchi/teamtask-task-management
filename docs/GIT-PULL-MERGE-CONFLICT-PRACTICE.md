# Git Pull, Merge, and Conflict Practice

This guide uses the TeamTask repository and the `feature/dashboard-layout` branch.

## 1. Check your working tree

```bash
git status
git branch --show-current
```

Commit or safely stash your own work before switching branches. Do not run a pull while you have unfinished changes that may be overwritten.

## 2. Commit your work

```bash
git add .
git status
git commit -m "feat: complete dashboard layout"
```

A commit saves a snapshot in your local Git repository. It does not upload the commit to GitHub.

## 3. Push your feature branch

First push (sets the upstream tracking branch):

```bash
git push -u origin feature/dashboard-layout
```

Later pushes:

```bash
git push
```

## 4. Pull the latest main branch into your feature branch

Stay on the feature branch. Fetch remote updates, then merge remote main into your current branch:

```bash
git switch feature/dashboard-layout
git fetch origin
git merge origin/main
```

You can also use `git pull origin main` while on the feature branch. It fetches and merges `origin/main` into the current branch. The explicit fetch + merge commands make the two steps easier to understand.

## 5. If Git reports a merge conflict

Check which files are conflicted:

```bash
git status
```

Open each conflicted file. Git marks the competing sections like this:

```text
<<<<<<< HEAD
Your feature branch version
=======
Incoming main branch version
>>>>>>> origin/main
```

Decide what the final code should contain. Keep the correct code, combine both versions if needed, and remove all conflict marker lines.

Then stage the resolved file and finish the merge:

```bash
git add path/to/resolved-file
git status
git commit
```

When Git starts a merge and asks for a merge commit message, the plain `git commit` command opens the message editor. Save and close it to finish. If Git says the merge completed automatically and no commit is needed, do not create an extra commit.

To cancel an unfinished merge and return to the pre-merge state:

```bash
git merge --abort
```

Only use this when a merge is in progress. It does not undo a merge that has already completed.

## 6. Push the updated feature branch

```bash
git push
```

## 7. Open a Pull Request

On GitHub, create a Pull Request with:

- Base: `main`
- Compare: `feature/dashboard-layout`

Review the changed files and checks before merging.

## Important difference

- `git fetch origin`: downloads remote updates but does not change your current branch files.
- `git pull origin main`: fetches and integrates `main` into the branch you are currently on.
- `git merge origin/main`: integrates the already-fetched remote `main` into your current branch.
- `git push`: uploads your local commits to GitHub.
- Pull Request: asks to integrate one GitHub branch into another; it is not the same as `git pull`.
