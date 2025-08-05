// const numbers = [11, 21, 31, 41, 51]
// //destructring in case of array

// // const a = numbers[0]
// // const b = numbers[1]
// // console.log(a);
// // console.log(b);

// // const [a,b,c] = numbers
// // console.log(a,b,c);

// const [a1, , , b1] = numbers
// console.log(a1, b1);

// const [, , , a] = numbers

// console.log(a);

// const [a2, b, ...rest] = numbers
// console.log(a2, b  , rest);


// const numbers1 = [10 ,20]
// const[a3,b3,c3=100] = numbers1
// console.log(a3,b3,c3);


//=====================================================
//destructing in case of object

const employee={
    id:101,
    name:'rajkumar',
    salaray:2000.9,
    age:24
}


const {name , dept:deptId='iti'} = employee
// console.log(id,name);
console.log( name ,deptId );
const{age} = employee
// e.log(age);

const{id  , ...rest} = numbers
console.log(id , rest);

