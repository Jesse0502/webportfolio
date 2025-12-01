# Quick Start Guide

## 🎯 First Steps After Cloning

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
# or
yarn install
```

### 2. Start Development Server
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## ✏️ Personalize Your Portfolio

### Priority 1: Essential Updates

1. **Add Your Headshot** (Most Visible!)
   - Replace `/public/headshot.jpg` with your photo
   - Use a square image (512x512px or larger)
   - JPG or PNG format

2. **Update Your Name**
   - File: `src/components/HeroSection.tsx`
   - Lines 35-36: Update "Jasmeet" and "Singh"
   - Line 42: Update tagline/specialty

3. **Update Contact Email**
   - File: `src/components/ContactSection.tsx`
   - Line 17: Update email address
   - Line 86: Update email link
   - Also update in `src/components/Footer.tsx` (line 10)

4. **Update Social Links**
   - File: `src/components/Footer.tsx`
   - Lines 6-29: Update all social media URLs

### Priority 2: Content Updates

5. **Update Projects**
   - File: `src/types/project.ts`
   - Replace sample projects with your actual projects
   - See structure example below

6. **Update About Section**
   - File: `src/components/AboutSection.tsx`
   - Lines 56-72: Update your personal journey
   - Lines 98-125: Update tech stack badges

7. **Update Metadata**
   - File: `src/app/layout.tsx`
   - Lines 10-13: Update title and description for SEO

### Priority 3: Styling (Optional)

8. **Change Color Scheme**
   - File: `src/app/globals.css`
   - Lines 6-32: Modify color variables
   - Current: Yellow (#FFD500), change HSL values for new colors

## 📝 Project Data Structure

Each project in `src/types/project.ts` should follow this structure:

```typescript
{
  id: "unique-project-id",           // Used in URL: /projects/unique-project-id
  title: "Your Project Title",
  summary: "Short one-line description",
  description: "Detailed multi-paragraph description",
  thumbnail: "/projects/your-thumb.jpg",
  images: [
    "/projects/your-screenshot-1.jpg",
    "/projects/your-screenshot-2.jpg",
  ],
  videoUrl: "/projects/your-demo.mp4", // Optional
  techStack: ["React", "Node.js"],     // Technologies used
  skills: ["Full Stack", "API Design"], // Skills demonstrated
  demoUrl: "https://your-demo.com",    // Optional
  githubUrl: "https://github.com/...", // Optional
}
```

## 🖼️ Adding Project Images

1. Create images folder (if it doesn't exist):
```bash
mkdir -p public/projects
```

2. Add your images:
   - Thumbnails: 800x600px (displayed in project cards)
   - Screenshots: 1200x800px (displayed in carousels)
   - Videos: MP4 format (optional)

3. Update paths in `src/types/project.ts`:
```typescript
thumbnail: "/projects/my-project-thumb.jpg",
images: [
  "/projects/my-project-1.jpg",
  "/projects/my-project-2.jpg",
],
```

## 🚀 Deploy Your Portfolio

### Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically!

### Netlify
1. Build your site: `pnpm build`
2. Drag the `.next` folder to [netlify.com](https://netlify.com)
3. Done!

### Custom Server
```bash
pnpm build
pnpm start
```

## 🎨 Customization Tips

### Change Primary Color
Edit `src/app/globals.css`:
```css
--primary: 45 100% 51%;  /* Yellow */
/* Change to:
--primary: 220 90% 50%;  /* Blue */
--primary: 0 100% 50%;   /* Red */
--primary: 142 76% 36%;  /* Green */
*/
```

### Add More Sections
1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

### Modify Animations
Edit animation settings in components using Framer Motion:
- Adjust `duration` for speed
- Change `delay` for timing
- Modify `initial` and `animate` values

## 🐛 Troubleshooting

### "Image not found" error
- Check image path starts with `/` (e.g., `/projects/image.jpg`)
- Verify image exists in `public` folder
- Image names are case-sensitive

### Styles not applying
- Stop dev server (Ctrl+C)
- Delete `.next` folder: `rm -rf .next`
- Restart: `pnpm dev`

### Build errors
- Check all imports are correct
- Ensure all components export properly
- Run `pnpm build` to see detailed errors

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN UI Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)

## ✅ Launch Checklist

Before going live, make sure you've:

- [ ] Added your headshot
- [ ] Updated all personal information
- [ ] Added your real projects with images
- [ ] Updated all contact information and social links
- [ ] Updated metadata for SEO
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Verified images load properly
- [ ] Run `pnpm build` successfully
- [ ] Tested accessibility (keyboard navigation, screen readers)

---

Need help? Check the main [README.md](README.md) for detailed documentation.


