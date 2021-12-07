window.addEventListener('DOMContentLoaded',()=>{
    const orderbuttons = document.querySelectorAll("button[data-order]");
    console.log(orderbuttons);
    orderbuttons.forEach(item => {
        item.addEventListener('click', (event)=>{
            const button= event.currentTarget;
            const container=button.parentNode;
            let order={
                title: container.querySelector('.title').innerText,
                price: container.querySelector('.price').innerText,
                id: button.getAttribute('data-order')
            }
            console.log(order);
           localStorage.setItem("order", JSON.stringify(order));
            url = window.location.href.replace("catalogo.html","order.html");
            window.location.href=url;
            
        })
    })
});