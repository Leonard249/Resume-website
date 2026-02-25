import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import InteractiveCursor from './components/cursor/InteractiveCursor';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/scroll/ScrollToTop';

function App() {
  return (
    // 1. BrowserRouter MUST be the top-level wrapper
    <BrowserRouter>
      /<ScrollToTop /> 
      
      <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900 relative flex flex-col min-h-screen">
        <InteractiveCursor />
        
        {/* 2. Navbar is INSIDE BrowserRouter so it can use Links/NavLinks */}
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </div>
        
        <footer id="contact" className="py-16 px-6 bg-gray-900 text-center text-gray-400 text-sm">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
            <div className="font-black text-xl tracking-tighter text-white select-none opacity-50">
              <span className="font-light">[</span> LO <span className="font-light">]</span>
            </div>
            <p>leonarddokj@gmail.com</p>
            <p className="opacity-50">© 2026 Leonard Ong.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;