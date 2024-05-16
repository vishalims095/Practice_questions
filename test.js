1. Generator function : generator function is such type of function which execution can be paused  using yield keyword, to create generator function need to use "*" keyword after function, and generator function returns object instent of function.
Ex : function* generatorFunc(i){
	console.log("A")
  yield i;
  console.log('B')
  yield i*2
}
const gen = generatorFunc(10)
console.log(gen.next().value)
console.log(gen.next().value)
