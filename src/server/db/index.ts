import config from '../config'
import * as mysql from 'mysql'
import Chirps from './queries/Chirps'
import Users from './queries/Users'
import Accesstokens from './queries/Accesstokens'

//connect db to app
//create helper function for queries

export const pool=mysql.createPool(config.mysql)

export const Query=(query:string, values?:any)=>{
return new Promise((resolve, reject)=>{
    pool.query(query, [values],(err,results)=>{
        if(err){
            reject(err)
        }else{
            return resolve(results)
        }
    })
})
}

export default{
    Chirps,
    Users,
    Accesstokens
}
