import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

// ==========================================

import { connectDatabase } from './server/database/prisma';
import launchWebServer from './server/server';
import { connectCacheDatabase } from './server/cache/redis';

// ==========================================

// Set Environment Variables
const env = dotenv.config();
dotenvExpand.expand(env);

// ==========================================

(async () => {
  try {
    await connectDatabase();
    await connectCacheDatabase();
    await launchWebServer();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

// ==========================================

// main();
