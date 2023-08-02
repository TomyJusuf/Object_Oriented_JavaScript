const myObject = {
  firstName: 'Chuck',
  lastName: 'Noris',
  id: 3456,
  username: 'iron chest',
  password: 'police',
}

Object.entries
Object.values
Object.keys

const dataArray = Object.entries(myObject)
console.log(dataArray)

const dataArrayValue = Object.values(myObject)
console.log(dataArrayValue)

const dataArrayKey = Object.keys(myObject)
console.log(dataArrayKey)

// let dataArray = []

// for (key in myObject) {
//   let entry = []
//   entry.push(key)
//   entry.push(myObject[key])

//   dataArray.push(entry)
//   //   console.log(key) //key
//   //   console.log(myObject[key]) //value
// }
// console.log(dataArray)
