import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Collaboration from "@/components/sections/Collaboration";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Integrations from "@/components/sections/Integrations";
import Pricing from "@/components/sections/Pricing";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LogoCloud />
      <Features />
      <Stats />
      <Testimonials />
      <Collaboration />
      <WhatWeDo />
      <Integrations />
      <Pricing />
      <Blog />
      <FAQ />
      <Footer />
    </main>
  );
}
