/**
 * Performance Optimization Configuration for Raganork Bot
 * 
 * This file contains optimized settings to reduce latency
 * 
 * NOTE: WhatsApp bots work better in FORK mode (not cluster)
 * Use PM2 cluster only if your bot architecture supports shared IPC
 */

// ========== RECOMMENDED SETUP ==========
// Use FORK MODE for WhatsApp bots:
// pm2 start index.js --name raganork-md
//
// DO NOT use cluster mode (-i max) as it breaks socket connections

// ========== SAFE OPTIMIZATIONS THAT WORK ==========

/**
 * 1. SET NODE_ENV=production (SAFE ✅)
 * Disables debug logging and optimizes V8
 * Command: NODE_ENV=production pm2 start index.js --name raganork-md
 */

/**
 * 2. INCREASE MEMORY ALLOCATION (SAFE ✅)
 * Prevents garbage collection stutters
 * Command: pm2 start index.js --max-memory-restart 2G --name raganork-md
 */

/**
 * 3. OPTIMIZE LOGGING (SAFE ✅)
 * In .env file:
 * LOG_LEVEL=error
 * This reduces I/O overhead
 */

/**
 * 4. USE CACHE (ALREADY DONE ✅)
 * Your cache-config.js is already optimized
 * - maxKeys: 100000
 * - stdTTL: 600
 * - Automatic cleanup enabled
 */

/**
 * 5. DATABASE OPTIMIZATION (ALREADY DONE ✅)
 * Your config.js already has:
 * - SQLite pool: max 5, min 1
 * - PostgreSQL pool: max 20, min 5
 * - Query optimization
 */

// ========== BEST PRACTICE FOR WHATSAPP BOTS ==========
// Recommended startup command:
// NODE_ENV=production pm2 start index.js \
//   --name raganork-md \
//   --max-memory-restart 2G \
//   --log-date-format "YYYY-MM-DD HH:mm:ss Z"

module.exports = {
  optimization: {
    recommended: "Fork mode (not cluster)",
    nodeEnvProduction: "Set in .env or startup",
    memoryAllocation: "2GB recommended",
    loggingLevel: "error"
  }
};
