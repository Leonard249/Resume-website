const Hero = () => {
    return (
        <section id="hero" style={{ padding: '8rem 2rem', textAlign: 'center', backgroundColor: '#fafafa', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-1px', color: '#111' }}>
                Hi, I'm Leonard Ong
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                Final-year Computer Science student at NTU (graduating Aug 2026) specialising in AI/ML and Computer Vision.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="https://github.com/Leonard249" target="_blank" rel="noreferrer" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#24292e', color: '#fff', textDecoration: 'none', borderRadius: '6px' }}>GitHub</a>
                <a href="https://linkedin.com/in/leonard-ong249/" target="_blank" rel="noreferrer" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#0077b5', color: '#fff', textDecoration: 'none', borderRadius: '6px' }}>LinkedIn</a>
            </div>
        </section>
    );
};

export default Hero;