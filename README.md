# bogryashovDev Portfolio

A modern, high-performance portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark "wet asphalt" theme with yellow accents, showcasing clean code and clear design principles.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── work/              # Portfolio pages
│   │   └── [slug]/        # Individual project pages
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   └── terms/             # Terms of service
├── components/            # React components
│   ├── UI/               # Reusable UI components
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   └── ...               # Other components
└── lib/                  # Utilities and data
    ├── projects.ts       # Project data
    ├── copy.ts          # Text content
    └── utils.ts         # Helper functions
```

## 🎨 Design System

### Colors
- **Background**: `#0F1114` (Wet asphalt)
- **Surface 1**: `#13171C`
- **Surface 2**: `#171C22`
- **Border**: `#252C34`
- **Text**: `#F2F5F7`
- **Muted**: `#A9B2BD`
- **Accent**: `#F5C542` (Yellow)
- **Accent Hover**: `#FFD24D`

### Typography
- **Font**: Inter (system fallback)
- **Headings**: Bold, clean hierarchy
- **Body**: Optimized for readability

## 📝 Content Management

### Adding New Projects

1. Open `src/lib/projects.ts`
2. Add your project to the `PROJECTS` array:

```typescript
{
  slug: "your-project-slug",
  title: "Your Project Title",
  url: "https://your-project-url.com",
  category: "Restaurant", // Choose from available categories
  summary: "Brief project description.",
  tags: ["Website", "Frontend"],
  image: "/images/your-project.jpg",
  goals: ["Goal 1", "Goal 2", "Goal 3"],
  contribution: ["What you did 1", "What you did 2"],
  outcome: ["Result 1", "Result 2", "Result 3"]
}
```

3. Add your project image to `public/images/`
4. The project will automatically appear on the work page

### Updating Text Content

Edit `src/lib/copy.ts` to update:
- Hero section text
- Service descriptions
- Testimonials
- About page content
- Contact information

### Available Categories

- All
- Restaurant
- Retail
- Real Estate
- Industrial
- Healthcare
- Legal
- Education
- Beauty
- Architecture
- Lifestyle

## 🎯 Performance & SEO

The site is optimized for:
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Structured data, meta tags, sitemap

## 🔧 Customization

### Changing Colors

Update CSS variables in `src/app/globals.css`:

```css
:root {
  --bg: #0F1114;           /* Background */
  --accent: #F5C542;       /* Accent color */
  /* ... other colors */
}
```

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` with your content
3. Update navigation in `src/components/Header.tsx`

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
# Build the project
npm run build

# The output will be in the .next folder
# Deploy the .next folder to your hosting platform
```

## 📄 License

This project is for personal portfolio use. Feel free to use as inspiration for your own portfolio.

## 🤝 Contributing

This is a personal portfolio project. If you find any issues or have suggestions, please open an issue.

## 📞 Contact

- **Email**: hello@bogryashov.dev
- **Telegram**: @bogryashovdev
- **Website**: https://bogryashov.dev

---

Built with ❤️ by Vladimir Bogryashov