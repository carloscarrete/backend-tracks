const request = require("supertest");
const app = require("../app");
const { userModel } = require("../models");
const { testAuthLogin, testAuthRegister } = require("./fixtures/authData");

beforeAll(async () => {
    await userModel.deleteMany({})
})

describe('[AUTH] /api/v1/auth', () => { 
    it('It should fail login user and return 404 code', async () => {
        const res = await request(app)
            .post('/api/v1/auth/login')
            .send(testAuthLogin)
        expect(res.statusCode).toBe(404)
    })

    it('It should pass register user and return 201 code', async () => {
        const res = await request(app)
            .post('/api/v1/auth/register')
            .send(testAuthRegister)
            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty("data");
            expect(res.body).toHaveProperty("data.token");
            expect(res.body).toHaveProperty("data.user");
    })

    it('It should pass login user and return 200 code', async () => {
        const res = await request(app)
            .post('/api/v1/auth/login')
            .send(testAuthLogin)
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty("data");
            expect(res.body).toHaveProperty("data.token");
            expect(res.body).toHaveProperty("data.user");
    })

    it('It should fail login user and return 401 code', async () => {
        const res = await request(app)
            .post('/api/v1/auth/login')
            .send({...testAuthLogin, password: 'wrong-password'})
            expect(res.statusCode).toEqual(401);
    })


 })