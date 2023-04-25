import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  preferredEmail: String,
  avatar: String,
  role: { 
    type: String,
    enum: ['Staff', 'Client', 'Admin'],
    default: 'Client',
    // phone: String,
    required: true,
},
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
