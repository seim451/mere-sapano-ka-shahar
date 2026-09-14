// ============ PANNO-KA-SHAHAR CART SYSTEM ============

function addToCart(title, author, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existing = cart.find(item => item.title === title);
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({ title: title, author: author, price: price, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast('✅ ' + title + ' cart me add ho gayi!');
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    let cartLinks = document.querySelectorAll('a[href="cart.html"]');
    cartLinks.forEach(link => {
        link.textContent = '🛒 Cart' + (count > 0 ? ' (' + count + ')' : '');
    });
}

function showToast(msg) {
    let toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:#1a3a2a;color:#7ddfb0;padding:14px 28px;border-radius:30px;font-weight:bold;box-shadow:0 5px 20px rgba(0,0,0,0.3);z-index:9999;font-family:Segoe UI,Arial,sans-serif;';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

window.addEventListener('DOMContentLoaded', updateCartCount);
