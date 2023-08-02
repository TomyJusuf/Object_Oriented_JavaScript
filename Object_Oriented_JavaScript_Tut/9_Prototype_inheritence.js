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

function Admin(...args) {
  User.apply(this, args)
  this.role = 'super admin'
}
Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email
  })
}
var userOne = new User('tomas@tyty.com', 'Tomy')
var userTwo = new User('Tristan@tyty.com', 'Tris')
var admin = new Admin('admin@admin.com', 'Admin_A')
var users = [userOne, userTwo, admin]
// console.log(admin)
admin.deleteUser(users[1])
console.log(users)
