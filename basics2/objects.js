//object literals

const sym = Symbol("key1")
Object.create//constructor method make sigleton object
const user = {//object has keys and values
    "name" : "shubham",
    [sym] : "symbol",//this is a symbol type
    age : 25,
    "email address" : "shubhuyadu5648@gmail.com",
    isLogin : false
}

//console.log(user.email address) this gives a error
console.log(user["email address"])
console.log(user.name);
console.log(user[sym]);

//Object.freeze(user)//feereze the value of user object
user["email address"]="shubhamyadav2110@gmail.com"
console.log(user["email address"]);

user.greetings = function()
{
    console.log("hello sir");
    
}
user.greetingstwo = function()
{
    console.log(`hello sir, ${this.name}`);
    
}
user.greetings()
user.greetingstwo()
