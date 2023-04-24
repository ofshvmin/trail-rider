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
      title: ""
    })
  })
}

export {
  index,
  getProfiles,
  editProfile,
}