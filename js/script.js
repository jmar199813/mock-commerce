const placeholderImage1 = 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'; 
const placeholderImage2 = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg';
const placeholderImage3 = 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1727308800&semt=ais_hybrid';
const placeholderImage4 = 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'; 

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: placeholderImage1 }, //product placeholders
  { id: 2, name: 'Product 2', price: 29.99, image: placeholderImage2 },
  { id: 3, name: 'Product 3', price: 39.99, image: placeholderImage3 },
  { id: 4, name: 'Product 4', price: 49.99, image: placeholderImage1 },
  { id: 5, name: 'Product 5', price: 59.99, image: placeholderImage2 },
  { id: 6, name: 'Product 6', price: 69.99, image: placeholderImage3 },
  { id: 7, name: 'Product 7', price: 79.99, image: placeholderImage1 },
  { id: 8, name: 'Product 8', price: 89.99, image: placeholderImage2 },
  { id: 9, name: 'Product 9', price: 99.99, image: placeholderImage3 },
  { id: 10, name: 'Product 10', price: 109.99, image: placeholderImage4 },
];

const productsSection = document.querySelector('.product-container');
const cart = []; //cart var

products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  
  productDiv.innerHTML = `
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}">
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productsSection.appendChild(productDiv);
});

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingProduct = cart.find(p => p.id === productId);

  if (existingProduct) {
      existingProduct.quantity++;
  } else {
      cart.push({ ...product, quantity: 1 });
  }

  updateCartDisplay();
  showNotification(`${product.name} added to cart!`);
}

function updateCartDisplay() {
  const cartContainer = document.querySelector('.cart-container');
  cartContainer.innerHTML = ''; //clears items

  let total = 0;

  cart.forEach(product => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: $${product.price.toFixed(2)}</p>
          <p>Quantity: ${product.quantity}</p>
          <button onclick="removeFromCart(${product.id})">Remove</button>
      `;
      cartContainer.appendChild(cartItem);

      total += product.price * product.quantity;
  });

  document.getElementById('total-price').innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(productId) {
  const productIndex = cart.findIndex(p => p.id === productId);
  if (productIndex > -1) {
      cart.splice(productIndex, 1);
  }
  updateCartDisplay();
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.innerText = message;
  notification.classList.add('notification');
  document.body.appendChild(notification);

  setTimeout(() => {
      notification.remove();
  }, 3000);
}

document.getElementById('checkout-button').addEventListener('click', function() {
  if (cart.length === 0) {
      showNotification('Your cart is empty!');
  } else {
      showNotification('Checkout process initiated!');
      
  }
}); // update this with more features
