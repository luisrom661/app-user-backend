import rateLimit from 'express-rate-limit';

const createRateLimiterMiddleware = (options) => {
	const limiter = rateLimit(options);

	return (req, res, next) => {
		limiter(req, res, (err) => {
			if (err) {
				return res.status(429).json({
					error: 'Rate limit exceeded',
					message:
						'Has excedido el límite de solicitudes. Inténtalo de nuevo más tarde.',
				});
			}
			next();
		});
	};
};

// Uso del middleware personalizado
export const validateRateLimiter = createRateLimiterMiddleware({
	windowMs: 15 * 60 * 1000, // 15 minutos
	max: 5, // Número máximo de solicitudes permitidas en ese período
});


/* export const validateRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutos
	max: 5, // Número máximo de solicitudes permitidas en ese período
	message:
		'Has excedido el límite de solicitudes. Inténtalo de nuevo más tarde.',
}); */