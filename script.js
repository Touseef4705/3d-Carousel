document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            image: "https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            heading: "Luxury Watch 1",
            description: "Discover the perfect watch for every occasion.",
            price: "$430.00"
        },
        {
            image: "https://images.unsplash.com/photo-1506193095-80bc749473f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            heading: "Luxury Watch 2",
            description: "Elevate your style with timeless elegance.",
            price: "$540.00"
        },
        {
            image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            heading: "Luxury Watch 3",
            description: "Crafted with precision craftsmanship.",
            price: "$620.00"
        }
        // Add more products as needed
    ];

    // Reference to Swiper wrapper
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    // Loop through products and create slides
    products.forEach((product) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        slide.innerHTML = `
        <div class="product-card">
          <div class="product-content">
            <h2>${product.heading}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
          </div>
          <div class="product-image">
            <img src="${product.image}" alt="${product.heading}">
          </div>
        </div>
      `;

        swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper with enhanced visual effects
    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
            rotate: 50,     // Rotation effect
            stretch: 0,     // No stretching needed
            depth: 100,     // Depth between slides
            modifier: 1,    // Effect multiplier
            slideShadows: true, // Shadows on slides
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});
