const request = require("supertest");
const app = require("../app");
const { storagesModel, userModel, tracksModel } = require("../models");
const { testAuthRegisterAdmin } = require("./fixtures/authData");
const { testStorageRegister } = require("./fixtures/storageData");
const { generateJWT } = require("../utils/handleJWT");
const { testTrackData } = require("./fixtures/tracksData");

let STORAGE_ID = "";
let JWT_TOKEN = "";

beforeAll(async () => {
    await storagesModel.deleteMany();
    await userModel.deleteMany();
    const user = await userModel.create(testAuthRegisterAdmin);
    const storage = await storagesModel.create(testStorageRegister);
    STORAGE_ID = storage._id.toString();
    JWT_TOKEN = generateJWT(user);
})

describe('[Tracks]', () => { 
    it('It should create a track and return 201 code', async () => {
        const res = await request(app)
            .post('/api/v1/tracks')
            .set('Authorization', `Bearer ${JWT_TOKEN}`)
            .send(testTrackData)
        
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("data");
        expect(res.body).toHaveProperty("data.name");
        expect(res.body).toHaveProperty("data.album");
        expect(res.body).toHaveProperty("data.cover");
        expect(res.body).toHaveProperty("data.artist");
    })

    it('It should get all tracks and return 200 code', async () => {
        const res = await request(app)
        .get('/api/v1/tracks')
        .set('Authorization', `Bearer ${JWT_TOKEN}`)

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
    })

    it('It should get a track by id and return 200 code', async () => {
        const {_id} = await tracksModel.findOne();
        let id = _id.toString();
        const res = await request(app)
        .get(`/api/v1/tracks/${id}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
    })
 })