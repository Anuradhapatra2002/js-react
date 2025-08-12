// document.children
// HTMLCollection [html]0: htmllength: 1[[Prototype]]: HTMLCollection
// const children = document.children
// undefined
// children
// HTMLCollection [html]
// document.children[0]
// <html lang=​"en">​scroll<head>​…​</head>​<script type=​"text/​javascript" src=​"/​___vscode_livepreview_injected_script">​</script>​<meta charset=​"UTF-8">​<meta http-equiv=​"X-UA-Compatible" content=​"IE=edge">​<meta name=​"viewport" content=​"width=device-width, initial-scale=1.0">​<title>​Frontend Roadmap​</title>​<script src=​"script.js" defer>​</script>​</head>​<body style=​"font-family:​ sans-serif">​…​</body>​</html>
// typeof document
// 'object'
// console.dir(document.children[0])
// VM1556:1 html
// undefined
// document.children[0].children
// HTMLCollection(2) [head, body]
// console.dir(document.children[0] .children[1])
// undefined
// document.body
// <body style=​"font-family:​ sans-serif">​…​</body>
// document.body.children
// HTMLCollection(6) [h1, hr, p, img#my-first-image-id.css-image, ul, p, my-first-image-id: img#my-first-image-id.css-image]
// document.body.children[0]
// <h1>​Frondend Development​</h1>
// console.dir
// ƒ dir() { [native code] }
// console.dir(document.body.children[0])
// undefined
// document.body.children[0].innerHTML='sai'
// // 'sai'

// console.log(document.body.children[0].innerHTML)
// console.log(document.body.children[0].innerText)

// console.log(document.body.children[1].innerHTML);
// console.log(document.body.children[1].innerText)
// //text content
// document.body.children[3].innerText

// const img = document.getElementsByTagName("img")
// console.log(img);
// console.dir(img)

// // const img1 = document.images()
// // console.dir(img1)

// const myfirst = document.getElementById("my-first-image-id")
// console.dir(myfirst)

// const myclass = document.getElementsByClassName("css-image")
// console.dir(myclass)


// const attributeselector = document.querySelector('[type="a"]')

// // console.dir(attributeselector)

//  const querySelectorall = document.querySelectorAll("img")
//  const upload = [
//      https://tse3.mm.bing.net/th/id/OIP.1u2p917cvlyP6SuHcq3t0QHaEc?pid=Api&P=0&h=180,
// https://miro.medium.com/v2/resize:fit:1000/1*pwvlwDIVaLmkGqPNlpMgiA.jpeg,
//     https://tse2.mm.bing.net/th/id/OIP.ZZaV8f0-sI1l6dcdApuE6gHaEK?pid=Api&P=0&h=180

//  ]

//  upload.forEach((image , idx)=>upload.src=image
//  for (let index = 0; index <upload.length; index++) {
//       element[index].src = upload[index];
    
//  } 

//get & set attribute===============================

// let a = document.querySelector('[username="sai"]').attributes
// console.log(a);
// //to extract the username
// let b =  document.querySelector('[username="sai"]').attributes.userName;
// console.log(b);
// //to extract username 
// let c = document.querySelector('[username="sai"]').attributes.userName.value;
// console.log(c);


// let d =document.querySelector('[username="sai"]').attributes.userName.value ="pranab"

// console.log(d);

const a = document.querySelector("h2").getAttribute("userName")

// console.log(a)
// VM970:1 sai
// undefined
// document.querySelector("h2").setAttribute("userName" , "pranab")
// undefined
// document.querySelector("img").getAttribute("src")
// './images/html-css-javascript.png'
// document.querySelector("img").getAttribute("alt")
// 'html-css-javascript'
// document.querySelector("img").setAttribute("alt" ,"html-css-js-image")
// undefined
// document.querySelector("img").getAttributeNames()
// (6) ['src', 'alt', 'style', 'title', 'class', 'id']
// document.querySelector("img").id
// 'my-first-image-id'
// document.querySelector("img").className
// 'css-image'
// document.querySelector("img").src
// 'http://127.0.0.1:3000/images/html-css-javascript.png'
// document.querySelector("img").alt
// 'html-css-js-image'
// document.querySelector("img").title
// 'Frontend Roadmap'

//what is the difference between node & element 

//Everynode can be an element but everelement cannot be a node

//=============9.8.2025==========================
// //===============HOW TO APPLY STYLES USING JS===================
// document.querySelectorAll('[userName]')
// NodeList(2) [h2, h2]
// document.querySelectorAll('[userName]')[0].style.color="green"
// 'green'
// document.querySelectorAll('[userName]')[1].style.color="greenYellow"
// 'greenYellow'

let ab = document.querySelectorAll("a")
 console.log(ab);
// ab[0].style.color="teal"
// ab[1].style.color="teal"
// ab[2].style.color="teal"
// ab[3].style.color="teal"


// 
// for(const an of ab){
//      an.style.color="red";
//      
// }

// ab.forEach((link)=>{
//      link.style.color="cyan"
//      link.style.textDecoration ='none'
//      link.style.fontWeight='700'
//      link.style.fontFamily='cursive'
//      link.style.fontSize='18px'
// } 
// )


// ab.forEach((link)=>{
//      link.style.cssText=`
//     color: red;
//     text-decoration: none;
//     font-family: 'Courier New', Courier, monospace;
//     text-decoration-thickness:initial ;
//     background-color: aquamarine;`
// })

// ab.forEach(link=>link.setAttribute('class' , 'border-link'))
// ab.forEach(link=>link.setAttribute('class' , 'cyan-link'))//
// //when we add  set attributes the it overide
// // ab.forEach(link=>link.className='cyan-link')
// // ab.forEach(link=>link.className='border-link')


// // ab.forEach(link=>link.classList)
// // ab.forEach(link=>link.classList.add('cyan-link'))
// // ab.forEach(link=>link.classList.add('border-link'))
// //when we add classList.add() or classList.toggle() it dont override 

// //=============================10.08.2025========================================
// //=====================Acessing parent element , sibiling element , children=====================
// script.js:127 NodeList(4) [a, a, a, a]
// document.querySelector("a")
// <a href=​"https:​/​/​en.wikipedia.org/​wiki/​Graphical_user_interface" target=​"_blank" title=​"Graphical user interface">​graphical user interface​</a>​
// let firstlink = 
// <a href=​"https:​/​/​en.wikipedia.org/​wiki/​Graphical_user_interface" target=​"_blank" title=​"Graphical user interface">​graphical user interface​</a>​
// VM266:2 Uncaught SyntaxError: Unexpected token '<'
// let firstlink = 
// <a href=​"https:​/​/​en.wikipedia.org/​wiki/​Graphical_user_interface" target=​"_blank" title=​"Graphical user interface">​graphical user interface​</a>​
// VM270:2 Uncaught SyntaxError: Unexpected token '<'
// const firstLink = docume
// VM351:1 Uncaught ReferenceError: docume is not defined
//     at <anonymous>:1:19
// (anonymous) @ VM351:1
// const firstLink = document.querySelector("a")
// undefined
// firstLink.nextElementSibling
// <a target=​"_blank" href=​"https:​/​/​en.wikipedia.org/​wiki/​HTML">​HTML​</a>​
// firstLink.nextElementSibling.nextElementSibling
// <a target=​"_blank" href=​"https:​/​/​en.wikipedia.org/​wiki/​CSS">​CSS​</a>​
// firstLink.nextElementSibling.nextElementSibling.nextElementSibling
// <a target=​"_blank" href=​"https:​/​/​en.wikipedia.org/​wiki/​JavaScript">​JavaScript​</a>​
// firstLink.nextElementSibling.nextElementSibling.nextSibling
// ", and "
// firstLink.nextElementSibling.nextElementSibling.nextSibling
// ", and "
