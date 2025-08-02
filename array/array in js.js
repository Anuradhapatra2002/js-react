// const fruits=['apple' , 'banana' , 'grapes'];
//     const addedFruits = fruits.concat();
//     console.log(fruits);
//     console.log(addedFruits);

//     // fruits.reverse();
//     // console.log(fruits);


//     // slice (let startindex) return a new array
//      const morefruits = ['apple' ,'banana' , 'grapes' , 'pinaple' , 'mango' ,'litchy' , 0 , 1, 11 , 2 ]
//     // let slicedfruits = morefruits.slice()
//     // slicedfruits = morefruits.slice(2)
//     let slicedfruits = morefruits.slice(2,4) // last index excluded & 1st index is included
//      console.log(slicedfruits);


//      //splice() it delete the elements in the original and return deleted element in an new array

//     //  const splicedFruits =morefruits.splice(2)
//     //  console.log('more fruits' , morefruits);

//     const splicedFruits =morefruits.splice(2,2,'dates' , 'orange' ,'guava' )
//      console.log('spliced fruits ' , splicedFruits);


//      //sort() sort the element by compare ascii value

//      morefruits.sort();

//      console.log(morefruits);


// =============================================================================================================
// forEach()
// Map()
// Filter()
// reduce()


const months = ['jan ', 'feb ', 'march', 'april', 'may']

// const printmonth = function (value , idx){
// console.log("months" ,value,idx);
// const printmonth  =(value,idx)=>{
//     console.log(value , idx);

//}

// months.forEach(values , idx) => {}



// months.forEach(printmonths)
//    function printmonths(value , idx )  {
//         console.log("months :" ,value , idx   ) ;


//    } 



//    //map 
//   const month1 = months.map((value , idx)=>{
//     console.log("month" , value , idx);
//     return true+":"+idx
//    })

//    const month2 = months.forEach((value , idx) =>{
//     console.log("month" ,value , idx);

//    }) 
//    console.log(month1);//we can expecr an array - causes map() return an array
//     console.log(month2); // it will be undefined - cause forEach() returns nothing

//    const filterdmonths = months .filter(months =>{
//         console.log('months ' , month);
//         return
//    })

//    const students = [
//     {name: 'soumya' , roll:20},
//     {name : 'anu' , roll:18},
//     {name :'bishal' , roll:16},
//     {name :'visa' , roll:16}
//    ]

// //    const rollGreaterthan18 = students.filter(students =>{
// //     return students.roll >=18 
// //    })

// // console.log(rollGreaterthan18);

//     const rollGreaterthan18 = students.filter(students =>{
//      return students.roll >=18 
//   })

// const arr =[1 , 2 ,3, 4,5];

// const odd = arr.filter(arr=>arr%2 !=0)
// console.log(odd);

//reduce(callback fn ,  initial value)
const num = [10, 20, 30, 40, 50, 60]

const result = num.reduce((accumulator, current, idx, arr) => {
    console.log(accumulator, current, idx);
    // return true

    return true + ":" + idx

}, 0)

console.log("result is ", result);//result value depends upon the last value of accumulator

const sum = num.reduce((acc, current) => acc + current)
console.log('sum', sum);


//some()

const numbers = [2, 11, 13]
const numbers1 = [11, 13]
const isSomeEvens = numbers.some(num => num % 2 === 0)
const isSomeEvens1 = numbers1.some(num => num % 2 === 0)
console.log(isSomeEvens);
console.log(isSomeEvens1);


const odd = [2, 13, 11]
const odd1 = [11, 13]
const isSomeodd = numbers.some(num => num % 2 !== 0)
const isSomeodd1 = numbers1.some(num => num % 2 !== 0)
console.log(isSomeodd);
console.log(isSomeodd1);


//every()
let isEveryOdds = numbers.every(num => num !== 0)