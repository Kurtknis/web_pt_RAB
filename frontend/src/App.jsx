import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import StickyCtaMobile from './components/StickyCtaMobile';
import './App.css';

const StaticHome = lazy(() => import('./pages/StaticHome'));
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Furniture = lazy(() => import('./pages/Furniture'));
const Clients = lazy(() => import('./pages/Clients'));
const Consultation = lazy(() => import('./pages/Consultation'));
const Contact = lazy(() => import('./pages/Contact'));

// Scroll to top or hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {


  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <SEO />
        <div className="app">
          <Navbar />
          <StickyCtaMobile />
          <Suspense fallback={<div className="route-loader">Loading studio experience...</div>}>
            <Routes>
              <Route path="/" element={<StaticHome />} />
              <Route path="/home-full" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/layanan" element={<Services />} />
              <Route path="/layanan/:serviceId" element={<ServiceDetail />} />
              <Route path="/furnitur" element={<Furniture />} />
              <Route path="/harga" element={<Pricing />} />
              <Route path="/galeri" element={<Gallery />} />
              <Route path="/klien" element={<Clients />} />
              <Route path="/konsultasi" element={<Consultation />} />
              <Route path="/kontak" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
        <Analytics />
      </Router>
    </LanguageProvider>
  );
}

export default App;
