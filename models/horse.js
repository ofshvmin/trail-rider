import mongoose from 'mongoose'

const Schema = mongoose.Schema

const horseSchema = new Schema({
  name: String,
  barnName: String,
  sex: String,
  status: {
    type: String,
    enum: ['Active', 'Lame', 'Retired']
  },
    lessonHorse: Boolean,
  trailHorse: Boolean,
  height: Number,
  weightLimit: Number
}, {
  timestamps: true
})

const Horse = mongoose.model('Horse', horseSchema)

export {
  Horse
}
