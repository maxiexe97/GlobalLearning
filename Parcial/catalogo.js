window.addEventListener('DOMContentLoaded',()=>{
    const orderbuttons = document.querySelectorAll("button[data-order]");
    //acabo de obtener todos los botones
    console.log(orderbuttons);
    //ahora por cada uno de los botones:
    orderbuttons.forEach(item => {
        //escucho el click sobre ese boton:
        item.addEventListener('click', (event)=>{
            //cuando se presione me mostrara cuál es:
            const button= event.currentTarget;
            const container=button.parentNode;
            let order={
                title: container.querySelector('.title').innerText,
                price: container.querySelector('.price').innerText,
                id: button.getAttribute('data-order')
            }
            //console.log(order);
           localStorage.setItem("order", JSON.stringify(order));
            //Donde estoy->href | donde quiero ir -> .replace:
            url = window.location.href.replace("catalogo.html","order.html");
            //ahora le digo que vaya a esa ubicacion
            window.location.href=url;
            
        })
    })
});