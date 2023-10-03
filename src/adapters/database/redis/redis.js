import Redis from 'ioredis';

import { config } from '../../../config/config.js';

export const redisClient = new Redis({url: config.redisHost});