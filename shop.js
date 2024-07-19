let cart = [];

function addToCart(id, name, price) {
    const item = { id, name, price };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `${item.name} - ₱${item.price}`;
        cartItems.appendChild(itemElement);
        total += item.price;
    });

    cartTotal.innerHTML = `Total: ₱${total}`;
}

function checkout() {
    alert('Thank you for your order!');
    cart = [];
    updateCart();
}

function searchTires() {
    // Implement search functionality based on tire size
}

function applyPriceRange() {
    // Implement price range filter functionality
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
