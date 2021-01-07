'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

// sign up function
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// sign in function
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// aisub button function
const onAiButton = function (event) {
  console.log('Firing')
  event.preventDefault()
  $('#message').hide()
  $('.aicon').hide()
  $('.vicon').hide()
  $('.aipage').show()
}

// exporting.
module.exports = {
  onSignUp,
  onSignIn,
  onAiButton
}
