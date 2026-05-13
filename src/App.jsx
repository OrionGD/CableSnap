import './index.css';

import CyberGridBackground from './components/CyberGridBackground';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import DemoSection from './components/DemoSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import SpecsSection from './components/SpecsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CyberGridBackground />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DemoSection />
        <FeaturesSection />
        <BenefitsSection />
        <SpecsSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;

