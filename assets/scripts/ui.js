
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

// sign out success & failure
const signOutSuccess = function () {
  $('#message').show()
  $('#message').text('Signed Out Successfully!')
  $('.sipcon').hide()
  $('.sucon').show()
  $('.sicon').show()
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed!')
}

// Change password success & failure
const changePasswordSuccess = function () {
  $('#message').show()
  $('#message').text('Password Changed')
  $('form').trigger('reset')
  $('.cppage').hide()
  $('.ampage').show()
}

const changePasswordFailure = function () {
  $('#message').text('Password Change Failed!')
  $('form').trigger('reset')
}

// Add Item success & failure
const newItemSuccess = function (data) {
  console.log(data)
  store.item = data.item
  $('#message').text('Item Added!')
  $('.ailabel').text('Item Added!')
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
  $('.accon').hide()
  $('.sipage').show()
  // Item one
  $('.onename').text(`Name: ${JSON.stringify(items[0].name)}`)
  $('.oneloc').text(`Location: ${JSON.stringify(items[0].location)}`)
  $('.onequan').text(`Quantity: ${JSON.stringify(items[0].quantity)}`)
  // Item two
  $('.twoname').text(`Name: ${JSON.stringify(items[1].name)}`)
  $('.twoloc').text(`Location: ${JSON.stringify(items[1].location)}`)
  $('.twoquan').text(`Quantity: ${JSON.stringify(items[1].quantity)}`)
  // Item three
  $('.threename').text(`Name: ${JSON.stringify(items[2].name)}`)
  $('.threeloc').text(`Location: ${JSON.stringify(items[2].location)}`)
  $('.threequan').text(`Quantity: ${JSON.stringify(items[2].quantity)}`)
  // Item four
  $('.fourname').text(`Name: ${JSON.stringify(items[3].name)}`)
  $('.fourloc').text(`Location: ${JSON.stringify(items[3].location)}`)
  $('.fourquan').text(`Quantity: ${JSON.stringify(items[3].quantity)}`)
  // Item five
  $('.fivename').text(`Name: ${JSON.stringify(items[4].name)}`)
  $('.fiveloc').text(`Location: ${JSON.stringify(items[4].location)}`)
  $('.fivequan').text(`Quantity: ${JSON.stringify(items[4].quantity)}`)
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
  showItemFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
