const NodeCache = require('node-cache');

/**
 * Initialize NodeCache with increased max keys limit
 * This prevents "ECACHEFULL: Cache max keys amount exceeded" error
 * 
 * Configuration options:
 * - maxKeys: Maximum number of keys allowed (default was 10000, now 100000)
 * - stdTTL: Standard time to live in seconds (600 = 10 minutes)
 * - checkperiod: Auto-delete check interval in seconds (60 seconds)
 */
const cache = new NodeCache({
  maxKeys: 100000,        // Increased from default 10000 to 100000
  stdTTL: 600,            // Entries expire after 10 minutes
  checkperiod: 60         // Check for expired entries every 60 seconds
});

module.exports = cache;
