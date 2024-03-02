import AboutSection from "@/components/AboutSection";
import AchievmentsSection from "@/components/AchievmentsSection";
import EmailSection from "@/components/EmailSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AchievmentsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <FooterSection />
    </main>
  );
}
