const { check } = require("express-validator");
const { validateResults } = require("../utils/handleValidator");

const validatorCreateItem = [
    check('name').exists().notEmpty().isLength({min: 3, max:150}),
    check('album').exists().notEmpty().isLength({min: 3, max:150}),
    check('cover').exists().notEmpty().isLength({min: 3}),
    check('artist').exists().notEmpty().isLength({min: 3, max:150}),
    check('artist.name').exists().notEmpty().isLength({min: 3, max:150}),
    check('artist.nickname').exists().notEmpty().isLength({min: 3, max:150}),
    check('artist.nationality').exists().notEmpty().isLength({min: 3, max:150}),
    check('duration.start').exists().notEmpty().isNumeric(),
    check('duration.end').exists().notEmpty().isNumeric(),
    check('mediaId').exists().notEmpty().isMongoId(),
    validateResults
]

module.exports = {validatorCreateItem}