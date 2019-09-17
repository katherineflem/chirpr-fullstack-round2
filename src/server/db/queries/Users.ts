import {Query} from '../index'

export const getallUsers=()=>Query('SELECT * from users')

export const insertNewUser=(name:string, email:string, password:string)=>Query('INSERT INTO users (name, email, password) VALUES(?)', [name, email, password])


//findOneByEmail-- need this to be able to search the db for an existing email to check it against what is typed
export const findUserByEmail =(email:string)=>Query('SELECT * from users WHERE email=? LIMIT 1', [email])

//tokens need to be verified with a certain users id
export const findUserById=(id:number)=>Query('SELECT * from users WHERE id=? LIMIT 1', [id])


export default {
getallUsers,
insertNewUser,
findUserByEmail,
findUserById
}