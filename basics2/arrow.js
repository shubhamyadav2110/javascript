/*const user ={
    userName : "shubham",
    price : 200,

    welcome_message:function(){
        console.log(`${this.userName},welcome to website`);
        
    }

}
user.welcome_message();*/

/*const chai = (num1,num2) =>{
    return num1+num2    
}*/
/*const chai2 = (num1=20,num2=30) => (num1+num2)    
console.log(chai2());
*/
const cofee = () => ({username : "shubham"})//dont need to write return
const anothercoffee = cofee();
console.log(anothercoffee.username);
console.log(cofee().username)

