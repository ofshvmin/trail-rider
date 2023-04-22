import { Router } from 'express'
import * as ridesCtrl from '../controllers/rides.js'

const router = Router()



// GET localhost:3000/rides/
router.get('/', ridesCtrl.index)



// GET localhost:3000/rides/new
router.get('/new', ridesCtrl.new)

// GET localhost:3000/rides/:rideId
// router.get('/rides/:rideId', ridesCtrl.show)


// POST localhost:3000/rides
router.post('/', ridesCtrl.create)


// GET localhost:3000/rides/:rideId
router.delete('/:rideId', ridesCtrl.delete)

export {
  router
}