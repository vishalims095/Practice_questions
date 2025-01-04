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

6. call apply bind
used for function borrowing
let obj = {
	name : "Vishal",
  address : "patna",
  getData : function(){
  	console.log(this.name, this.address)
  }
}
console.log(obj.getData())  // not good approach
let obj = {
	name : "Vishal",
        address : "patna"
}
function getData(){
  	console.log(this.name, this.address)
  }
  console.log(getData.call(obj))  // we can pass parameter as comma saperator  ex : getData.call(obj, "x", "y")
  console.log(getData.apply(obj))  // we can pass parameter in array  ex : getData.call(obj, ["x", "y"])
fot bind need to store function in a variable
let data = getData.bind(obj)
console.log(data())


7. Reduce Prototype
let arr = [3,3,2,1,3]

let data = arr.reduce((acc, ele) => { return acc + ele},10)
console.log(data)

Array.prototype.myReduce = function(cb, initialVal){
	let acc = initialVal
  for(let i = 0 ;i<this.length;i++){
  	acc = acc ? cb(acc, this[i],i,this) : this[i]
  }
  return acc
}

let data1 = arr.myReduce((acc, ele) => { return acc + ele},0)
console.log(data1)

8. Fabonnaci Series
let num = 6
let x=0
let y=1
let z = 0
for(let i = 0 ;i<=num;i++){
  console.log(x)
  z= x+y
  x=y 
  y=z
}
9. checkprime
let num = 7
let isPrime = true;

if(num == 1){
console.log("")
}else{
  for(let i=2;i<=num/2;i++){
  console.log(i)
     if (num % i == 0) {
            isPrime = false;
            break;
        }else{
           isPrime = true;
        }
  }
}
console.log(isPrime)

10. Splice
let arr = [1,3,3,1,13,4]
arr.splice(2,2,"ram","shyam") // first parameter index number, 2nd parameter how many element want to remove, third parameter input character want to push on array
console.log(arr)

11. function checkPrime(x){
let isPrime = false
	if(x<2){
  	return false
  }else{
  	for(let i=2;i<Math.sqrt(x);i++){
    console.log(Math.sqrt(x))
    	if(x%i == 0){
      isPrime = false
      	return isPrime
      }else{
      	isPrime =  true
        
      }
    }
    return isPrime
  }
}

12. function getFact(x){
	if(x == 0){
  	return 1
  }else{
  	return x * getFact(x-1)
  }
}

console.log(getFact(5))
