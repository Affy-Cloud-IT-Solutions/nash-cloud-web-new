import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = ["Home", "About Us", "Services", "Contact Us"];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled
                    ? "backdrop-blur-2xl bg-[rgba(13,71,161,0.15)] border-b border-[#00B4FF]/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                    : "backdrop-blur-md bg-[rgba(13,71,161,0.08)] border-b border-[#00B4FF]/10"
                }`}
        >
            {/* Animated gradient strip */}
            <div className="h-[3px] bg-gradient-to-r from-[#0d47a1] via-[#00B4FF] to-[#0d47a1] animate-gradientFlow" />

            <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
                {/* Logo */}
                <div className="relative text-2xl md:text-3xl font-extrabold tracking-wide text-white drop-shadow-md">
                    <span className="text-[#00B4FF] animate-pulse-slow">Nash</span> Cloud IT Solutions
                    <div className="absolute -bottom-2 left-0 w-10 h-[2px] bg-[#00B4FF]/80 rounded-full animate-expand"></div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-10 text-gray-200 font-medium">
                    {navItems.map((item) => (
                        <li key={item} className="relative group">
                            <a
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className="text-gray-300 hover:text-[#00B4FF] transition-all duration-500"
                            >
                                {item}
                            </a>
                            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] transition-all duration-500 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div
                    className="md:hidden flex flex-col justify-center items-center cursor-pointer space-y-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span
                        className={`w-7 h-[2px] bg-white transition-all duration-500 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""
                            }`}
                    ></span>
                    <span
                        className={`w-7 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                            }`}
                    ></span>
                    <span
                        className={`w-7 h-[2px] bg-white transition-all duration-500 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                            }`}
                    ></span>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col items-center space-y-6 py-6 backdrop-blur-xl bg-[rgba(6,25,67,0.7)] border-t border-[#00B4FF]/20 shadow-[inset_0_0_20px_rgba(0,180,255,0.1)] text-gray-100 font-medium text-lg">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className="hover:text-[#00B4FF] transition-all duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
