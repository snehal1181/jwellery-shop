# AURORA — Luxury Jewelry Website

A premium, fully responsive multi-page jewelry e-commerce website built with pure **HTML**, **CSS**, and **Vanilla JavaScript**. The project showcases a luxury brand called **AURORA**, featuring elegant design, smooth animations, and interactive UI components.

---

## 🌟 Live Preview

Open `index.html` in any modern browser to run the project locally — no build tools or server required.

---

## 📁 Project Structure

```
jwel shop/
│
├── index.html            # Homepage — Hero, Collections, Best Sellers, Testimonials, Newsletter
├── collections.html      # Collections page — Filterable gallery of all jewelry pieces
├── about.html            # Brand Story page — Heritage, ethics, and craftsmanship narrative
├── contact.html          # Contact page — Inquiry form and concierge info
├── favourite.html        # Wishlist page — Saved/favourite items
├── addedtocart.html      # Shopping Cart page — Cart items view
│
├── style.css             # Global stylesheet — Design system, layout, animations, components
├── script.js             # Main JavaScript — Animations, slider, search, filtering, cart/wishlist
│
├── diamond_pendant.png   # Product image — Diamond Pendant
├── sapphire_ring.png     # Product image — Sapphire Ring
│
└── assets/
    ├── hero_bg_folded_silk.png     # Homepage hero background
    ├── hero_bg_blackish.png        # Alternate hero background
    ├── hero_bg_cloth_sparkle.png   # Alternate hero background
    ├── hero_bg_emerald.png         # Alternate hero background
    ├── hero_bg_premium.png         # Alternate hero background
    ├── hero_bg_premium_v2.png      # Alternate hero background
    ├── hero_bg_sparkle.png         # Alternate hero background
    └── about_hero.png              # Brand Story page hero background
```

---

## 📄 Pages Overview

### 1. `index.html` — Homepage
The main landing page of the AURORA brand.
- **Header & Navigation** — Fixed navbar with Logo, Nav links, Search icon, Wishlist & Cart icons, and a Hamburger menu for mobile.
- **Hero Section** — Full-screen background image with animated gold-particle sparkle effect, brand tagline, and CTA buttons.
- **Marquee Slider** — Infinite auto-scrolling image band showcasing jewelry photography.
- **High Jewelry (Collections Grid)** — 6 featured collection cards with hover effects showing product prices, plus Wishlist & Add-to-Cart quick actions.
- **Coveted Pieces (Best Sellers)** — 3 premium product cards with pricing, Add to Cart, and Wishlist buttons.
- **Craftsmanship & Heritage** — Full-bleed brand story section with background image.
- **Client Trust (Testimonials)** — Auto-play 3D testimonial card slider with dot navigation and touch/drag support.
- **The Inner Circle (Newsletter)** — Email subscription form for exclusive access.
- **Footer** — 4-column layout: Brand, Explore links, Social media icons, Contact details.
- **Search Overlay** — Full-screen modal search with popular suggestions, redirects to Collections with search query.

### 2. `collections.html` — Collections Gallery
- **Page Hero** — Full-screen header section.
- **Filter Bar** — Category filters: All Pieces, Gold, Diamonds, Bridal, New Arrivals. Supports URL hash-based auto-filtering (e.g., `collections.html#bridal`).
- **Gallery Grid** — Responsive masonry-style grid of 9 jewelry items, each with hover overlay showing name & price, plus Wishlist and Cart quick-action buttons.
- **Search Integration** — Accepts `?search=` query parameter from the search modal to filter results.

### 3. `about.html` — Brand Story
- **Page Hero** — Decorative hero with brand tagline.
- **Three Story Sections** — Alternating left/right image + text layout telling the brand's narrative:
  - *Our Genesis* — The art of craftsmanship.
  - *Our Promise* — Ethically sourced excellence.
  - *The Future* — A legacy of light.
- Images use decorative gold-border accent blocks and morphing border-radius hover effects.

### 4. `contact.html` — Contact / Concierge
- **Page Hero** — Full-screen decorative header.
- **Contact Layout** — Two-column design: a decorative jewelry image on the left, concierge info + inquiry form on the right.
- **Info Grid** — Boutique address and phone number displayed with icons.
- **Inquiry Form** — Fields for Name, Email, Inquiry type, and Message.

### 5. `favourite.html` — Wishlist
Displays items the user has saved to their wishlist via the heart icon buttons across the site.

### 6. `addedtocart.html` — Shopping Cart
Displays items added to the cart in a premium, high-end layout.
- **Normalized Image Display** — All product images are uniformly sized at 170x170 with `object-fit: cover` for a consistent look.
- **Premium Card Design** — Cards feature elegant 12px border-radius, generous padding, and refined shadows.
- **Interactive Controls** — Quantity adjustments and a stylish circular red trash icon for item removal.
- **Order Summary** — Dedicated sidebar with subtotal calculation and trust badges.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **Responsive Design** | Fully mobile-friendly; adapts from desktop to tablet to phone. |
| **Animated Hero** | Gold sparkle border-circle particle animation on the homepage hero. |
| **Infinite Marquee** | Auto-scrolling continuous jewelry image strip. |
| **Testimonial Slider** | 3D-effect auto-play slider with drag/touch support and dot navigation. |
| **Collection Filtering** | Client-side category filter with URL hash support for deep linking. |
| **Search Modal** | Full-screen search overlay that redirects to filtered collections. |
| **Scroll Animations** | Elements animate in using `IntersectionObserver` (fade, slide, zoom). |
| **User Feedback** | Global luxury loader and toast notifications for favorites and cart actions. |
| **Wishlist & Cart** | Quick-action buttons on every product card with persistent active states. |
| **Premium UI** | Redesigned shopping bag with normalized images, glassmorphism, gold accents, and smooth transitions. |

---

## 🛠️ Technology Stack

| Technology | Usage |
|---|---|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, animations, glassmorphism, responsive grid layouts |
| **Vanilla JavaScript** | Slider logic, filtering, search, scroll animations, UI interactions |
| **Font Awesome 6.5.1** | Icons (via CDN) |
| **Unsplash / Pexels / Pixabay** | External imagery for product and background photos |

> **No frameworks, no build tools, no dependencies.** Just open `index.html` in a browser.

---

## 🎨 Design System

The global design tokens are defined as CSS custom properties in `style.css`:

```css
--primary-color:    #0f0f0f       /* Deep black — primary text & backgrounds */
--secondary-color:  #d4af37       /* Gold — brand accent color */
--bg-color:         #fafaf8       /* Off-white — page background */
--text-muted:       #6b6b6b       /* Muted grey — body text */
--font-heading:     'Didact Gothic', serif
--font-body:        'Jost', sans-serif
```

---

## 🚀 Getting Started

1. **Clone or download** the project folder.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari).
3. All pages link to each other — no configuration needed.

```
# No installation required — simply open:
index.html
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 1024px` | Full desktop layout |
| `768px – 1024px` | Tablet — adjusted grids and spacing |
| `< 768px` | Mobile — single column, hamburger menu |

---

## 📞 Contact Information (Demo Data)

| Channel | Details |
|---|---|
| **Phone** | +1 (234) 567-890 |
| **Email** | concierge@aurora.com |
| **Hours** | 10:00 – 19:00 |
| **Boutique** | 727 Fifth Avenue, New York, NY |

---

## 📝 License

This project is created for educational and portfolio purposes.  
© 2026 AURORA ATELIER. All Rights Reserved.
