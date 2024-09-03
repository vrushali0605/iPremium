let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
  product.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name === target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});

// Add to Cart Function
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productId = product.getAttribute('data-id'); // Ensure each product has a unique data-id
  const productName = product.querySelector('h3').textContent;
  const productPrice = parseInt(product.querySelector('.price').textContent.replace('Rs ', '').replace(',', ''));
  const productImage = product.querySelector('img').src;

  const productToAdd = {
    id: productId,
    name: productName,
    price: productPrice,
    image: productImage
  };

  // Check if product is already in the cart
  if (!cart.some(item => item.id === productId)) {
    cart.push(productToAdd);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Debugging statement
    console.log('Cart after adding product:', JSON.parse(localStorage.getItem('cart')));
  }
}

// Attach the addToCart function to the "Add to Cart" button
document.querySelectorAll('.products-preview .preview .buy').forEach(button => {
  button.onclick = () => {
    const preview = button.closest('.preview');
    const product = document.querySelector(`.products-container .product[data-name="${preview.getAttribute('data-target')}"]`);
    addToCart(product);
  };
});
