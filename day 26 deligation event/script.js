const party  = document.querySelector('.party')
for (let i = 1; i <= 30; i++) {
 
    const hat = document.createElement('div')
    hat.innerText=i;
    hat.classList.add('hat')
    party.append(hat)

}
party.addEventListener('click' , (e)=>{
    // console.log(e);
    console.log('parent clickied for the hat' , e.target.innerText);
    
    
})


