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

const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
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

// Item Create function
const onItemCreate = function (event) {
  console.log(event)
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.newItem(data)
    .then(ui.newItemSuccess)
    .then(ui.newItemFailure)
}

// Add item return/cancel button
const onArButton = function () {
  $('#message').hide()
  $('.aicon').show()
  $('.vicon').show()
  $('.aipage').hide()
}

// Show items function
const onShowItems = function () {
  api.showItems()
    .then(ui.showItemsSuccess)
    .then(ui.showItemsFailure)
}
// Show items cancel/return button
const onVrButton = function () {
  $('#message').hide()
  $('.aicon').show()
  $('.vicon').show()
  $('.accon').show()
  $('.sipage').hide()
}

// exporting.
module.exports = {
  onSignUp,
  onSignIn,
  onAiButton,
  onItemCreate,
  onShowItems,
  onArButton,
  onVrButton,
  onSignOut
}
