
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



//productos en pagina
const idAll = document.getElementById('all-products');
const idHoodies = document.getElementById('hoodies-products');
const idShirts = document.getElementById('shirts-products');
const idSweatshirts = document.getElementById('sweatshirt-products');
const articulos = document.getElementsByClassName('carta');


idAll.onclick = mostrarTodo

idHoodies.onclick = mostrarHoodie
idShirts.onclick = mostrarShirts
idSweatshirts.onclick= mostrarSweatshirts

function mostrarHoodie(){
    articulos[1].classList.add('mostrar')
    articulos[2].classList.add('mostrar')
    articulos[0].classList.remove('mostrar')

};

function mostrarShirts(){
    articulos[0].classList.add('mostrar')
    articulos[2].classList.add('mostrar')
    articulos[1].classList.remove('mostrar')
};

function mostrarSweatshirts(){
        articulos[0].classList.add('mostrar')
        articulos[1].classList.add('mostrar')
        articulos[2].classList.remove('mostrar')
}

function mostrarTodo() {
    articulos[0].classList.remove('mostrar')
    articulos[1].classList.remove('mostrar')
    articulos[2].classList.remove('mostrar')
}



const itemsTotal = document.getElementById('items-count');
const carritoSpan=document.getElementById('carrito-span');


//variables botones
const btnHoodies = document.getElementById('btn-hoodies');
const btnShirts = document.getElementById('btn-shirts');
const btnSweatshirts = document.getElementById('btn-sweatshirts');
const contenedorCarrito = document.getElementById('agregados');
const carritoVacio = document.getElementsByClassName('cart-empty')[0];

const carroConProductos = document.getElementById( "agregados" )
let imgCardCarrito = document.getElementById('card-carrito__img')
const list = document.getElementById('agregados')

let productos ={"articulo":[{"name":'hoodies',
'stock':12,
'valor': 14.00,
'cantidad': 1,
'src' : "assets/imagenes/featured1.png"

},
{"name": "shirts",
'stock': 15,
'valor': 24.00,
'cantidad':1,
'src': "./assets/imagenes/featured2.png"

},
{'name': 'sweatshirts',
'stock': 20,
'valor': 22.00,
'cantidad':1,
'src' : "./assets/imagenes/featured3.png"

}
]};





let carritoDeCompras = {};
let totalCompra = 0;
let unidadesTotales = 0;





//Agregar hoodies al carrito de compra
const agregarHoodie = btnHoodies.addEventListener('click',(e)=>{
     let variable = productos.articulo[0].name;
     let unidadesHoodies = 0
     const cartTotal = document.getElementById('cart-total')
     
        
        if(carritoDeCompras[variable]!== undefined){
           carritoDeCompras.hoodies+=1;
           //modificar span de unidades
           unidadesHoodies = document.getElementById('unidades-hoodies');
           unidadesHoodies.innerText = `${carritoDeCompras.hoodies} units`;
           



        }else{
            
            carritoDeCompras[variable] = 1;
            agregarCarta(0);
            unidadesHoodies.innerText = `${carritoDeCompras.hoodies} units`;
            

        }
             totalCompra += precioHoodie;
             unidadesTotales +=1 ;
             itemsTotal.innerText=`${unidadesTotales}`
            carritoSpan.innerText=`${unidadesTotales}`
            cartTotal.innerText=`$${totalCompra}`
            console.log(totalCompra);

});

const agregarShirts = btnShirts.addEventListener('click',() =>{
    let variable = productos.articulo[1].name;
    let unidadesShirts = 0;
    const cartTotal = document.getElementById('cart-total')
    
    if(carritoDeCompras[variable]!== undefined){
        
        carritoDeCompras.shirts+=1;
        unidadesShirts = document.getElementById('unidades-shirts');
        unidadesShirts.innerText = `${carritoDeCompras.shirts} units`;
        
    }else{
        
        carritoDeCompras[variable] = 1;
        agregarCarta(1); 
        unidadesShirts.innerText = `${carritoDeCompras.shirts} units`;
        
    }
    
        totalCompra += precioShirts;
        unidadesTotales +=1 ;
        itemsTotal.innerText=`${unidadesTotales}`
        cartTotal.innerText=`$${totalCompra}`
        carritoSpan.innerText=`${unidadesTotales}`
    
    
    
});



const agregarSweatshirts = btnSweatshirts.addEventListener('click',(e)=>{
    let variable = productos.articulo[2].name;
    let unidadesSweatshirts = 0;
    const cartTotal = document.getElementById('cart-total');

    if(carritoDeCompras[variable]!== undefined){
        
        carritoDeCompras.sweatshirts+=1;
        unidadesSweatshirts = document.getElementById('unidades-sweatshirts');
        unidadesSweatshirts.innerText = `${carritoDeCompras.sweatshirts} units`;
        
    }else{
        unidadesSweatshirts.innerText = `${carritoDeCompras.sweatshirts} units`;
        carritoDeCompras[variable] = 1;
        agregarCarta(2);
        
    }
        unidadesTotales +=1 ;
        itemsTotal.innerText=`${unidadesTotales}`;
        totalCompra += precioShirts;
        cartTotal.innerText=`$${totalCompra}`
        carritoSpan.innerText=`${unidadesTotales}`
    
});


function agregarCarta(item) {
    
    imgCard=`
    <section class="card-carrito " id="card-carrito-${productos.articulo[item].name}">
        <img src="${productos.articulo[item].src}" alt="" id="card-carrito__img">
        <div>
            <h4>${productos.articulo[item].name}</h4>
            <div class="datos-card">
                <span class="datos-card-stock">Stock:${productos.articulo[item].stock}</span>
                <span class="datos-card-valor">$${productos.articulo[item].valor}</span>
            </div>
            <span class="total-item-card">subtotal:$${productos.articulo[item].valor} </span>
            <div class="control-card">
                <span>
                    <button>
                        -
                    </button>
                </span>
                <span id="unidades-${productos.articulo[item].name}">
                ${productos.articulo[item].cantidad}units
                </span>
                <span>
                    <button>
                        +
                    </button>
                </span>
            </div>
        </div>
    </section>
    `;
    list.innerHTML += imgCard
    
    
}





//quitar carrito vacio
const todosLosBotones = document.querySelectorAll(".boton-productos");

const cuandoSeVaAAgregar= function (e){
    carritoVacio.classList.add('mostrar');
    contenedorCarrito.classList.remove('mostrar');
    
};

todosLosBotones.forEach(e=>{
    e.addEventListener('click',cuandoSeVaAAgregar)
});

const btnCheckOut = document.getElementById('cart-checkout');

btnCheckOut.addEventListener('click',()=>{
    carritoVacio.classList.remove('mostrar');
    contenedorCarrito.classList.add('mostrar');
    const cartTotal = document.getElementById('cart-total');
        unidadesTotales =0;
        totalCompra=0;
    itemsTotal.innerText=`${unidadesTotales}`
    carritoSpan.innerText=`${unidadesTotales}`
    cartTotal.innerText=`$${totalCompra}`


});

/*
carritoVacio.classList.remove('mostrar');
contenedorCarrito.classList.add('mostrar');
*/
//Precio articulos
const precioHoodie = productos.articulo[0].valor;
const precioShirts = productos.articulo[1].valor;
const precioSweatshirts = productos.articulo[2].valor;



