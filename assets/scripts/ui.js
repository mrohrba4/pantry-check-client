
const store = require('./store')

// sign up success & failure.
const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign Up Failed!')
  $('form').trigger('reset')
}

// sign in success & failure
const signInSuccess = function (response) {
  $('#message').text('Signed In Successfully!')
  store.user = response.user
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Sign In Failed!')
  $('form').trigger('reset')
}

// exporting.
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
