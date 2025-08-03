// // function add( a , b){
// const add = function (a,b) {
    

//     console.log(a+b);
//     console.log('arguments' ,arguments)
//     console.log(arguments.length);
     
    
// }
// add(10 , 20 ,30 ,40 ,50)
// for (let i = 0; i < arguments.larguments; i++) {
//     console.log(arguments[i]);
//     sum = 0;
//     sum = sum+arguments[i]
// }
// console.log('sum' , sum);

//arrow function not uses arguments  it causes as arguments keyword not support   

// rest parameter  -> ...args
// //rest parameter is used  arrow function and it can be uses all the method of arr
// const sum = (a,b ,...args)=>{
//     console.log("sum of (a+b) :" , a+b);
//     console.log(args);
//     console.log(args.length);
    
    
//     const sum = args.reduce((acc , cuurent)=>acc +cuurent)
//  console.log("sum of rest params" , sum)
       
    
// }
// sum(10 ,20 ,30 ,40 ,50)
function printmessages(...params){
    params.forEach((msg => console.log(msg)))
}

console.log(printmessages('hii' , 'hello' , 'bye' , 'tata' , 'gaya' , 'khatam'))