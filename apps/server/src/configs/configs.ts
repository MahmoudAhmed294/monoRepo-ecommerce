type ConfigsType = {
  API_PORT: string;
  API_PLAYGROUND: string;
  CLIENT_URL: string;
  CACHE_URL: string;
  CACHE_PORT: string;
  CACHE_PASSWORD: string;
  ACCESS_TOKEN_SECRET: string;
  REFRESH_TOKEN_SECRET: string;
  JWT_ACCESS_TOKEN_EXPIRES: string;
  JWT_REFRESH_TOKEN_EXPIRES: string;
};

// ===========================================

const configs: ConfigsType = {
  API_PORT: process.env.API_PORT || '5000',
  API_PLAYGROUND: process.env.API_PLAYGROUND || '',
  CLIENT_URL: process.env.CLIENT_URL || '3000',
  CACHE_URL: process.env.CACHE_URL || '',
  CACHE_PORT: process.env.CACHE_PORT || '6379',
  CACHE_PASSWORD: process.env.CACHE_PASSWORD || '',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'secret',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'secret',
  JWT_ACCESS_TOKEN_EXPIRES: process.env.JWT_ACCESS_TOKEN_EXPIRES || '2h',
  JWT_REFRESH_TOKEN_EXPIRES: process.env.JWT_REFRESH_TOKEN_EXPIRES || '12days',
};

export default configs;
