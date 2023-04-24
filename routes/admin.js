import { Router } from 'express'
import * as adminCtrl from '../controllers/admin.js'

const router = Router()


// GET localhost:3000/admin
router.get('/', adminCtrl.index) 

// GET localhost:3000/admin/users
router.get('/users', adminCtrl.getUsers) 



export {
  router
}
