const About = () => {
    return (
        <section id="about" className="relative py-32 px-6 bg-white overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 space-y-8 text-lg text-gray-600 leading-relaxed">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">models and reality </span>
                    </h2>
                    <p>
                        I have a proven track record across two AI internships deploying Vision-Language Models (VLMs), building Retrieval-Augmented Generation (RAG) pipelines, and engineering production data systems with quantified impact.
                    </p>
                    <p>
                        My technical stack includes PyTorch, LangChain, OpenCV, YOLO, and vLLM for AI/ML, alongside robust full-stack capabilities using TypeScript, React, and Python.
                    </p>
                </div>

                <div className="hidden md:flex w-72 h-72 relative justify-center items-center group">
                    <div className="absolute inset-0 border border-gray-200 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-blue-300 transition-colors duration-700"></div>
                    <div className="absolute inset-4 border border-dashed border-gray-300 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="w-16 h-16 bg-white border-4 border-gray-100 rounded-full shadow-2xl flex justify-center items-center z-10 group-hover:border-blue-500 transition-colors duration-700">
                        <div className="w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;