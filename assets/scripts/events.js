'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

// AUTH ##################

// Sign Up function
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
// Sign In function
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
// Sign Out function
const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// Change Password function
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// BUTTONS ############

// Account Manage button
const onManage = function () {
  $('#message').hide()
  $('.aicon').hide()
  $('.vicon').hide()
  $('.accon').hide()
  $('.ampage').show()
}
// Account manage return button
const onAmr = function () {
  $('#message').hide()
  $('.aicon').show()
  $('.vicon').show()
  $('.accon').show()
  $('.ampage').hide()
}
// Change Pass page button
const onCpp = function () {
  $('.cppage').show()
  $('.ampage').hide()
}
// Add Item Page button function
const onAiButton = function (event) {
  event.preventDefault()
  $('#message').hide()
  $('.aicon').hide()
  $('.vicon').hide()
  $('.accon').hide()
  $('.aipage').show()
}
// Add Item return/cancel button
const onArButton = function () {
  $('#message').hide()
  $('.aicon').show()
  $('.vicon').show()
  $('.accon').show()
  $('.aipage').hide()
}
// Show items cancel/return button
const onVrButton = function () {
  $('#message').hide()
  $('.aicon').show()
  $('.vicon').show()
  $('.accon').show()
  $('.sipage').hide()
}
// Manage items page button
const onMip = function () {
  $('#message').show()
  $('#message').text('Manage User Items')
  $('.aicon').show()
  $('.vicon').show()
  $('.uicon').show()
  $('.dicon').show()
  $('.itemscon').hide()
  $('.accon').hide()
}
// Delete Item Page Button
const onDipSub = function () {
  $('#message').hide()
  $('.aicon').hide()
  $('.vicon').hide()
  $('.uicon').hide()
  $('.dicon').hide()
  $('.deletecon').show()
}

// RESOURCE #################

// Add Item Create function
const onItemCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.newItem(data)
    .then(ui.newItemSuccess)
    .then(ui.newItemFailure)
}
// Show items function
const onShowItems = function () {
  api.showItems()
    .then(ui.showItemsSuccess)
    .then(ui.showItemsFailure)
}

// Exporting.
module.exports = {
  onSignUp,
  onSignIn,
  onAiButton,
  onItemCreate,
  onShowItems,
  onArButton,
  onVrButton,
  onSignOut,
  onManage,
  onCpp,
  onChangePassword,
  onAmr,
  onMip,
  onDipSub
}
