import { Router } from 'express'
import * as adminCtrl from '../controllers/admin.js'

const router = Router()

router.get('/', adminCtrl.index) 

router.get('/horses', adminCtrl.horseIndex) 


export {
  router
}
