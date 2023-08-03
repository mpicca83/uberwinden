// Creación de Header de forma dinamica por DOM

const header = document.querySelector('.header')

    //Encabezado parte superior
const headerContenedorSuperior = document.createElement('DIV')
headerContenedorSuperior.classList.add('carousel', 'slide', 'encabezadoSuperior')
headerContenedorSuperior.setAttribute('data-bs-ride', 'carousel')
headerContenedorSuperior.setAttribute('id', 'carouselExampleAutoplaying')
headerContenedorSuperior.innerHTML = `
    <div class="carousel-inner">
        <div class="carousel-item active">
            <h4><b>ENVIOS GRATIS </b>DESDE $19.999</h4>
        </div>
        <div class="carousel-item">
            <h4>3 CUOTAS <b>SIN INTERÉS</b></h4>
        </div>
        <div class="carousel-item">
            <a href="https://www.instagram.com/uberwindensportwear/" target="_blank"><i class="fa-brands fa-instagram fa-fade"></i></a>
            <a href="https://www.facebook.com/voleyventas6" target="_blank"><i class="fa-brands fa-facebook fa-fade"></i></a>
            <a href="https://chatwith.io/es/s/uberwinden" target="_blank"><i class="fa-brands fa-whatsapp fa-fade"></i></a>
            <a href="mailto:uberwindensportwear@outlook.es?Subject=Te%20contancto%20desde%20la%20web" target="_blank"><i class="fa-regular fa-envelope fa-fade"></i></a>
        </div>
    </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
`
    //Encabezado parte inferior
const headerContenedorInferior = document.createElement('NAV')
headerContenedorInferior.classList.add('navbar', 'navbar-expand-lg', 'encabezadoInferior')
headerContenedorInferior.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="/index.html"><img src="/assets/images/logoUberwinden.png" alt="Logo Überwinden" id="logoMarca"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/nosotros.html">Nosotros</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item fw-bold" href="/pages/indumentaria_paravos.html">Para vos...</a></li>
                        <li><a class="dropdown-item ps-5" href="/pages/productos.html?categoria=Hombre">Hombre</a></li>
                        <li><a class="dropdown-item ps-5" href="/pages/productos.html?categoria=Mujer">Mujer</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item fw-bold" href="/pages/personaliza_tu_indumentaria.html">Para tu club...</a></li>
                        <li><a class="dropdown-item ps-5" href="/pages/en_construccion.html">Merchandising</a></li>
                        <li><a class="dropdown-item ps-5" href="/pages/personaliza_tu_indumentaria.html">Personaliza tu indumentaria</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/eventos.html">Eventos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/login.html"><i class="fa-solid fa-user"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" href=""><i class="fa-sharp fa-solid fa-cart-shopping"><span id="iconoCarrito"></span></i></a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
`
//Para poner en negrita el enenlace correspondiente a la página actual

    // Para obtener la ruta actual de la página
const rutaActual = window.location.pathname

    // Para obtener todos los enlaces (etiqueta a)
const enlaces = headerContenedorInferior.querySelectorAll('a')

enlaces.forEach((enlace) => {
    const href = enlace.getAttribute('href')
    if (href === rutaActual) {
        enlace.classList.add('active')
    }
})

header.appendChild(headerContenedorSuperior)
header.appendChild(headerContenedorInferior)