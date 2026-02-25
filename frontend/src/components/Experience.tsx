const Experience = () => {
    const experiences = [
        {
            company: "Groundup.AI",
            role: "AI Intern",
            period: "Jun 2025 - Aug 2025",
            bullets: [
                "Reduced sprint release cycle time by 40% by integrating a TypeScript/React deployment dashboard.",
                "Designed Python pipelines processing 10GB+ of unstructured sensor data, reducing preprocessing time by ~30%.",
                "Increased CV labelling throughput by 25% by standardising CVAT workflows."
            ]
        },
        {
            company: "HTX (Home Team Science & Technology Agency)",
            role: "Cyber Analytics AI Intern",
            period: "Dec 2024 - May 2025",
            bullets: [
                "Deployed Qwen-VL VLMs in Dockerised GPU environments to generate structured text from images.",
                "Architected data-harvesting pipelines at 3x previous throughput.",
                "Built a semantic retrieval system using OpenAI CLIP, cutting manual annotation workloads by 40% across 20,000+ images."
            ]
        },
        {
            company: "HTX & NTU (Industrial FYP)",
            role: "Geolens - Vision-based Trajectory Reconstruction System",
            period: "Aug 2025 - Apr 2026",
            bullets: [
                "Scaled inference throughput by 2x using vLLM with Paged Attention, reducing latency to 0.5s.",
                "Integrated Qwen-VL to extract geo-semantic cues with 85%+ accuracy.",
                "Developed a Monte Carlo Localisation framework achieving sub-50m trajectory reconstruction error."
            ]
        }
    ];

    return (
        <section id="experience" style={{ padding: '5rem 2rem', backgroundColor: '#fafafa' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: '#111' }}>Work Experience & Research</h2>
                {experiences.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '3rem', borderLeft: '3px solid #111', paddingLeft: '1.5rem' }}>
                        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>{exp.company}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', marginBottom: '1rem', fontSize: '0.95rem' }}>
                            <span style={{ fontWeight: '600' }}>{exp.role}</span>
                            <span>{exp.period}</span>
                        </div>
                        <ul style={{ color: '#444', lineHeight: '1.6', paddingLeft: '1rem', margin: 0 }}>
                            {exp.bullets.map((bullet, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;