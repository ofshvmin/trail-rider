import { Horse } from "../models/horse.js"


function index(req, res) {
  Horse.find({})
  .then(horses => {
    res.render('horses/index', {
      title: 'Horses',
      horses: horses.sort((a, b) => a.barnName - b.barnName)
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

function update(req, res) {
  req.body.lessonHorse = !!req.body.lessonHorse
  req.body.trailHorse = !!req.body.trailHorse
  Horse.findByIdAndUpdate(req.params.horseId, req.body, { new: true })
  .then(() => {
    res.redirect('/horses')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/horses')
  })
}

function deleteHorse(req, res) {
  Horse.findByIdAndDelete(req.params.horseId)
  .then(() => {
    res.redirect('horses')
    })
  
  .catch(err => {
    console.log(err)
    res.redirect('/rides/my-rides')
  }) 
}




export {
  index,
  newHorse as new,
  create,
  edit,
  update,
  deleteHorse as delete
}