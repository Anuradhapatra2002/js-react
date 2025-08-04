const numbers = [1, 2, 3, 4, 5, 6]
console.log(...numbers);


const employee = [

    {
        name: 'raj',
        age: 24
    },

    {
        name: 'bki',
        age: 21
    },

    {
        name: 'binu',
        age: 26
    },

    {
        name: 'ram',
        age: 25
    }


]

console.log(...employee);
console.log(employee);

const myName = 'sai pranab patra'
console.log(...myName);//spread

const arr1 = [10, 20, 30, 40]
const arr2 = []
for (let i = 0; 1 < arr1.lengt; i++) {
    arr2[i] = arr1[i]
}

arr2.push(50)
console.log(arr1);
console.log(arr2);

const arr3 = [10, 20, 30]
// const arr4=[...arr3 , ...'Hello']
arr4 = []

Object.assign(arr4, arr3) // copy
arr4.push = 70
console.log(arr3);
console.log(arr4)


//===========================================
const employee1 = {
    name: 'biswa',
    age: 23

}
const copyuser = { ...employee1 }
console.log(copyuser);
console.log(employee1);

Object.assign(copyuser, employee1)

console.log(copyuser);
console.log(employee1);


const user = {
    name: 'anu',
    roll: '1'
    , adress: {
        state: 'odisha',
        city: 'berhampur'
    }
}

const copy = {...user}
console.log(user);

console.log(copy);





