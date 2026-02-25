const Projects = () => {
    const projectList = [
        {
            name: "Personal Academic RAG Engine",
            period: "Jan 2026 - Feb 2026",
            tech: ["LangChain", "GPT-4o-mini", "ChromaDB"],
            desc: "Indexed 260+ PDFs across 22 NTU modules, reducing LLM hallucination rate by 30% for coursework queries."
        },
        {
            name: "Audio2Tabs",
            period: "Aug 2024 - Sep 2024",
            tech: ["DSP", "Fast Fourier Transform", "LSTM"],
            desc: "Designed an end-to-end audio-to-notation inference system converting acoustic signals into structured instrument tabs."
        },
        {
            name: "Deep Learning Week Hackathon (Top 8 Finalist)",
            period: "Mar 2024",
            tech: ["PyTorch", "DQN", "Random Forest"],
            desc: "Developed a PyTorch-based DQN reinforcement learning agent to autonomously optimise building HVAC temperatures."
        }
    ];

    return (
        <section id="projects" style={{ padding: '5rem 2rem', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: '#111' }}>Academic & Personal Projects</h2>
                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {projectList.map((project, index) => (
                        <div key={index} style={{ padding: '1.5rem', border: '1px solid #eaeaea', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <h3 style={{ margin: '0 0 0.5rem 0' }}>{project.name}</h3>
                            <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>{project.period}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                {project.tech.map(t => (
                                    <span key={t} style={{ backgroundColor: '#f5f5f5', color: '#333', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '500' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <p style={{ color: '#555', lineHeight: '1.5', margin: 0 }}>{project.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;