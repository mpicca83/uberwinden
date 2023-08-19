const productos = []

// Función para obtener los parámetros de la URL
function obtenerParametroURL(nombreParametro) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(nombreParametro)
}

const filtrarProductosPorCategoria = async (categoriaSeleccionada) => {
  try{
    const response = await fetch("../json/productos.json")
    const data = await response.json()

    data.forEach(prod => productos.push(prod))
    const productosFiltrados = data.filter(producto => producto.categoria3.includes(categoriaSeleccionada))
    
    mostrarProductosEnCards(productosFiltrados)

  } catch (error){
    console.log('Error al cargar los productos:', error)
  }
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
  nombreCategoria()
}

  // Obtener la categoría desde la URL
const categoriaSeleccionada = obtenerParametroURL('categoria')

  // Filtrar los productos por la categoría seleccionada
filtrarProductosPorCategoria(categoriaSeleccionada)

//crearProductos(productosFiltrados)

const nombreCategoria = () =>{
  const filtroProductos = document.querySelector('.contenedor__productos-filtro')
  filtroProductos.innerHTML += `
      Categoría: ${categoriaSeleccionada}    
  `
  filtroProductos.append()
}
  