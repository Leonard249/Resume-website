const Navbar = () => {
    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #eaeaea',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '-1px' }}>
                LO.
            </div>
            <div style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
                <a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
                <a href="#experience" style={{ textDecoration: 'none', color: '#333' }}>Experience</a>
                <a href="#projects" style={{ textDecoration: 'none', color: '#333' }}>Projects</a>
            </div>
        </nav>
    );
};

export default Navbar;