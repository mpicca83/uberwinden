let usuarios = []

const formRegistro = document.getElementById('formRegistro')

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const newUsuario = {}
    const inputs = formRegistro.querySelectorAll('input')
    
    inputs.forEach((input) => {
        newUsuario[input.name] = input.value;
    });
    
    validarNewUsuario(newUsuario)
    
})

const validarNewUsuario = (newUsuario) =>{

    usuarios = obtenerUsuarioStorage()
    const usuarioRepetido = usuarios.some(usuario => usuario.usuario == newUsuario.usuario)

    if (newUsuario.mail !== newUsuario.confMail){
        alertaSimple("Error en Mails", "Los mails ingresado no coinciden", "error", 4000)
    } else if (newUsuario.usuario.length < 5){
        alertaSimple("Error en Usuario", "El usuarioo debe tener mas de 5 caracteres", "error", 4000)
    } else if(usuarioRepetido){
        alertaSimple("Error en Usuario", "El Usuario ya existe", "error", 4000)
    } else if (newUsuario.password !== newUsuario.confPassword){
        alertaSimple("Error en Contraseñas", "Las contraseñas cargadas no coinciden", "error", 4000)
    } else if (newUsuario.password.length < 8){
        alertaSimple("Error en Contraseñas", "La contraseña debe tener al menos 8 caracteres", "error", 4000)
    }else {
        usuarios.push(newUsuario)
        guardarUsuarioStorage(usuarios)
        const inputs = formRegistro.querySelectorAll('input')
        inputs.forEach((input) => {
            input.value = ''
        })
        setTimeout(()=>{
            window.location.href = `${ruta}/pages/login.html`
        },5000)
        alertaSimple("Usuario registrado correctamente",`${newUsuario.nombre}, Überwinten te da la bienvenida!`, "success", 5000)
    }
}


const guardarUsuarioStorage = (usuarios) => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}
  
const obtenerUsuarioStorage = () => {
    if(localStorage.getItem('usuarios')){
        usuariosStorage = JSON.parse(localStorage.getItem('usuarios')) 
        return usuariosStorage  
    }else{
        return []
    }

}