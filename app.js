
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
//Datos productos

let productos ={"articulo":[{"name":'hoodies',
'stock':12,
'valor': 14.00,
'cantidad': 0,
'src' : "./assets/imagenes/featured1.png"

},
{"name": "shirts",
'stock': 15,
'valor': 24.00,
'cantidad':0,
'src': "./assets/imagenes/featured2.png"

},
{'name': 'sweatshirt',
'stock': 20,
'valor': 22.00,
'cantidad': 0,
'src' : "./assets/imagenes/featured3.png"

}
]};

//productos en pagina


const idAll = document.getElementsByClassName('producto-item')[0];
const idHoodies = document.getElementsByClassName('producto-item')[1];
const idShirts = document.getElementsByClassName('producto-item')[2];
const idSweatshirts = document.getElementsByClassName('producto-item')[3];
const articulos = document.getElementsByClassName('carta');

console.log(idHoodies);
console.log(articulos[0]);

function mostrarProducto (){
    if(){}
}

const mostrarHoodies = idHoodies.addEventListener('click', () => {
    articulos[1].classList.add('mostrar')
    articulos[2].classList.add('mostrar')
})

const mostrarShirts = idShirts.addEventListener('click', () => {
    articulos[0].classList.add('mostrar')
    articulos[2].classList.add('mostrar')
})

const mostrarSweatshirts = idSweatshirts.addEventListener('click', () => {
    articulos[0].classList.add('mostrar')
    articulos[1].classList.add('mostrar')
})



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




