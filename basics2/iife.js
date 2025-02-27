//Immediately Invoked Funtion Expressions(IIFE)

(function chai(){
    console.log(`DB Connected`)
})();

(function chaiaur(){
    console.log(`connect`)
    
})();
((name) => {
    console.log('DB Connected ${name}');
    
})("shubham")