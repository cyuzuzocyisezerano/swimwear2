// Product data for each category with names, images, and prices
const products = {
    mens: [
        { name: "Men's Blue Swim Trunks", image: "images/swimwear1.jpg", price: "$20.00", description: "Comfortable swim trunks for a day at the beach." },
        { name: "Men's Red Speedos", image: "images/swimwear2.jpg", price: "$15.00", description: "Speedos for fast swimming and comfort." },
        { name: "Men's Black Board Shorts", image: "images/swimwear3.jpg", price: "$25.00", description: "Board shorts perfect for surfing and the beach." }
    ],
    womens: [
        { name: "Women's Bikini Set", image: "images/women2.jpg", price: "$30.00", description: "Stylish bikini for sunny days." },
        { name: "Women's One-Piece Swimsuit", image: "images/women3.jpg", price: "$35.00", description: "Elegant one-piece swimsuit for comfort and style." },
        { name: "Women's Beach Dress", image: "images/women4.jpg", price: "$40.00", description: "Light beach dress for a relaxed day by the water." }
        
        
    ],
    kids: [
        { name: "Kids' Cartoon Swim Shorts", image: "images/kids1.jpg", price: "$18.00", description: "Fun cartoon swim shorts for kids." },
        { name: "Kids' Flamingo Swimsuit", image: "images/kids2.jpg", price: "$22.00", description: "Bright flamingo swimsuit for little swimmers." },
        { name: "Kids' Starfish Board Shorts", image: "images/kids3.jpg", price: "$20.00", description: "Comfortable board shorts with a starfish print." }
    ],
    accessories: [
        { name: "Beach Towel", image: "images/accessories1.jpg", price: "$15.00", description: "Soft and large beach towel for lounging." },
        { name: "Sunglasses", image: "images/accessories2.jpg", price: "$12.00", description: "Stylish sunglasses for a sunny day." },
        { name: "Beach Hat", image: "images/accessories3.jpg", price: "$10.00", description: "Wide-brimmed beach hat for sun protection." }
    ]
};

// Get the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Display the corresponding products
const categoryTitle = document.getElementById('category-title');
const productsContainer = document.getElementById('products-container');

// Check if the category is valid, and show the products for that category
if (category && products[category]) {
    categoryTitle.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} Swimwear`;
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
} else {
    // If the category is not valid, show an error message
    categoryTitle.innerText = "Category not found";
}




// Track cart items in localStorage or sessionStorage (you could use other methods to store cart data)
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cartItems.length;
}

// Add item to cart (this would be triggered when an "Add to Cart" button is clicked)
function addToCart(product) {
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Store cart data
    updateCartCount(); // Update the cart count in navbar
}

// Example usage when a product is added to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Example product data (you could dynamically get this from your products array)
        const product = {
            name: button.closest('.product').querySelector('h3').innerText,
            price: button.closest('.product').querySelector('.price').innerText,
        };
        addToCart(product); // Add the product to the cart
    });
});

// Initially update the cart count when the page loads
updateCartCount();



