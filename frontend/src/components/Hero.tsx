const Hero = () => {
    return (
        <section id="hero" className="relative px-6 py-32 text-center min-h-[70vh] flex flex-col justify-center items-center overflow-hidden bg-white">

            {/* 1. The High-Tech Dot Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
            </div>

            {/* 2. The Subtle Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

            {/* 3. The Content (Pulled to the front with z-10) */}
            <div className="relative z-10 flex flex-col items-center">
                <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
                    Computer Vision & AI
                </p>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-6">
                    Hi, I'm Leonard Ong
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-10">
                    Final-year Computer Science student at NTU (graduating Aug 2026) specialising in deploying LLMs and building real-world AI pipelines.
                </p>

                <div className="flex gap-4">
                    <a href="#projects"
                        className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25">
                        View My Work
                    </a>
                    <a href="https://github.com/Leonard249" target="_blank" rel="noreferrer"
                        className="px-8 py-3 bg-white text-gray-900 border border-gray-200 font-medium rounded-full hover:border-gray-400 transition-all shadow-sm">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/leonard-ong249/" target="_blank" rel="noreferrer"
                        className="px-8 py-3 bg-[#0077b5] text-white border font-medium rounded-full hover:bg-[#006396] transition-colors shadow-sm">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;