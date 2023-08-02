function User(email, name) {
  this.email = email
  this.name = name
  this.online = true
}

// The prototype will created new method

User.prototype.login = function () {
  this.online = true
  console.log(this.email, 'has logged in')
}
User.prototype.logout = function () {
  this.online = false
  console.log(this.email, 'has logged out')
}

var userOne = new User('tomas@tyty.com', 'Tomy')
var userTwo = new User('Tristan@tyty.com', 'Tris')

userTwo.login()
userOne.logout()
