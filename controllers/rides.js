import { Ride } from '../models/ride.js'

function newRider(req, res) {
  res.render('rides/new', {
    title: 'Request a Ride'

//need to define ride and pass to new view
  })
}


function index(req, res) {
  Ride.find({})
    .then(rides => {
      res.render('rides/index', {
        title: "My Rides",
        rides
      })

    })
}

function create(req, res) {
  Ride.create(req.body)
  .then(ride => {
    res.redirect('/rides')
  })

console.log(req.body);
}

function deleteRide(req, res) {
console.log("i wish to delete ", req.params);
  Ride.findByIdAndDelete(req.params.rideId)
  .then(ride => {
    res.redirect('/rides')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/rides')
  })
}

export {
  index,
  newRider as new,
  create,
 
  deleteRide as delete
}