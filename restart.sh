#!/bin/bash

# Emergency restart script for Raganork Bot on Koyeb
# This will clean start the bot and show diagnostics

echo "=== RAGANORK BOT EMERGENCY RESTART ==="
echo ""

echo "Step 1: Kill all existing processes..."
pm2 kill
sleep 2

echo "Step 2: Clean up old session data..."
rm -rf ./bot.db
rm -rf ./session_data
rm -rf ~/.pm2
sleep 1

echo "Step 3: Install dependencies..."
npm install
sleep 2

echo "Step 4: Start bot in production mode..."
NODE_ENV=production LOG_LEVEL=error npm start &
BOT_PID=$!

echo "Waiting for bot to initialize (10 seconds)..."
sleep 10

echo ""
echo "=== BOT STATUS ==="
pm2 status

echo ""
echo "=== LAST 100 LINES OF LOG ==="
pm2 logs raganork-md --lines 100

echo ""
echo "=== CHECKING FOR ERRORS ==="
pm2 logs raganork-md | grep -i "error\|fail\|connection"

echo ""
echo "=== BOT READY ==="
echo "Scan the QR code above with WhatsApp"
echo "Then send a test message: .help or ,help"
echo ""
echo "Monitor logs with: pm2 logs raganork-md"
