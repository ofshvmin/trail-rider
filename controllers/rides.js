import { Ride } from '../models/ride.js'
import { User } from '../models/user.js';


function newRide(req, res) {
  User.findById(req.user._id)
  .populate('profile')
  .then(user => {
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
      rides: rides.sort((a, b) => a.date - b.date)
    })  
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.requestor = req.user.profile._id ///<-------- is this doing anything?
  Ride.create(req.body)
  .then(ride => {
    res.redirect(`/rides/${ride._id}`)
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
    const dt = ride.date.toISOString().slice(0,10)
    res.render('rides/show', {
      title: "Ride Detail",
      ride,
      requestor: ride.requestor,
      dt
    })
  })
}

function update(req, res) {
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  }
  Ride.findById(req.params.rideId)
  .then(ride => {
    if(ride.requestor._id.equals(req.user.profile._id)) {
      ride.updateOne(req.body) 
      .then(() => {
        res.redirect(`/rides/${ride._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
    }
})
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })  
}




function deleteRide(req, res) {
  Ride.findByIdAndDelete(req.params.rideId)
  .then(ride => {
    res.redirect('/rides')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createRider(req, res) {
  Ride.findById(req.params.rideId)
  .then(ride => {
    ride.riders.push(req.body)
    ride.save() 
    .then(() => {
      res.redirect(`/rides/${ride._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/rides/my-rides')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/rides/my-rides')
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
      res.redirect('/rides/my-rides')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/rides/my-rides')
  }) 
}


function showMyRides(req, res) {
  Ride.find({})
  .then(rides => {
      res.render('rides/my-rides', {
        title: "My Rides",
        rides: rides.filter((ride) => ride.requestor.equals(req.user.profile._id)),
        requestor: req.user.profile.name,
        
      })
    }) 
  .catch(err => {
    console.log(err)
    res.redirect('/')
  }) 
}

function cancel(req, res) {
  Ride.findById(req.params.rideId)
  .then(ride => {
    ride.status = 'canceled'
    ride.save()
    .then(() => {
      res.redirect('/rides/my-rides')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function submit(req, res) {
  Ride.findById(req.params.rideId)
  .then(ride => {
    ride.status = 'submitted'
    ride.save()
    .then(() => {
      res.redirect('/rides/my-rides')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
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
  update,
  deleteRide as delete,
  createRider,
  deleteRider,
  showMyRides,
  cancel,
  submit
}