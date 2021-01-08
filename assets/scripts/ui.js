
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
  // hide sign up and in forms.
  $('.sucon').hide()
  $('.sicon').hide()
  // show signed in page
  $('.sipcon').show()
  // hide add items page.
  $('.aipage').hide()
}

const signInFailure = function () {
  $('#message').text('Sign In Failed!')
  $('form').trigger('reset')
}

// Add Item success & failure
const newItemSuccess = function (data) {
  console.log(data)
  store.item = data.item
  $('#message').text('Item Added!')
  $('form').trigger('reset')
}

const newItemFailure = function () {
  $('#message').text('Item Add Failed!!')
  $('form').trigger('reset')
}

const showItemsSuccess = function (response) {
  $('#message').text('Showing Users Items')
  const items = response.items
  console.log(items)
  $('.aicon').hide()
  $('.vicon').hide()
  $('.sipage').show()
  $('.test').text(`Items: \n ${JSON.stringify(items, ['name', 'quantity', 'location'], null, '\t')}`)
}

const showItemFailure = function () {
  $('#message').text('Failed to show items')
}
// exporting.
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  newItemSuccess,
  newItemFailure,
  showItemsSuccess,
  showItemFailure
}
