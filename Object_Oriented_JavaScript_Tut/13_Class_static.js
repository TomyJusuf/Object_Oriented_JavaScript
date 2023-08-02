class User {
  constructor(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
  }

  static counterUsers() {
    console.log('There are 50 users')
  }

  register() {
    console.log(this.username + ' is now registered')
  }
}

// let bob = new User('bob', 'bob.marley@cca.com', 123)
// bob.register()

// User.counterUsers()

class Member extends User {
  constructor(username, email, password, memberPackage) {
    super(username, email, password)
    this.memberPackage = memberPackage
  }
  getPackage() {
    console.log(
      this.username + ' is subscribed to the ' + this.memberPackage + ' package'
    )
  }
}

let mike = new Member('mike', 'mike@email.com', 123, 'Standard')

// mike.getPackage()
mike.register()
