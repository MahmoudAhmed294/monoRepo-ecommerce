import { createClient } from 'redis';
import configs from '../../configs/configs';
// -----------------------------------------------

// Redis Cache
export const cache = createClient({
  url: configs.CACHE_URL,
  password: configs.CACHE_PASSWORD,
});

// -----------------------------------------------
// TODO function for console.log that works on development only

export const connectCacheDatabase = async () => {
  try {
    cache.on('error', (err: unknown) => {
        console.error('Redis Client Error', err);
    });

    await cache.connect();
    console.dir('Connected to Cache Database Successfully ! 🗄');
  } catch (error: unknown) {
    console.error("Can't connect to cache database");
    console.error({ error });
  }
};

// -----------------------------------------------

export const setCacheAuthUser = async (authUser: any) =>
  cache.hSet(
    'authUsers',
    authUser?.user?.id.toString(),
    JSON.stringify(authUser)
  );

// -----------------------------------------------

export const getCacheAuthUser = async (userId: number) => {
  const hashedString = await cache.hGet('authUsers', userId.toString());
  return JSON.parse(hashedString || '{}').user;
};
