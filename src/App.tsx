import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { Conversation } from './pages/Conversation';
import { Feasibility } from './pages/Feasibility';
import { Funding } from './pages/Funding';
import { ActionPlan } from './pages/ActionPlan';

// Helper component to scroll window to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background font-sans antialiased text-foreground">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/conversation" element={<Conversation />} />
            <Route path="/feasibility" element={<Feasibility />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/action-plan" element={<ActionPlan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
