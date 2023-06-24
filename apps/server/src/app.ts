import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

// ==========================================

import { connectDatabase } from './server/database/prisma'
import  launchWebServer  from './server/server';
import { connectCacheDatabase } from './server/cache/redis';

// ==========================================

// Set Environment Variables
const env = dotenv.config();
dotenvExpand.expand(env);

// ==========================================

async function main() {
  await connectDatabase()
  await connectCacheDatabase();
  await launchWebServer();
}

// ==========================================

main();
