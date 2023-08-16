const pagarMP = () =>{
    const serverURL = "https://uberwinden.vercel.app/server/create_preference";

    const mercadopago = new MercadoPago('TEST-21688d58-6ceb-475e-b96d-256d01d7ed25',{
        locale: "es-AR",
    })
    
    const modalBody = div.querySelector(".modal-body")
    modalBody.remove()
    const btnComprar = div.querySelector("#btnComprar")
    btnComprar.remove()
    const btnVaciar = div.querySelector("#btnVaciar")
    btnVaciar.remove()

    const orderData = {
        quantity: 1,
        description: "Compra en Überwinden",
        price: document.getElementById("importeTotal").innerHTML
    };

    
    
    //fetch("http://localhost:5500/create_preference", {
    fetch(`${serverURL}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (preference) {
        eliminarCarrito()
        createCheckoutButton(preference.id);
        
    })
    .catch(function () {
      alert("Unexpected error");
    });

    function createCheckoutButton(preferenceId) {
        // Initialize the checkout
        const bricksBuilder = mercadopago.bricks();
      
        const renderComponent = async (bricksBuilder) => {
            await bricksBuilder.create(
                'wallet',
                'button-checkout', // class/id where the payment button will be displayed
                {
                    initialization: {
                        preferenceId: preferenceId,
                    },
                    callbacks: {
                        onError: (error) => console.error(error),
                        onReady: () => {}
                    }
                }
            );
            
        };
        window.checkoutButton =  renderComponent(bricksBuilder);
    }
}