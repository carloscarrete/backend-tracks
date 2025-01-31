const request = require("supertest");
const app = require("../app");
const { storagesModel } = require("../models");
const { userModel } = require("../models");
const filePath = `${__dirname}/dump/track.mp3`;

beforeAll(async () => {
    await storagesModel.deleteMany({})
    await userModel.deleteMany({})
})

describe('[Storage] /api/v1/storage', () => { 
    it('It should upload a file and return 201 code', async () => {
        const res = await request(app)
            .post('/api/v1/storage')
            .attach('myfile', filePath)
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("data");
        expect(res.body).toHaveProperty("data.url");
        expect(res.body).toHaveProperty("data.filename");
    })

    it('It should get all files and return 200 code', async () => {
        const res = await request(app)
            .get('/api/v1/storage')
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
    })

    it('It should get a file by id and return 200 code', async () => {
        const {_id} = await storagesModel.findOne();
        let id = _id.toString();
        const res = await request(app)
            .get(`/api/v1/storage/${id}`)
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
    })

    it('It should delete a file by id and return 200 code', async () => {
        const {_id} = await storagesModel.findOne();
        let id = _id.toString();
        const res = await request(app)
            .delete(`/api/v1/storage/${id}`)
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("deleted");
    })
 })