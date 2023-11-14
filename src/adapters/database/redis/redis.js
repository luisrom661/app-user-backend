import Redis from 'ioredis';

import { config } from '../../../config/config.js';

const getRedisUrl = () => {
	if (config.redisUrl){
		console.log('¡Connected to Redis database!');
		return config.redisUrl;
	} 
	throw new Error('REDIS_URL is not defined');
};

export const redis = new Redis(getRedisUrl());
