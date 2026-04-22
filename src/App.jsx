import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';

import Header       from './components/Header/Header';
import Hero         from './components/Hero/Hero';
import About        from './components/About/About';
import Lifestyle    from './components/Lifestyle/Lifestyle';
import Products     from './components/Products/Products';
import Benefits     from './components/Benefits/Benefits';
import WineShowcase from './components/WineShowcase/WineShowcase';
import CTA          from './components/CTA/CTA';
import Footer       from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';

import VipPage from './pages/VipPage';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Lifestyle />
        <Products />
        <Benefits />
        <WineShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"    element={<MainPage />} />
        <Route path="/vip" element={<VipPage />} />
      </Routes>
    </BrowserRouter>
  );
}
