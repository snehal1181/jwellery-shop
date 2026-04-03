// DOM Elements
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

// Global Components (Loader & Toast)
function initGlobalComponents() {
  // Loader
  const loader = document.createElement('div');
  loader.className = 'global-loader active'; // Start active
  loader.id = 'global-loader';
  loader.innerHTML = `
    <div class="aurora-page-loader">
      <div class="loader-jewel-wrapper">
        <div class="loader-orbit loader-orbit--outer">
          <div class="loader-gem loader-gem--1">✦</div>
          <div class="loader-gem loader-gem--2">✦</div>
          <div class="loader-gem loader-gem--3">✦</div>
        </div>
        <div class="loader-orbit loader-orbit--mid">
          <div class="loader-gem loader-gem--4">✦</div>
          <div class="loader-gem loader-gem--5">✦</div>
        </div>
        <div class="loader-orbit loader-orbit--inner"></div>
        <div class="loader-core">
          <div class="loader-core-gem">✧</div>
        </div>
      </div>
      <h1 class="loader-brand">AURORA</h1>
      <p class="loader-text">Awakening brilliance</p>
    </div>
  `;
  document.body.appendChild(loader);

  // Toast Container
  const toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  toastContainer.className = 'toast-container';
  document.body.appendChild(toastContainer);

  // Hide loader when page is fully loaded
  window.addEventListener('load', () => {
    setTimeout(hideLoader, 500); // Small delay for smooth transition
  });
}

window.showLoader = function () {
  const loader = document.getElementById('global-loader');
  if (loader) loader.classList.add('active');
}

window.hideLoader = function () {
  const loader = document.getElementById('global-loader');
  if (loader) loader.classList.remove('active');
}

window.showToast = function (message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success' ? '<i class="fa-solid fa-check-circle"></i>' : '<i class="fa-solid fa-info-circle"></i>';

  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-message">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
  `;

  container.appendChild(toast);

  // Animate in
  setTimeout(() => toast.classList.add('active'), 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 400); // Wait for transition
  }, 4000);
}

// Call immediately to inject the loader as fast as possible
initGlobalComponents();


// Search Elements
const searchIcons = document.querySelectorAll('.fa-magnifying-glass');
const searchOverlay = document.querySelector('.search-overlay');
const searchCloseBtn = document.querySelector('.search-close');

// Sticky Header & Navigation
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Advanced Scroll Reveal using Intersection Observer
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Optional: Stop observing once revealed
      // observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

// Apply observer to specific classes
document.querySelectorAll('.reveal-fade, .reveal-image, .reveal-text, .reveal-card-left, .reveal-card-zoom, .reveal-card-right').forEach(el => {
  revealObserver.observe(el);
});

// Text splitting for high-end text animation
document.querySelectorAll('.reveal-text, .section-title, .hero-title, .page-title').forEach(el => {
  // Simple wrap for standard elements to have the slide-up-and-fade effect
  if (!el.classList.contains('reveal-text')) {
    el.classList.add('reveal-text');
    revealObserver.observe(el);
  }

  // Wrap inner HTML into a span with a 'line' class
  const content = el.innerHTML;
  if (!content.includes('<span class="line">')) {
    el.innerHTML = `<span class="line">${content}</span>`;
  }
});

// Mobile Navigation
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Icon toggle
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      icon.style.color = '#fff';
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      if (window.scrollY > 50) {
        icon.style.color = '#0f0f0f';
      }
    }
  });
}



// Generate Particles
function createParticles() {
  const particlesContainers = document.querySelectorAll('.particles');

  particlesContainers.forEach(container => {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Random position, size, and animation delay
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;

      container.appendChild(particle);
    }
  });
}

// Hover Letter Split for Coveted Pieces
function splitHoverTextIntoLetters() {
  const hoverTitles = document.querySelectorAll('.best-sellers .collection-info h3');
  const directions = [
    { x: 0, y: -50 },   // N
    { x: 50, y: -50 },  // NE
    { x: 50, y: 0 },    // E
    { x: 50, y: 50 },   // SE
    { x: 0, y: 50 },    // S
    { x: -50, y: 50 },  // SW
    { x: -50, y: 0 },   // W
    { x: -50, y: -50 }  // NW
  ];

  hoverTitles.forEach(el => {
    const text = el.innerText;
    el.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const span = document.createElement('span');
      span.classList.add('hover-char');

      if (char === ' ') {
        span.innerHTML = '&nbsp;';
      } else {
        span.innerText = char;
      }

      // Assign random direction
      const dir = directions[Math.floor(Math.random() * directions.length)];
      span.style.setProperty('--tx', `${dir.x}px`);
      span.style.setProperty('--ty', `${dir.y}px`);

      // Assign random delay for a chaotic and magical effect
      span.style.transitionDelay = `${Math.random() * 0.2}s`;

      el.appendChild(span);
    }
  });
}

// Collections Gallery Filter
function initCollectionsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // If it's a normal filter click, hide the clear search button and clear URL params
        const clearBtn = document.querySelector('.clear-search-btn');
        if (clearBtn && btn !== clearBtn) {
          clearBtn.style.display = 'none';
          window.history.pushState({}, '', window.location.pathname);

          // Reset headers if they were changed by search
          const sectionTitle = document.querySelector('.collections-header h1, .collections .section-title');
          const sectionSubtitle = document.querySelector('.collections-header p, .collections .section-subtitle');
          if (sectionTitle && sectionTitle.innerText.includes('Search Results')) {
            sectionTitle.innerHTML = `<span class="line">Fine Collections</span>`;
          }
          if (sectionSubtitle && sectionSubtitle.innerText.includes('Found')) {
            sectionSubtitle.innerText = `Curated excellence for the modern connoisseur`;
          }
        }

        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 400); // Wait for CSS transition
          }
        });
      });
    });
  }
}

// Testimonial Slider
function initTestimonialSlider() {
  const container = document.querySelector('.testimonial-slider-container');
  const track = document.querySelector('.testimonial-track');
  let slides = document.querySelectorAll('.testimonial-card');
  const nextBtn = document.querySelector('.slider-control.next');
  const prevBtn = document.querySelector('.slider-control.prev');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!container || !track || slides.length === 0) return;

  const originalSlideCount = slides.length;
  let currentIndex = originalSlideCount; // Start after clones
  let isTransitioning = false;
  let autoSlideInterval;

  // Clone slides for infinite loop
  const slidesToClone = 3;
  for (let i = 0; i < slidesToClone; i++) {
    const startClone = slides[i].cloneNode(true);
    const endClone = slides[slides.length - 1 - i].cloneNode(true);
    track.appendChild(startClone);
    track.prepend(endClone);
  }

  // Update slides reference
  slides = document.querySelectorAll('.testimonial-card');

  // Create Dots
  for (let i = 0; i < originalSlideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i + slidesToClone));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  function updateSlider(animate = true) {
    if (!animate) track.style.transition = 'none';
    else track.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';

    const slideWidth = slides[0].offsetWidth + 30; // Including gap
    const offset = currentIndex * slideWidth;

    // Centering the slider: 
    // We want the currentIndex slide to be in the center of the container
    const containerWidth = container.offsetWidth;
    const centerOffset = (containerWidth - slides[0].offsetWidth) / 2;

    track.style.transform = `translateX(${-offset + centerOffset}px)`;

    // Handle Dots Active State
    const activeDotIndex = (currentIndex - slidesToClone + originalSlideCount) % originalSlideCount;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeDotIndex);
    });

    // Handle Active Card Highlight
    slides.forEach((slide, index) => {
      slide.classList.toggle('active-card', index === currentIndex);
    });

    if (!animate) {
      // Force reflow
      track.offsetHeight;
      track.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    }
  }

  function handleBoundary() {
    isTransitioning = false;
    if (currentIndex <= slidesToClone - 1) {
      currentIndex = originalSlideCount + currentIndex;
      updateSlider(false);
    } else if (currentIndex >= originalSlideCount + slidesToClone) {
      currentIndex = currentIndex - originalSlideCount;
      updateSlider(false);
    }
  }

  track.addEventListener('transitionend', handleBoundary);

  function goToSlide(index) {
    if (isTransitioning) return;
    currentIndex = index;
    isTransitioning = true;
    updateSlider();
    resetAutoSlide();
  }

  function nextSlide() {
    if (isTransitioning) return;
    currentIndex++;
    isTransitioning = true;
    updateSlider();
  }

  function prevSlide() {
    if (isTransitioning) return;
    currentIndex--;
    isTransitioning = true;
    updateSlider();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  // Intersection Observer to start auto-slide only when in view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startAutoSlide();
    } else {
      clearInterval(autoSlideInterval);
    }
  }, { threshold: 0.1 });

  observer.observe(container);

  // Resize handling
  window.addEventListener('resize', () => updateSlider(false));

  // Initial call - wait a frame for styles
  requestAnimationFrame(() => {
    updateSlider(false);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  splitHoverTextIntoLetters();
  initCollectionsFilter();
  handleUrlSearch();
  initWishlist();
  renderWishlistPage();
  initCart();
  renderCartPage();
  initTestimonialSlider();
  handleHashFilter();
  // Trigger initial checks
  window.dispatchEvent(new Event('scroll'));
});

// Handle URL hash for filtering on collections page
function handleHashFilter() {
  if (window.location.pathname.includes('collections.html') && window.location.hash) {
    const filter = window.location.hash.substring(1); // Remove #
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    if (filterBtn) {
      setTimeout(() => {
        filterBtn.click();
        // Smooth scroll to results
        const filterBar = document.querySelector('.filter-bar');
        if (filterBar) {
          filterBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Small delay to ensure everything is rendered
    }
  }
}

// Listen for hash changes if on the same page
window.addEventListener('hashchange', handleHashFilter);

// Search Overlay Logic
if (searchIcons.length > 0 && searchOverlay) {
  searchIcons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const searchInput = searchOverlay.querySelector('input');
        if (searchInput) searchInput.focus();
      }, 300);
    });
  });
}

if (searchCloseBtn && searchOverlay) {
  searchCloseBtn.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Search Filtering Logic on Collections Page
function handleUrlSearch() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');

  if (searchQuery) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
      const lowerQuery = searchQuery.toLowerCase();
      let matchCount = 0;

      // Update filter UI to remove active state from category buttons
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      const clearSearchBtn = document.querySelector('.clear-search-btn');
      if (clearSearchBtn) clearSearchBtn.style.display = 'inline-block';

      galleryItems.forEach(item => {
        const title = item.querySelector('h3').innerText.toLowerCase();
        const category = item.getAttribute('data-category').toLowerCase();

        if (title.includes(lowerQuery) || category.includes(lowerQuery)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
          matchCount++;
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 400);
        }
      });

      // Update section title to show search results
      const sectionTitle = document.querySelector('.collections-header h1, .collections .section-title');
      const sectionSubtitle = document.querySelector('.collections-header p, .collections .section-subtitle');

      if (sectionTitle) {
        sectionTitle.innerHTML = `<span class="line">Search Results: "${searchQuery}"</span>`;
      }
      if (sectionSubtitle) {
        if (matchCount > 0) {
          sectionSubtitle.innerText = `Found ${matchCount} piece(s) matching your search`;
        } else {
          sectionSubtitle.innerText = `No pieces found matching your search. Please try another term.`;
        }
      }

      // Smooth scroll down to the gallery section
      const targetSection = document.querySelector('.collections');
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }
}

// Wishlist Functionality
function initWishlist() {
  const wishlistBtns = document.querySelectorAll('.wishlist-icon, .wishlist-btn');

  wishlistBtns.forEach(btn => {
    // Check initial state
    const card = btn.closest('.collection-card, .gallery-item');
    if (card) {
      // Clean title to handle potential non-breaking spaces from text animation
      let title = card.querySelector('h3').innerText;
      title = title.replace(/\u00a0/g, ' ').trim();
      if (isInWishlist(title)) {
        btn.classList.add('active');
        btn.querySelector('i').classList.replace('fa-regular', 'fa-solid');
      }
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const card = btn.closest('.collection-card, .gallery-item');
      // Clean title to handle potential non-breaking spaces from text animation
      let title = card.querySelector('h3').innerText;
      title = title.replace(/\u00a0/g, ' ').trim();
      const img = card.querySelector('img').src;
      // Try to find price, default if not found
      const priceEl = card.querySelector('.product-price') || card.querySelector('.gallery-overlay span');
      const price = priceEl ? priceEl.innerText : 'Price on Request';

      const item = { title, img, price };
      toggleWishlist(item, btn);
    });
  });
}

function toggleWishlist(item, btn) {
  // Show synthetic loader for premium feel
  showLoader();

  setTimeout(() => {
    let wishlist = JSON.parse(localStorage.getItem('auroraWishlist')) || [];
    const index = wishlist.findIndex(i => i.title === item.title);
    const icon = btn ? btn.querySelector('i') : null;
    let message = "";

    if (index > -1) {
      wishlist.splice(index, 1);
      if (btn) {
        btn.classList.remove('active');
        icon.classList.replace('fa-solid', 'fa-regular');
      }
      message = `${item.title} removed from favourites`;
    } else {
      wishlist.push(item);
      if (btn) {
        btn.classList.add('active');
        icon.classList.replace('fa-regular', 'fa-solid');
      }
      message = `${item.title} added to favourites!`;
    }

    localStorage.setItem('auroraWishlist', JSON.stringify(wishlist));

    hideLoader();
    showToast(message, 'success');
  }, 600); // 600ms artificial delay for premium UX
}

function isInWishlist(title) {
  let wishlist = JSON.parse(localStorage.getItem('auroraWishlist')) || [];
  return wishlist.some(i => i.title === title);
}

function renderWishlistPage() {
  const container = document.getElementById('wishlist-grid');
  if (!container) return;

  let wishlist = JSON.parse(localStorage.getItem('auroraWishlist')) || [];
  container.innerHTML = '';

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-cart" style="grid-column: 1/-1;">
        <img src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png" alt="Empty Wishlist" style="width: 130px; opacity: 0.5; margin-bottom: 20px;">
        <h2>No items added to favourite</h2>
        <a href="collections.html" class="btn btn-primary" style="margin-top: 20px;">Start Shopping</a>
      </div>
    `;
    return;
  }

  wishlist.forEach(item => {
    const card = document.createElement('div');
    card.className = 'collection-card';
    // Reusing collection-card styles but removing the link behavior for the card itself
    card.innerHTML = `
          <button class="cart-icon" title="Move to Cart" onclick="moveToCart('${item.title.replace(/'/g, "\\'")}')" style="opacity: 1; transform: translateY(0); top: 15px;"><i class="fa-solid fa-cart-plus"></i></button>
          <div class="collection-img" style="height: 300px;">
              <img src="${item.img}" alt="${item.title}" style="transform: scale(1);">
          </div>
          <div class="collection-info" style="opacity: 1; transform: translateY(0); position: relative; padding: 20px;">
              <h3 style="font-size: 1.5rem; opacity: 1; transform: none; margin-bottom: 10px;">${item.title}</h3>
              <div style="color: var(--secondary-color); margin-bottom: 15px;">${item.price}</div>
              <button class="btn btn-primary" onclick="removeFromWishlist('${item.title.replace(/'/g, "\\'")}')">Remove</button>
          </div>
      `;
    container.appendChild(card);
  });
}

window.removeFromWishlist = function (title) {
  let wishlist = JSON.parse(localStorage.getItem('auroraWishlist')) || [];
  const index = wishlist.findIndex(i => i.title === title);
  if (index > -1) {
    wishlist.splice(index, 1);
    localStorage.setItem('auroraWishlist', JSON.stringify(wishlist));
    renderWishlistPage();
    showToast(`${title} removed from favourites`, 'info');
  }
}

window.moveToCart = function (title) {
  let wishlist = JSON.parse(localStorage.getItem('auroraWishlist')) || [];
  const index = wishlist.findIndex(i => i.title === title);

  if (index > -1) {
    const item = wishlist[index];
    // Add to cart
    addToCart({ ...item, quantity: 1 });

    // Remove from wishlist
    wishlist.splice(index, 1);
    localStorage.setItem('auroraWishlist', JSON.stringify(wishlist));
    renderWishlistPage();
  }
}

// Cart Functionality
function initCart() {
  // High Jewelry Section Buttons
  const cartIcons = document.querySelectorAll('.cart-icon');
  cartIcons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest('.collection-card, .gallery-item');
      addToCartFromCard(card);
    });
  });

  // Best Sellers / Coveted Pieces Buttons
  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest('.collection-card');
      addToCartFromCard(card);
    });
  });
}

function addToCartFromCard(card) {
  if (!card) return;

  // Clean title
  let title = card.querySelector('h3').innerText;
  title = title.replace(/\u00a0/g, ' ').trim();

  const img = card.querySelector('img').src;

  // Get Price
  const priceEl = card.querySelector('.product-price') || card.querySelector('.gallery-overlay span');
  let price = priceEl ? priceEl.innerText : 'Price on Request';

  const item = { title, img, price, quantity: 1 };
  addToCart(item);
}

function addToCart(item) {
  // Show synthetic loader to make interaction feel premium and robust
  showLoader();

  setTimeout(() => {
    let cart = JSON.parse(localStorage.getItem('auroraCart')) || [];
    const existingItem = cart.find(i => i.title === item.title);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(item);
    }

    localStorage.setItem('auroraCart', JSON.stringify(cart));

    hideLoader();
    showToast(`${item.title} added to cart!`, 'success');
  }, 600); // 600ms artificial delay
}

function renderCartPage() {
  const container = document.getElementById('cart-content');
  if (!container) return;

  let cart = JSON.parse(localStorage.getItem('auroraCart')) || [];
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Empty Cart">
        <h2>No Added Items are available</h2>
        <p>Browse our collections to find your perfect piece.</p>
        <a href="collections.html" class="btn btn-primary" style="margin-top: 20px;">Start Shopping</a>
      </div>
    `;
    return;
  }

  let total = 0;
  let itemsHTML = '';

  cart.forEach((item, index) => {
    // Calculate total if price is numeric
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    if (!isNaN(priceNum)) {
      total += priceNum * item.quantity;
    }

    itemsHTML += `
      <div class="cart-item-card" style="animation-delay: ${index * 0.1}s">
        <div class="cart-item-image">
          <img src="${item.img}" alt="${item.title}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-header">
            <h3 class="cart-item-title">${item.title}</h3>
            <div class="cart-item-price">${item.price}</div>
          </div>
          <p class="cart-item-ref">REF: ${Math.floor(Math.random() * 899999 + 100000)}</p>
          <div class="cart-item-actions">
            <div class="cart-controls">
              <button class="qty-btn" onclick="updateCartQuantity('${item.title.replace(/'/g, "\\'")}', -1)"><i class="fa-solid fa-minus"></i></button>
              <span class="qty-display">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity('${item.title.replace(/'/g, "\\'")}', 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
            <button class="remove-action" onclick="removeFromCart('${item.title.replace(/'/g, "\\'")}')" title="Remove item"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      </div>
    `;
  });

  const sidebarHTML = `
    <div class="cart-sidebar">
      <div class="cart-summary-card">
        <h3>Order Summary</h3>
        <div class="summary-row">
          <span>Subtotal</span>
          <span>$${total.toLocaleString()}</span>
        </div>
        <div class="summary-row">
          <span>Complimentary Shipping</span>
          <span>$0</span>
        </div>
        <div class="summary-divider"></div>
        <div class="summary-row total-row">
          <span>Estimated Total</span>
          <span>$${total.toLocaleString()}</span>
        </div>
        <button class="btn btn-primary checkout-btn" onclick="placeOrder()">Proceed to Checkout</button>
        
        <div class="trust-badges">
          <div class="trust-badge"><i class="fa-solid fa-shield-halved"></i> Secure Checkout</div>
        </div>
      </div>
      <div class="cart-help">
        <p>Need assistance?</p>
        <a href="contact.html">Contact our Concierge</a>
      </div>
    </div>
  `;

  container.innerHTML = `
    <div class="cart-layout">
      <div class="cart-items-list">
        ${itemsHTML}
      </div>
      ${sidebarHTML}
    </div>
  `;
}

window.updateCartQuantity = function (title, change) {
  let cart = JSON.parse(localStorage.getItem('auroraCart')) || [];
  const item = cart.find(i => i.title === title);

  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.title !== title);
      showToast(`${title} removed from cart`, 'info');
    }
    localStorage.setItem('auroraCart', JSON.stringify(cart));
    renderCartPage();
  }
}

window.removeFromCart = function (title) {
  let cart = JSON.parse(localStorage.getItem('auroraCart')) || [];
  cart = cart.filter(i => i.title !== title);
  localStorage.setItem('auroraCart', JSON.stringify(cart));
  renderCartPage();
  showToast(`${title} removed from cart`, 'info');
}

window.placeOrder = function () {
  showLoader();
  setTimeout(() => {
    hideLoader();
    showToast("Thank you for your order! Our concierge will contact you shortly.", 'success');
    localStorage.removeItem('auroraCart');
    renderCartPage();

    // Optional: Redirect back to home after order
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 3000);
  }, 1000);
}
