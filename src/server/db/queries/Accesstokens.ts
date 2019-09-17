import { Query } from '../index'

//going to need to find one token for the person logging in
export const findOneToken=(id:number, token:string)=>Query('SELECT * from tokens WHERE id=? AND token=?', [id, token])

//going to need to insert a token for that persons id
export const insertToken=(userid:number)=>Query('INSERT INTO tokens (userid) VALUES(?)', [userid])

//going to need to update the row with the new token
export const updateRowWithToken=(id:number, token:string)=>Query('UPDATE tokens SET token=? WHERE id=?',[id,token])

export default {
    findOneToken,
    insertToken,
    updateRowWithToken
}