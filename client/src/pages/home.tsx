import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { TechnologySection } from "@/components/technology-section";
import { GallerySection } from "@/components/gallery-section";
import { TeamSection } from "@/components/team-section";
import { DownloadSection } from "@/components/download-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
      <GallerySection />
      <TeamSection />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
