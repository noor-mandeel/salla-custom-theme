// Salla Custom Theme - Main JavaScript

(function() {
    'use strict';

    // Initialize theme
    function init() {
        console.log('Salla Custom Theme Initialized');
        initEventListeners();
        initCartFunctionality();
        initWishlist();
    }

    // Initialize event listeners
    function initEventListeners() {
        // Add to cart buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn-add-to-cart')) {
                handleAddToCart(e);
            }
            if (e.target.classList.contains('btn-wishlist')) {
                handleAddToWishlist(e);
            }
        });
    }

    // Handle add to cart
    function handleAddToCart(e) {
        e.preventDefault();
        const productId = e.target.dataset.productId;
        const quantity = document.querySelector('.quantity-input')?.value || 1;
        
        console.log('Adding to cart:', { productId, quantity });
        // Add your cart logic here
    }

    // Handle add to wishlist
    function handleAddToWishlist(e) {
        e.preventDefault();
        const productId = e.target.dataset.productId;
        
        console.log('Adding to wishlist:', productId);
        e.target.classList.toggle('active');
        // Add your wishlist logic here
    }

    // Cart functionality
    function initCartFunctionality() {
        // Update cart when quantity changes
        document.addEventListener('change', function(e) {
            if (e.target.classList.contains('quantity-input')) {
                updateCartItem(e.target);
            }
        });
    }

    // Update cart item
    function updateCartItem(input) {
        const quantity = parseInt(input.value);
        if (quantity < 1) {
            input.value = 1;
        }
        console.log('Cart updated:', quantity);
        // Add your update logic here
    }

    // Wishlist functionality
    function initWishlist() {
        // Load wishlist from localStorage
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        console.log('Wishlist loaded:', wishlist);
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
