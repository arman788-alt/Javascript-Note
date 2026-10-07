

let cart = JSON.parse(localStorage.getItem('cart')) || [];

let totalPrice = parseFloat(localStorage.getItem('total_price')) || 0;

const cart_items = document.getElementById('cart_item');

const addToCartButtons = document.querySelectorAll('.add-to-cart');

const totalPriceElement = document.querySelector('.total_price');

const buyNowBotton = document.getElementById('buy_now');




addToCartButtons.forEach(button => {

    button.addEventListener('click', () => {

        const productName = button.getAttribute('data-name');

        const productPrice = parseFloat(button.getAttribute('data-price'));

        const existingProduct = cart.find(item => item.name === productName);


        if (existingProduct) {

            existingProduct.quantity += 1;

        }

        else {

            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1
            });

        }


        totalPrice += productPrice;


        localStorage.setItem('cart', JSON.stringify(cart));

        localStorage.setItem('total_price',totalPrice.toFixed(2) );


        updateCartDisplay();

    });

});



const updateCartDisplay = () => {

    cart_items.innerHTML = '';


    cart.forEach((item, index) => {

        const li = document.createElement('li');


        li.innerHTML = `
            ${item.name} - $${item.price} × ${item.quantity}
            <button class="remove-item"  data-index="${index}">Remove</button>
        `;


        cart_items.appendChild(li);

    });


    totalPriceElement.textContent = totalPrice.toFixed(2);

    const removeButtons = document.querySelectorAll('.remove-item')

    removeButtons.forEach(button =>{
        button.addEventListener('click', ()=>{
            const index = button.getAttribute('data-index');

            removeCartItems(index);

        })
    })

};




const removeCartItems = (index)=>{
    const item = cart[index];

    totalPrice -= item.price * item.quantity;

    totalPrice = parseFloat(totalPrice.toFixed(2));

    cart.splice(index, 1)

    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('total_price', totalPrice.toFixed(2));

    updateCartDisplay();


}



buyNowBotton.addEventListener('click', () => {

    if (cart.length > 0) {

        alert('Thank You For Purchase');
        cart = [];
        totalPrice = 0;

        localStorage.removeItem('cart');
        localStorage.removeItem('total_price');

        updateCartDisplay()



    } else {

        alert('Your Cart is Empty');

    }

})