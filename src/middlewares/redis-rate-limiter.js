import moment from 'moment';

import { redisClient } from '../adapters/database/redis/redis.js';

const RATELIMIT_DURATION = 60; // Duración de la ventana de tiempo en segundos
const RATELIMIT_MAX = 10; // Número máximo de solicitudes permitidas en la ventana de tiempo

export const redisRateLimiter = async (req, res, next) => {
	const ip = req.ip;
	const now = moment().unix();
	const key = `rate-limiter:${ip}`;

	try {
		const result = await redisClient
			.pipeline()
			.zremrangebyscore(key, 0, now - RATELIMIT_DURATION)
			.zcard(key)
			.expire(key, RATELIMIT_DURATION)
			.exec();

		const current = result[1][1];

		if (current >= RATELIMIT_MAX) {
			return res.status(429).json({ message: 'Rate limit exceeded' });
		}

		await redisClient.zadd(key, now, now);
		next();
	} catch (error) {
		next(error);
	}
};
