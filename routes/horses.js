import { Router } from 'express'
import * as horsesCtrl from '../controllers/horses.js'

const router = Router()


// GET localhost:3000/horses
router.get('/', horsesCtrl.index) 

// GET localhost:3000/horses/new
router.get('/new', horsesCtrl.new)

// GET localhost:3000/horses/:horseId
router.get('/:horseId', horsesCtrl.edit)


// POST localhost:3000/horses
router.post('/', horsesCtrl.create)


export {
  router
}
