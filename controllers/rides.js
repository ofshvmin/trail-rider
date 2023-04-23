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
  console.log(req.body);
  req.body.requestor = req.user.profile._id
  console.log(req.body);

  Ride.create(req.body)
  .then(ride => {
    res.redirect('/rides')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/rides')
  })
}

function show(req, res) {
  Ride.findById(req.params.rideId)
  .then(ride => {
    res.render('rides/show', {
      title: "Ride Detail",
      ride
    })
  })
}

function deleteRide(req, res) {
  Ride.findByIdAndDelete(req.params.rideId)
  .then(ride => {
    res.redirect('/rides')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/rides')
  })
}

function createRider(req, res) {
  //find the ride
  Ride.findById(req.params.rideId)
  .then(ride => {
    ride.riders.push(req.body)
    ride.save() 
    .then(() => {
      res.redirect(`/rides/${ride._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/rides')
    })
  })
  //push a rider to the riders field
  .catch(err => {
    console.log(err)
    res.redirect('/rides')
  })
}

function deleteRider(req, res) {
  Ride.findById(req.params.rideId)
  .then(ride => {
    ride.riders.remove(req.params.riderId)
    ride.save()
    .then(() => {
      res.redirect(`/rides/${ride._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/rides')
    })
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
  show,
  deleteRide as delete,
  createRider,
  deleteRider
}