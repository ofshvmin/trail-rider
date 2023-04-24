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
  req.body.lessonHorse = !!req.body.lessonHorse
  req.body.trailHorse = !!req.body.trailHorse
  Horse.create(req.body)
  .then(() => {
    res.redirect('/horses')
  })
}

function edit(req, res) {
  console.log(req.params.horseId);
  Horse.findById(req.params.horseId)
  .then(horse => {
    res.render('horses/edit', {
      horse,
      title: `Edit ${horse.name}`
    })
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
  edit,
}