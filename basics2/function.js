/*function sayName()
{
    console.log("S")
    console.log("h")
    console.log("u")
    console.log("b")
    console.log("h")
    console.log("a")
    console.log("m")
}

//sayName()//funtion call
//sayName//funtion reference

function addNum (number1,number2)
{
    return number1+number2

}

const resnum = addNum(10,12)
console.log(resnum)

function addNum2 (number1,number2)
{
    let num = number1+number2
    return num

} 

const resnum1 = addNum(10,12)
console.log("Result ", resnum1)
*/
/*function userName(name)
{
    if(name==undefined)
        {
            console.log("User is not logged in")
        }
        else
        {
            console.log("User is logged in",name)
        }
}
userName("shubham")

function calculate(...num1)//...(three dots) rest operators
{
return num1
}
console.log(calculate(200,400,500));
*/
const user = {
    name : "shubham",//print shubham
    codes : 2//print undefined

}
function userDetails(anyobject)
{
    console.log(`user name is ${anyobject.name} and code is ${anyobject.code}`);

}

userDetails(user)

