import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/landing/Home'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-4 border-slate-200"></div>
      <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-teal-500 border-t-transparent animate-spin"></div>
    </div>
  </div>
);

import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
