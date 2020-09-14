const mongoose = require('mongoose')

var Schema = mongoose.Schema

const ProfileSchema = new Schema({
  first_name: { type: String, default: '' },
  last_name: { type: String, default: '' },
  archived: { type: Boolean, default: false },
  created_at: { type: Date },
  updated_at: { type: Date }
})


ProfileSchema.statics.attributes = {
  first_name: 1,
  last_name: 1,
  archived: 1,
  created_at: 1,
  updated_at: 1
}


module.exports = mongoose.model('Profile', ProfileSchema)