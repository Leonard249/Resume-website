import { Link } from 'react-router-dom';

const Projects = () => {
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
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 tracking-tight">Academic & Personal Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <Link 
              to={`/project/${project.slug}`} 
              key={index} 
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer block"
            >
              
              {/* Subtle hover gradient in the corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <p className="text-xs font-bold text-gray-400 mb-2 tracking-wider uppercase">{project.period}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{project.name}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1 rounded-md text-xs font-semibold group-hover:bg-white group-hover:border-gray-200 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed flex-grow text-sm">
                {project.desc}
              </p>
              
              {/* "Read More" indicator that fades in on hover */}
              <div className="mt-6 flex items-center text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Project Details →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;