const product = [
    { id: 0, image: 'ph1.jpg', title: 'Iphone 11 Pro', price: 35000 },
    { id: 1, image: 'ph4.jpg', title: 'Iphone 14 pro', price: 76000 },
    { id: 2, image: 'ph3.jpg', title: 'Iphone 13 pro', price: 64000 },
    { id: 3, image: 'ph2.jpg', title: 'Iphone 12 pro', price: 45000 }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let i = 0;

document.getElementById('root').innerHTML = product.map((item) => {
    const { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>Rs ${price}.00</h2>` +
        `<button onClick='addtocart(${i++})'>Add to cart</button>` +
        `<a href="payment.html"><button>Buy Now</button></a>
            </div>
        </div>`
    );
}).join('');

function addtocart(a) {
    const item = product[a];
    // Check if item is already in the cart
    if (!cart.some(cartItem => cartItem.id === item.id)) {
        cart.push({ ...item });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty!";
        document.getElementById("total").innerHTML = "Rs 0.00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total += price;
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:17px;'>${title}</p>
                    <h2 style='font-size:15px;'>Rs ${price}.00</h2>` +
                `<i class='bx bxs-trash-alt' onClick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
        document.getElementById("total").innerHTML = "Rs " + total + ".00";
    }
}

function handleBuyNow() {
    if (cart.length > 0) {
        window.location.href = 'payment.html'; // Redirect to payment page if cart has items
    } else {
        alert('Your cart is empty!'); // Show alert if cart is empty
    }
}

// Bind handleBuyNow function to the sidebar Buy Now button
document.querySelector('.buy').addEventListener('click', handleBuyNow);

// Call displaycart on page load to populate the cart
displaycart();
