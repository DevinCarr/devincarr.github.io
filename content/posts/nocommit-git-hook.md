---
title: "\"nocommit\" Git Hook"
date: 2020-04-27T21:40:02-07:00
---

[Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are an interesting way to customize your daily git workflow. They can allow you to trigger on specific events (before and after) common tasks such as: committing (via 'pre-commit') and pushing (via 'pre-push'). Specific examples of how to run these each are located in your `.git/hooks/` folder with the extension `.sample`.

# nocommit

One of the `pre-commit` git hooks that I utilize is 'nocommit'. It ensures that I do not have any lines of code that have the word "nocommit" in them before commiting the changes. I typically use this to help mark lines of code that I will temporarly edit but would require a follow up before commiting/pushing upstream.

This helps my common workflow which typically involves:
1. Writing source ad-hoc to get a code path running
2. Iterate on a solution
3. Make slight notes via `// nocommit: ` comments as insights appear
4. Continue testing
5. Follow up on ad-hoc solution areas to increase robustness/better comments.

The key here is to not allow myself to skip out on the last step which typically involves expanding a comment into something more meaningful for the content/context involved. With `nocommit` comments I can make sure that they are resolved completely before even creating a commit.

## Why nocommit, why not TODO

Initially I would have utilized the keyword TODO to accomplish the similar goal but because it is well known. The problem is that it typically is already checked in at my work, thus triggering too often on changes that that aren't related to me. Mostly because previous engineers would commit their TODOs in and never follow back up on the actual tasks ascribed by the TODO. So for the sake of simplicity, I have opted to for a different keyword: `nocommit`.

## Source

A pre-requistes is to have the latest PowerShell 7 installed and available on the path as `pwsh` (which is done by default when installed).

`.git/hooks/pre-commit`:

```powershell
#!/usr/bin/env pwsh

$changes = $(git diff --name-only).Split("\r?\n")
$nocommits = Get-ChildItem -Recurse $changes | Select-String "nocommit";
if ($nocommits.Count -gt 0) {
    Write-Output "Error(pre-commit): 'nocommit's found in source:"
    $nocommits
    exit 1
}

exit 0
```

### Example Output

```
$ git commit -m "test"
Error(pre-commit): 'nocommit's found in source:

Database\Program.cs:37:            // nocommit: correct this logger instance
Database\Program.cs:39:            // nocommit: expand comment
```