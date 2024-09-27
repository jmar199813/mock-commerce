const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'images/product2.jpg' },
  // Add more products
];

const productsSection = document.getElementById('products');

products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  productDiv.innerHTML = `
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}">
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productsSection.appendChild(productDiv);
});

const cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  alert(`${product.name} added to cart!`);
}
