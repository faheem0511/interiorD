import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks';
import DesignStyles from '../components/DesignStyles';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import Ai from '../components/Ai';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <>

      <div className="font-sans">
        <Navbar />
        <HeroSection />
        <HowItWorks />
        {/* <Ai /> */}
        <DesignStyles />
        <Testimonials />
        <Faq />      
        <Footer />
      </div>
    </>
  );
}