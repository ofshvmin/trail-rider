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
}




function create(req, res) {
  console.log(req.body)
}


export {
  index,
  create,
}