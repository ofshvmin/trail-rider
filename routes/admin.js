import { Router } from 'express'
import * as adminCtrl from '../controllers/admin.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET localhost:3000/admin
router.get('/', isLoggedIn, adminCtrl.index) 

// GET localhost:3000/admin/users
router.get('/users', isLoggedIn, adminCtrl.getProfiles) 

// GET localhost:3000/admin/users
router.get('/users/:profileId', isLoggedIn, adminCtrl.editProfile)

// PUT localhost:3000/admin/users/:profileId
router.put('/users/:profileId', isLoggedIn, adminCtrl.updateProfile)



export {
  router
}
