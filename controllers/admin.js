import { Ride } from '../models/ride.js'
import { Profile } from '../models/profile.js'



function index(req, res) {
  res.render('admin/index', { title: 'Site Administration' })
}

function horseIndex(req, res) {
  console.log('horse index');
}


export {
  index,
  horseIndex
}