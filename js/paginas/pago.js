const mostrarFormularioPago = (importesCuotas) =>{
    const formPago = document.querySelector('.pagos')
    const div = document.createElement('div')
    div.innerHTML = `
        <form id="plataformaDePago" action="" class="plataformaDePago">
            <h2 class="">Plataforma de Pagos</h2>
            <div class="plataformaDePago__seccion" >
                <div class="plataformaDePago__seccion-box">
                    <input type="number" name="numeroTarjeta" required>
                    <label>Número de Tarjeta</label>
                </div>
                <div class="plataformaDePago__seccion-box">
                    <input type="text" name="fechaVencimiento" required>
                    <label>Fecha de Vencimiento</label>
                </div>
                <div class="plataformaDePago__seccion-box">
                    <input type="number" name="ccv" required>
                    <label>CVV</label>
                </div>
                <div class="plataformaDePago__seccion-box">
                    <input type="text" required>
                    <label>Nombre del Titular de la Tarjeta</label>
                </div>
                <div class="plataformaDePago__seccion-box">
                    <input type="number" required>
                    <label>DNI</label>
                </div>
                <div class="plataformaDePago__seccion-select">
                    <span class="spanCuotas">Opciones de Cuotas:</span>
                    <select class="selectCuotas" id="cuotas" required>
                        <option value=""></option>
                        <option value="1">1 Cuota de $${importesCuotas[0]} "Sin Interés"</option>
                        <option value="3">3 Cuotas de $${importesCuotas[1]} "Sin Interés"</option>
                        <option value="6">6 Cuotas de $${importesCuotas[2]} (Interés del 35%)</option>
                        <option value="12">12 Cuotas de $${importesCuotas[3]} (Interés del 70%)</option>
                    </select>
                </div>
            </div>
            <button class="realizarPago" type="submit">Realizar Pago</button>
        </form>
    `
    formPago.appendChild(div)
    btnPagar(formPago)
}

const calculoCuotas = () =>{
    const carrito = obtenerCarritoStorage()
    const importeTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    
    const tresCuotas = Math.floor(importeTotal / 3)
    const seisCuotas = Math.floor(importeTotal * 1.35 / 6)
    const doceCuotas = Math.floor(importeTotal * 1.70 / 12)
 
    const importesCuotas = [importeTotal, tresCuotas, seisCuotas, doceCuotas];

    mostrarFormularioPago(importesCuotas)
}

const btnPagar = (formPago) =>{
    formPago.addEventListener('submit', (e) => {
        e.preventDefault()

        setTimeout(() => {
            window.location.href = `../index.html`
        }, 4000)
        
        vaciarCarrito()
        alertaSimple('Pago Realizado', 'Muchas gracias por su compra!!!', 'success', 4000)
    })
}

document.addEventListener('DOMContentLoaded', calculoCuotas);
