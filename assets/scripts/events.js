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
  // Alert message
  $('#message').hide()
  // Add Item Container
  $('.aicon').hide()
  // Show Items Container
  $('.vicon').hide()
  // Account Manage Container
  $('.accon').hide()
  // Item Manage Container
  $('.itemscon').hide()
  // Account Manage Page
  $('.ampage').show()
}
// Account manage return button
const onAmr = function () {
  // Alert message
  $('#message').hide()
  // Item Manage Container
  $('.itemscon').show()
  // Account Manage Container
  $('.accon').show()
  // Account Manage Page
  $('.ampage').hide()
}
// Change Pass page button
const onCpp = function () {
  // Change Pass Page
  $('.cppage').show()
  // Account Manage Page
  $('.ampage').hide()
}
// Add Item Page button function
const onAiButton = function (event) {
  // Prevent
  event.preventDefault()
  // Alert Message
  $('#message').hide()
  // Add Container
  $('.aicon').hide()
  // Show Container
  $('.vicon').hide()
  // Account Manage Container
  $('.accon').hide()
  // Delete Container
  $('.dicon').hide()
  // Update Container
  $('.uicon').hide()
  // Add Page
  $('.aipage').show()
}
// Add Item return/cancel button
const onArButton = function () {
  // Alert Message
  $('#message').hide()
  // Add Container
  $('.aicon').show()
  // Show Container
  $('.vicon').show()
  // Delete Container
  $('.dicon').show()
  // Update Container
  $('.uicon').show()
  // Account Manage Container
  $('.accon').hide()
  // Add Page
  $('.aipage').hide()
}
// Show items cancel/return button
const onVrButton = function () {
  // Alert Message
  $('#message').hide()
  // Add Container
  $('.aicon').show()
  // Show Container
  $('.vicon').show()
  // Update Container
  $('.uicon').show()
  // Delete Container
  $('.dicon').show()
  // Account Manage Container
  $('.accon').hide()
  // Show Page
  $('.sipage').hide()
}
// Manage items page button
const onMip = function () {
  // Alert Message
  $('#message').show()
  $('#message').text('Manage User Items')
  // Add Container
  $('.aicon').show()
  // Show Container
  $('.vicon').show()
  // Update Container
  $('.uicon').show()
  // Delete Container
  $('.dicon').show()
  // Item Manage Container
  $('.itemscon').hide()
  // Account Manage Container
  $('.accon').hide()
}
// Delete Item Page Button
const onDipSub = function () {
  // Alert Message
  $('#message').hide()
  // Add Container
  $('.aicon').hide()
  // Show Container
  $('.vicon').hide()
  // Update Container
  $('.uicon').hide()
  // Delete Container
  $('.dicon').hide()
  // Delete Page
  $('.deletepage').show()
}
// Delete page cancel button
const onDpr = function () {
  // Alert
  $('#message').hide()
  // Add Con
  $('.aicon').show()
  // Show Con
  $('.vicon').show()
  // Update Con
  $('.uicon').show()
  // Delete Con
  $('.dicon').show()
  // Delete Page
  $('.deletepage').hide()
}
// Update Item Page button
const onUipage = function () {
  // Alert Message
  $('#message').hide()
  // Add Container
  $('.aicon').hide()
  // Show Container
  $('.vicon').hide()
  // Update Container
  $('.uicon').hide()
  // Delete Container
  $('.dicon').hide()
  // Update Page
  $('.uipage').show()
}
// return home button function
const onRehome = function () {
  // Alert
  $('#message').hide()
  // Add Con
  $('.aicon').hide()
  // Show Con
  $('.vicon').hide()
  // Update Con
  $('.uicon').hide()
  // Delete Con
  $('.dicon').hide()
  // Change Pass Page
  $('.cppage').hide()
  // Item Manage Con
  $('.itemscon').show()
  // Account Manage Con
  $('.accon').show()
}
// Update Page Return button
const onUipr = function () {
  // Alert
  $('#message').hide()
  // Add Con
  $('.uipage').hide()
  // Add Con
  $('.aicon').show()
  // Show Con
  $('.vicon').show()
  // Update Con
  $('.uicon').show()
  // Delete Con
  $('.dicon').show()
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
// Delete Item Function
const onDestroy = function (event) {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  const item = data.item
  console.log(item)
  if (item.id.length !== 0) {
    api.destroy(item)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').text('An Error Has Occured!')
  }
}
// Update Item Function
const onUpdateItem = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateItem(data)
    .then(ui.updateItemSuccess)
    .catch(ui.updateItemFailure)
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
  onDipSub,
  onDestroy,
  onRehome,
  onDpr,
  onUipage,
  onUpdateItem,
  onUipr
}
