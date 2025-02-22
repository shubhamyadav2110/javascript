//primitive data types  it is call by value(make a copy)
// 7 types : string , number, boolean, null(empty), undefined, symbol, 
// bignit(for bigger value)

/*java script is dynamically type language which means we dont have to
explictily define the type of variable
const number = 100//(int) 
const number =100.3(float)
name = "shubham"(string)
*/ 

//refrence type or non primitive type
// Array, Object, Funtions

//symbol
/*const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id)
console.log(anotherId);
console.log(Id == anotherId);

const bigNumber = 3545451616412545454624535646154601646456356268856565n
coonst bigNumber = null//undefined
console.log(bigNumber)
*/
const hero = ["shubhma", "yogen", "praveen"]//refrence type
let myObj = {//object declearation
    fname : "shubham",
    age : 26
}

const myFuntion = function()//funtion decleration
{
    console.log("this is funtion");

}
myFuntion()

//stack(primitive) , heap(non-primitive)
//stack give the copy of variable and heap give the reference of any variable
 

 let userOne = {
    name : "shubham",
    upi : "shubbhamyadav@xml"
 }
 let userTwo = userOne
 console.log(userOne);
 console.log(userTwo);