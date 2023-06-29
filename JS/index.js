const btnCart = document.querySelector('.container-cart-icon')
const containetCartProducts = document.querySelector('.container-cart-products')
btnCart.addEventListener('click', () => {
    containetCartProducts.classList.toggle('hidden-cart')
})



const cartCounter = document.getElementById('contador-productos');
const cartProducts = document.querySelector('.cart-products');
const productItems = document.querySelectorAll('.item');

let cartItemCount = 0;

// Agregar evento click a cada botón "Añadir al carrito"
productItems.forEach(item => {
    const addToCartBtn = item.querySelector('.btn-add-cart');

    addToCartBtn.addEventListener('click', () => {
        cartItemCount++;
        cartCounter.textContent = cartItemCount;

        
    });
});