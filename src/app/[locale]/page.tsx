import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import VideoSection from '@/components/sections/VideoSection';
import LogoCloud from '@/components/sections/LogoCloud';
import Features from '@/components/sections/Features';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Collaboration from '@/components/sections/Collaboration';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Integrations from '@/components/sections/Integrations';
import Pricing from '@/components/sections/Pricing';
import Blog from '@/components/sections/Blog';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
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
      </main>
      <Footer />
    </>
  );
}
