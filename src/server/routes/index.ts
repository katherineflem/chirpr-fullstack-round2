import {Router} from 'express'
import apiRouter from './api.ts'

const router=Router()

router.use('/api', apiRouter)

export default router