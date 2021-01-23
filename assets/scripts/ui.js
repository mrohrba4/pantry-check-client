
const store = require('./store')

// AUTH #################

// sign up success & failure.
const signUpSuccess = function (response) {
  // Alert
  $('#message').show()
  $('#message').text('Signed Up Successfully!')
  // Clear form
  $('form').trigger('reset')
}
const signUpFailure = function () {
  // Alert
  $('#message').show()
  $('#message').text('Sign Up Failed!')
  // Clear form
  $('form').trigger('reset')
}

// sign in success & failure
const signInSuccess = function (response) {
  // Alert
  $('#message').show()
  $('#message').text('Signed In Successfully!')
  // Translation.
  store.user = response.user
  // Clear form
  $('form').trigger('reset')
  // hide sign up and in forms.
  $('.sucon').hide()
  $('.sicon').hide()
  // show signed in page
  $('.sipcon').show()
  // hide add items page.
  $('.aipage').hide()
  $('.aicon').hide()
  $('.vicon').hide()
}
const signInFailure = function () {
  // Alert
  $('#message').show()
  $('#message').text('Sign In Failed!')
  // Clear form
  $('form').trigger('reset')
}

// sign out success & failure
const signOutSuccess = function () {
  // Alert
  $('#message').show()
  $('#message').text('Signed Out Successfully!')
  // Signed in Con
  $('.sipcon').hide()
  // Sign up Con
  $('.sucon').show()
  // Sign in Con
  $('.sicon').show()
}
const signOutFailure = function () {
  // Alert
  $('#message').show()
  $('#message').text('Sign Out Failed!')
}

// Change password success & failure
const changePasswordSuccess = function () {
  // Alert
  $('#message').show()
  $('#message').text('Password Changed')
  // Clear form
  $('form').trigger('reset')
  // Change Pass Page
  $('.cppage').hide()
  // Account Manage Page
  $('.ampage').show()
}
const changePasswordFailure = function () {
  // Alert
  $('#message').show()
  $('#message').text('Password Change Failed!')
  // Clear form
  $('form').trigger('reset')
}

// RESOURCE ###############

// Add Item success & failure
const newItemSuccess = function (data) {
  // Translation
  store.item = data.item
  // Alert
  $('#message').show()
  $('#message').text('Item Added!')
  // Add Item text
  $('.ailabel').text('Item Added!')
  // Clear form
  $('form').trigger('reset')
}
const newItemFailure = function () {
  // Alert
  $('#message').show()
  $('#message').text('Item Add Failed!!')
  // Clear form
  $('form').trigger('reset')
}

// Show Item Success & Failure
const showItemsSuccess = function (response) {
  // Alert
  $('#message').show()
  $('#message').text('Showing Users Items')
  // item populate loop
  const item = response.items
  for (let i = 0; i < item.length; i++) {
    // 'If there is no items(null)...'
    if (item[i]._id && item[i].name && item[i].location && item[i].quantity === null) {
      $('.sipage').find('.silist').append(
        '<div>' + '<p>' + 'You have no items' + '</p>' + '</div>'
      )
    // ...'Populate the items.'
    } else {
      $('.sipage').find('.silist').append(
        // New populated div.
        '<div class="popitemdiv">' +
          // Item ID
          '<p class="popitemlabel">' + 'ID:' + item[i]._id + '</p>' +
          // Item Name
          '<p class="popitemlabel">' + 'Name:' + item[i].name + '</p>' +
          // Item Location
          '<p class="popitemlabel">' + 'Location:' + item[i].location + '</p>' +
          // Item Quantity
          '<p class="popitemlabel">' + 'Quantity:' + item[i].quantity + '</p>' +
        '</div>' +
        // Horizontal divider.
        '<hr>'
      )
    }
  }
  // Add Con
  $('.aicon').hide()
  // Show Con
  $('.vicon').hide()
  // Acc Manage Con
  $('.accon').hide()
  // Update Con
  $('.uicon').hide()
  // Delete Con
  $('.dicon').hide()
  // Sign in Page
  $('.sipage').show()
}
const showItemFailure = function () {
  // Alert
  $('#message').show()
  $('#message').text('Failed to show items')
}

// Delete Item Success & Failure
const onDeleteSuccess = function (data) {
  // Alert
  $('#message').show()
  $('#message').text('Item Successfully Deleted!')
  //  Clear form
  $('form').trigger('reset')
}
const onDeleteFailure = function () {
  // Alert
  $('#message').show()
  $('#message').text('Item Deletion Failed!')
  // Clear form
  $('form').trigger('reset')
}

// Update Item Success & Failure
const updateItemSuccess = function (data) {
  // Show Alert
  $('#message').show()
  // Alert
  $('#message').text('Item Updated!')
  // Clear form
  $('form').trigger('reset')
}
const updateItemFailure = function () {
  // Show Alert
  $('#message').show()
  // Alert
  $('#message').text('Item Failed To Update!')
  // Clear form
  $('form').trigger('reset')
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
  changePasswordFailure,
  onDeleteSuccess,
  onDeleteFailure,
  updateItemSuccess,
  updateItemFailure
}
