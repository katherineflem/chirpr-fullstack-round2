import { Query } from '../index'

export const allChirps=()=>Query('SELECT users.name, chirps.* from chirps JOIN users ON chirps.userid=users.id')

export const oneChirp=(id:number)=>Query('SELECT users.name, chirps.*  from chirps JOIN users ON chirps.userid=users.id WHERE chirps.id=?', [id])

export const postChirp=(userid:string, text:string)=>Query('INSERT INTO chirps (userid, text) VALUES(?)' , [userid, text])

export const editChirp=(text:string, id:number)=>Query('UPDATE chirps SET text=? WHERE id=?', [text, id])

export const deleteChirp=(id:number)=>Query('DELETE FROM chirps WHERE id=?', [id])
export default {
    allChirps,
    oneChirp,
    postChirp,
    editChirp,
    deleteChirp
}