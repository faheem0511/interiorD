"use client";
import React, { useState } from 'react';
import { Home, Settings, DollarSign, ShoppingBag, Users } from 'lucide-react';
import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/navbar';

const DecorillaFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState([]);

  const categories = [
    { id: 'general', label: 'General', icon: Home },
    { id: 'process', label: 'Process', icon: Settings },
    { id: 'pricing', label: 'Pricing & Fees', icon: DollarSign },
    { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
    { id: 'designers', label: 'Designers', icon: Users }
  ];

  const faqs = {
    general: [
      {
        question: "What is Decorilla?",
        answer: "Decorilla is an online interior design service that connects you with professional designers to transform your space. We offer multiple design concept proposals from professional designers, a fun and simple experience prioritizing top customer service, exclusive discounts of up to 45% at over 200 top retailers and vendors, an accomplished team of designers that has been carefully selected and vetted, fixed prices that are 80% less than traditional interior design, a 100% satisfaction guarantee, 3D & VR realistic design concepts, and in-home assistance in most major cities across the US."
      },
      {
        question: "Does Decorilla use AI interior design?",
        answer: "Yes, Decorilla offers AI-enhanced interior design, combining cutting-edge technology with the creativity of top-tier human designers. Our technology helps generate accurate 3D renderings, streamline design workflows, and match clients with the best interior designers for their style and project needs. But what sets Decorilla apart is our human-first approach. Every Decorilla project is led by a professional interior designer who brings personal insight, style expertise, and tailored guidance—something AI alone can't replicate."
      },
      {
        question: "What's included in a Decorilla design package?",
        answer: "Each package includes: Multiple Concept Proposals from Top Designers - Professional designers will submit tailored concepts based on your preferences. Realistic 3D renderings prepared on interior design software. Floor Plan and Furniture Placement for effective and aesthetically pleasing spatial layouts. Itemized shopping list with discounts and access to our complimentary personal shopping service. Color palette recommendations for paint colors or wallpaper. Tips and implementation guide to keep you organized during the decorating process."
      },
      {
        question: "Can I purchase a Decorilla gift certificate?",
        answer: "Yes! Decorilla gift certificates are a fantastic way to treat friends and family to a home or office makeover with top interior designers. They're instant and beautifully presented, come with a 100% satisfaction guarantee, and include a complimentary discovery call. Choose a design package or set a custom amount, send it directly to your recipient, and they can redeem easily by contacting gift@decorilla.com."
      },
      {
        question: "How does Decorilla compare to traditional interior design?",
        answer: "At Decorilla, we pride ourselves on offering interior design services that match or surpass the traditional interior design process. Our innovative online platform enables us to provide services that are both flexible and cost-effective. You'll receive detailed 3D renderings, comprehensive layout plans, and access to exclusive trade discounts, all ensuring a high-quality design experience. Moreover, you can enjoy all these benefits from the comfort of your home at prices 80% less than traditional interior design."
      }
    ],
    process: [
      {
        question: "How does the Decorilla process work?",
        answer: "Our process is simple: First, complete a quick style quiz and room survey. Next, we match you with 2-3 designers who create custom concepts for your space. You choose your favorite concept, and that designer completes your full design with 3D renderings, shopping lists, and implementation guides. Finally, you purchase items at your own pace and bring your design to life."
      },
      {
        question: "How long does the design process take?",
        answer: "The typical timeline is 7-10 days for initial concepts and 10-14 days for the final design package. However, timelines can vary based on your responsiveness and the complexity of your project. We work at your pace to ensure you're completely satisfied."
      },
      {
        question: "What information do I need to provide?",
        answer: "You'll need to provide room measurements, photos of your space, information about your style preferences, budget for furnishings, and any specific needs or challenges. The more information you provide, the better we can tailor your design."
      },
      {
        question: "Can I request revisions?",
        answer: "Absolutely! All our packages include revision rounds. You can request changes to layouts, furniture selections, colors, and styling. We work with you until you're completely satisfied with your design."
      },
      {
        question: "What happens after I receive my design?",
        answer: "Once your items arrive, follow the implementation guide for arranging and styling your space. If you have any questions, our design team is here to support you. We can also help by coordinating with contractors and helping you find the best one for your project."
      }
    ],
    pricing: [
      {
        question: "How much do Decorilla design packages cost?",
        answer: "Our design packages have a flat rate based on the room type and the level of design expertise you choose (Bronze, Silver, or Gold). Packages typically range from $549 to $1,799 per room. The package price includes all the design services outlined in the package description, such as initial concepts, revisions, 3D renderings, a shopping list, and design guidance."
      },
      {
        question: "Does the package price include furniture and decor?",
        answer: "No, the package price does not include the cost of purchasing furniture, decor, or other items for your space. That would be an additional expense. The shopping list provided by your designer will include recommended items and their costs, but it will be up to you to make the purchases at your own pace."
      },
      {
        question: "What are the trade discounts?",
        answer: "Decorilla clients receive exclusive discounts of up to 45% at over 200 top retailers and vendors. These trade discounts can save you hundreds or thousands of dollars on furniture and decor purchases, often offsetting the cost of the design package itself."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No, we believe in transparent pricing. The package price you see is what you pay for design services. The only additional costs would be the furniture and decor items you choose to purchase from your shopping list."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment options to make professional interior design accessible. Contact our team to discuss payment plan options that work for your budget."
      }
    ],
    shopping: [
      {
        question: "Do I have to buy everything at once?",
        answer: "Not at all! You can purchase items on your own timeline as your budget permits. Your shopping list will be organized by priority, so you can buy the most important pieces first and add others over time."
      },
      {
        question: "Can I use my own furniture?",
        answer: "Absolutely! We encourage incorporating pieces you already own and love. Just let your designer know which items you want to keep, and they'll work them into your new design."
      },
      {
        question: "Where do I purchase the items?",
        answer: "Your designer will provide a detailed shopping list with direct links to purchase items from various retailers. We work with over 200 vendors, and you'll receive exclusive trade discounts at most of them. You can purchase items wherever you prefer."
      },
      {
        question: "What if an item is out of stock?",
        answer: "If an item becomes unavailable, simply contact your designer. They'll help you find a comparable alternative that fits your design and budget."
      },
      {
        question: "Can Decorilla handle the purchasing for me?",
        answer: "Yes! We offer white-glove service where we can handle purchasing, delivery coordination, and even installation. This service is available for an additional fee in most major cities."
      }
    ],
    designers: [
      {
        question: "Who are Decorilla's designers?",
        answer: "Our designers are professionally trained interior designers with degrees from accredited design schools and years of industry experience. Each designer goes through a rigorous vetting process and maintains a portfolio of successful projects. We have designers specializing in various styles, from modern to traditional."
      },
      {
        question: "How are designers matched to my project?",
        answer: "Based on your style quiz and project details, our algorithm matches you with 2-3 designers whose expertise and aesthetic align with your preferences. You review their portfolios and choose which designer you'd like to work with."
      },
      {
        question: "Can I request a specific designer?",
        answer: "Yes! If you've seen work from a specific Decorilla designer that you love, you can request to work with them when starting your project, subject to their availability."
      },
      {
        question: "How do I communicate with my designer?",
        answer: "You'll communicate with your designer through our secure online platform. You can exchange messages, share photos and inspiration, and review designs all in one place. Many designers also offer video calls for a more personal connection."
      },
      {
        question: "What if I'm not satisfied with my designer?",
        answer: "We offer a 100% satisfaction guarantee. If you're not happy with your initial concepts, we can match you with a different designer at no additional cost. Your satisfaction is our top priority."
      }
    ]
  };

  const toggleQuestion = (index) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-screen md:max-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative h-full flex items-center justify-center px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif text-white mb-4 md:mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto px-4">
              Explore and get to know more about Decorilla
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-[#D4C4B0] bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-start md:justify-center gap-4 md:gap-8 overflow-x-auto py-4 md:py-6 no-scrollbar">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenQuestions([]);
                  }}
                  className={`flex items-center gap-2 md:gap-3 pb-3 md:pb-4 border-b-2 whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'border-[#A78A68] text-[#7A6245]'
                      : 'border-transparent text-gray-600 hover:text-[#A78A68]'
                  }`}
                >
                  <Icon size={18} className={activeCategory === cat.id ? 'text-[#A78A68]' : ''} />
                  <span className="text-sm md:text-base font-medium">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {faqs[activeCategory].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-[#E8DFD4] overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-5 md:py-8 px-5 md:px-8 flex items-start justify-between text-left group hover:bg-[#FAF8F5] transition-colors"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-900 pr-4 md:pr-8 leading-relaxed group-hover:text-[#A78A68] transition-colors">
                    {faq.question}
                  </h3>
                  <span 
                    className={`text-2xl md:text-3xl flex-shrink-0 transition-all duration-300 ${
                      openQuestions.includes(index) 
                        ? 'rotate-45 text-[#7A6245]' 
                        : 'text-[#A78A68]'
                    }`}
                  >
                    +
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openQuestions.includes(index) ? 'max-h-screen pb-5 md:pb-8' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 md:px-8">
                    <div className="pt-2 border-t border-[#E8DFD4]">
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-3 md:mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <Footer />

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DecorillaFAQ;