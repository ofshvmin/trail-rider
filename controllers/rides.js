import { Ride } from '../models/ride.js'
import { User } from '../models/user.js';


function newRide(req, res) {
  User.findById(req.user._id)
  .populate('profile')
  .then(user => {
    console.log(user);
    res.render('rides/new-1', {
      title: 'Ride Request Form',
      user
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function new2(req, res) {
  User.findById(req.user._id)
  .populate('profile')
  .then(user => {
    console.log(user);
    res.render('rides/new-2', {
      title: 'Ride Request Form',
      user
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



function index(req, res) {
  Ride.find({})
    .then(rides => {
      res.render('rides/index', {
        title: "All Rides",
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
    res.redirect('/my-rides')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Ride.findById(req.params.rideId)
  .populate('requestor')
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
    res.redirect('/my-rides')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/my-rides')
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


function showMyRides(req, res) {
// console.log("show my rides");
// console.log(req.user);
// console.log(req.user._id,"!!!!!!!!!!!!!!!!");

// Ride.find({})
// .then(rides => {
//   rides.forEach((ride) => {
//   console.log(ride.requestor);
//   console.log(req.user.profile._id);
//   console.log(req.user.profile._id.equals(ride.requestor) ? 'yea - it matches' : 'nah - no match') 
// })
// })

Ride.find({})
  .then(rides => {
    res.render('rides/my-rides', {
      title: "My Rides",
      rides: rides.filter((ride) => ride.requestor.equals(req.user.profile._id))
    })
  })
  
  .catch(err => {
    console.log(err)
    res.redirect('/')
  }) 
  
}


export {
  index,
  newRide as new,
  new2,
  create,
  show,
  deleteRide as delete,
  createRider,
  deleteRider,
  showMyRides
}