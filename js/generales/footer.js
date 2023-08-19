// Creación de Footer de forma dinamica por DOM
const footer = document.querySelector('.footer')

const footerContenedor = document.createElement('DIV')
footerContenedor.classList.add('footer_Contenedor')
footerContenedor.innerHTML = `
    <ul class="tiendaOnline">
        <li><h5>Tienda online</h5></li>
        <li><a href="${ruta}/pages/productos.html?categoria=Hombre">Hombre</a></li>
        <li><a href="${ruta}/pages/productos.html?categoria=Mujer">Mujer</a></li>
        <li><a href="${ruta}/pages/en_construccion.html">Merchandising clubes</a></li>
        <li><a href="${ruta}/pages/personaliza_tu_indumentaria.html">Personaliza tu indumentaria</a></li>
    </ul>
    <ul class="ayuda">
        <li><h5>Ayuda</h5></li>
        <li><a href="${ruta}/pages/en_construccion.html">Preguntas frecuentes</a></li>
        <li><a href="${ruta}/pages/en_construccion.html">Politica de envíos</a></li>
        <li><a href="${ruta}/pages/en_construccion.html">Cambio y devoluciones</a></li>
        <li><a href="${ruta}/pages/en_construccion.html">Medios de pago</a></li>
        <li><a href="${ruta}/pages/en_construccion.html">Cancelación de compra</a></li>
    </ul>
    <ul class="acercaDe">
        <li><h5>Acerca de Überwinden</h5></li>
        <li><a href="${ruta}/pages/nosotros.html">Quines somos</a></li>
        <li><a href="${ruta}/pages/eventos.html">Eventos</a></li>
        <li><a href="${ruta}/pages/en_construccion.html">Tiendas</a></li>
    </ul>
    <ul class="usuario">
        <li><h5>Usuario</h5></li>
        <li><a href="${ruta}/pages/login.html">Iniciar sesión</a></li>
        <li><a href="${ruta}/pages/registro.html">Registrate</a></li>
    </ul>
    <ul class="iconos">
        <li><a href="https://www.instagram.com/uberwindensportwear/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="https://www.facebook.com/voleyventas6" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="https://chatwith.io/es/s/uberwinden" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
        <li><a href="mailto:uberwindensportwear@outlook.es?Subject=Te%20contancto%20desde%20la%20web" target="_blank"><i class="fa-regular fa-envelope"></i></a></li>
    </ul>
    <h6>&copy; 2023 ÜBERWINDEN Todos los derechos reservados</h6>
`
footer.appendChild(footerContenedor)