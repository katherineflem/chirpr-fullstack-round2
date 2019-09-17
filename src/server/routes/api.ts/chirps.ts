import { Router } from 'express'
import db from '../../db'

const router = Router()

router.get('/', async (req, res) => {
    try {
        let chirps: any = await db.Chirps.allChirps();
        res.json(chirps);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let chirp = await db.Chirps.oneChirp(req.params.id)
        res.json(chirp);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        let name = req.body.userid;
        let text = req.body.text
        let newChirp = await db.Chirps.postChirp(name, text);
        res.json(newChirp)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let noChirp=await db.Chirps.deleteChirp(req.params.id)
        res.json(noChirp)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})
export default router