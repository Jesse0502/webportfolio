# Adding Your Own Images

This portfolio currently uses CSS-based placeholder images. Follow these instructions to add your own project images and headshot.

## Headshot Image

Add your professional headshot to `/public/headshot.jpg`:
- Recommended size: 512x512px or larger (square)
- Format: JPG or PNG
- After adding the image, update `src/components/HeroSection.tsx` (around line 127) to use the actual image instead of the placeholder

## Project Images

For each project, add images to `/public/projects/`:

### E-Commerce Platform
- `/public/projects/ecommerce-thumb.jpg` (800x600px)
- `/public/projects/ecommerce-1.jpg` (1200x800px)
- `/public/projects/ecommerce-2.jpg` (1200x800px)
- `/public/projects/ecommerce-3.jpg` (1200x800px)
- `/public/projects/ecommerce-demo.mp4` (optional video)

### AI Content Generator
- `/public/projects/ai-content-thumb.jpg` (800x600px)
- `/public/projects/ai-content-1.jpg` (1200x800px)
- `/public/projects/ai-content-2.jpg` (1200x800px)

### Fitness Tracker
- `/public/projects/fitness-thumb.jpg` (800x600px)
- `/public/projects/fitness-1.jpg` (1200x800px)
- `/public/projects/fitness-2.jpg` (1200x800px)
- `/public/projects/fitness-3.jpg` (1200x800px)

### Project Manager
- `/public/projects/pm-thumb.jpg` (800x600px)
- `/public/projects/pm-1.jpg` (1200x800px)
- `/public/projects/pm-2.jpg` (1200x800px)

## Updating Project Data

After adding your images, update the image paths in `src/types/project.ts`:

1. Update the `thumbnail` and `images` arrays to use your local paths
2. Set `usePlaceholder: false` or remove the `usePlaceholder` property
3. Add or remove `videoUrl` as needed

Example:
```typescript
{
  id: "your-project",
  title: "Your Project",
  thumbnail: "/projects/your-project-thumb.jpg",
  images: [
    "/projects/your-project-1.jpg",
    "/projects/your-project-2.jpg",
  ],
  videoUrl: "/projects/your-project-demo.mp4", // optional
  usePlaceholder: false, // or remove this line entirely
  // ... rest of project data
}
```

**Note:** If you keep `usePlaceholder: true` or don't add images, the portfolio will use CSS-based placeholders automatically.

## Image Optimization Tips

- Use WebP format when possible for better performance
- Compress images before adding them (use tools like TinyPNG or Squoosh)
- Ensure images are properly sized (don't use huge images)
- Add descriptive alt text in the components for accessibility

