document.addEventListener("DOMContentLoaded",() =>{
    const addToCartButtons = document.querySelectorAll(".addcart");
    const cart = document.getElementById("cart-items");
    const orderTotal = document.getElementById("ordertotal");
    const clearcart = document.getElementById("clear-cart")

    let total=0;

    addToCartButtons.forEach(addcart => {
        addcart.addEventListener("click",()=>{
            const itemName = addcart.getAttribute("data-item");
            const itemPrice = parseFloat(addcart.getAttribute("data-price"));
            
            const newCartItem = document.createElement("p");
            newCartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
            cart.appendChild(newCartItem);

            total += itemPrice;

            orderTotal.textContent = `Order Total: $${total.toFixed(2)}`;
        })
    })

    clearcart.addEventListener("click",()=>{
        cart.innerHTML = '';
        total = 0;
        orderTotal.textContent = 'Order Total: $0.00';
    });

});