const contenedorEvento = document.querySelector('.eventos')

eventos.sort((a, b) => b.id - a.id);

eventos.forEach( evento =>{
    const seccion = document.createElement('SECTION')
    seccion.classList.add('eventos__seccion')
    if(evento.categoria === 'foto'){
        seccion.innerHTML=`
            <div class="eventos__seccion-parrafo">
                <h4>${evento.titulo}</h4>
                <p>${evento.descripción} </p>
            </div>
            <div class="eventos__seccion-multimedia">
                <img src="${evento.foto1} " alt="${evento.altFoto1} "/>
            </div>
            <div class="eventos__seccion-multimedia">
                <img src="${evento.foto2} " alt="${evento.altFoto2} "/>
            </div>
        `
    }else if(evento.categoria === 'mixto'){
        seccion.innerHTML=`
            <div class="eventos__seccion-parrafo">
                <h4>${evento.titulo}</h4>
                <p>${evento.descripción} </p>
            </div>
            <div class="eventos__seccion-multimedia">
                <img src="${evento.foto} " alt="${evento.altFoto} "/>
            </div>
            <div class="eventos__seccion-multimedia">
            <video src="${evento.video} " controls autoplay loop muted alt="${evento.altVideo} "></video>
            </div>
        `
    }
    contenedorEvento.appendChild(seccion)
})


