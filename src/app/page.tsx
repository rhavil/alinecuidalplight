import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Scene0317 } from "@/components/sections/Scene0317";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { Testimonials } from "@/components/sections/Testimonials";
import { Simulator } from "@/components/sections/Simulator";
import { Plans } from "@/components/sections/Plans";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { LinhaViva } from "@/components/LinhaViva";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-night-base">
      <Header />
      {/* Global Meta Feature SVG */}
      <LinhaViva />

      {/* Page Sections */}
      <div className="w-full relative z-10 flex flex-col">
        <Hero />
        <Scene0317 />
        <Solution />
        <HowItWorks />
        <Benefits />
        <AboutDoctor />
        <Testimonials />
        <Simulator />
        <Plans />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
