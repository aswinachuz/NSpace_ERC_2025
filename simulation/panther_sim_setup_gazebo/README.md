# Husarion UGV ROS 2 Docker Setup

This project provides a Dockerized environment for running the `husarion_ugv_ros` stack for ROS 2 Jazzy, primarily for simulation purposes. It includes a setup script to build the Docker image and configure convenient aliases for launching the container with different GPU configurations.

## Prerequisites

Before you begin, ensure you have the following installed on your **host Linux system**:

1.  **Docker Engine:** Follow the official Docker installation guide for your Linux distribution.
2.  **Git:** For cloning repositories if needed.
3.  **(For NVIDIA GPU Users)**
    *   NVIDIA Drivers for Linux.
    *   NVIDIA Container Toolkit (`nvidia-docker2`).
4.  **(For AMD GPU Users)**
    *   Up-to-date Mesa drivers for your AMD GPU/APU.
5.  **X11 Server:** Standard on most Linux desktop environments.

## Files

*   `Dockerfile`: Defines the Docker image, installing ROS 2 Jazzy, `husarion_ugv_ros`, and its dependencies.
*   `entrypoint.sh`: Script executed when the Docker container starts. It sources the ROS 2 and workspace environments.
*   `setup_docker.sh`: A shell script to automate building the Docker image and adding run aliases to your `.bashrc`.

## Setup Instructions

1.  **Clone/Download Files:**
    Ensure `Dockerfile`, `entrypoint.sh`, and `setup_docker.sh` are in the same directory.

2.  **Make `setup_docker.sh` Executable:**
    Open a terminal in the directory containing the files and run:
    ```bash
    chmod +x setup.sh
    ```

3.  **Run the Setup Script:**
    Execute the script:
    ```bash
    ./setup.sh
    ```
    This script will:
    *   Build the Docker image (default name: `my-husarion-app:jazzy`). You can change this in the script.
    *   Add/Update aliases to your `$HOME/.bashrc` file for running the container with different GPU options.

4.  **Source `.bashrc`:**
    For the new aliases to take effect in your current terminal session, source your `.bashrc` file or open a new terminal:
    ```bash
    source ~/.bashrc
    ```
    *The `xhost +local:docker` command (to allow GUI applications from Docker to display) will now be executed automatically each time you use one of the `run_husarion_*` aliases.*

## Running the Docker Container

After setup, you can use the following aliases to run the container. Each alias will automatically attempt to authorize Docker to access your X display by running `xhost +local:docker` before starting the container.

*   **No Dedicated GPU Acceleration:**
    ```bash
    run_husarion_nogpu
    ```

*   **NVIDIA GPU Acceleration:**
    ```bash
    run_husarion_nvidia
    ```

*   **AMD GPU Acceleration:**
    ```bash
    run_husarion_amd
    ```

    *(The actual commands executed by these aliases now include `xhost +local:docker &&` at the beginning.)*

## Inside the Container

Once the container is running, you'll be at a bash prompt inside the Docker environment. The ROS 2 Jazzy environment and your Husarion workspace (`/husarion_ws` or `/ros2_ws` as per your Dockerfile) will be sourced.

You can now run ROS 2 commands:

*   **Launch Gazebo Simulation:**
    ```bash
    run_sim
    ```
*   **WEAK PC (and arbitrary timeouts and other ERRORS):**
    *   It might be required (and suggested otherwise) to lower the controller update period and gazebo simulation period to solve errors and have an overall acceptable experience.
       *   These parameters can be updated in ```src/husarion_ugv_ros/husarion_ugv_controller/config/WH01_controller.yaml``` and ```vim src/husarion_gz_worlds/worlds/husarion_world.sdf``` inside the Docker shell.

## Using in a Collaborative Environment

Docker is excellent for ensuring consistent development and runtime environments across a team. Here's how to leverage this setup collaboratively:

1.  **Version Control for Docker Setup:**
    *   **Commit all setup files:** The `Dockerfile`, `entrypoint.sh`, and `setup_docker.sh` should be committed to a Git repository (e.g., your main project repository).
    *   This allows every team member to clone the repository and have the exact same instructions for building the Docker image.

2.  **Building the Image Locally (Recommended for Development):**
    *   Each team member clones the repository.
    *   Each team member runs the `./setup_docker.sh` script on their own machine.
        *   This ensures the image is built using the latest committed `Dockerfile`.
        *   It also sets up the convenient run aliases locally for them.
    *   **Consistency:** As long as everyone builds from the same committed `Dockerfile`, their environments will be consistent.

3.  **Sharing Pre-built Images (Optional, for CI/CD or specific deployments):**
    *   You can push the built Docker image to a container registry like Docker Hub, GitHub Container Registry (GHCR), GitLab Container Registry, or a private registry.
    *   **Tagging:** Use meaningful tags for your images (e.g., `yourteam/my-husarion-app:jazzy-v1.0`, `yourteam/my-husarion-app:jazzy-latest`).
    *   **Pulling:** Team members can then pull the pre-built image instead of building it locally:
        ```bash
        docker pull yourregistry/yourimage:tag
        ```
    *   **Updating Aliases:** If using pre-built images, the `IMAGE_NAME` in `setup_docker.sh` (or directly in `.bashrc` aliases) would need to point to the registry image (e.g., `yourregistry/yourimage:tag`). The build step in `setup_docker.sh` could be skipped or made conditional.
    *   **Pros:** Saves build time for each user, ensures bit-for-bit identical images.
    *   **Cons:** Requires registry setup and management; `Dockerfile` changes need a new image to be built and pushed.

4.  **Host Environment Still Matters (GPU, X11):**
    *   While the Docker container provides a consistent *software* environment, team members will still need to correctly configure their *host machines* for Docker, especially for GUI and GPU access.
    *   This includes:
        *   Installing Docker.
        *   Installing appropriate GPU drivers (NVIDIA/AMD).
        *   Installing the NVIDIA Container Toolkit (for NVIDIA users).
        *   Using `xhost +local:docker` or a similar mechanism for X11 forwarding (the aliases help automate this part).
    *   The provided run aliases (`run_husarion_nvidia`, `run_husarion_amd`) help abstract some of these host-specific Docker run commands, but the underlying host setup must be correct.

5.  **Communication and Updates:**
    *   When the `Dockerfile` is updated (e.g., new dependencies added), communicate this to the team.
    *   Team members will need to:
        *   Pull the latest changes from Git.
        *   Re-run `./setup_docker.sh` to rebuild the image with the new `Dockerfile` and update aliases.
        *   Or, if using a registry, pull the newly pushed image version.

By following these practices, your team can significantly benefit from the consistency and portability offered by Docker, leading to fewer "it works on my machine" issues.

## Troubleshooting GPU Access

*   **General:** The `xhost +local:docker` command is now part of the aliases. If GUIs still don't appear, ensure your X server is running and `DISPLAY` environment variable is correctly set on the host.
*   **NVIDIA:**
    *   Verify `nvidia-smi` works on the host.
    *   Ensure NVIDIA Container Toolkit is correctly installed.
    *   Check Docker daemon logs (`sudo journalctl -u docker.service`) for errors related to the NVIDIA runtime.
*   **AMD:**
    *   Verify `glxinfo -B` on the host shows your AMD GPU and direct rendering.
    *   Ensure your user on the host is part of the `video` and/or `render` group (`sudo usermod -aG video $USER && sudo usermod -aG render $USER`, then log out/in).
    *   Check permissions of `/dev/dri/*` devices.
    *   Inside the container, run `glxinfo -B`. It should show your AMD GPU, not `llvmpipe`.

## Customization

*   **Image Name & Resource Limits:** You can change the `IMAGE_NAME`, `CPU_LIMIT`, and `MEMORY_LIMIT` variables at the top of `setup_docker.sh` before running it.
*   **Aliases:** After running the setup script, you can manually edit the aliases in your `~/.bashrc` file if you need further customization.
