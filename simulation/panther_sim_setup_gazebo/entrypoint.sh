#!/bin/bash
set -e

# Source ROS 2 environment
if [ -f "/opt/ros/${ROS_DISTRO}/setup.bash" ]; then
  echo "Sourcing ROS environment: /opt/ros/${ROS_DISTRO}/setup.bash"
  source "/opt/ros/${ROS_DISTRO}/setup.bash"
fi

echo "--- Updating workspace from git repository (git pull) ---"
git pull

echo "--- Installing dependencies for the workspace ---"
# The -r flag tells rosdep to continue even if it can't resolve a dependency
rosdep install --from-paths src -y -i -r

echo "--- Building the workspace ---"
colcon build --symlink-install --packages-up-to husarion_ugv --cmake-args -DCMAKE_BUILD_TYPE=Release -DBUILD_TESTING=OFF
# Source workspace environment
if [ -f "/husarion_ws/install/setup.bash" ]; then
  echo "Sourcing workspace environment: /ros2_ws/install/setup.bash"
  source "/husarion_ws/install/setup.bash"
fi

echo "Executing command: $@"
# Execute the command passed to docker run (or the CMD if no command is passed)
exec "$@"
