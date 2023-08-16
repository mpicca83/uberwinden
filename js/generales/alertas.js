const notificacion = (texto) => {
    Toastify({
        text: texto,
        duration: 3000,
        gravity: 'bottom',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast()
}

const alertaSimple =(titulo, texto, icono, tiempo) =>{
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        position: 'top',
        showConfirmButton: false,
        timer: tiempo,
        showClass:{popup:'animate__animated animate__fadeInDown'},
        hideClass:{pupup:'animate__animated animate__fadeOutUp'},
    })
}

const alertaCompuesta = (titulo1, texto, boton, titulo2, funcion) =>{
    Swal.fire({
        title: titulo1,
        text: texto,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        confirmButtonText: boton,
        position: 'top',

    }).then((result) =>{
        if(result.isConfirmed){
            Swal.fire({
                title: titulo2,
                icon: 'success',
                position: 'top',
                showConfirmButton: false,
                timer: 2000,
                showClass:{popup:'animate__animated animate__fadeInDown'},
                hideClass:{pupup:'animate__animated animate__fadeOutUp'},
            })
            funcion()
        }
    })
}

const alertaDePago = () =>{
    Swal.fire({
        title: "Confirmación de compra",
        icon: 'question',
        showCancelButton: true,
        cancelButtonColor: '#6c757d',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        confirmButtonText: "Confirmar",
        position: 'top',

    }).then((result) =>{

        if(result.isConfirmed){
            pagarMP()
        }
    })
    
}
