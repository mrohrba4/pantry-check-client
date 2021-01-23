'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // initial hide
  $('.sipcon').hide()
  $('.sipage').hide()
  $('.ampage').hide()
  $('.cppage').hide()
  $('.uicon').hide()
  $('.dicon').hide()
  $('.deletepage').hide()
  $('.uipage').hide()

  // AUTH #############

  // sign-up action
  $('#sign-up').on('submit', events.onSignUp)
  // Sign-in action.
  $('#sign-in').on('submit', events.onSignIn)
  // Sign out action
  $('#signoutsub').on('click', events.onSignOut)
  // change password action
  $('#changepass').on('submit', events.onChangePassword)

  // BUTTONS #######################

  // account Manage button action
  $('#managesub').on('click', events.onManage)
  // account manage return button
  $('#amr').on('click', events.onAmr)
  // change pass page button
  $('#cpbutton').on('click', events.onCpp)
  // manage items main page button
  $('#mainitemspb').on('click', events.onMip)
  // Add item page button
  $('#aipb').on('click', events.onAiButton)
  // add item cancel button
  $('#aireturn').on('click', events.onArButton)
  // show items cancel/return
  $('#vireturn').on('click', events.onVrButton)
  // delete item page button(loads the delete item page.)
  $('#dipsub').on('click', events.onDipSub)
  // Return home button
  $('.rehome').on('click', events.onRehome)
  // Delete Page Return home
  $('#dprbutton').on('click', events.onDpr)
  // Update Item Page Button
  $('#uipsub').on('click', events.onUipage)
  // Update Item Page Return home
  $('#uireturn').on('click', events.onUipr)

  // RESOURCE MANIPULATION ####################

  // create or Add new item
  $('#additem').on('submit', events.onItemCreate)
  // show items
  $('#visub').on('click', events.onShowItems)
  // Delete item
  $('#deleteform').on('submit', events.onDestroy)
  // Update Item
  $('#updateitem').on('submit', events.onUpdateItem)
})
