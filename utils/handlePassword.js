const bcrypt = require('bcryptjs');

/**
 * Encriptar
 * @param {*} password 
 * @returns 
 */
const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

module.exports = { encryptPassword, comparePassword }