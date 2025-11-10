import React, { useEffect, useState } from "react";

const HeroSection = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="home"
            className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))]"
        >
            {/* --- Layered motion background gradients --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(13,71,161,0.3),transparent_50%)] animate-bgPulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,180,255,0.2),transparent_60%)] animate-bgPulseReverse"></div>

            {/* --- Animated energy rings --- */}
            <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 border border-[#00B4FF]/20 rounded-full animate-ringSpin"></div>
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 border border-[#0D47A1]/20 rounded-full animate-ringSpinReverse"></div>

            {/* --- Text Content --- */}
            <div
                className={`relative z-10 px-6 text-white max-w-3xl transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-wide drop-shadow-[0_0_20px_rgba(0,180,255,0.3)]">
                    Transforming <span className="text-[#00B4FF]">Ideas</span> into
                    Digital Reality
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    We empower enterprises with end-to-end cloud, SAP, and automation
                    solutions — driving innovation and business excellence.
                </p>

                <button className="relative px-10 py-4 font-semibold text-white bg-gradient-to-r from-[#0d47a1] to-[#00B4FF] rounded-full overflow-hidden group transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,180,255,0.6)] hover:scale-105">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
                </button>
            </div>

            {/* --- Floating Glow Orbs --- */}
            <div className="absolute top-[15%] right-[10%] w-24 h-24 bg-[#00B4FF]/20 blur-3xl rounded-full animate-floatSlow"></div>
            <div className="absolute bottom-[10%] left-[15%] w-40 h-40 bg-[#0D47A1]/25 blur-3xl rounded-full animate-floatReverse"></div>
        </section>
    );
};

export default HeroSection;
