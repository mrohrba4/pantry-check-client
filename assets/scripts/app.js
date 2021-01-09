'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.sipcon').hide()
  $('.sipage').hide()
  // sign-up action
  $('#sign-up').on('submit', events.onSignUp)
  // Sign-in action.
  $('#sign-in').on('submit', events.onSignIn)
  // Sign out action
  $('#signoutsub').on('click', events.onSignOut)
  // Add item button action
  $('#aipb').on('click', events.onAiButton)
  // add item cancel button
  $('#aireturn').on('click', events.onArButton)
  // create or Add new item
  $('#additem').on('submit', events.onItemCreate)
  // show items
  $('#visub').on('click', events.onShowItems)
  // show items cancel/return
  $('#vireturn').on('click', events.onVrButton)
})
