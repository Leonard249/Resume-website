const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md border-b border-gray-100/50 px-6 py-4 md:px-12 flex justify-between items-center z-50 transition-all duration-300">
            <div className="font-black text-2xl tracking-tighter text-gray-900 select-none group cursor-pointer">
                <span className="text-gray-300 font-light group-hover:text-blue-500 transition-colors">[ </span>
                LO
                <span className="text-gray-300 font-light group-hover:text-blue-500 transition-colors"> ]</span>
            </div>
            <div className="flex gap-6 md:gap-8 font-medium text-sm md:text-base text-gray-500">
                <a href="#about" className="hover:text-gray-900 hover:-translate-y-0.5 transition-all">About</a>
                <a href="#experience" className="hover:text-gray-900 hover:-translate-y-0.5 transition-all">Experience</a>
                <a href="#projects" className="hover:text-gray-900 hover:-translate-y-0.5 transition-all">Projects</a>
            </div>
        </nav>
    );
};

export default Navbar;