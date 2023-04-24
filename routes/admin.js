import { Router } from 'express'
import * as adminCtrl from '../controllers/admin.js'

const router = Router()


// GET localhost:3000/admin
router.get('/', adminCtrl.index) 

// GET localhost:3000/admin/users
router.get('/users', adminCtrl.getProfiles) 

// GET localhost:3000/admin/users
router.get('/users/:profileId', adminCtrl.editProfile)

// PUT localhost:3000/admin/users/:profileId
router.put('/users/:profileId', adminCtrl.updateProfile)



export {
  router
}
