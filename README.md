# Obofour Raphael Official Website

A production-ready, responsive static website for musician Obofour Raphael, built with pure HTML, CSS, and vanilla JavaScript. Features real content including authentic YouTube videos, functional payment links, official social media integration, and professional merchandise showcase.

## Project Structure

```
obo4raphael/
├── index.html              # Splash/Landing page with OBOFOURENTRY.jpg background
├── home.html               # Main home page with hero, merchandise, news, and connect sections
├── biography.html          # Biography page with detailed timeline
├── videos.html             # Videos page with 4 real YouTube videos
├── discography.html        # Discography page with Adom Akyedee album and payment links
├── contact.html            # Contact page with form validation and social links
├── styles/
│   └── style.css           # Main stylesheet with responsive design
├── scripts/
│   └── main.js             # Main JavaScript with modal and form functionality
├── assets/
│   ├── images/             # Real image assets (OBO4LOGO.png, OBO42.jpg, etc.)
│   ├── audio/              # Audio files for music previews
│   └── icons/              # SVG icons for social media
├── sitemap.xml             # SEO sitemap
├── robots.txt              # SEO robots file
└── README.md               # This file
```

## Features

- **Real Content**: Authentic YouTube videos, official images, and functional payment links
- **Responsive Design**: Works on all devices (mobile, tablet, desktop)
- **Accessibility**: WCAG AA compliant with keyboard navigation, ARIA roles, and screen reader support
- **Performance**: Optimized with lazy loading, preloading, and efficient code
- **SEO**: Proper meta tags, Open Graph, Twitter Cards, sitemap, and robots.txt
- **Interactive Elements**: Video modal, contact form validation, merchandise showcase, news section
- **Payment Integration**: PayPal and PayStack payment processing for album purchases
- **Social Media**: Official links to Facebook, X (Twitter), Instagram, YouTube, and TikTok
- **Modern Standards**: Uses semantic HTML5, CSS variables, and vanilla JS

## How to Run Locally

### Option 1: Using Node.js HTTP Server
1. Install Node.js if not already installed
2. Install `http-server` globally:
   ```bash
   npm install -g http-server
   ```
3. Navigate to the project directory:
   ```bash
   cd path/to/obo4raphael
   ```
4. Start the server:
   ```bash
   http-server
   ```
5. Open your browser and go to `http://localhost:8080`

### Option 2: Using Python
1. Ensure Python is installed
2. Navigate to the project directory:
   ```bash
   cd path/to/obo4raphael
   ```
3. Start the server:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and go to `http://localhost:8000`

### Option 3: Using PHP
1. Ensure PHP is installed
2. Navigate to the project directory:
   ```bash
   cd path/to/obo4raphael
   ```
3. Start the server:
   ```bash
   php -S localhost:8000
   ```
4. Open your browser and go to `http://localhost:8000`

## Content Overview

### Real Assets Currently Used
- **Logo**: `OBO4LOGO.png` - Official Obofour Raphael logo
- **Hero Images**: `OBO42.jpg` (home page), `OBOFOURENTRY.jpg` (splash page)
- **Album Cover**: `AdomAkyedee.JPG` - Adom Akyedee album artwork
- **Biography Images**: `OBO4RAPHAEL.jpg` - Professional portrait
- **Merchandise**: `blackyesuhoodie.jpg`, `blackyesumerch.jpg`, `redyesumerch.jpg`

### YouTube Videos (Real Content)
1. **Official Music Video**: `Y0LYvUhpEGk`
2. **Live Performance**: `I9oAT5F_BCw`
3. **Music Session**: `SqXzX-48-Yg`
4. **Behind the Scenes**: `vcvsOdfBZMA`

### Payment Links (Functional)
- **PayPal**: `https://www.paypal.com/ncp/payment/8B54CYT3A5R6L`
- **PayStack**: `https://paystack.com/buy/obofour-raphael---adom-akyedee-digital-album-download-hyyzir`

### Social Media Links (Official)
- **Facebook**: `https://www.facebook.com/kwahuboy`
- **X (Twitter)**: `https://x.com/therealobofour`
- **Instagram**: `https://www.instagram.com/therealobofour`
- **YouTube**: `https://www.youtube.com/@officialobofourtv`
- **TikTok**: `https://www.tiktok.com/@obo4raphael`

## Customization Guide

### Replacing Images
1. **Splash Background**: Replace `OBOFOURENTRY.jpg` with your preferred entry image
2. **Hero Image**: Replace `OBO42.jpg` with updated musician photo
3. **Logo**: Replace `OBO4LOGO.png` with updated logo design
4. **Album Cover**: Replace `AdomAkyedee.JPG` with new album artwork
5. **Merchandise**: Update `blackyesuhoodie.jpg`, `blackyesumerch.jpg`, `redyesumerch.jpg`

### Updating Content
1. **Biography**: Edit detailed biography in `biography.html`
2. **Videos**: Update YouTube video IDs in `videos.html` `data-video-id` attributes
3. **Discography**: Modify album information and track listings in `discography.html`
4. **Contact Details**: Update email, phone, and contact information in `contact.html`
5. **Merchandise**: Update product information and pricing in `home.html`
6. **News**: Modify news content and links in `home.html`

### Changing YouTube Video IDs
In `videos.html`, update the `data-video-id` attributes:
```html
<div class="video-card" data-video-id="NEW_VIDEO_ID_HERE">
    <img src="https://img.youtube.com/vi/NEW_VIDEO_ID_HERE/maxresdefault.jpg" alt="Video description">
    <h3>Video Title</h3>
</div>
```

### Updating Payment Links
In `home.html` and `discography.html`, update payment button links:
```html
<a href="NEW_PAYPAL_LINK" target="_blank" rel="noopener noreferrer">Buy on PayPal</a>
<a href="NEW_PAYSTACK_LINK" target="_blank" rel="noopener noreferrer">Buy on PayStack</a>
```

### Updating Social Media Links
Update social media links in all HTML files (home.html, biography.html, videos.html, discography.html, contact.html):
```html
<a href="NEW_SOCIAL_LINK" target="_blank" rel="noopener noreferrer">Platform Name</a>
```

### Styling Changes
- Colors: Modify CSS variables in `styles/style.css` at the top
- Fonts: Update Google Fonts links in HTML files
- Layout: Adjust responsive breakpoints and spacing in CSS
- Logo Size: Modify `.logo` class dimensions for different logo sizes

## Accessibility Checklist

- [x] All images have descriptive `alt` text
- [x] Keyboard navigation works for all interactive elements
- [x] Focus outlines are visible and styled
- [x] Color contrast meets WCAG AA standards
- [x] ARIA roles and labels used appropriately
- [x] Skip link provided for main content
- [x] Form validation provides clear error messages
- [x] Modal is keyboard-trappable and ESC-closable

## Performance Optimizations

- [x] Images use lazy loading (`loading="lazy"`)
- [x] Hero image is preloaded
- [x] CSS and JS are minified and optimized
- [x] Unused code is removed
- [x] Animations respect `prefers-reduced-motion`

## Testing Steps

### Keyboard Navigation
1. Use Tab key to navigate through all interactive elements
2. Use Enter/Space to activate buttons and links
3. Test modal opening/closing with keyboard
4. Verify form submission works with keyboard

### Color Contrast
1. Use browser dev tools or online contrast checkers
2. Ensure text meets AA standards (4.5:1 for normal text, 3:1 for large text)

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, SEO
4. Aim for scores above 90 for all categories

### Responsive Testing
1. Resize browser window or use device emulation
2. Test on actual mobile/tablet devices
3. Verify hero section stacks on small screens
4. Check navigation works on all screen sizes

## Deployment

### Netlify (Recommended)
1. Sign up for a free Netlify account
2. Drag and drop the entire project folder to Netlify's deploy area
3. Your site will be live instantly

### GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose main/master
5. Your site will be available at `https://username.github.io/repository-name`

### Other Static Hosts
- Vercel
- Surge
- Firebase Hosting
- Any web server that serves static files

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design Decisions

- **Color Palette**: Near-black (#0b0b0b), soft gold (#F8E3B4), white (#FFFFFF), accent purple (#C026D3)
- **Typography**: Playfair Display for headings, Inter for body text
- **Layout**: Hero uses split layout on desktop, stacks on mobile
- **Logo**: Custom OBO4LOGO.png with responsive sizing (100px height, 350px max-width)
- **Images**: Real musician photos (OBO42.jpg, OBOFOURENTRY.jpg) instead of placeholders
- **Videos**: Official YouTube integration with 4 real video IDs
- **Payment**: Functional PayPal and PayStack integration
- **Social Media**: Official platform links across all pages
- **Animations**: Subtle fade-ins with reduced motion support
- **Modal**: Accessible modal with keyboard trapping and ESC close

## Key Features Implemented

### Content & Integration
- ✅ **Real YouTube Videos**: 4 authentic Obofour Raphael videos with official thumbnails
- ✅ **Functional Payments**: PayPal and PayStack integration for album purchases
- ✅ **Official Social Media**: Direct links to all social platforms
- ✅ **Real Images**: Custom logo, hero images, and merchandise photos
- ✅ **Professional Merchandise**: Showcase with pricing and descriptions

### User Experience
- ✅ **Responsive Design**: Optimized for all devices and screen sizes
- ✅ **Accessibility**: WCAG AA compliant with full keyboard navigation
- ✅ **Performance**: Lazy loading, optimized images, and efficient code
- ✅ **SEO**: Complete meta tags, Open Graph, and Twitter Cards
- ✅ **Interactive Elements**: Video modals, form validation, smooth animations

### Business Features
- ✅ **E-commerce Ready**: Payment processing for digital downloads
- ✅ **Contact Integration**: Functional contact form with validation
- ✅ **Merchandise Display**: Professional product showcase
- ✅ **News Integration**: Latest updates and announcements
- ✅ **Multi-format Support**: Digital, physical CD, and vinyl options

## Contributing

This is a static site, so contributions would involve updating the HTML, CSS, or JS files directly. Key areas for updates:

- **Content Updates**: Biography, news, merchandise information
- **Video Updates**: YouTube video IDs and thumbnails
- **Payment Links**: PayPal/PayStack integration updates
- **Social Media**: Platform link updates
- **Styling**: CSS customizations and responsive improvements

## License

This project is provided as-is for educational and portfolio purposes. The website contains real content and functional integrations for Obofour Raphael's official online presence.

## Contact

For questions about this website, contact the developer or Obofour Raphael's management team.

## Live Demo

The website is ready for deployment and includes all production-ready features for a professional musician's online presence.