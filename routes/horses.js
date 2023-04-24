import { Router } from 'express'
import * as horsesCtrl from '../controllers/horses.js'

const router = Router()


// localhost:3000/horses
router.get('/', horsesCtrl.index) 



export {
  router
}
