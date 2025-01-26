const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = (ENGINE_DB === 'nosql') ? './nosql' : './mysql';

const models = {
    userModel : require(`${pathModels}/user`),
    tracksModel : require(`${pathModels}/tracks`),
    storagesModel : require(`${pathModels}/storage`)
}

module.exports = models;