import { Ride } from '../models/ride.js'
import { Profile } from '../models/profile.js'
import { Horse } from '../models/horse.js'
import { User } from '../models/user.js'


function index(req, res) {
  res.render('admin/index', { title: 'Site Administration' })
}

function getUsers(req, res) {
  User.find({})
  .then(users => {
    res.render('admin/users', {
      users
    })
  })

}


export {
  index,
  getUsers,
}