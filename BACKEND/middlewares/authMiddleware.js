const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) =>{
    const token = req.headers.authorization;
    // console.log("token: ",token);
    if(!token){
        return res.status(401).json({status:false, error:"Unathorized!"});
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{
        if(err){
            return res.status(200).json({status:false, error:"Invalid token!"})
        }
        req.user = user;
        next();
    }) 
}

module.exports = authenticateToken;