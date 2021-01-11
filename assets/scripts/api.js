'use strict'

const config = require('./config')
const store = require('./store')

// AUTH #####################

// sign-up API
const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
// sign in API
const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}
// sign-out api
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// Change Password API
const changePassword = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// RESOURCE ####################

// Add Item API
const newItem = function (data) {
  console.log(data)

  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    data: {
      item: {
        name: data.item.name,
        quantity: data.item.quantity,
        location: data.location
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// Show items api
const showItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (id) {
  console.log(id)
  return $.ajax({
    url: config.apiUrl + '/items/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// exporting.
module.exports = {
  signUp,
  signIn,
  newItem,
  showItems,
  signOut,
  changePassword,
  destroy
}
