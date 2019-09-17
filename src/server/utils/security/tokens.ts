//create a token for someone registering-- insert a userid 
//update the payload
//use jwt to sign the token
//update the row with the newly signed token 
//check to see if payload is expired
import * as crypto from 'crypto'
import * as jwt from 'jsonwebtoken'
import db from '../../db';
import config from '../../config'// need this because you store a secret code word to sign the token with


export const CreateToken = async (payload: IPayload) => {
    //create an id for the new token (autoincrementing)
    let tokenid: any = await db.Accesstokens.insertToken(payload.userid);
    //modify payload
    //the payload will have an accesstokenid property on it that will equal the tokens insertId
    payload.accesstokenid = tokenid.insertId;//insertId is on the default object response meaning what id was just inserted into the tokens table
    payload.unique = crypto.randomBytes(32).toString('hex')
    let token = await jwt.sign(payload.accesstokenid, config.auth.secret);
    //update token to have these values
    await db.Accesstokens.updateRowWithToken(payload.accesstokenid, token);
    return token; //attach on localstorage etc
}


export const ValidateToken = async (token: string) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let [accesstoken]: any = await db.Accesstokens.findOneToken(payload.accesstokenid, token)
    if (accesstoken) {
        throw new Error("invalid token");
    } else {
        return payload;
    }
}



export interface IPayload {
    [key: string]: any;
    userid: number,
    unique?: string// cfreated by crypto to make token more unrecognizable
}