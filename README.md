# Jasmeet Singh - Modern Portfolio Website

A stunning, modern portfolio website built with Next.js and ShadCN UI, featuring a bold yellow and white color scheme, smooth animations, and full accessibility.

## ✨ Features

### Design & Visuals
- 🎨 **Bold Yellow & White Theme** - Eye-catching color scheme with HSL-based design tokens
- ✨ **Smooth Animations** - Framer Motion-powered transitions and micro-interactions
- 📱 **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- 🎭 **Modern UI Components** - Built with ShadCN UI for a polished, professional look

### Sections
- 🏠 **Hero Section** - Large headshot with animated introduction
- 💼 **Projects Showcase** - Grid layout with animated cards featuring tech stack badges
- 👨‍💻 **About Section** - Personal journey and technical expertise
- 📞 **Contact Section** - Multiple CTAs and contact methods
- 🔗 **Footer** - Social media links and site navigation

### Project Features
- 📸 **Image Carousels** - ShadCN carousel component for project screenshots
- 🎬 **Video Support** - Embed demo videos in project detail pages
- 🏷️ **Tech Stack Badges** - Colorful badges showing technologies used
- 🔄 **Project Navigation** - Easy navigation between projects

### Technical
- ⚡ **Next.js 16** - App Router with Server & Client Components
- 🎨 **ShadCN UI** - Component library built on Radix UI primitives
- 🎭 **Framer Motion** - Smooth animations and page transitions
- ♿ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- 🚀 **Performance** - Image optimization, static generation, minimal bundle

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd webportfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Customization

### Personal Information

1. **Update Your Name and Info:**
   - Edit `src/components/HeroSection.tsx` - Update name, title, and bio
   - Edit `src/app/layout.tsx` - Update metadata (title, description)
   - Edit `src/components/AboutSection.tsx` - Update your journey and skills

2. **Add Your Headshot:**
   - Replace `/public/headshot.jpg` with your professional photo
   - Recommended size: 512x512px or larger (square format)

3. **Update Social Links:**
   - Edit `src/components/Footer.tsx` - Update social media URLs
   - Add or remove social platforms as needed

### Projects

1. **Edit Project Data:**
   - Open `src/types/project.ts`
   - Modify the `projects` array with your actual projects
   - Update titles, descriptions, tech stacks, and skills

2. **Add Project Images:**
   - See `/public/IMAGES_README.md` for detailed instructions
   - Add images to `/public/projects/` directory
   - Update image paths in `src/types/project.ts`

3. **Add More Projects:**
   - Add new project objects to the `projects` array
   - Follow the existing structure
   - Images and routes will be generated automatically

### Color Scheme

To change the yellow/white theme:

1. Edit `src/app/globals.css`
2. Modify the CSS variables in `:root`:
```css
:root {
  --primary: 45 100% 51%;  /* Change this for a different primary color */
  /* Use HSL values: hue saturation lightness */
}
```

### Contact Information

Update contact details in:
- `src/components/ContactSection.tsx` - Email and contact methods
- `src/components/Footer.tsx` - Email link

## 📁 Project Structure

```
webportfolio/
├── public/                    # Static files
│   ├── headshot.jpg          # Your profile photo
│   ├── projects/             # Project images and videos
│   └── IMAGES_README.md      # Guide for adding images
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles and theme
│   │   └── projects/
│   │       └── [id]/
│   │           ├── page.tsx  # Project detail page
│   │           └── not-found.tsx
│   ├── components/           # React components
│   │   ├── ui/              # ShadCN UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── carousel.tsx
│   │   ├── Navigation.tsx    # Sticky nav with active section
│   │   ├── HeroSection.tsx   # Hero with headshot
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   └── types/
│       └── project.ts        # Project data and types
├── tailwind.config.ts        # Tailwind configuration
├── postcss.config.mjs        # PostCSS configuration
└── package.json
```

## 🎯 Key Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS framework
- **ShadCN UI** - Component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Embla Carousel** - Carousel functionality

## ♿ Accessibility Features

- Semantic HTML structure (proper heading hierarchy)
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text on all images
- Screen reader friendly
- High contrast yellow/white theme
- Responsive text sizing

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: mobile (< 640px), tablet (640-1024px), desktop (> 1024px)
- Touch-friendly buttons and navigation
- Optimized images for all screen sizes
- Collapsible mobile menu

## 🚀 Performance Optimizations

- Static Site Generation (SSG) for all pages
- Next.js Image component for optimized images
- Code splitting and lazy loading
- Minimal JavaScript bundle
- CSS optimizations with Tailwind
- Proper caching headers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to use this template for your own portfolio! If you find any issues or have suggestions for improvements, please open an issue or pull request.

## 📧 Contact

**Jasmeet Singh**
- Email: jasmeetsingh0502@gmail.com
- LinkedIn: [linkedin.com/in/jasmeetsingh](https://linkedin.com/in/jasmeetsingh)
- GitHub: [github.com/jasmeetsingh](https://github.com/jasmeetsingh)
- Twitter: [@jasmeetsingh](https://twitter.com/jasmeetsingh)

---

Built with ❤️ using Next.js and ShadCN UI
