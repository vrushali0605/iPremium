let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

// Add to Cart Function
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productId = product.getAttribute('data-id'); // Make sure each product has a unique data-id
  const productName = product.querySelector('h3').textContent;
  const productPrice = parseInt(product.querySelector('.price').textContent.replace('Rs ', '').replace(',', ''));
  const productImage = product.querySelector('img').src;

  const productToAdd = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage
  };

  if (!cart.some(item => item.id === productId)) {
      cart.push(productToAdd);
      localStorage.setItem('cart', JSON.stringify(cart));
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
