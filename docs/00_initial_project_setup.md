# Initial Project Setup

#### Changelog:
[2023-10-08]: initial write-up

This doc outlines what was done to set up the project for development work.
It should be used as a reference. There should be no need to manually run
through the steps below to set up a local environment for development work.

Running `npm install` should suffice.

## Setup process

* Initial setup of a Next.js app, using instructions detailed in [this doc](https://nextjs.org/docs/getting-started/installation)
* Next.js provides a default eslint setup out of the box. See details in [this doc](https://nextjs.org/docs/app/building-your-application/configuring/eslint)
* installed [husky using the instructions here](https://typicode.github.io/husky/getting-started.html).
    * Configured the pre-commit hook to commit only if eslint runs without issue.
