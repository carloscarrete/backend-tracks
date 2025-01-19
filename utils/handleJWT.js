const jsownwebtoken = require('jsonwebtoken');

/**
 * Generates a JWT token for the given user
 * @param {Object} user - The user to generate the token for
 * @returns {string} The generated JWT token
 */
const generateJWT = (user) => {
    const sign = jsownwebtoken.sign({
        _id: user._id,
        role: user.role
    },
        process.env.JWT_SECRET,
        {
            expiresIn: '24h'
        }
    )

    return sign;
}

const verifyJWT = (token) => {
    try{
        return jsownwebtoken.verify(token, process.env.JWT_SECRET);
    }catch(error){
        console.log(error);
        return null;
    }
}

module.exports = { generateJWT, verifyJWT }