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
        <section id="experience" className="py-32 px-6 bg-gray-50 border-y border-gray-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-16 tracking-tight text-center">Experience & Research</h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            {/* Timeline Node */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 group-hover:bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300"></div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col mb-4">
                                    <span className="text-sm font-bold text-blue-600 mb-1">{exp.period}</span>
                                    <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                                    <span className="font-medium text-gray-500 text-sm mt-1">{exp.role}</span>
                                </div>
                                <ul className="list-none space-y-2 text-gray-600 text-sm leading-relaxed">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full group-hover:before:bg-blue-400 transition-colors">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;