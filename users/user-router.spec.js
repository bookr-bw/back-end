const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

//test that the current environment is in testing mode
test("Currently in testing mode", () => {
	expect(process.env.DB_ENV).toEqual("testing");
})

//this will allow us to utilize mock functions to access restricted routes using the auth-middleware which would check for a token
jest.mock("../middleware/auth-middleware", () => {
	return (req, res, next) => {
		next()
	}
})

describe('users-Router', () => {

	beforeEach(() => db('users').truncate());

	beforeEach(async () => {
		jest.resetAllMocks();
	})


	test('Should add a new user', () => {
		return request(server).post('/api/users/register')
			.send({ username: 'Billy', password: 'Billy2' }).expect(201);

	})

	test('Should not allow login with bad password', () => {
		return request(server).post('/api/users/login')
			.send({ username: 'Test1', password: 'Bad Password' }).expect(401);

	})

	test('Should allow login with good password', () => {
		return request(server).post('/api/users/login')
			.send({ username: 'Test1', password: 'Test1' }).expect(401);

	})

	test('it should return all users with a get', async () => {
		const response = await request(server).get('/api/users/')
		expect(response.status).toBe(200)
		expect(response.type).toMatch(/json/i);
	})

	//?
	test('it should receive an array from api/users', () => {
		request(server).get('api/users/')
			.then(response => {
				expect(Array.isArray(response.body)).toBe(true);

			})
	})


})
