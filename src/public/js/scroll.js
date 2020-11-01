window.addEventListener('scroll',()=>{
  
    const scrollY=window.scrollY;

    if(scrollY>=730){

        let navbar=document.querySelector('nav');
        navbar.style.backgroundColor='black';
        navbar.style.height=900;
        console.log(navbar.style);
    }
})