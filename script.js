// Données des produits (exemple)
const products = {
    motos: [
        { id: 1, name: 'Moto Sport 500cc', price: 15000, img: 'https://via.placeholder.com/250x200?text=Moto+Sport' },
        { id: 2, name: 'Moto Cruiser 800cc', price: 20000, img: 'https://via.placeholder.com/250x200?text=Moto+Cruiser' }
    ],
    velos: [
        { id: 3, name: 'Vélo Électrique Urbain', price: 2500, img: 'https://via.placeholder.com/250x200?text=Velo+Electrique' },
        { id: 4, name: 'Vélo Électrique Montagne', price: 3000, img: 'https://via.placeholder.com/250x200?text=Velo+Montagne' }
    ],
    pieces: [
        { id: 5, name: 'Pneu Moto 17"', price: 150, img: 'https://via.placeholder.com/250x200?text=Pneu+Moto' },
        { id: 6, name: 'Batterie Vélo Électrique', price: 200, img: 'https://via.placeholder.com/250x200?text=Batterie+Velo' }
    ]
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Afficher les produits
function displayProducts(category) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} €</p>
            <button onclick="addToCart(${product.id})">Ajouter au Panier</button>
        `;
        grid.appendChild(productDiv);
    });
}

// Gestion des catégories
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.category-btn.active').classList.remove('active');
        btn.classList.add('active');
        displayProducts(btn.dataset.category);
    });
});

// Ajouter au panier
function addToCart(id) {
    const product = Object.values(products).flat().find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Mettre à jour le panier
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} - ${item.price} €</span>
            <button onclick="removeFromCart(${index})">Retirer</button>
        `;
        cartItems.appendChild(itemDiv);
    });
    document.getElementById('cart-total').textContent = `Total: ${total} €`;
}

// Retirer du panier
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Commander
document.getElementById('checkout-btn').addEventListener('click', () => {
    document.getElementById('order-form').style.display = 'block';
});

document.getElementById('order-form-element').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Commande confirmée ! Merci pour votre achat.');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    document.getElementById('order-form').style.display = 'none';
});

// Formulaire de contact
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé ! Nous vous contacterons bientôt.');
});

// Initialisation
displayProducts('motos');
updateCart();
