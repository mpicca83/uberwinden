let carrito = []

const comprobarProductoEnCarrito = (id) => {
    const estaRepetido = carrito.some(producto => producto.id == id)
  
    if (!estaRepetido) {
        const producto = productos.find(producto => producto.id == id)
        carrito.push(producto)
        mostrarProductoCarrito(producto)
        actualizarTotalesCarrito(carrito)
    } else {
        const producto = carrito.find(producto => producto.id == id)
        const cantidad = document.getElementById(`cantidadProducto${producto.id}`)
        producto.cantidad++
        cantidad.innerText = producto.cantidad
        actualizarTotalesCarrito(carrito)
        pintarCarrito(carrito)
    }
}

const mostrarProductoCarrito = (producto) => {
    const subtotal = producto.cantidad * producto.precio
    const contenedor = document.querySelector('.contenedor__modal-sumarCarrito')
    const div = document.createElement('DIV')
    div.classList.add('row', 'prod')
    div.innerHTML = `
        <hr>
        <div class="col tituloProducto">${producto.titulo}</div>
        <div class="col cantidad">
            <button value="btnResta${producto.id}" type="button" class="btn btn-sm btn-secondary botonResta">-</button>
            <span id="cantidadProducto${producto.id}">${producto.cantidad}</span>
            <button value="btnSuma${producto.id}" type="button" class="btn btn-sm btn-secondary botonSuma">+</button>
        </div>
        <div class="col precioUnitario">$<span id="precioUnitario">${producto.precio}</span></div>
        <div class="col totalProducto">$<span id="totalProducto">${subtotal}</span></div>
        <div class="col boton">   
            <button value="btnElimina${producto.id}" type="button" class="btn btn-sm btn-danger botonEliminar">Eliminar</button>
        </div>

        <br>
    `
    contenedor.appendChild(div)
    escuchar()
}

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const contadorCarrito = document.getElementById('iconoCarrito')
    contadorCarrito.innerText = ` ${totalCantidad === 0 ? '' : totalCantidad}`
    
    const importeTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    const precioTotal = document.getElementById('importeTotal')
    precioTotal.innerText = importeTotal

    guardarCarritoStorage(carrito)
}

const pintarCarrito = (carrito) => {
    const contenedor = document.querySelector('.contenedor__modal-sumarCarrito') 
    contenedor.innerHTML = ''
  
    carrito.forEach(producto => {
        const subtotal = producto.cantidad * producto.precio
        const div = document.createElement('DIV')
        div.classList.add('row', 'prod')
        div.innerHTML = `
            <hr>
            <div class="col tituloProducto">${producto.titulo}</div>
            <div class="col cantidad">
                <button value="btnResta${producto.id}" type="button" class="btn btn-sm btn-secondary botonResta">-</button>
                <span id="cantidadProducto${producto.id}">${producto.cantidad}</span>
                <button value="btnSuma${producto.id}" type="button" class="btn btn-sm btn-secondary botonSuma">+</button>
            </div>
            <div class="col precioUnitario">$<span id="precioUnitario">${producto.precio}</span></div>
            <div class="col totalProducto">$<span id="totalProducto">${subtotal}</span></div>
            <div class="col boton">   
                <button value="btnElimina${producto.id}" type="button" class="btn btn-sm btn-danger botonEliminar">Eliminar</button>
            </div>
            
            <br>
            `
        contenedor.appendChild(div)    
    })
    escuchar()
}

const btnEliminar = (id) => {
    alertaCompuesta(
        'Eliminar Producto',
        '¿Confirma la eliminación del producto?',
        'Eliminar',
        'El producto fue eliminado.',
        () => eliminarProducto(id))
}

const btnVaciar = () => {
    if (carrito.length === 0){
        alertaSimple(
            'El Carrito esta vacío',
            '',
            'info',
            2000,
        )
    }else{
        alertaCompuesta(
            'Vaciar Carrito',
            '¿Desea vaciar el carrito de compra?',
            'Vaciar',
            'El carrito se vació correctamente.',
            () => vaciarCarrito()
        )
    }
}

const btnComprar = () => {
    let loginUser = loginStorageObtener() 
    if (carrito.length === 0){
        alertaSimple(
            'El Carrito esta vacío',
            '',
            'info',
            3000,
        )
    }else if (loginUser === 0){
        alertaSimple(
            'Debe iniciar Sesión',
            'Para realizar la compra debe iniciar sesión. Redirigiendo...',
            'error',
            3000,
        )
        setTimeout(()=>{
            window.location.href = `${ruta}/pages/login.html`
        },3000)
    }else {
        window.location.href = `${ruta}/pages/pago.html`
    }
}

const eliminarProducto = (id) => {
    const producto = carrito.find(producto => `btnElimina${producto.id}` == id)
            producto.cantidad = 1
            const productoIndex = carrito.findIndex(producto => `btnElimina${producto.id}` == id)
            carrito.splice(productoIndex, 1)
            pintarCarrito(carrito)
            actualizarTotalesCarrito(carrito)
}

const vaciarCarrito = () => {
    carrito.forEach(producto => 
        producto.cantidad = 1
    )
    carrito =[]
    pintarCarrito(carrito)
    actualizarTotalesCarrito(carrito)
}

const eliminarCarrito = () => {
    carrito.forEach(producto => 
        producto.cantidad = 1
    )
    carrito =[]
    guardarCarritoStorage(carrito)
}

const restarProductos = (id) => {
    const producto = carrito.find(producto => `btnResta${producto.id}` == id)
    if (producto.cantidad > 1){
        producto.cantidad--
    }
    pintarCarrito(carrito)
    actualizarTotalesCarrito(carrito)
}

const sumarProductos = (id) => {
    const producto = carrito.find(producto => `btnSuma${producto.id}` == id)
    producto.cantidad++
    pintarCarrito(carrito)
    actualizarTotalesCarrito(carrito)
}

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
  
const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
    return carritoStorage
}
  
const recuperarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage()
        pintarCarrito(carrito)
        actualizarTotalesCarrito(carrito)
    }
}

document.addEventListener('DOMContentLoaded', recuperarCarrito);
