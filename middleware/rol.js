const { handleHttpError } = require("../utils/handleError");

const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const rolUser = user.role;
        console.log(user)
        const rolAllowed = roles.includes(rolUser);
        //const checkValueRol = roles.some((singleRol)=> rolUser.includes(singleRol));
        if (!rolAllowed) {
            handleHttpError(res, 'NOT_AUTHORIZED', 403);
            return;
        }
        next();
    } catch (error) {
        handleHttpError(res, 'ERROR_CHECKING_ROL', 403)
    }
}
module.exports = { checkRol } 