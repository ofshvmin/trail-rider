import { Ride } from '../models/ride.js'
import { Profile } from '../models/profile.js'
import { Horse } from '../models/horse.js';


function index(req, res) {
  res.render('admin/index', { title: 'Site Administration' })
}

function horseIndex(req, res) {
  console.log('horse index');
}

function createHorse(req, res) {
  console.log(req.body)
}


export {
  index,
  horseIndex
}