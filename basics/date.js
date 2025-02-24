let myDate = new Date();
console.log(myDate.toString());//Mon Feb 24 2025 05:17:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.getDate());//24
console.log(myDate.toLocaleDateString());//2/24/2025
console.log(myDate.toLocaleString());//2/24/2025, 5:17:42 AM
console.log(myDate.toTimeString());//05:17:42 GMT+0000 (Coordinated Universal Time)
console.log(typeof(myDate));//object

let myCreateDate = new Date("01-14-2025");
console.log(myCreateDate);//2025-01-14T00:00:00.000Z
console.log(myCreateDate.toLocaleString());//2025-01-14T00:00:00.000Z

let myTimeStamp = Date.now();
console.log(myTimeStamp);//milisecond
console.log(myCreateDate.getTime());//milisecond
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.toDateString());


