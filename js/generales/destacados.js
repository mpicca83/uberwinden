// Obtener la página actual
const paginaActual = window.location.pathname

// Función para filtrar los productos según una característica específica
function filtrarProductosPorCaracteristica(caracteristica) {
    return listaProductos.filter(producto => producto.categoria === caracteristica);
  }
  
  // Función para obtener 4 productos aleatorios de la lista filtrada
  function obtenerProductosAleatorios(listaFiltrada) {
    const productosAleatorios = [];
    while (productosAleatorios.length < 4) {
      const indiceAleatorio = Math.floor(Math.random() * listaFiltrada.length);
      const productoAleatorio = listaFiltrada[indiceAleatorio];
      if (!productosAleatorios.includes(productoAleatorio)) {
        productosAleatorios.push(productoAleatorio);
      }
    }
    return productosAleatorios;
  }
  
  // Función para mostrar los productos en tu página
  function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('contenedorProductos'); // Reemplaza 'contenedorProductos' con el ID del contenedor donde deseas mostrar los productos
    
    // Limpia el contenedor
    contenedorProductos.innerHTML = '';
    
    // Muestra cada producto en el contenedor
    productos.forEach(producto => {
      const productoElemento = document.createElement('div');
      productoElemento.textContent = producto.nombre;
      contenedorProductos.appendChild(productoElemento);
    });
  }
  
  // Filtrar y mostrar los productos según la página actual
  if (paginaActual === '/pagina1.html') {
    const productosFiltrados = filtrarProductosPorCaracteristica('categoria1');
    const productosAleatorios = obtenerProductosAleatorios(productosFiltrados);
    mostrarProductos(productosAleatorios);
  } else if (paginaActual === '/pagina2.html') {
    const productosFiltrados = filtrarProductosPorCaracteristica('categoria2');
    const productosAleatorios = obtenerProductosAleatorios(productosFiltrados);
    mostrarProductos(productosAleatorios);
  }


const destacados = document.querySelector('.Destacados')
const divDestacados = document.createElement('DIV')
divDestacados.classList.add('seccionDestacados')
divDestacados.innerHTML = `
            <!--Para vista movil-->
    <div id="carouselExampleDarkMovil" class="carousel carousel-dark slide  seccionDestacados__movil" data-bs-ride="carousel">
        <div class="carousel-inner p-0 seccionDestacados__movil-fotos">
            <div class="carousel-item active p-0">
                <a href=""><img src="./assets/images/cvCamisetaTitular.jpg" class="d-block w-100" alt="Camiseta titular Córdoba Voley"/></a>
            </div>
            <div class="carousel-item p-0">
                <a href=""><img src="./assets/images/mvcCamisetaTitular.jpg" class="d-block w-100" alt="Camiseta titular Monteros Voley"/></a>
            </div>
            <div class="carousel-item p-0">
                <a href=""><img src="./assets/images/atenasCamisetaFemenino1.jpg" class="d-block w-100" alt="Camiseta titular voley Atenas"/></a>
            </div>
            <div class="carousel-item p-0">
                <a href=""><img src="./assets/images/normal3CamisetaTitular.jpg" class="d-block w-100" alt="Camiseta titular voley Normal 3"/></a>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDarkMovil" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDarkMovil" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
                <!--Para vista tablet-->
        <div id="carouselExampleDarkTablet" class="carousel carousel-dark slide seccionDestacados__tablet" data-bs-ride="carousel">
            <div class="carousel-inner p-0 seccionDestacados__tablet-fotos">
                <div class="carousel-item active seccionDestacados__tablet-fotos-bloque">
                    <div class="row">
                        <div class="col-6">
                            <a href=""><img src="./assets/images/cvCamisetaTitular.jpg" class="d-block w-100" alt="Camiseta titular Córdoba Voley"/></a>
                        </div>
                        <div class="col-6">
                            <a href=""><img src="./assets/images/mvcCamisetaTitular.jpg" class="d-block w-100" alt="Camiseta titular Monteros Voley"/></a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item seccionDestacados__tablet-fotos-bloque">
                    <div class="row">
                        <div class="col-6">
                            <a href=""><img src="./assets/images/atenasCamisetaFemenino1.jpg" class="d-block w-100" alt="Camiseta titular voley Atenas"/></a>
                        </div>
                        <div class="col-6">
                            <a href=""><img src="./assets/images/normal3CamisetaTitular.jpg" class="d-block w-100" alt="Camiseta titular voley Normal 3"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDarkTablet" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDarkTablet" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
            <!--Para vista desktop-->
    <div id="carouselExampleDarkDesktop" class="carousel carousel-dark slide seccionDestacados__desktop" data-bs-ride="carousel">
        <div class="carousel-inner p-0 seccionDestacados__desktop-fotos">
            <div class="carousel-item active seccionDestacados__desktop-fotos-bloque">
                <div class="row">
                    <div class="col-3">
                        <a href=""><img src="./assets/images/cvCamisetaTitular.jpg" class="d-block w-100" alt="Camiseta titular Córdoba Voley"/></a>
                    </div>
                    <div class="col-3">
                        <a href=""><img src="./assets/images/mvcCamisetaTitular.jpg" class="d-block w-100" alt="Camiseta titular Monteros Voley"/></a>
                    </div>
                    <div class="col-3">
                        <a href=""><img src="./assets/images/atenasCamisetaFemenino1.jpg" class="d-block w-100" alt="Camiseta titular voley Atenas"/></a>
                    </div>
                    <div class="col-3">
                        <a href=""><img src="./assets/images/normal3CamisetaTitular.jpg" class="d-block w-100" alt="Camiseta titular voley Normal 3"/></a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDarkDesktop" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDarkDesktop" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
`
destacados.appendChild(divDestacados)