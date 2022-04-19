const iconoMenu = document.getElementById('hamburgesa'),
    menu = document.querySelector('#menu');


iconoMenu.addEventListener('click',(e)=>{

    //alternamos estilos para el menu y body
    menu.classList.toggle('active');
    

    //alternamos su atributo "src" para el icono del menú

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == './assets/imagenes/menu.png'){
            e.target.setAttribute('src', './assets/imagenes/close.png')
        }else{
            e.target.setAttribute('src', './assets/imagenes/menu.png')
    }
});

const iconoCart = document.getElementById('carrito'),
        carrito = document.getElementById('cart');

iconoCart.addEventListener('click', (e) => {
    carrito.classList.add('show-cart');
});

const cerrarCart = document.getElementById('cerrarCart');

cerrarCart.addEventListener('click', (e) => {
    carrito.classList.remove('show-cart')
})

