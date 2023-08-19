let usuarios = []

const mostrarFormularioLogin = () =>{

    const mainLogin = document.querySelector('.login')
    const div = document.createElement('div')
    div.classList.add('login__seccion')
    div.innerHTML = `
        <h2>Iniciar sesión</h2>
        <form id="formularioLogin" action="">
            <div class="login__seccion-box">
                <input id="usuario" type="text" name="usuario" required=""/>
                <label>Usuario</label>
            </div>
            <div class="login__seccion-box">
                <input id="contrasenia" type="password" name="password" required=""/>
                <label>Contraseña</label>
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
        <a href="./registro.html">Registrate</a>
    `
    mainLogin.appendChild(div)
    btnLogin()
}

const mostrarFormularioDeslogueo = () =>{

    const mainLogin = document.querySelector('.login')
    const div = document.createElement('div')
    div.classList.add('login__deslogueo')
    div.innerHTML = `
        <h2>Cerrar sesión</h2>
        <form id="formularioLogin" action="">
            <button type="submit">Cerrar sesión</button>
        </form>
    `
    mainLogin.appendChild(div)
    btnDesloguear()
}

const btnLogin = () =>{
    const formLogin = document.getElementById('formularioLogin')
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault()
        setTimeout(() => {
            location.reload();
        }, 4000)
        const newLogin = {}
        const inputs = formLogin.querySelectorAll('input')
        
        inputs.forEach((input) => {
            newLogin[input.name] = input.value;
        });
        
        validarLogin(newLogin)
    })
}

const btnDesloguear = () =>{
    const formLogin = document.getElementById('formularioLogin')
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault()
        setTimeout(() => {
            location.reload();
        }, 4000);
        sessionStorage.removeItem('loginUser')
        alertaSimple('Sesión Cerrada', `Te esperamos pronto...`, 'success', 4000)
    })
}

const validarLogin = (newLogin) => {

    usuarios = obtenerUsuarioStorage()
    const validaUsuario = usuarios.some(usuario => usuario.usuario == newLogin.usuario)
    const loginUser = usuarios.find(usuario => usuario.usuario == newLogin.usuario)
    if (!validaUsuario){
        alertaSimple('Error en Usuario', 'El usuario no existe.', 'error', 4000)
    }else if (loginUser.password != newLogin.password) {
        alertaSimple('Error en Contraseña', 'La contraseña es incorrecta.', 'error', 4000)
    }else {
        guardarLoginStorage(loginUser)
        setTimeout(() => {
            window.location.href = `../index.html`
        }, 4000)

        alertaSimple('Login Correcto', `Bienvenido ${loginUser.nombre}`, 'success', 4000)

    }
}

const guardarLoginStorage = (loginUser) => {
    sessionStorage.setItem('loginUser', JSON.stringify(loginUser))
}

const obtenerUsuarioStorage = () => {
    if(localStorage.getItem('usuarios')){
        usuariosStorage = JSON.parse(localStorage.getItem('usuarios')) 
        return usuariosStorage  
    }else{
        return []
    }
}

const confirmarLogin = () => {
    if(sessionStorage.getItem('loginUser')){
        mostrarFormularioDeslogueo()
    }else{
        mostrarFormularioLogin()
    }
}

document.addEventListener('DOMContentLoaded', confirmarLogin);
