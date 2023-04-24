import { Horse } from "../models/horse.js"


function index(req, res) {
  console.log('horse index');
  Horse.find({})
  .then(horses => {
    res.render('horses/index', {
      title: 'Horses',
      horses
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/horses')
  })
}

function newHorse(req, res) {
  res.render('horses/new', {
    title: 'New Horse'
  })
}


function create(req, res) {
  // console.log(req.body)
  req.body.lessonHorse = !!req.body.lessonHorse
  req.body.trailHorse = !!req.body.trailHorse
  // console.log(req.body);
  Horse.create(req.body)
  .then(() => {
    res.redirect('/horses')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/horses')
  })
}


export {
  index,
  newHorse as new,
  create,
}