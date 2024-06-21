1. Generator function : generator function is such type of function which execution can be paused  using yield keyword, to create generator function need to use "*" keyword after function, and generator function returns object instent of function.
Using next keyword it starts execution.
	Ex : function* generatorFunc(i){
	console.log("A")
  yield i;
  console.log('B')
  yield i*2
}
const gen = generatorFunc(10)
console.log(gen.next().value)
console.log(gen.next().value)

2. Promise
let myPromise =(x)=>  new Promise((res, rej) =>{
if(x== 10){
	res(x)
}else{
	rej('Invalid data')
}
})

myPromise(100).then((data) =>{
console.log(data)
}).catch((err) => console.log(err))

3. Clouser
function getData(x){

	function returnSquare(){
  	return x*x
  }
  return returnSquare
}
let getData1 = getData(100)
console.log( getData1())

