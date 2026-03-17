# BelResume — Personal Resume Site

> A beautiful, modern and minimal single-page resume built as a **Zola theme**.
> Features theme switching, dark mode, animated skill bars, and a responsive two-column layout.

---

## Stack

| Layer | Technology |
|---|---|
| Static Site Generator | [Zola](https://www.getzola.org/) ≥ 0.20.0 (Rust) |
| CSS Framework | [Tailwind CSS](https://tailwindcss.com/) via CDN |
| Icons | [Font Awesome](https://fontawesome.com/) 6.4.0 |
| Templating | Tera (Zola built-in) |
| Scripting | Vanilla JavaScript (ES6+) |
| Persistence | Web Storage API (`localStorage`) |
| Animation | CSS `@keyframes` + Intersection Observer API |
| Config Format | TOML + Markdown |

---

## Features

- **3 color themes** — Blue, Purple, Amber (persisted across sessions)
- **Dark / Light mode** toggle with `localStorage` persistence
- **Animated skill bars** — triggered on scroll via `IntersectionObserver`
- **Floating background orbs** with CSS keyframe animation
- **Fully responsive** — single column on mobile, two-column grid on desktop
- **No build step needed** — CDN-based assets, zero npm dependencies
- **High PageSpeed score** — lightweight HTML/CSS/JS output

---

## Screenshots

### Light Mode
![Light Mode](https://raw.githubusercontent.com/cx48/BelResume/refs/heads/main/static/images/light.png)

### Dark Mode
![Dark Mode](https://raw.githubusercontent.com/cx48/BelResume/refs/heads/main/static/images/dark.png)

### PageSpeed Insights
![PageSpeed](https://raw.githubusercontent.com/cx48/BelResume/refs/heads/main/static/images/pagespeed.png)

---

## Getting Started

### Prerequisites

Install Zola ([official install guide](https://www.getzola.org/documentation/getting-started/installation/)):

```bash
# macOS
brew install zola

# Linux (snap)
snap install zola --edge

# Windows (scoop)
scoop install zola
```

### Development

```bash
# Clone the repo
git clone https://github.com/<your-username>/BelResume
cd BelResume/staticpage

# Start the dev server with live reload
zola serve
# → http://127.0.0.1:1111
```

### Production Build

```bash
zola build
# Output is generated in the /public directory
```

---

## Project Structure

```
staticpage/
├── config.toml              # Site title, base URL, description
├── theme.toml               # Theme metadata
├── content/
│   └── _index.md            # Homepage content
├── templates/
│   ├── index.html           # Main layout
│   └── partials/
│       ├── header.html      # Name, title, contact info
│       ├── experience.html  # Work experience timeline
│       ├── education.html   # Academic background
│       ├── projects.html    # Featured projects
│       ├── skills.html      # Skill bars by category
│       ├── languages.html   # Spoken languages
│       ├── certifications.html
│       └── awards.html
└── static/
    ├── css/style.css        # CSS variables, themes, animations
    ├── js/script.js         # Theme switcher, dark mode, scroll observer
    └── images/
```

---

## Customization

### 1. Personal Info

Edit `templates/partials/header.html` to update your name, title, email, phone, location and LinkedIn URL.

### 2. Theme Colors

Three themes are defined in `static/css/style.css`:

```css
.theme-blue   { --primary: #3b82f6; --secondary: #10b981; }
.theme-purple { --primary: #8b5cf6; --secondary: #ec4899; }
.theme-amber  { --primary: #f59e0b; --secondary: #ef4444; }
```

Override any variable or add a new theme class.

### 3. Dark Mode Colors

```css
.dark {
  --background: #1a1a2e;
  --text:       #e2e8f0;
  --card:       #16213e;
}
```

### 4. Sections

Each section is an independent Tera partial. Enable or disable sections by commenting/uncommenting the `{% include %}` lines in `templates/index.html`.

### 5. Site Metadata

```toml
# config.toml
title       = "YourName Resume"
description = "Your Name | Your Title"
base_url    = "https://yourdomain.com"
```

---

## Deployment

### GitHub Pages

```toml
# config.toml
base_url = "https://<username>.github.io/<repo-name>"
```

Then build and push the `/public` directory to the `gh-pages` branch, or use a GitHub Actions workflow.

### Netlify / Vercel

Both platforms support Zola out of the box. Set the build command to `zola build` and the publish directory to `public`.

---

## License

MIT © [cx48](https://cx48.dev)
