# Changelog

All notable changes to the **AURORA** luxury jewelry shop project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added
- `LICENSE.txt` — MIT license with an image disclaimer section
- `CHANGELOG.md` — this file

---

## [1.5.0] - 2026-04-03

### Added
- Toast notification when removing an item from the **Favourites** (wishlist) page
- Toast notification when removing an item from the **Cart** (trash icon)
- Toast notification when a cart item's quantity is reduced to zero

### Changed
- "Send Message" button in `contact.html` — updated `border-radius` from `4px` to `50px` to match the global pill-shaped button design

---

## [1.4.0] - 2026-03-31

### Added
- Global page loader (Aurora jewel animation) injected on every page via `script.js`
- Global toast notification system for success and info messages
- Cart functionality: add to cart, update quantity, remove item, place order
- Wishlist (favourites) functionality: add, remove, and move items to cart
- Collections filter bar with category filtering and URL-based search (`?search=`)
- Infinite-loop testimonial slider with auto-play, dots, and prev/next controls
- Search overlay with keyboard (`Escape`) support and popular search suggestions
- `addedtocart.html` — premium cart page with order summary sidebar, trust badges, and concierge help section
- `favourite.html` — wishlist page with card layout and move-to-cart functionality
- Scroll-reveal animations: `reveal-fade`, `reveal-image`, `reveal-text`, `reveal-card-left`, `reveal-card-zoom`, `reveal-card-right`, `reveal-tilt`
- Letter-split hover animation on "Coveted Pieces" product titles
- Sticky header with blur/shadow on scroll
- Mobile hamburger navigation menu

### Changed
- All `.btn` elements updated to `border-radius: 50px` globally in `style.css`
- Hero section updated to use a local asset (`assets/hero_bg_folded_silk.png`)
- Marquee image slider updated with new high-quality jewelry images

---

## [1.3.0] - 2026-03-15

### Added
- `about.html` — Brand Story page with hero, timeline, and values sections
- `contact.html` — Contact page with form, concierge info, and interactive map layout
- `collections.html` — Full collections gallery with filter bar and product overlay

### Changed
- Updated hero background image in `about.html`

---

## [1.2.0] - 2026-03-12

### Changed
- Various layout and styling refinements across homepage sections
- Adjusted section padding and typography for improved readability

---

## [1.1.0] - 2026-03-11

### Changed
- Updated product images in `index.html` for higher visual quality
- Replaced placeholder images with curated jewelry photography from Unsplash and Pexels

---

## [1.0.0] - 2026-03-11

### Added
- `index.html` — Homepage with hero section, featured collections grid, best-sellers, brand story teaser, testimonials, and newsletter signup
- `style.css` — Global design system: CSS variables, typography (Cinzel, Playfair Display, Poppins), animations, buttons, header, footer, and component styles
- `script.js` — Core JavaScript: particle generator, scroll reveal, mobile navigation
- `assets/` — Local image assets (hero backgrounds, product images)
- `diamond_pendant.png`, `sapphire_ring.png`, — Local product photography assets
- `README.md` — Project documentation with technology stack and feature list
- `package.json` — Project metadata file

---

> **Image Note:** All images used across all versions are for demonstration purposes only.
> See `LICENSE.txt` for the full image disclaimer.
