import { Router } from 'express'
import * as adminCtrl from '../controllers/admin.js'

const router = Router()


// localhost:3000/admin
router.get('/', adminCtrl.index) 


// localhost:3000/admin/horses
router.get('/horses', adminCtrl.horseIndex) 




export {
  router
}
