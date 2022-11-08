function calcCartPrice() {
    const cartItems = document.querySelectorAll('.products__item');
    const totalPriceEl = document.querySelector('.total__price');

    let totalPrice = 0;

    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    });
    totalPriceEl.innerText = totalPrice;
}


document.querySelector('.products__del').onclick = function() {
    document.querySelector('.products__item').remove();
    calcCartPrice();
}

calcCartPrice();
