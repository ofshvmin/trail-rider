import { Ride } from '../models/ride.js'
import { Profile } from '../models/profile.js'
import { Horse } from '../models/horse.js';


function index(req, res) {
  res.render('admin/index', { title: 'Site Administration' })
}




export {
  index,
  
}