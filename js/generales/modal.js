const contenedorModal = document.querySelector('.contenedor__modal')
const div = document.createElement('div')
div.classList.add('contenedor__modal-carrito')

div.innerHTML = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel">Carrito de Compras</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                <!-- Titulos -->
                <div class="row encabezado">
                    <div class="col producto">Producto</div>
                    <div class="col cant">Cantidad</div>
                    <div class="col pUnitario">Precio Unitario</div>
                    <div class="col total">Total</div>
                    <div class="col vacio"></div>
                </div>

                <!-- Productos -->
                <div class="contenedor__modal-sumarCarrito">
                </div>

                <div class="modal-footer">
                    <p class="totalCarrito  fw-bold">Importe total: $<span id="importeTotal">0</span></p>
                    <button type="button" id="btnVaciar" class="btn btn-secondary">Vaciar</button>
                    <button type="button" id="btnComprar" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    </div>
`
contenedorModal.appendChild(div)


const gestionarClick = (e) => {   
    e.stopPropagation();
    if (e.target.classList.contains('botonEliminar')) {
        btnEliminar(e.target.value);
    } else if (e.target.classList.contains("botonResta")) {
       restarProductos(e.target.value);
    } else if (e.target.classList.contains('botonSuma')) {
        sumarProductos(e.target.value);
    } else if (e.target.id === 'btnVaciar') {
        btnVaciar()
    } else if (e.target.id === 'btnComprar') {
        btnComprar()
    }

}

const escuchar = () => {
    contenedorModal.addEventListener('click', gestionarClick);
}

