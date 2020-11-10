var carrito =[];

const carritoCompras=document.querySelector('#carrito');
const logo=document.querySelector('.submenu');

logo.addEventListener('click',(e)=>{

    carritoCompras.style.display= 'block';
    carritoCompras.style.position= 'absolute';
    carritoCompras.style.right=0;
    carritoCompras.style.top='100%';
    carritoCompras.style.zIndex= 1;
    carritoCompras.style.backgroundColor= 'white';
    carritoCompras.style.padding= '20px';
    carritoCompras.style.minHeight= '400px';
    carritoCompras.style.minWidth= '400px';

    console.log(carritoCompras.style);

});

