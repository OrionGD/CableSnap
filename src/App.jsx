import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import DemoSection from './components/DemoSection';
import BenefitsSection from './components/BenefitsSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DemoSection />
        <BenefitsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
