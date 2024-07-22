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

4. Map function  Polyfills 
Array.prototype.getMyMap = function(cb){
	let temp = []
  for(let i = 0 ;i<this.length;i++){
  	temp.push(cb(this[i], i, this))
    
  }
  return temp
}

//here this referes to parent array

let arr = [2,1,3,1]

arr.getMyMap(ele=>{
	console.log(ele*2)
})


5. Filter function Polyfills
Array.prototype.getMyFilter = function(cb){
	let temp = []
  for(let i = 0 ;i<this.length;i++){
  	if(cb(this[i], i, this)){
    	temp.push(this[i])
    }
    
  }
  return temp
}

let arr = [2,1,3,1,10]

arr.getMyFilter(ele=>{
	if(ele <2){
  	console.log(ele)
  }
})
