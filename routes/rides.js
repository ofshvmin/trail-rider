import { Router } from 'express'
import * as ridesCtrl from '../controllers/rides.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()



// GET localhost:3000/rides/
router.get('/', isLoggedIn, ridesCtrl.index)


// GET localhost:3000/rides/my-rides
router.get('/my-rides', isLoggedIn, ridesCtrl.showMyRides)


// GET localhost:3000/rides/new
router.get('/new', isLoggedIn, ridesCtrl.new)

// GET localhost:3000/rides/new-2
router.get('/new-2', isLoggedIn, ridesCtrl.new2)

// GET localhost:3000/rides/:rideId
router.get('/:rideId', isLoggedIn, ridesCtrl.show)


// POST localhost:3000/rides
router.post('/', ridesCtrl.create)

// POST localhost:3000/rides/:rideId/riders
router.post('/:rideId/riders', ridesCtrl.createRider)


// GET localhost:3000/rides/:rideId
router.delete('/:rideId', ridesCtrl.delete)


router.delete('/:rideId/riders/:riderId', ridesCtrl.deleteRider)


export {
  router
}