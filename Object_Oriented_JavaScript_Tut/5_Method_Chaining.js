class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    this.score = 0
  }
  login() {
    console.log(this.email, 'just logged in')
    return this //chaining
  }
  logout() {
    console.log(this.email, 'just logged out')
    return this //chaining
  }
  updateScore() {
    this.score++
    console.log(this.email, ' score is now', this.score)
    return this //chaining
  }
}

var userOne = new User('tomas@tyty.com', 'Tomy')
var userTwo = new User('Tristan@tyty.com', 'Tris')
// userOne.login().logout() //<--- chaining
userOne.login().updateScore().updateScore().logout()
