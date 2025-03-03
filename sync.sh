#!/bin/bash

SSH_HOST="education-server"  # 使用SSH配置中定义的别名
REMOTE_DIR="/home/projects/education_website"  # 确认这是正确的远程目录路径

echo "Starting continuous synchronization with $SSH_HOST..."
echo "Press Ctrl+C to stop synchronization."

# 捕获Ctrl+C信号以便干净地退出
trap "echo -e '\nSynchronization stopped.'; exit 0" INT

while true; do
  # 同步文件到服务器
  rsync -avz --exclude 'node_modules' --exclude 'dist' --exclude '.git' \
    --exclude '.idea' --delete ./ $SSH_HOST:$REMOTE_DIR/

  echo "Synchronized at $(date)"
  sleep 2
done