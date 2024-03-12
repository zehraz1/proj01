document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.parentElement;
            const productName = product.querySelector('h2').innerText;
            const productPrice = product.querySelector('.price').innerText;

            let existingCartItem = cartItemsContainer.querySelector(`[data-name="${productName}"]`);
            if (existingCartItem) {
                let quantityElement = existingCartItem.querySelector('.quantity');
                let quantity = parseInt(quantityElement.innerText);
                quantity++;
                quantityElement.innerText = quantity;
            } else {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.dataset.name = productName;
                cartItem.innerHTML = `
                    <p>Name: ${productName}</p>
                    <p>Price: ${productPrice}</p>
                    <p>Quantity: <span class="quantity">1</span></p>
                    <button class="remove-button">Remove</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            }

            alert(`${productName} added to cart.`);
        });
    });

    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-button')) {
            const cartItem = event.target.parentElement;
            let quantityElement = cartItem.querySelector('.quantity');
            let quantity = parseInt(quantityElement.innerText);
            quantity--;
            if (quantity <= 0) {
                cartItem.remove();
            } else {
                quantityElement.innerText = quantity;
            }
        }
    });
});
