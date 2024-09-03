const products = [
    { id: 0, image: 'ph1.jpg', title: 'Iphone 11 Pro', price: 35000 },
    { id: 1, image: 'ph4.jpg', title: 'Iphone 14 pro', price: 76000 },
    { id: 2, image: 'ph3.jpg', title: 'Iphone 13 pro', price: 64000 },
    { id: 3, image: 'ph2.jpg', title: 'Iphone 12 pro', price: 45000 }
];

// Function to display products in the admin section
function displayAdminProducts() {
    const productContainer = document.getElementById('admin-product-list');
    productContainer.innerHTML = products.map(product => {
        return `
            <div class='admin-product-item'>
                <img class='product-image' src='${product.image}' alt='${product.title}'>
                <div class='product-details'>
                    <p>${product.title}</p>
                    <p>Price: Rs ${product.price}.00</p>
                </div>
                <button onclick="removeProduct(${product.id})">Remove</button>
            </div>
        `;
    }).join('');
}

// Function to remove a product (for demonstration, it only removes from the display)
function removeProduct(id) {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        displayAdminProducts(); // Refresh the product list after removal
    }
}

// Initial display of products
displayAdminProducts();
