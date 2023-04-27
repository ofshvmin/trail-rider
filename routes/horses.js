import { Router } from 'express'
import * as horsesCtrl from '../controllers/horses.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET localhost:3000/horses
router.get('/', isLoggedIn, horsesCtrl.index) 

// GET localhost:3000/horses/new
router.get('/new', isLoggedIn, horsesCtrl.new)

// GET localhost:3000/horses/:horseId
router.get('/:horseId', isLoggedIn, horsesCtrl.edit)


// POST localhost:3000/horses
router.post('/',isLoggedIn, horsesCtrl.create)

// PUT localhost:3000/horses/:horseId
router.put('/:horseId', isLoggedIn, horsesCtrl.update)


// PUT localhost:3000/horses/:horseId
router.delete('/:horseId', isLoggedIn, horsesCtrl.delete)

export {
  router
}
