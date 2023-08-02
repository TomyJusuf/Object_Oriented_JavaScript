// I use same code from file_1

var userOne = {
  email: 'ryu@ninjas.com',
  name: 'Ryu',
  login() {
    console.log(this.email, 'has logged in')
  },
  logout() {
    console.log(this.email, ' has logged out')
  },
}
// how use classes and don't always repeat-self
//we will learn how use classes in next files for don't repeat the object always

var userTwo = {
  email: 'ryu@ninjas.com',
  name: 'Ryu',
  login() {
    console.log(this.email, 'has logged in')
  },
  logout() {
    console.log(this.email, ' has logged out')
  },
}

var userThree = {
  email: 'ryu@ninjas.com',
  name: 'Ryu',
  login() {
    console.log(this.email, 'has logged in')
  },
  logout() {
    console.log(this.email, ' has logged out')
  },
}
//-----------UPDATE PROPERTY ---------------//
userOne.name = 'Tony' //update property
console.log(userOne.name)
userOne['name'] = 'Mario' //update name by square notation
console.log(userOne.name)

userOne['email']
console.log(userOne['email'])
// console.log(userOne[email]) //ReferenceError:email is not defined (email must be in string quotation)
