import { Router } from 'express'
import db from '../../db'

const router= Router()

router.get('/', async(req,res)=>{
    try{
    let users= await db.Users.getallUsers();
    res.json(users)
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/', async (req,res)=>{
    try{
    let name= req.body.name
    let email= req.body.email
    let password= req.body.password
    // let password= req.body.password
    let newUser= await db.Users.insertNewUser(name, email, password);
    res.json(newUser)
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

export default router