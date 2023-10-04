import Redis from 'ioredis';

import { config } from '../../../config/config.js';

const getRedisUrl = () => {
	if (config.redisUrl) return config.redisUrl;
	throw new Error('REDIS_URL is not defined');
};

export const redis = new Redis(getRedisUrl());
