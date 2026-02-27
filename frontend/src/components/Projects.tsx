import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;
      
      const section = sectionRef.current;
      const scrollPosition = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress within the section
      const progress = Math.max(0, Math.min(1, 
        (scrollPosition - sectionTop + viewportHeight) / 
        (sectionHeight)
      ));
      
      //console.log('Progress:', progress); // Debug log
      
      // Apply dead zone: first 30% does nothing
      if (progress < 0.3) {
        trackRef.current.style.transform = 'translateX(0vw)';
      } else {
        const slideProgress = Math.min(1, (progress - 0.3) / 0.7);
        const translateX = -100 * slideProgress;
        trackRef.current.style.transform = `translateX(${translateX}vw)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectList = [
    {
      slug: "rag-engine",
      name: "Personal Academic RAG Engine",
      period: "Jan 2026 - Feb 2026",
      tech: ["LangChain", "GPT-4o-mini", "ChromaDB"],
      desc: "Indexed 260+ PDFs across 22 NTU modules, reducing LLM hallucination rate by 30% and delivering citation-backed answers for complex coursework queries."
    },
    {
      slug: "audio2tabs",
      name: "Audio2Tabs",
      period: "Aug 2024 - Sep 2024",
      tech: ["DSP", "Fast Fourier Transform", "LSTM"],
      desc: "Designed an end-to-end audio-to-notation inference system converting unstructured acoustic signals into structured instrument tabs."
    },
    {
      slug: "hvac-rl",
      name: "Deep Learning Week Hackathon",
      period: "Mar 2024",
      tech: ["PyTorch", "DQN", "Random Forest"],
      desc: "Developed a PyTorch-based DQN reinforcement learning agent to autonomously optimise building HVAC temperatures. (Top 8 Finalist)"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="relative h-[300vh] bg-white">
      
      {/* The sticky container locks to the screen while you scroll */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto w-full mb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Academic & Personal Projects</h2>
        </div>
        
        {/* The Track: This will translate along the X-axis */}
        <div 
          ref={trackRef} 
          className="flex gap-8 w-[250vw] md:w-[150vw] pl-6 md:pl-12 will-change-transform"
          style={{ transform: 'translateX(0vw)' }}
        >
          {projectList.map((project, index) => (
            <Link 
              to={`/project/${project.slug}`} 
              key={index} 
              className="w-[85vw] md:w-[35vw] shrink-0 group relative p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-100 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer block"
            >
              {/* Subtle hover gradient in the corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <p className="text-xs font-bold text-gray-400 mb-3 tracking-wider uppercase">{project.period}</p>
              <h3 className="text-2xl font-black text-gray-900 mb-5 group-hover:text-blue-600 transition-colors">{project.name}</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1 rounded-md text-xs font-semibold group-hover:bg-white group-hover:border-gray-200 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed flex-grow text-sm md:text-base">
                {project.desc}
              </p>
              
              {/* "Read More" indicator that fades in on hover */}
              <div className="mt-8 flex items-center text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Architecture & Demo →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;