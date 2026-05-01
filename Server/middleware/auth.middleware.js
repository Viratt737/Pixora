import jwt from 'jsonwebtoken'

const userAuth = async(req, res, next) =>{

    // const {token} = req.headers.token;
    const token = req.headers.token;
    if(!token){
        return res.json({
            success : false,
            msg : "Not authorized. Login Again"
        })
    }
    try{
        const tokenDecode = jwt.verify(token , process.env.JWT_SECRET)
        
        if(tokenDecode.id){
             req.body = req.body || {};
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({
                success : false,
                msg : 'Not Authorized. Login Again !!'
            })
        }

        next();

    }catch(err){
        console.log(err);
        return res.json({
            success : false,
            msg : err.message
        })
    }
}

export default userAuth;