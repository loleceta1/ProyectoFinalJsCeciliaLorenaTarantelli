fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        productos = data.productos
        const verCard = JSON.parse(localStorage.getItem("productoAVer"))
        mostrarElProducto(verCard)
    })


    function mostrarElProducto(card) {
        const containerCard = document.getElementById("showProduct")
        containerCard.innerHTML =""
        let verProducto = document.createElement('div')
        verProducto.className = "card"
        verProducto.innerHTML = `
    <div class="row gx-4 gx-lg-5 align-items-center" style="margin: auto"<div>
    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" 
    src="${card.imagen}" alt="..." style="height: 25em; width: 25em;"></div>
    <div class="col-md-6" style="margin: auto">
        <div class="small mb-1">SKU: BST-498</div>
        <h1 class="display-5 fw-bolder">${card.titulo}</h1>
        <div class="fs-5 mb-5">
            <span>$${card.precio}</span>
        </div>
        <p class="lead">lorem ipsum dolor sit amet, consectetur adipis lorem, 
        sed do eiusmod tempor incididunt ut labore lorem.
        Ut enim ad minim veniam,
        lorem ipsum dolor sit amet lorem,
        consectetur adipis lorem,
        sed do eius lorem. Ut enim ad minim </p>
        
    </div>
    </div>`
        containerCard.appendChild(verProducto)
    }
    