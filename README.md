# SA Square Technologies Website

A modern, responsive website for SA Square Technologies built with React, TypeScript, and Tailwind CSS.

## Tech Stack

This project is built with:

- **Vite** - Fast build tool and development server
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable UI components built with Radix UI
- **Lucide React** - Icon library
- **React Router** - Client-side routing

## Project Structure

```
SaSqWebsite/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components (shadcn/ui)
│   │   ├── Hero.tsx   # Hero section
│   │   ├── Navigation.tsx  # Header navigation
│   │   ├── Services.tsx    # Services section
│   │   ├── Features.tsx    # Features showcase
│   │   ├── Technologies.tsx # Tech stack display
│   │   ├── Process.tsx     # Work process section
│   │   ├── Portfolio.tsx   # Portfolio/projects
│   │   ├── Stats.tsx       # Statistics section
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Pricing.tsx     # Pricing plans
│   │   ├── FAQ.tsx         # Frequently asked questions
│   │   ├── CTA.tsx         # Call-to-action section
│   │   ├── Contact.tsx     # Contact form with global locations
│   │   └── Footer.tsx      # Footer section
│   ├── hooks/          # Custom React hooks
│   │   ├── use-mobile.tsx  # Mobile detection hook
│   │   └── use-toast.ts    # Toast notifications hook
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Main landing page
│   │   └── NotFound.tsx # 404 page
│   ├── App.tsx         # Root component
│   └── main.tsx        # Application entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SASquareTech/SaSqWebsite.git
   cd SaSqWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Running the Project

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code for linting errors:

```bash
npm run lint
```

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations** - Custom animations for enhanced user experience
- **Contact Form** - Integrated with Google Forms for collecting inquiries
- **Global Presence** - Displays office locations in Chennai (India), Cambridge (UK), and New Jersey (US)
- **Dark Mode Support** - Theme switching capability with next-themes
- **SEO Friendly** - Optimized for search engines

## Google Forms Integration

The contact form is configured to submit data to Google Forms. To use your own form:

1. Create a Google Form with fields: Name, Email, Subject, Message
2. Get your form URL and entry IDs
3. Update `src/components/Contact.tsx`:
   - Line 49: Update `GOOGLE_FORM_URL`
   - Lines 50-55: Update `ENTRY_IDS` with your form's entry IDs

For detailed instructions, see the comments in `src/components/Contact.tsx`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

The project can be deployed to various platforms:

- **Vercel** - Recommended for Next.js/Vite apps
- **Netlify** - Simple drag-and-drop deployment
- **GitHub Pages** - Free hosting for static sites
- **Railway** - Modern deployment platform

Simply run `npm run build` and deploy the `dist/` folder.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by SA Square Technologies.

## Contact

For any inquiries, please reach out through our website contact form or email us at arvind@sasquaretech.onmicrosoft.com
