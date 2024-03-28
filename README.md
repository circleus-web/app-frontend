# Purples frontend
This is a repo for frontend application of [purples](https://github.com/purples-web)

## How to launch project
[Angular guide](https://angular.io/start/start-deployment)
- Download [Node.js](https://nodejs.org/en)
- Download angular CLI `npm install -g @angular/cli`
- Download the project from github via `git clone "{url_to_this_repo}"` OR following steps:
    - On a home page of repository find `Code` and in a dropdown menu select `Download ZIP`
    - Unzip the archive where you want
- Open the project directory in terminal
- Run `ng serve` and follow instructions in output

## Git style
- Branches are named as `[feature|fix]/{feature-name}`
- Commits
    - Starts with feature short name, so after merge it could be possible to indentify commit belonging
    - After feature name goes `+` (added/created smth), `~` (updated/modified/enhanced) or `-` (deleted)
    - At the end goes commit message
- Commits in master are allowed to work with general documents or setting like `README.md` or `package.json`

## Code style
All rules are set up in prettier formatter and eslint linter; Prettier formatting could be launched via `npm run-script format`
