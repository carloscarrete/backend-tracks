const customHeader = (req, res, next) => {
    try{
        const apiKey = req.get('x-api-key');
        if(apiKey === 'malashka'){
            next();
        }else{
            res.status(401).json({message: 'Unauthorized'});
        }
    }catch(error){
        res.status(403);
        res.send({errors: error.array()})
    }
}

module.exports = {customHeader}