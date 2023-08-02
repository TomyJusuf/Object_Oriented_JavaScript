/* function* g1() {
  console.log('Hello')
  yield 'Yield 1 Ran ..'
  console.log('World')
  yield 'Yield 2 Ran'
  return 'Returned..'
}
var g = g1()
console.log(g.next().value)
console.log(g.next())
console.log(g.next())
*/

/*
//for generator function we must have always the asterix-star like so : function* ...(){}
function* gen() {
  yield console.log('first buritos') //yield pause function
  yield console.log('second banana')
  yield console.log('theert tacos')
  console.log('all done')
}
gen() //not log -- not fire code
var myGen = gen()
myGen.next()
myGen.next()
myGen.next()
myGen.next()
*/

/*
function* gen() {
  yield 'banana' //yield pause function
  yield 'burrito'
  yield 'tacos'
  return 'all done'
}
gen() //not log -- not fire code
var myGen = gen()
console.log(myGen.next()) //{ value: 'banana', done: false }
console.log(myGen.next()) //{ value: 'burrito', done: false }
console.log(myGen.next()) //{ value: 'tacos', done: false }
console.log(myGen.next()) //{ value: 'all done', done: true }
*/
/*
function* gen() {
  var x = yield 'banana'
  var y = yield 'burrito'
  var z = yield 'tacos'
  return x + y + z
}
gen() //not log -- not fire code
var myGen = gen()
console.log(myGen.next())
console.log(myGen.next(10))
console.log(myGen.next(15))
console.log(myGen.next(3))
*/

let log = console.log
let characters = ['Finn', 'Poe', 'Rey', 'Kylo', 'Luke', 'Leila']

function* genny(params) {
  yield 'a'
  yield 'b'
  yield 'c'
  yield 'd'
  return undefined
}
let iter = genny()
log(iter.next()) //{ value: 'a', done: false }
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next()) //{ value: undefined, done: true }
