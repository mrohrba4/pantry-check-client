'use strict'

const config = require('./config')
const store = require('./store')

// sign-up API
const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

// sign in API
const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

// exporting.
module.exports = {
  signUp,
  signIn
}
