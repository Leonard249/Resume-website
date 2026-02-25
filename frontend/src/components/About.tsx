const About = () => {
    return (
        <section id="about" style={{ padding: '5rem 2rem', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#111' }}>About Me</h2>
                <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#444' }}>
                    I have a proven track record across two AI internships deploying Vision-Language Models (VLMs), building Retrieval-Augmented Generation (RAG) pipelines, and engineering production data systems with quantified impact.
                </p>
                <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#444', marginTop: '1rem' }}>
                    My technical stack includes PyTorch, LangChain, OpenCV, YOLO, and vLLM for AI/ML, alongside robust full-stack capabilities using TypeScript, React, and Python.
                </p>
            </div>
        </section>
    );
};

export default About;