class User {
  constructor(email, name) {
    this.email = email
    this.name = name
  }
}

var userOne = new User('tomas@tyty.com', 'Tomy')
var userTwo = new User('Tristan@tyty.com', 'Tris')
console.log(userOne)
console.log(userTwo)
// the 'new keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
// - constructor is function!
