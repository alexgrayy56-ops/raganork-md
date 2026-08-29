/**
 * MESSAGE HANDLER DIAGNOSTICS
 * 
 * If bot is online but not responding to messages, check:
 */

// 1. VERIFY BOT IS LISTENING FOR MESSAGES
// The bot should have an event listener like:
// sock.ev.on('messages.upsert', async (m) => { ... })
// or
// sock.on('messages.upsert', async (m) => { ... })

// 2. CHECK IF SESSION IS PROPERLY AUTHENTICATED
// Look in logs for:
// ✅ "connection update: connected" 
// ✅ "Credentials verified"
// ✅ "Bot ready to receive messages"

// 3. COMMON REASONS BOT DOESN'T RESPOND:
// - Session data corrupted (delete bot.db and rescan QR)
// - Message handler not attached
// - Command prefix not matching
// - Bot lacks permissions in groups
// - Event handler throwing silent errors

// 4. QUICK FIXES:
echo "=== FIX 1: Delete session and rescan ==="
# pm2 stop raganork-md
# rm -rf ./bot.db
# NODE_ENV=production pm2 start index.js --name raganork-md

echo "=== FIX 2: Check if bot is receiving messages ==="
# pm2 logs raganork-md --lines 100 | grep -i "message\|upsert\|incoming"

echo "=== FIX 3: Verify command format ==="
# Try: .help or ,help (depending on your HANDLERS setting)

echo "=== FIX 4: Restart and monitor ==="
# pm2 restart raganork-md
# pm2 logs raganork-md

module.exports = {
  diagnostics: "See comments above"
};
