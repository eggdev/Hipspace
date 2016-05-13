var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');

//The user is created with a username, email, and password and an automatic hipscore of 0. They are able to update this when the user is created as well as from their profile page.

var UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hipscore: {type: Number, default: 0, required: true},
}, { timestamps: true });

UserSchema.pre('save', function(next){
  if( this.isModified('password') ){
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

UserSchema.methods.authenticate = function(passwordTry){
  return bcrypt.compareSync(passwordTry, this.password);
};

module.exports = mongoose.model('User', UserSchema);
