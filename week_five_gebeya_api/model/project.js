const mongoose = require('mongoose')

var Schema = mongoose.Schema

const ProjectSchema = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  owner: { type: Schema.Types.ObjectId, ref: 'Users' },
  archived: { type: Boolean, default: false },
  created_at: { type: Date },
  updated_at: { type: Date }
})


ProjectSchema.statics.attributes = {
  title: 1,
  description: 1,
  owner: 1,
  archived: 1,
  created_at: 1,
  updated_at: 1
}



module.exports = mongoose.model('Project', ProjectSchema)