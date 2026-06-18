import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { FloatingWhatsApp } from './components/UI/FloatingButtons';

// Component to scroll window to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

// Helper to handle lazy loading chunk errors (e.g. after deployments where old hashes are removed)
const lazyWithRetry = (componentImport: () => Promise<{ default: React.ComponentType<any> }>) => {
  return React.lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error("Error al cargar la sección de la página. Recargando...", error);
      window.location.reload();
      // Return a promise that doesn't resolve to hold the loader state until the page reloads
      return new Promise<{ default: React.ComponentType<any> }>(() => {});
    }
  });
};

const Home = lazyWithRetry(() => import('./pages/Home'));
const About = lazyWithRetry(() => import('./pages/About'));
const Products = lazyWithRetry(() => import('./pages/Products'));
const ProductDetail = lazyWithRetry(() => import('./pages/ProductDetail'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const FAQ = lazyWithRetry(() => import('./pages/FAQ'));
const Markets = lazyWithRetry(() => import('./pages/Markets'));

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100]">
      <div 
        className="h-full bg-orange-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-800">
        <ScrollProgress />
        <Header />
        <main className="flex-grow">
          <React.Suspense fallback={
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
              <p className="mt-4 text-gray-500 font-medium animate-pulse">Cargando...</p>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/productos/:id" element={<ProductDetail />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mercados" element={<Markets />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;

