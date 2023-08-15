const botonAgregar = document.querySelector('.contenedor__productos-listado')
botonAgregar.addEventListener('click', (e) => {
    if (e.target.classList.contains('botonAgregar')){
        comprobarProductoEnCarrito(e.target.id)
        notificacion('El producto seleccionado se agregó al carrito!')
    }
})