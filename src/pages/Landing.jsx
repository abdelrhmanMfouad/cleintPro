import Hero from '../component/Hero';
import Features from '../component/Features';
import Stats from '../component/Stats';
import CTA from '../component/CTA';

export default function Landing() {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <CTA />
    </div>
  );
}