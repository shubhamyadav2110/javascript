//singleton
/*const tinderUser = new Object();
tinderUser.id ="12345"
tinderUser.name = "shubham"
tinderUser.email = "shubhamyadav2110@gmail.com"
console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullName : {
            firstName : "shubham",
            lastName : "yadav"

        }
    }
}*/
//console.log(regularUser.fullname.userFullName.firstName);

const object1 = {1: "shubham", 2: "yadav" }
const object2 = {3: "suryam", 4 : "yadav"}
//const object3 = {object1, object2}
const object3 = Object.assign({},object1,object2)
console.log(object3);

const object4 = {...object1,...object2}
console.log(object4);
