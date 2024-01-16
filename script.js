// ==== ESERCIZIO 1 ==== //

// DOM references

const form = document.getElementsByTagName('form')[0]
const nameInput = document.getElementById('name')
const surnameInput = document.getElementById('surname')
const emailInput = document.getElementById('email')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const saveButton = document.getElementById('save')
const resetButton = document.getElementById('reset')
const nameSpan = document.getElementById('name-span')
const surnameSpan = document.getElementById('surname-span')
const emailSpan = document.getElementById('email-span')
const usernameSpan = document.getElementById('username-span')
const passwordSpan = document.getElementById('pw-span')

// Class code

class User {
  constructor(_name, _surname, _email, _username, _pw) {
    this.name = _name
    this.surname = _surname
    this.email = _email
    this.username = _username
    this.password = _pw
  }
}

// Functions

const fillCard = function (obj) {
  nameSpan.innerText = obj.name
  surnameSpan.innerText = obj.surname
  emailSpan.innerText = obj.email
  usernameSpan.innerText = obj.username
  passwordSpan.innerText = ''
  for (let i = 0; i < obj.password.length; i++) {
    passwordSpan.innerText += '•'
  }
}

const emptyCard = function () {
  nameSpan.innerText = ''
  surnameSpan.innerText = ''
  emailSpan.innerText = ''
  usernameSpan.innerText = ''
  passwordSpan.innerText = ''
  nameInput.disabled = false
  surnameInput.disabled = false
  emailInput.disabled = false
  usernameInput.disabled = false
  passwordInput.disabled = false
  saveButton.disabled = false
}

const emptyForm = function () {
  nameInput.value = ''
  surnameInput.value = ''
  emailInput.value = ''
  usernameInput.value = ''
  passwordInput.value = ''
  nameInput.disabled = true
  surnameInput.disabled = true
  emailInput.disabled = true
  usernameInput.disabled = true
  passwordInput.disabled = true
  saveButton.disabled = true
}

// Event listeners

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const user = new User(
    nameInput.value,
    surnameInput.value,
    emailInput.value,
    usernameInput.value,
    passwordInput.value
  )
  fillCard(user)
  localStorage.setItem('user', JSON.stringify(user))
  emptyForm()
})

resetButton.addEventListener('click', function () {
  emptyCard()
  localStorage.clear()
})

// Page load

if (localStorage.getItem('user')) {
  const user = JSON.parse(localStorage.getItem('user'))
  fillCard(user)
  emptyForm()
}

// ==== ESERCIZIO 2 ==== //

// DOM references

const timerText = document.getElementById('timer')

// Variables

let seconds = 0
let minutes = 0
let hours = 0

// Timer

setInterval(function () {
  if (
    sessionStorage.getItem('seconds', seconds) ||
    sessionStorage.getItem('minutes', minutes) ||
    sessionStorage.getItem('hours', hours)
  ) {
    seconds = parseInt(sessionStorage.getItem('seconds', seconds))
    minutes = parseInt(sessionStorage.getItem('minutes', minutes))
    hours = parseInt(sessionStorage.getItem('hours', hours))
  }
  seconds++
  if (seconds === 60) {
    seconds = 0
    minutes++
    if (minutes === 60) {
      minutes = 0
      hours++
    }
  }
  sessionStorage.setItem('seconds', seconds)
  sessionStorage.setItem('minutes', minutes)
  sessionStorage.setItem('hours', hours)
  timerText.innerText = `${hours}h ${minutes}m ${seconds}s`
}, 1000)
