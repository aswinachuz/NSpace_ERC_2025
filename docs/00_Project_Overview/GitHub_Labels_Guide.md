# NSpace ERC 2025 - GitHub Labels Guide

Welcome to the NSpace team's guide for using GitHub Labels! Labels are essential for organizing, categorizing, and prioritizing our work on Issues and Pull Requests (PRs). They also help integrate with our GitHub Project board.

## Table of Contents

1.  [Why Use Labels?](#why-use-labels)
2.  [How to Apply Labels](#how-to-apply-labels)
3.  [Label Categories (Mapping to Project Fields)](#label-categories-mapping-to-project-fields)
    - [Priority](#priority)
    - [Team](#team)
    - [Module](#module)
    - [Challenge](#challenge)
    - [Size/Effort (To Be Defined)](#sizeeffort-to-be-defined)
4.  [General Labels](#general-labels)

## Why Use Labels?

- **Organization:** Quickly understand the nature and status of an issue/PR.
- **Filtering:** Easily find specific types of issues/PRs (e.g., all high-priority bugs, all documentation tasks).
- **Prioritization:** Help the team focus on the most important tasks.
- **Automation:** Some automations can be triggered based on labels.
- **Project Board Integration:** Labels can be used to filter and group items on our GitHub Project board.

## How to Apply Labels

When creating or viewing an **Issue** or **Pull Request**, you'll see a "Labels" section on the right-hand sidebar. Click the gear icon or "Labels" to search for and apply relevant labels. You can apply multiple labels to a single item. Make sure to go through **all** the labels and apply all relevant labels.

## Label Categories

These categories of labels often correspond to custom fields we use in our main GitHub Project board. Applying these labels helps keep the project board synchronized and provides another way to filter or sort issues.

### Priority

These labels indicate the urgency of an issue or PR. They directly map to the "Priority" field in our project board. **Apply only one priority label per item.**

- `high priority`
  - **Description:** These issues should be resolved extremely soon; if nobody is working on this issue - assign them now. Critical blockers or time-sensitive tasks.
  - **When to use:** For critical bugs, tasks blocking other major work, or urgent competition deadlines.
- `medium priority`
  - **Description:** These issues don't need to be rushed, but they should be resolved soon. Important tasks that contribute significantly to current goals.
  - **When to use:** For most standard features, improvements, or non-critical bugs that should be addressed in the near future.
- `low priority`
  - **Description:** These issues are low priority and don't need to be rushed. Nice-to-haves or tasks that can be deferred.
  - **When to use:** For minor enhancements, cosmetic fixes, or tasks with no immediate impact.

### Team

These labels help assign or categorize tasks based on the primary team responsible. They map to a "Team" field or can be used for team-specific views on the project board. If the issue is a general task that can't be assigned to a specific team, you can leave this blank.

- `website-team`
  - **Description:** Task designated to the website development team.
  - **When to use:** For issues/PRs related to the NSpace team website, public-facing web presence.
- `design-marketing-team`
  - **Description:** Task designated to the design/marketing team.
  - **When to use:** For tasks involving graphic design, UI/UX design, marketing materials, social media content creation, or public relations.
- `embedded-team`
  - **Description:** Task designated to the embedded team.
  - **When to use:** For issues/PRs specifically focused on microcontroller firmware, ROS2, low-level hardware interaction, or specific embedded system components. (Note: also see `embedded` for broader categorization).
- `software-team`
  - **Description:** Task designated to the software team.
  - **When to use:** For general software development tasks, AI/ML, application logic, or system integration that don't fall neatly into a more specific module.

### Module

These labels categorize the technical area or subsystem the issue/PR relates to. They map to the "Module" field in our project board. An item can have multiple module labels if it spans across areas, but only the first one assigned will be shown in the project board.

- `ai-ml`
  - **Description:** Pertains to the development, training, deployment, or evaluation of artificial intelligence or machine learning models.
  - **When to use:** For tasks involving computer vision (object detection, classification), NLP, reinforcement learning, data pipelines for ML, etc.
- `control-systems`
  - **Description:** Relates to the design, implementation, or tuning of control algorithms, system modeling, PID controllers, fuzzy logic, optimal control, or PLC-like logic.
  - **When to use:** For rover movement control, robotic arm articulation, system dynamics, etc.
- `embedded`
  - **Description:** Concerns microcontroller programming (ESP32, Arduino, STM32), embedded C/C++, sensor integration at the low level, firmware development, and hardware/software co-design for embedded components.
  - **When to use:** For firmware for the Airlock, Equipment Panel, sensor interfacing, etc.
- `navigation`
  - **Description:** Focuses on algorithms and software for rover locomotion, including SLAM, path planning (A\*, Dijkstra, RRT), obstacle avoidance, waypoint following, autonomous exploration, and localization.
  - **When to use:** For tasks related to making the rover move intelligently and autonomously.
- `perception`
  - **Description:** Covers the processing and interpretation of sensor data to understand the rover's environment. Includes traditional computer vision, point cloud processing, sensor fusion, marker detection.
  - **When to use:** For landmark detection, obstacle identification, environmental mapping (from sensor data).
- `simulation`
  - **Description:** Related to the setup, configuration, or development of simulation environments (Gazebo), robot models (URDF/SDF), world files, sensor simulation, or tools for running simulations.
  - **When to use:** For creating simulation assets, fixing simulation bugs, or developing simulation-specific tools.

### Challenge / Competition Stage

These labels help track work related to specific phases or challenges of the ERC. They map to the "Challenge" field in our project board.

- `connectivity-test`
  - **Description:** Specific to tasks, strategies, software, or issues directly related to the connectivity test.
  - **When to use:** For preparation, setup, or issues encountered during the Connectivity Test phase.
- `payload-test`
  - **Description:** Specific to tasks, strategies, software, or issues directly related to the payload test.
  - **When to use:** For preparation, setup, or issues encountered during the Payload Test phase.
- `challenge-1`
  - **Description:** Specific to tasks, strategies, software, or issues directly related to Challenge 1 - Exploration Task.
  - **When to use:** For work on autonomous navigation, landmark finding, and reporting for the Husarion Panther.
- `challenge-2`
  - **Description:** Specific to tasks, strategies, software, or issues directly related to Challenge 2 - Infrastructure Task.
  - **When to use:** For work on the Airlock, Equipment Panel, Reactor, and site navigation for the Husarion Lynx.
- `airlock` (Also a sub-module of Challenge 2)
  - **Description:** Specifically for the Airlock sub-task within Challenge 2.
  - **When to use:** For ESP32 firmware, control logic, sensor integration for the Airlock.
- `equipment-panel` (Also a sub-module of Challenge 2)
  - **Description:** Specifically for the Equipment Panel sub-task within Challenge 2.
  - **When to use:** For the visual data transmission protocol, ESP32 firmware for the LED matrix, and rover-side receiving software.

### Size/Effort (To Be Defined)

_We will define labels for Size/Effort (e.g., `XS`, `S`, `M`, `L`, `XL`...) later if needed. For now, this is primarily managed by a custom field in the GitHub Project._

## General Labels

These labels provide additional context or status information about an issue or PR.

- `documentation`
  - **Description:** Improvements or additions to documentation.
  - **When to use:** For tasks related to writing, updating, or correcting any project documentation.
- `duplicate`
  - **Description:** This issue or pull request already exists.
  - **When to use:** If an identical or very similar issue/PR has already been submitted. Link to the original.
- `good first issue`
  - **Description:** Good for newcomers to the project or a specific technology.
  - **When to use:** To highlight tasks that are relatively self-contained and don't require deep existing knowledge of the codebase.
- `help wanted`
  - **Description:** Extra attention is needed on this issue/PR, or we're looking for contributors.
  - **When to use:** If a task is blocked, needs specific expertise, or if we want to encourage community contributions.
- `invalid`
  - **Description:** This issue or pull request doesn't seem right, is based on a misunderstanding, or is not applicable.
  - **When to use:** If the report is unclear, cannot be reproduced, or is out of scope. Provide an explanation when closing.
- `question`
  - **Description:** Further information is requested, or this is a question rather than a bug/feature.
  - **When to use:** If an issue needs more clarification before it can be actioned, or if someone is asking a question via an issue.
- `wontfix`
  - **Description:** This issue or pull request will not be worked on.
  - **When to use:** If the team decides not to implement a feature or fix a bug for specific reasons (e.g., out of scope, too low priority, introduces other problems). Provide an explanation.

## Issue Types (separate field)

Issue Types are used to categorize the nature of an issue. They are distinct from other labels and are managed as a separate field.

- `Bug`
  - **Description:** An error or unexpected behavior in the code or system.
  - **When to use:** When reporting a confirmed bug.
- `Feature`
  - **Description:** A request for a new capability or functionality.
  - **When to use:** When proposing a new feature.
- `Task`
  - **Description:** A general to-do item or chore that isn't a bug or a new feature.
  - **When to use:** For refactoring, setup tasks, research, etc.

---

Remember to use labels thoughtfully to help keep our project organized and efficient! **If you're unsure which label to use, ask a team lead**.
