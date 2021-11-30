## Features

- ⚛️ Create React App 3 (React 17)
- 🐈 Yarn Workspaces
- 🐉 Lerna 3
- ✨ Host Multiple CRA Apps, Component Libraries & Storybooks in one Monorepo
- 🔥 Hot Reload all Apps, Components & Storybooks
- 👨‍🔬 Test all workspaces with Eslint & Jest using one command

## Contents

- [Features](#features)
- [Contents](#contents)
- [Setup](#setup)
  - [Pre-Requisites](#pre-requisites)
  - [Installation](#installation)
  - [Adding workspace dependencies](#adding-workspace-dependencies)
  - [Adding root dependencies](#adding-root-dependencies)
- [Usage](#usage)
  - [Starting Project in Workspace](#starting-project-in-workspace)
  - [Starting The Storybook](#starting-the-storybook)
  - [Linting and Testing](#linting-and-testing)
- [Commitlint](#commitlint)

## Setup

### Pre-Requisites

- Git >2.25.0
- Yarn >1.13.0
- Node >11.14.0

### Installation

```bash
git clone this-repo
yarn
```

### Adding workspace dependencies

```bash
yarn workspace <workspace_name> <command>
```

This will run the chosen Yarn command in the selected workspace.

Example:

```bash
yarn workspace my-app add react-router-dom --dev
```

This will add `react-router-dom` as `dependencies` in your `packages/my-app/package.json`. To remove dependency use `remove` instead of add

### Adding root dependencies

```bash
yarn add <dependency_name> -W
```

Make it explicit by running with the `-W` flag (or --ignore-workspace-root-check)

## Usage

### Starting Project in Workspace

From your project root type start command for desired app

```bash
yarn workspace @project/portal start
```

All available `start` scripts

```json
"scripts": {
    "start:portal": "yarn workspace @project/portal start",
    "start:storybook": "yarn workspace @project/storybook storybook",
    ...
  }
```

### Starting The Storybook

```bash
yarn start:storybook
```

### Linting and Testing

```bash
yarn workspace <workspace-root> test
```

## Commitlint

Common types according to [commitlint-config-conventional (based on the the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum) can be:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

