const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

var Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String },
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  roles: [{ type: String, default: '' }],
  archived: { type: Boolean, default: false },
  last_login: { type: Date },
  created_at: { type: Date },
  updated_at: { type: Date }
})


UserSchema.statics.attributes = {
  username: 1,
  email: 1,
  profile: 1,
  roles: 1,
  archived: 1,
  last_login: 1,
  created_at: 1,
  updated_at: 1
}

UserSchema.pre('save', function preSave(next) {
    let model = this

    UserSchema.statics.hashPasswd(model.password, (err, hash) => {
        model.password = hash
        next()
    })
})


UserSchema.methods.verifyPassword = function verifyPassword(passwd) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(passwd, this.password, (err, isMatch) => {
        if (err) {
          return reject(err)
        }
  
        resolve(isMatch)
      })
    })
  }
  
UserSchema.statics.hashPasswd = function(passwd, cb) {
    let createHash = (err, hash) => {
      if (err) {
        return cb(err)
      }
  
      cb(null, hash)
    }
  
    let generateSalt = (err, salt) => {
      if (err) {
        return cb(err)
      }
  
      // Hash the password using the generated salt
      bcrypt.hash(passwd, salt, createHash)
    }
  
    // Generate a salt factor
    bcrypt.genSalt(12, generateSalt) // 123123123sdf
  }

  module.exports = mongoose.model('Users', UserSchema)