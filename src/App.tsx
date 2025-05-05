import React, { useEffect } from 'react';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import HostHighlight from './components/HostHighlight';
import LearningTopics from './components/LearningTopics';
import EventSchedule from './components/EventSchedule';
import Speakers from './components/Speakers';
import Testimonials from './components/Testimonials';
import TicketPricing from './components/TicketPricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Imersão Construindo Milionários | Alphaville/SP";
    
    // Add custom styling for navy color
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --navy-50: #f0f4f9;
        --navy-100: #d9e2f0;
        --navy-200: #b3c5e1;
        --navy-300: #8da8d2;
        --navy-400: #668bc3;
        --navy-500: #406eb4;
        --navy-600: #335890;
        --navy-700: #26426c;
        --navy-800: #1a2c48;
        --navy-900: #0d1624;
      }
      
      .bg-navy-50 { background-color: var(--navy-50); }
      .bg-navy-100 { background-color: var(--navy-100); }
      .bg-navy-200 { background-color: var(--navy-200); }
      .bg-navy-300 { background-color: var(--navy-300); }
      .bg-navy-400 { background-color: var(--navy-400); }
      .bg-navy-500 { background-color: var(--navy-500); }
      .bg-navy-600 { background-color: var(--navy-600); }
      .bg-navy-700 { background-color: var(--navy-700); }
      .bg-navy-800 { background-color: var(--navy-800); }
      .bg-navy-900 { background-color: var(--navy-900); }
      
      .text-navy-50 { color: var(--navy-50); }
      .text-navy-100 { color: var(--navy-100); }
      .text-navy-200 { color: var(--navy-200); }
      .text-navy-300 { color: var(--navy-300); }
      .text-navy-400 { color: var(--navy-400); }
      .text-navy-500 { color: var(--navy-500); }
      .text-navy-600 { color: var(--navy-600); }
      .text-navy-700 { color: var(--navy-700); }
      .text-navy-800 { color: var(--navy-800); }
      .text-navy-900 { color: var(--navy-900); }
      
      .border-navy-900 { border-color: var(--navy-900); }
      
      .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
        background-size: 20px 20px;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="font-sans">
      <Hero />
      <VideoSection />
      <HostHighlight />
      <LearningTopics />
      <EventSchedule />
      <Speakers />
      <Testimonials />
      <TicketPricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;