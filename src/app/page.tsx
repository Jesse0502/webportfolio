import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { InteractiveShootingStars } from "@/components/InteractiveShootingStars";

export default function Home() {
  return (
    <main>
      {/* Interactive Shooting Stars - Behind Everything */}
      <InteractiveShootingStars />

      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
