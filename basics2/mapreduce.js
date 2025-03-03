// const empName = ["sana", "varsha", " yogen"]
// const names = empName.forEach((item)=>{
//     //console.log(item)
//     return item
// })
// console.log(names);
// const myNum = [1,2,3,4,5,6,7,8,9,10]
// // const newNum = myNum.filter( (num) => {
// //     return num > 4
// // })
// myNum.forEach((num)=>{
//    if(num>4){
//     console.log(num)
//    }
//    else{
//     console.log("num is less than 4")
//    }
// })
//console.log(newNum);
// const book = [
//     {
//         bookName : "Harry Potter",
//         year : 1996
//     },
//     {
//         bookName : "The Lord of the Rings",
//         year : 1998
//     },
//     {
//         bookName : "The Hunger Games",
//         year : 2008
//     },
//     {
//         bookName : "The Alchemist",
//         year : 2003
//     }
// ]

// const userBook = book.filter((bk) =>{
//     return bk.year > 2000
// })
// const userBook = book.filter((bk)=> bk.year < 2000 )
// console.log(userBook);
// const myNum = [1,2,33,5,5,5]
// // myNum.map((num)=> num + 10 ).forEach((num)=> console.log(num))
// const number = myNum.map((num)=> num + 10 ).map((num)=> num > 4).filter((num)=> num !=0)
// console.log(number);

//reduce
const myNum = [1,2,3,4,5,6,7,8]
const mytotal = myNum.reduce(function (acc,curval){
    console.log(acc,curval);
    return acc + curval
},0)
console.log(mytotal);

