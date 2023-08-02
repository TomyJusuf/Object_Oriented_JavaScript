function User(email, name) {
  this.email = email
  this.name = name
  this.online = false
  this.login = function () {
    console.log(this.email, 'has logged in')
  }
}

var userOne = new User('tomas@tyty.com', 'Tomy')
var userTwo = new User('Tristan@tyty.com', 'Tris')

console.log(userOne)
userTwo.login()
