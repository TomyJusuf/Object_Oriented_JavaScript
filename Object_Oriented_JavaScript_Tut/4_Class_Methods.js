class User {
  constructor(email, name) {
    this.email = email
    this.name = name
  }
  login() {
    console.log(this.email, 'just logged in')
  }
  logout() {
    console.log(this.email, 'just logged out')
  }
}

var userOne = new User('tomas@tyty.com', 'Tomy')
var userTwo = new User('Tristan@tyty.com', 'Tris')
userOne.login()
userTwo.logout()
