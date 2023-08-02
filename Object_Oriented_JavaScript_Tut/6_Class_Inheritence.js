class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    this.score = 0
  }
  login() {
    console.log(this.email, 'just logged in')
    return this
  }
  logout() {
    console.log(this.email, 'just logged out')
    return this
  }
  updateScore() {
    this.score++
    console.log(this.email, ' score is now', this.score)
    return this
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      //users.filter == users[] array in 35
      return u.email != user.email
    })
  }
}

var userOne = new User('tomas@tyty.com', 'Tomy')
var userTwo = new User('Tristan@tyty.com', 'Tris')
var admin = new Admin('tara@ninja.com', 'tara')

var users = [userOne, userTwo, admin]

admin.deleteUser(userOne)
console.log(users, 'user')
