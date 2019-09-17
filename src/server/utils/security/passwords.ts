//create a hashed and salted password using bcrypt
//create a function to compare a user typed password to the hashed pw in the db
import * as bcrypt from 'bcrypt'

export const hashedPassword=(password:string)=>{
    const salt= bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)//takes in the pw string and the salt
    return hash;
}

export const comparePassword=(password:string, hash:string)=>{
    return bcrypt.compareSync(password, hash);//takes in the password and the hash and compares
}