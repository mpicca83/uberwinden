const btn = document.getElementById('button')

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault()

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_amkesqs';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alertaSimple('Enviado', 'Consulta enviada correctamente.', 'success', 4000)
    }, (err) => {
      btn.value = 'Enviar';
      alertaSimple('Error', 'Hubo un error. Por favor intente nuevamente.', 'error', 4000)
      console.log(JSON.stringify(err));
    });

    setTimeout(() => {
        const inputs = document.querySelectorAll('#form .valorIngresado');
        inputs.forEach(input=> {
            input.value = '';
        });
    }, 5000);
});