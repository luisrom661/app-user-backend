// import request from 'supertest';
// import app from '../app';
// import {
// 	GetUsersService,
// 	CreateUsersService,
// 	UpdateUsersService,
// 	DeleteUsersService,
// } from '../application/index.js';

// jest.mock('../application/index.js');

// describe('User Controller', () => {
// 	describe('GET /users', () => {
// 		it('should return a list of users', async () => {
// 			const getUsersService = new GetUsersService();
// 			getUsersService.execute.mockResolvedValueOnce([
// 				{ id: 1, name: 'John' },
// 			]);
// 			const response = await request(app).get('/users');
// 			expect(response.status).toBe(200);
// 			expect(response.body).toEqual([{ id: 1, name: 'John' }]);
// 		});

// 		it('should return an error if the service throws an error', async () => {
// 			const getUsersService = new GetUsersService();
// 			getUsersService.execute.mockRejectedValueOnce(
// 				new Error('Service Error'),
// 			);
// 			const response = await request(app).get('/users');
// 			expect(response.status).toBe(400);
// 			expect(response.body).toEqual({ error: 'Service Error' });
// 		});
// 	});

// 	describe('POST /users', () => {
// 		it('should create a new user', async () => {
// 			const createUsersService = new CreateUsersService();
// 			createUsersService.execute.mockResolvedValueOnce({
// 				id: 1,
// 				name: 'John',
// 			});
// 			const response = await request(app)
// 				.post('/users')
// 				.send({
// 					name: 'John',
// 					email: 'john@example.com',
// 					password: 'password',
// 					role: 'user',
// 				});
// 			expect(response.status).toBe(201);
// 			expect(response.body).toEqual({ user: { id: 1, name: 'John' } });
// 		});

// 		it('should return an error if the service throws an error', async () => {
// 			const createUsersService = new CreateUsersService();
// 			createUsersService.execute.mockRejectedValueOnce(
// 				new Error('Service Error'),
// 			);
// 			const response = await request(app)
// 				.post('/users')
// 				.send({
// 					name: 'John',
// 					email: 'john@example.com',
// 					password: 'password',
// 					role: 'user',
// 				});
// 			expect(response.status).toBe(400);
// 			expect(response.body).toEqual({ error: 'Service Error' });
// 		});
// 	});

// 	describe('PUT /users/:id', () => {
// 		it('should update an existing user', async () => {
// 			const updateUsersService = new UpdateUsersService();
// 			updateUsersService.execute.mockResolvedValueOnce({
// 				id: 1,
// 				name: 'John',
// 			});
// 			const response = await request(app)
// 				.put('/users/1')
// 				.send({
// 					name: 'John',
// 					email: 'john@example.com',
// 					password: 'password',
// 					role: 'user',
// 				});
// 			expect(response.status).toBe(200);
// 			expect(response.body).toEqual({ user: { id: 1, name: 'John' } });
// 		});

// 		it('should return an error if the service throws an error', async () => {
// 			const updateUsersService = new UpdateUsersService();
// 			updateUsersService.execute.mockRejectedValueOnce(
// 				new Error('Service Error'),
// 			);
// 			const response = await request(app)
// 				.put('/users/1')
// 				.send({
// 					name: 'John',
// 					email: 'john@example.com',
// 					password: 'password',
// 					role: 'user',
// 				});
// 			expect(response.status).toBe(400);
// 			expect(response.body).toEqual({ error: 'Service Error' });
// 		});
// 	});

// 	describe('DELETE /users/:id', () => {
// 		it('should delete an existing user', async () => {
// 			const deleteUsersService = new DeleteUsersService();
// 			deleteUsersService.execute.mockResolvedValueOnce({
// 				id: 1,
// 				name: 'John',
// 			});
// 			const response = await request(app).delete('/users/1');
// 			expect(response.status).toBe(200);
// 			expect(response.body).toEqual({ user: { id: 1, name: 'John' } });
// 		});

// 		it('should return an error if the service throws an error', async () => {
// 			const deleteUsersService = new DeleteUsersService();
// 			deleteUsersService.execute.mockRejectedValueOnce(
// 				new Error('Service Error'),
// 			);
// 			const response = await request(app).delete('/users/1');
// 			expect(response.status).toBe(400);
// 			expect(response.body).toEqual({ error: 'Service Error' });
// 		});
// 	});
// });
