
//Funcionalidad del menu hamburgesa
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

//Funcionalidad del carrito de compras para abrir y cerrar 
const iconoCart = document.getElementById('carrito'),
        carrito = document.getElementById('cart');

iconoCart.addEventListener('click', (e) => {
    carrito.classList.add('show-cart');
});

const cerrarCart = document.getElementById('cerrarCart');

cerrarCart.addEventListener('click', (e) => {
    carrito.classList.remove('show-cart')
});


//Funcionalidad para la navbar

const navbar = document.getElementsByTagName('nav')[0];
const header = document.getElementsByTagName('header')[0];



window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    if(scrolled !=0){
        navbar.classList.add('nav-scroll');
        header.classList.add('header-scroll');
    }else{
        navbar.classList.remove('nav-scroll');
        header.classList.remove('header-scroll');
    };

});

//Funcionalidad agregar productos al carrito

let productos ={"articulo":[{"name":'hoodies',
'cantidad':1


},
{"shirts":1

},
{"sweatshirts":1

}
]};

//variables botones
const btnHoodies = document.getElementById('btn-hoodies');
const btnShirts = document.getElementById('btn-shirts');
const btnSweatshirts = document.getElementById('btn-sweatshirts');
const contenedorCarrito = document.getElementById('agregados');
const carritoVacio = document.getElementsByClassName('cart-empty')[0];
console.log(carritoVacio);
console.log(btnShirts);
console.log(btnSweatshirts);
console.log(btnHoodies);

let carritoDeCompras = [];

 const agregarHoddie = btnHoodies.addEventListener('click',(e)=>{
     
    carritoVacio.classList.add('mostrar');
    contenedorCarrito.classList.remove('mostrar');
});




