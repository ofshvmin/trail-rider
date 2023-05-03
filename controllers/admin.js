import { Ride } from '../models/ride.js'
import { Profile } from '../models/profile.js'
import { Horse } from '../models/horse.js'
import { User } from '../models/user.js'


function index(req, res) {
  res.render('admin/index', { title: 'Site Administration' })
}

function getProfiles(req, res) {
  User.find({})
  .populate('profile')
  .then(users => {
    res.render('admin/users', {
      users,
      title: 'User Profiles'
    })
  })
}

function editProfile(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    res.render('admin/edit-profile', {
      profile,
      title: "Edit User Profile"
    })
  })
}

function updateProfile(req, res) {
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  }
  Profile.findById(req.params.profileId)
  .then(profile => {
    if(profile._id.equals(req.user.profile._id)) {
      profile.updateOne(req.body) 
      .then(() => {
        res.redirect('/rides/new-2')
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
      
    } else if (req.user.profile.role === 'Admin' ) {
      profile.updateOne(req.body)
      .then(() => {
        res.redirect('/admin/users')
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })

    } else {
      console.log('USER NOT AUTHORIZED TO PERFORM THIS ACTION')
      res.redirect('/')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  getProfiles,
  editProfile,
  updateProfile,
}