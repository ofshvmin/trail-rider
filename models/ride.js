import mongoose from "mongoose"

const Schema = mongoose.Schema

const riderSchema = Schema({
  name: String,
  height: String,
  weight: String,
  experience: {
    type: String,
          enum: ['none', 'beginner', 'novice', 'intermediate', 'advanced']
            
            // 'none', 'some', 'basic w/t/c', "advanced - it's been a while", 'advanced - rides often'
  }
}, { 
  timestamps: true,
  
})

const rideSchema = new Schema({
  requestor: {
    type: Schema.Types.ObjectId,
  ref: 'Profile'
  },
  numberOfRiders: Number,
  riders: [riderSchema],
  date: Date,
  time: String,
  type: String,
  status: String,
}, {
  timestamps: true
})

const Ride = mongoose.model('Ride', rideSchema)

export {
  Ride
}