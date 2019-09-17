//if we are passing a token on our rewuest headers, how can we take that token and confirm it is legit
import * as passport from 'passport'
import db from '../db'
import * as bearerStrategy from 'passport-http-bearer'
import { ValidateToken } from '../utils/security/tokens'



passport.use(new bearerStrategy.Strategy(async (token,done)=>{
    try{
        let payload = await ValidateToken(token);//let a payload exist if validatetoken gives us one and returns one
        //the payload should have a user associated with it
        let [user]: any= await db.Users.findUserById(payload.userid)//payload has a userid property on it
    if(user){
    //AUTHORIZED USER WITH VALID TOKEN
        done(null, user);
    }else{
    //UNAUTHORIZED 
        done(null,false)
    }
    
    }catch(e){
        done(e)
    }
}))

