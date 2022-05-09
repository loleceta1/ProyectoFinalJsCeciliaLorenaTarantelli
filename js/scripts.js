let productos = [];
fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
        generarCards(data.productos)
        productos = data.productos
    })





const agregarAlCarrito = (idProducto) => {

    const valorCantidad = document.getElementById(
        `cantidad-${idProducto} `
    ).value

    const productoAgregado = productos.find(producto => producto.id === idProducto);
    carrito.push(productoAgregado);

    actualizarCarrito()


    localStorage.setItem("carrito", JSON.stringify(carrito));

};

const verProducto = (idProducto) => {
    const productoQueQuiereVer = productos.find(producto => producto.id === idProducto);

    localStorage.setItem("productoAVer", JSON.stringify(productoQueQuiereVer));
    location.href = "../det.html"

};


const eliminarDelCarrito = (idProducto) => {

    const productoAEliminar = carrito.find(producto => producto.id === idProducto);
    const indice = carrito.indexOf(productoAEliminar);
    carrito.splice((indice), 1);
    actualizarCarrito()
    localStorage.setItem('carrito',JSON.stringify(carrito))
}

function totalDelCarrito() {
    const precioTotalCarrito = carrito.reduce ((acc, productoAgregado) => (acc + (productoAgregado.precio * productoAgregado.cantidad)), 0);
    document.getElementById('precio-total').innerHTML = precioTotalCarrito;
}



generarCards(productos);

function generarCards(productosAMostrar) {
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((producto) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div = "producto" class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${producto.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-3">
                <div class="text-center">
                    <!-- Product name-->
                    <h6 class="fw-bolder">${producto.titulo}</h6>
                    <!-- Product price-->
                    <span class=""></span> 
                    $ ${producto.precio}
                    ${producto.precio > 0 ? '' : 'No Disponible' }
                    <div class="shopping-cart-quantity d-flex justify-content-center align-items-center h-100 border-bottom pb-2 pt-3">
                    <input id = "cantidad-${producto.id} " class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                        value="1" min="1"> 
                        </div>
                </div>
            </div>

            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                <div class="text-center">
                    <button id = "btnSeleccionar"
                        onclick="agregarAlCarrito(${producto.id})"
                        class="btn btn-outline-dark mt-auto" href="">
                        Seleccionar
                    </button>
                    <button class="btn btn-outline-dark mt-auto"
                     onclick="verProducto(${producto.id})"
                     >Ver Info</button>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);

}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-servicios").innerHTML = cards;
};



const actualizarCarrito = () => {

    let serviciosSeleccionados = ``

    carrito.forEach((producto) => {
        serviciosSeleccionados = ` <div class="row">
     <div  class="row shoppingCartItem">
        <div class="col-6">
        
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img  class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${producto.titulo} 
                </h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p id = "precio" class="item-price mb-0 shoppingCartItemPrice">$ ${producto.precio} </p>
            </div>
        </div>  
   
        <div class="col-2">
            <div>
             <div class="col-2">
                   
               <button onclick="eliminarDelCarrito(${producto.id} )" class="btn btn-danger buttonDelete" type="button"
                >Eliminar</button>
            </div>
        </div>
    </div>
        
  
    `
    })

    mostrarServiciosSeleccionados(serviciosSeleccionados)
   


}

function mostrarServiciosSeleccionados(serviciosSeleccionados) {

    document.getElementById("carrito-contenedor").innerHTML += serviciosSeleccionados;

};

