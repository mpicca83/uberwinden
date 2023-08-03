// Función para obtener los parámetros de la URL
function obtenerParametroURL(nombreParametro) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(nombreParametro)
}

  // Función para filtrar los productos por categoría
function filtrarProductosPorCategoria(categoriaSeleccionada) {
    //return productos.filter(producto => producto.categoria3 == categoria);
    return productos.filter(producto => producto.categoria3.includes(categoriaSeleccionada))
}

  // Función para crear y mostrar las cards de productos
function mostrarProductosEnCards(productosFiltrados) {
const contenedorProductos = document.querySelector('.contenedor__productos-listado')

productosFiltrados.forEach (producto =>{
    const div = document.createElement('DIV')
    div.classList.add('card', 'shadow-lg', 'p-2')
    div.setAttribute('style', 'width: 18rem;')
    div.innerHTML += `
        <img src="${producto.imagen}" alt="${producto.descripcion}">
        <div class="card-body">
          <h5 class="card-title fw-bold">${producto.titulo}</h5>
          <p class="card-text">${producto.descripcion}</p>
        </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Talle: ${producto.talle}</li>
            <li class="list-group-item">Color: ${producto.color}</li>
            <li class="list-group-item">Precio: $${producto.precio}</li>
          </ul>
        <div class="card-body text-center">
          <button id="${producto.id}" href="" class="btn btn-primary botonAgregar">Agregar al Carrito</button>
        </div>
    `
    contenedorProductos.appendChild(div)
})
}

  // Obtener la categoría desde la URL
const categoriaSeleccionada = obtenerParametroURL('categoria')

  // Filtrar los productos por la categoría seleccionada
const productosFiltrados = filtrarProductosPorCategoria(categoriaSeleccionada)

  // Mostrar los productos en cards
mostrarProductosEnCards(productosFiltrados)


const filtroProductos = document.querySelector('.contenedor__productos-filtro')
filtroProductos.innerHTML += `
    Categoría: ${categoriaSeleccionada}    
`
filtroProductos.append()





















// const contenedorProductos = document.querySelector('.contenedor__productos-listado')

// productos.forEach (producto =>{
//     const div = document.createElement('DIV')
//     div.classList.add('card', 'shadow-lg', 'p-2')
//     div.setAttribute('style', 'width: 18rem;')
//     div.innerHTML += `
//         <img src="${producto.imagen}" alt="${producto.descripcion}">
//         <div class="card-body">
//         <h5 class="card-title fw-bold">${producto.titulo}</h5>
//         <p class="card-text">${producto.descripcion}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//         <li class="list-group-item">Talle: ${producto.talle}</li>
//         <li class="list-group-item">Stock: ${producto.stock}</li>
//         <li class="list-group-item">Precio: $${producto.precio}</li>
//         </ul>
//         <div class="card-body text-center">
//         <a href="#" class="btn btn-primary">Agregar al Carrito</a>
//         </div>
//     `
//     contenedorProductos.appendChild(div)
// })

