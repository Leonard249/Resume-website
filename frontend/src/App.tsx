import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import InteractiveCursor from './components/cursor/interactiveCursor';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900 relative">
      <InteractiveCursor />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />

      <footer id="contact" className="py-16 px-6 bg-gray-900 text-center text-gray-400 text-sm">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
          <div className="font-black text-xl tracking-tighter text-white select-none opacity-50">
            <span className="font-light">[</span> LO <span className="font-light">]</span>
          </div>
          <p>leonarddokj@gmail.com</p>
          <p className="opacity-50">© 2026 Leonard Ong. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;