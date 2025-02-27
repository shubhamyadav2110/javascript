const marvel_hero = ["spiderman","thor","shubham"]
const real_hero = ["shubham","yadav","suryam"]

console.log(marvel_hero+real_hero);//spiderman,thor,shubhamshubham,yadav,suryam

marvel_hero.push(real_hero)
console.log(marvel_hero);//[ 'spiderman', 'thor', 'shubham', [ 'shubham', 'yadav', 'suryam' ] ]

marvel_hero.pop(real_hero)
console.log(marvel_hero);//[ 'spiderman', 'thor', 'shubham' ]

const newarr = marvel_hero.concat(real_hero)
console.log(newarr);//[ 'spiderman', 'thor', 'shubham', 'shubham', 'yadav', 'suryam' ]

const antarr =[1,2,3, ["shubham","yadav"],6,7,[8,9,[10,11]]]
const reararr = antarr.flat(Infinity)
console.log(reararr);//[ 1, 2, 3, 'shubham', 'yadav', 6, 7, 8, 9, 10, 11 ]

console.log(Array.isArray(antarr));//true
console.log(Array.from("shubham"))//[ 's', 'h', 'u','b', 'h', 'a','m']

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ] this will make a array out of those varables
