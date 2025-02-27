/*let variable = 10// global scope
if(true)
{
    let variable1 = 300
    console.log(variable1)// local scope or block scope
    console.log(variable)//global  scope
}
console.log(variable1);//this is not access outside of the block scope

//code enviorment global scope and browser console global scope are different
*/
function one(){
    let userName = "shubham"
    function two()
    {
        let userSurname = "yadav"
        console.log(userSurname);
    }
    console.log(userName);
    two()
}
one()

/////////////////////**/////////////////////
function new_Var(num){
    return num + 1
}

const newVar = new_Var(10)
console.log(newVar)//11

