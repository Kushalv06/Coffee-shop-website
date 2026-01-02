// Menu page logic

let buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        let name = button.dataset.name;
        let price = Number(button.dataset.price);

        let cart = JSON.parse(localStorage.getItem("cart")) || {};

        if(cart[name]){
            cart[name].quantity += 1;
        }
        else{
            cart[name] = {
                price : price,
                quantity : 1
            };
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${name} added to cart`);
    });
});

// Cart page logic

function renderCart() {
    let cartItemsContainer = document.querySelector(".cart-items");
    let emptyCartMessage = document.querySelector(".cart-empty");
    let totalPriceEl = document.querySelector(".total-price");

    if (!cartItemsContainer) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    if (Object.keys(cart).length === 0) {
        emptyCartMessage.style.display = "block";
        totalPriceEl.textContent = "₹0";
        return;
    } else {
        emptyCartMessage.style.display = "none";
    }

    for (let item in cart) {
        let price = cart[item].price;
        let quantity = cart[item].quantity;
        let itemTotal = price * quantity;
        totalPrice += itemTotal;

        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <div>
                <h3 class="item-name">${item}</h3>
                <p class="item-price">Price : ₹${price}</p>
            </div>

            <div>
                <button class="minus" data-item="${item}">-</button>
                <span class="quantity">${quantity}</span>
                <button class="plus" data-item="${item}">+</button>
                <p class="item-total">₹${itemTotal}</p>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    }
}
renderCart();



// Plus Minus logic

document.addEventListener("click", (e) => {

    if(e.target.classList.contains("plus")){
        let itemName = e.target.dataset.item;
        if(!itemName) return;

        let cart = JSON.parse(localStorage.getItem("cart"));

        cart[itemName].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));

        renderCart();
    }

    if(e.target.classList.contains("minus")){
        let itemName = e.target.dataset.item;
        let cart = JSON.parse(localStorage.getItem("cart"));

        cart[itemName].quantity -= 1;

        if (cart[itemName].quantity === 0) {
            delete cart[itemName];
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart(); 
    }
});

let checkoutbtn = document.getElementById("checkout-btn");

if(checkoutbtn){
    checkoutbtn.addEventListener("click", ()=>{
        alert("Thank you for your order! \nThis is a demo checkout");
    });
}

