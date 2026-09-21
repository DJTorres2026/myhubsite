# My Hub Site

Simple multi-page site: Home, Wallpapers, Calculator, Videos.
Warm greens / earth tones, mobile-friendly, easy to add tabs.

## Preview on your PC

1. Open `C:\Users\Antony\Desktop\MyHubSite\`
2. Double-click `index.html` (opens in your browser)
3. Or right-click → Open with → Chrome / Edge / Firefox

No install or server needed for local preview.

## Folder map

- `index.html` — Home (video, hook, Cash App QR, Buy Me a Coffee)
- `wallpapers.html` — Animal Wallpapers Pack + Gumroad link
- `calculator.html` — Free BMR Calculator (Mifflin–St Jeor)
- `videos.html` — AI comedy video links
- `css/styles.css` — shared look
- `js/nav.js` — mobile menu
- `js/calculator.js` — macro math
- `assets/` — images / video / QR

## Placeholders to replace

| What | Where |
|------|--------|
| Hero AI video | Put file at `assets/hero-video.mp4` (Home already points there) |
| Cash App QR | Replace `assets/cashapp-qr-placeholder.svg` with your QR image (png/jpg ok — then update `img src` in `index.html`) |
| Buy Me a Coffee | In `index.html`, change `https://www.buymeacoffee.com/YOUR_USERNAME` |
| Gumroad product URL | In `wallpapers.html`, change `https://gumroad.com/l/YOUR_PRODUCT` (also keep a copy in `Desktop\Gumroad-Links.txt`) |
| Comedy video links | In `videos.html`, replace the three `example.com` links (or titles) |

## How to add a new tab later

1. Copy any page (e.g. `videos.html`) to `newpage.html`
2. Edit the page content
3. On **every** page, add this inside the `<ul class="nav-links">` list (same place as the other tabs):

```html
<li><a href="newpage.html">New Tab</a></li>
```

4. Mark the active page with `class="active"` on that page’s own link

That’s it — the sticky top nav is built to grow.

## Calculator notes

- BMR: Mifflin–St Jeor
- TDEE: BMR × activity factor
- Goal adjusts calories; macros use protein g/kg + fat % with carbs filling the rest
- Estimates only — not medical advice

## Optional: host it

Upload the whole `MyHubSite` folder to Netlify, Cloudflare Pages, GitHub Pages, or your own host. Keep relative paths as they are.
