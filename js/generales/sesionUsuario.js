const loginStorageObtener = () => {
    if(sessionStorage.getItem('loginUser')){
        sessionUser = JSON.parse(sessionStorage.getItem('loginUser')) 
        return sessionUser
    }else{
        return 0
    }
}

let loginUser = loginStorageObtener()

const comprobarLogin = () =>{
    const iconUser = document.getElementById('iconUser')
    if(loginUser === 0){
        iconUser.classList.remove('logueado')
        iconUser.innerHTML = `<i class="fa-solid fa-user"></i>`
    }else{
        iconUser.classList.add('logueado')
        iconUser.innerText = `${loginUser.nombre}`
    }
}
 
comprobarLogin()