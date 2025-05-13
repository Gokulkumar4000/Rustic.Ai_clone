import HeroSection from './components/HeroSection';
import ImageScroller from './components/ImageScroller';
import IndustryCards from './components/IndustryCards';
import AICardGrid from './components/AICardGrid';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import NextStep from './components/NextStep';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImageScroller />
      <IndustryCards/>
      <AICardGrid/>
      <TestimonialsSection/>
      <FaqSection/>
      <NextStep/>
      <Footer/>
    </main>
  );
}
