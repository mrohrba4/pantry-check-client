'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.sipcon').hide()
  // sign-up action
  $('#sign-up').on('submit', events.onSignUp)
  // Sign-in action.
  $('#sign-in').on('submit', events.onSignIn)
  // Add item button action
  $('#aisub').on('click', events.onAiButton)
})
