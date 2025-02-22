const name = "shubham"
const repoCount = 1
console.log(name + repoCount);
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const ganeName = new String("shubhamyadav")
ganeName
console.log(ganeName[0]);
console.log(ganeName.__proto__);
console.log(ganeName.length);
console.log(ganeName.toUpperCase());//SHUBHAMYADAV
console.log(ganeName);//it not change the original value because it store in stack memory
console.log(ganeName.indexOf('s'));

const newString = ganeName.substring(0,4); 
console.log(newString);

const newString1 = ganeName.slice(-8,4)
console.log(newString1);

let utrim = "     shubham yadav  "
const trimString = utrim.trim();
console.log(trimString);
