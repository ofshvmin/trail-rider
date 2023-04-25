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

function updateProfile(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    console.log('REQ.BODY: ', req.params.profileId);
    console.log('REQ.USER: ', req.user.profile._id);
    console.log('USER ROLE: ', req.user.profile.role);





    if(profile._id.equals(req.user.profile._id)) {
      console.log('true')
      profile.updateOne(req.body) 
      .then(() => {
        res.redirect('/rides/new')
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