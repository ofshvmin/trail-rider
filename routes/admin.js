import { Router } from 'express'
import * as adminCtrl from '../controllers/admin.js'

const router = Router()


// localhost:3000/admin
router.get('/', adminCtrl.index) 




export {
  router
}
