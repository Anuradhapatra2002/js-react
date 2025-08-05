// // let str = "hello"
// // console.log(str.length);//property


// // let str1 = new String("World!!!")
// // console.log(str1);

// const str ="        HelloWorld          "
// console.log(str.toUpperCase());
// console.log(str);

// const lowerStr = str.toLowerCase();
// console.log(str , '->' , lowerStr);

// const bothSideTrim = str.trim()
// console.log(str,"->" , bothSideTrim);

// const startSideTrim = str.trimStart()
// console.log(str,"->" , startSideTrim);

// const endSideTrim = str.trimEnd()
// console.log(str,"trim end->" , endSideTrim);


//================================================

const str = 'javaScript'
console.log(str.charAt(4));
console.log(str[4]);

console.log(str.charCodeAt(4))


const str1 = str.concat(' is fun')
console.log(str1);
console.log(str);

console.log(str.includes('a'));//true
const letter ='A'
console.log(str.includes(letter.toLowerCase()));

console.log(str.includes('script1'));

console.log(str.indexOf('a'));
console.log(str.indexOf('a' , 2));


const replaceString = str.replace("a" , "k")
console.log(str , '->' , replaceString);

const replaceAllStr = str.replaceAll("a" , "k")
console.log(str , '->' , replaceAllStr);

console.log(str.repeat(3));

console.log('5'.padStart(3 ,'0'));

console.log(str.padStart(13 , "0"));


console.log('5'.padEnd(3 ,'0'));

console.log(str.padEnd(13 , "0"));

const fruitsStr = 'apple , banana , cherry'
const fruitsArray = fruitsStr.split(',')
console.log(fruitsStr , '-> ' , fruitsArray);


const s = 'we are developers'
console.log(s.length);

console.log(s.slice());
console.log(s.substring());

console.log(s.slice(10));
console.log(s.substring(10));

console.log(s.slice(-9));

console.log(s.substring(-9))

//slice take negative index but substring doesnt take negative index
console.log(s.slice(17));
console.log(s.substring(17));

console.log(s.slice(11,13));
console.log(s.substring(11,13));

console.log(s.slice(13,11)); //if(st>end)-> empty string
console.log(s.substring(13,11));//if(st>end) ->swap =>substring()

console.log(s.slice(-6 , -2));
console.log(s.substring(-6 ,-2));

console.log(s.slice(-6,2));//slice(11 , 2) =>""
console.log(s.substring(-6,2)); //substring(0,2)


console.log(s.slice(2,-6));//
console.log(s.substring(2,-6));//swap ==>substring(2,0) = substring(0,2)
























