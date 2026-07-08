# Ragas Shipping Web Platform

A premium, state-of-the-art web application for **Ragas Shipping Pte Ltd (Singapore)**. This site is designed with modern web aesthetics, premium animations, and high performance to present Ragas Shipping's maritime, trading, and logistics capabilities to a global audience.

Live Site: [https://shipping.ragasgroups.com/](https://shipping.ragasgroups.com/)

---

## 🚀 Key Features

* **Premium Visual Identity**: Implements sleek glassmorphism themes, curated dark/ocean color palettes, and responsive layouts tailored to maritime logistics.
* **Typing Title Animations**: Features custom-engineered, physics-based staggered letter slide-up and fade-in animations on all main page headings.
* **Services Grid & Details Modals**: An interactive 4x2 responsive services grid showcasing key capabilities (Sea Freight, Ship Broking, Chartering, Petroleum, etc.). Interactive cards reveal deep-dive overlay modals with custom content or link directly to affiliate platforms.
* **Staggered Container Reveals**: Elegant, viewport-triggered spring physics entrance transitions that load grid columns and list components one-by-one as the user scrolls.
* **Responsive Background Media**: Optimized high-definition background cargo/compass videos with overlays ensuring high readability.
* **Integrated Inquiry System**: Functional contact engine routing enquiries directly to `info@ragasgroups.com` with pre-filled subject lines.

---

## 🛠️ Technology Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS & Vanilla CSS
* **Animations**: Motion (Framer Motion)
* **Icons**: Lucide React
* **Package Manager**: pnpm

---

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and global CSS styling
│   ├── globals.css       # Global styles, variables, grid systems, and overlays
│   ├── layout.tsx        # Base root layout (metadata, fonts, layout tree)
│   └── page.tsx          # Main landing page assembling sections
├── components/           # Reusable React & UI components
│   ├── ui/               # Core design system elements
│   ├── about-section.tsx # About section and company core values
│   ├── contact-section.tsx # Contact form and information map
│   ├── hero.tsx          # Landing hero header with autoplay media
│   ├── services-section.tsx # Services grid and modals layout
│   ├── trading-section.tsx # Sourcing items and routes
│   ├── vision-section.tsx # Vision, Mission, and Future Outlook
│   ├── typewriter-text.tsx # custom letters typewriter animation
│   └── reveal.tsx        # Viewport enter animation wrapper
└── public/               # Static assets (images, logos, local MP4 videos)
```

---

## 🌐 Deployment

The platform is integrated with **Vercel** via GitHub webhook automation. Pushing changes directly to the `main` branch triggers an automatic production build and deployment to:
[https://shipping.ragasgroups.com/](https://shipping.ragasgroups.com/)
