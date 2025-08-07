// document.children
// HTMLCollection [html]0: htmllength: 1[[Prototype]]: HTMLCollection
// const children = document.children
// undefined
// children
// HTMLCollection [html]
// document.children[0]
// <html lang=​"en">​scroll<head>​…​</head>​<script type=​"text/​javascript" src=​"/​___vscode_livepreview_injected_script">​</script>​<meta charset=​"UTF-8">​<meta http-equiv=​"X-UA-Compatible" content=​"IE=edge">​<meta name=​"viewport" content=​"width=device-width, initial-scale=1.0">​<title>​Frontend Roadmap​</title>​<script src=​"script.js" defer>​</script>​</head>​<body style=​"font-family:​ sans-serif">​…​</body>​</html>​
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
// <body style=​"font-family:​ sans-serif">​…​</body>​
// document.body.children
// HTMLCollection(6) [h1, hr, p, img#my-first-image-id.css-image, ul, p, my-first-image-id: img#my-first-image-id.css-image]
// document.body.children[0]
// <h1>​Frondend Development​</h1>​
// console.dir
// ƒ dir() { [native code] }
// console.dir(document.body.children[0])
// undefined
// document.body.children[0].innerHTML='sai'
// 'sai'

console.log(document.body.children[0].innerHTML)
console.log(document.body.children[0].innerText)

console.log(document.body.children[1].innerHTML);
console.log(document.body.children[1].innerText)
//text content
document.body.children[3].innerText