import HeroSection from '../components/Home/HeroSection.jsx'
import HowItWorks from '../components/Home/HowItWorks.jsx';
import DesignStyles from '../components/Home/DesignStyles.jsx';
import Testimonials from '../components/Home/Testimonials.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/navbar.jsx';
import Ai from '../components/Home/Ai.jsx';
import Faq from '../components/Home/Faq.jsx';
import Last from '../components/Last/Last.jsx'
import Feature from '../components/Home/feature.jsx';
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
        <Feature/>
        <Last/>  
        <Faq />    
        <Footer />
     
      </div>
    </>
  );
}