# Contributing to NSpace ERC 2025

First off, thank you for considering contributing to the NSpace team's project for the European Rover Challenge 2025! Your efforts are highly valued. We aim to maintain a collaborative, efficient, and positive development environment.

This document provides guidelines for contributing to this project. Please read it carefully to ensure a smooth workflow for everyone.

## Table of Contents

1.  [Getting Started](#getting-started)
    - [Setting Up Your Development Environment](#setting-up-your-development-environment)
    - [Cloning the Repository](#cloning-the-repository)
2.  [How to Contribute](#how-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Working on Issues](#working-on-issues)
3.  [Development Workflow](#development-workflow)
    - [Branching Strategy](#branching-strategy)
    - [Making Changes](#making-changes)
    - [Committing Changes](#committing-changes)
    - [Pull Requests (PRs)](#pull-requests-prs)
    - [Code Reviews](#code-reviews)
    - [Merging a Pull Request](#merging-a-pull-request)
4.  [Coding Standards](#coding-standards)
    - [General Guidelines](#general-guidelines)
    - [Python](#python)
    - [C++ (ROS 2)](#c-ros-2)
    - [Documentation](#documentation)
5.  [Issue and PR Labels](#issue-and-pr-labels)
6.  [Questions or Need Help?](#questions-or-need-help)

## Getting Started

### Setting Up Your Development Environment

Before you begin, ensure your development environment is set up correctly. Refer to our setup guides:

- [Development Environment Setup Guide](docs/01_Setup_Guides/Development_Environment_Setup.md) **(TODO)**
- [ROS 2 Installation and Configuration Guide](docs/01_Setup_Guides/ROS2_Installation_And_Config.md) **(TODO)**
- [Husarnet Setup Guide](docs/01_Setup_Guides/Husarnet_Setup.md) **(TODO)**

### Cloning the Repository

1.  If you are a core team member, you can clone directly.
2.  Clone the repository to your local machine:

    ```bash
    # For core team members or if you have direct write access
    git clone https://github.com/NSpaceTeam/NSpace_ERC_2025.git
    ```

## How to Contribute

### Reporting Bugs

If you encounter a bug, please ensure it hasn't already been reported by searching the [Issues](https://github.com/NSpaceTeam/NSpace_ERC_2025/issues) on GitHub.

If you can't find an open issue addressing the problem, [open a new one](https://github.com/NSpaceTeam/NSpace_ERC_2025/issues/new). Be sure to use the "Bug Report" template and include as much detail as possible:

- A clear and descriptive title.
- Steps to reproduce the bug.
- What you expected to happen.
- What actually happened.
- Screenshots, logs, or error messages if applicable.
- Your environment (OS, ROS 2 version, branch, specific hardware if relevant).

### Suggesting Enhancements

If you have an idea for an enhancement or a new feature:

1.  Search the [Issues](https://github.com/NSpaceTeam/NSpace_ERC_2025/issues) to see if the enhancement has already been suggested.
2.  If not, [open a new issue](https://github.com/NSpaceTeam/NSpace_ERC_2025/issues/new) using the "Feature Request" template. Provide:
    - A clear and descriptive title.
    - A detailed description of the proposed enhancement and its benefits.
    - Any alternative solutions or features you've considered.
    - Relevant context or use cases.

### Working on Issues

1.  Look for issues tagged with `help wanted` or `good first issue`, or discuss with the team lead about which issue to pick up.
2.  Comment on the issue to indicate you'd like to work on it or contact the team lead, preventing duplicate effort.
3.  **The team lead or relevant module owner will assign the issue to you**.

## Development Workflow

We follow a **Gitflow**-like branching model.

### Branching Strategy

- **`main`**: This branch represents the most stable, "production-ready" code for a given competition stage. Direct pushes are **prohibited**. Merges to `main` happen from `develop` after thorough testing and represent a release or milestone.
- **`develop`**: This is the primary development branch where all completed features and bug fixes are integrated. All feature branches are created from `develop` and merged back into `develop`. Direct pushes are **prohibited**.
- **Feature Branches (`feature/<feature-name>`)**:
  - Create for new features or significant changes.
  - Branch off from `develop`. Example: `feature/panther-slam-integration`.
  - Name descriptively, using hyphens for separation (e.g., `feature/airlock-control-logic`).
  - Once complete, submit a Pull Request to merge into `develop`.
- **Bugfix Branches (`bugfix/<issue-number>-<short-description>`)**:
  - Create for fixing bugs present in `develop`.
  - Branch off from `develop`. Example: `bugfix/123-fix-odom-drift`.
  - Include the issue number if applicable.
  - Once complete, submit a Pull Request to merge into `develop`.
- **Hotfix Branches (`hotfix/<issue-number>-<short-description>`)**:
  - Create for critical bugs found in `main` that need immediate fixing.
  - Branch off from `main`.
  - Once complete, submit a Pull Request to merge into **both** `main` and `develop` to ensure the fix is incorporated everywhere.

### Making Changes

1.  Ensure your local `develop` branch is up-to-date:
    ```bash
    git checkout develop
    git pull origin develop
    ```
2.  Create your feature or bugfix branch from `develop`:
    ```bash
    git checkout -b feature/your-descriptive-name develop
    # or
    git checkout -b bugfix/123-short-fix-description develop
    ```
3.  Make your code changes. Commit **frequently** with **clear** messages.
4.  Ensure your code adheres to the [Coding Standards](#coding-standards).
5.  Add or update documentation as necessary.
6.  Add tests for your changes if applicable.

### Committing Changes

- **Commit frequently** with small, logical units of work.
- Write **clear and concise commit messages**. We encourage using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:

  ```
  type(scope): short description (imperative mood)

  (Optional) Longer body explaining the 'why' and 'how'.

  (Optional) Footer: e.g., Closes #123, BREAKING CHANGE: description
  ```

  - **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
  - **Scope** (optional): The module or part of the codebase affected (e.g., `panther_nav`, `airlock_fw`, `simulation`).
  - **Example**: `feat(panther_nav): Implement A* path planner for global navigation`
  - **Example**: `fix(airlock_fw): Correct gate sensor logic for PRESENCE_MIDDLE`

### Pull Requests (PRs)

When your feature or bugfix is complete and tested locally:

1.  Push your branch to the remote repository:
    ```bash
    git push origin feature/your-descriptive-name
    ```
2.  Go to the repository on GitHub and you'll usually see a prompt to create a Pull Request from your recently pushed branch. If not, navigate to the "Pull requests" tab and click "New pull request".
3.  **Base Branch**: Ensure the PR is targeting the correct base branch (usually `develop`).
4.  **Title**: Write a clear and concise PR title, often similar to your main commit message.
5.  **Description**:
    - Provide a summary of the changes.
    - Explain the "why" behind the changes.
    - Link to the relevant Issue(s) using keywords like `Closes #123`, `Fixes #456`.
    - Include any specific testing instructions or considerations for the reviewer.
    - Use the PR template if one is provided.
6.  **Reviewers**: Assign at least one relevant team member (or the CODEOWNERS if configured) to review your PR.
7.  **Labels**: Add appropriate [labels](#issue-and-pr-labels) to your PR.

### Code Reviews

- Reviewers should provide constructive feedback focusing on correctness, clarity, performance, adherence to standards, and test coverage.
- Be respectful and professional in all review comments.
- The PR author should respond to comments, make necessary changes, and push updates to the same branch. Discussion is encouraged.
- Once reviewers are satisfied, they should approve the PR.

### Merging a Pull Request

- Once the PR has at least one approval and any required status checks (CI) have passed, a team member with merge permissions (usually team leads or maintainers) can merge it.
- **Prefer "Squash and merge" or "Rebase and merge"** for PRs into `develop` or `main` to keep the commit history clean. "Squash and merge" is often simpler for teams. The commit message for the squash should be a well-crafted summary of the PR.
- Delete the feature/bugfix branch after merging.

## Coding Standards

### General Guidelines

- Write clear, readable, and maintainable code.
- Comment your code where necessary, especially for complex logic or public APIs.
- Follow the "Don't Repeat Yourself" (DRY) principle.
- Ensure your changes do not break existing functionality.
- Write or update tests for your code.
- Keep changes focused: one PR should ideally address one specific feature or bug.

### Python

- Follow **PEP 8** style guidelines. Use linters like `flake8` or `pylint`.
- Use type hints where appropriate (Python 3.5+).
- Write comprehensive docstrings for modules, classes, and functions (e.g., Google style, reStructuredText).
- For ROS 2 Python nodes, follow standard ROS 2 conventions.

### C++ (ROS 2)

- Follow the [ROS 2 C++ Style Guide](http://docs.ros.org/en/rolling/Contributing/Developer-Guide.html#style) (which is largely based on the Google C++ Style Guide).
- Use linters like `ament_cpplint` and formatters like `ament_uncrustify`.
- Use smart pointers (`std::unique_ptr`, `std::shared_ptr`) for memory management.
- Write Doxygen-style comments for public APIs.
- Organize code into logical classes and namespaces.

### Documentation

- All new features, modules, or significant changes should be documented.
- Update existing documentation if your changes affect it.
- Documentation resides primarily in the `/docs` directory.
- Use Markdown for documentation files.

## Issue and PR Labels

We use labels to categorize and manage issues and PRs. Please use appropriate labels when creating or working on them. Refer to the [list of defined labels and their descriptions](docs/00_Project_Overview/GitHub_Labels_Guide.md).

## Questions or Need Help?

- If you have questions about a specific issue, comment on the issue.
- For general questions or discussions, use the team's communication channels (e.g., WhatsApp, regular meetings).
- Don't hesitate to ask for help if you're stuck!

Thank you for contributing to NSpace!
