# Tailor Apps — Official Website

Marketing and support website for **Tailor Apps**, a precision software development brand building premium, paid mobile applications.

Built with **Next.js 14 (App Router)**, **React 18**, and **Tailwind CSS 3**. Zero external UI dependencies.

## Pages

| Route           | Purpose                                                                 |
| --------------- | ----------------------------------------------------------------------- |
| `/`             | Home: hero, 4-app grid, Smart Alert spotlight, Why Choose Us            |
| `/get-started`  | Onboarding guide, Smart Alert download card, three more apps            |
| `/help`         | Support contact box, billing/downloads/usage FAQ, feedback form         |
| `/brand`        | Brand identity: logo, tagline, colour palette, typography, principles   |

## Project structure

```
tailor-apps/
├── app/
│   ├── layout.js          # Root layout, fonts, navbar + footer shell
│   ├── globals.css        # Tailwind layers, reusable classes, reveal animation
│   ├── page.js            # Home
│   ├── not-found.js       # 404 page
│   ├── get-started/page.js
│   ├── help/page.js
│   └── brand/page.js
├── components/
│   ├── AppCard.js         # App showcase card
│   ├── ContactForm.js     # Validated feedback form (opens email client)
│   ├── FaqAccordion.js    # Animated accordion
│   ├── Footer.js
│   ├── Logo.js            # Logo mark + wordmark
│   ├── Navbar.js          # Sticky header with mobile menu
│   ├── PhoneMockup.js     # Animated hero device illustration
│   ├── Reveal.js          # Scroll-triggered fade/slide-up wrapper
│   └── SupportBox.js      # Email / phone contact display
├── lib/
│   ├── faq.js             # FAQ content
│   └── site.js            # Brand, contact details, apps, copy
├── tailwind.config.js     # Colours, fonts, keyframes, shadows
├── next.config.mjs
├── jsconfig.json          # "@/..." import alias
└── package.json
```

**Edit content in one place:** `lib/site.js` (apps, Play Store links, contact details, feature copy) and `lib/faq.js` (FAQ answers).

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repository.
2. In Vercel, click **Add New → Project** and import the repository.
3. Vercel auto-detects Next.js. Leave the defaults (Build: `next build`, Output: `.next`) and click **Deploy**.

No environment variables are required.

## Before you launch: checklist

- [ ] Replace each `playUrl` in `lib/site.js` with the real Google Play listing URL (Smart Alert's package ID is a placeholder).
- [ ] Confirm the names, descriptions and Play links of the three secondary apps (Focus Flow, Vault Notes, Habit Forge are working titles).
- [ ] Verify the feature and privacy claims against each app's actual behaviour.
- [ ] Add your logo file or favicon to `app/` (`icon.png`) if you want a browser icon.
