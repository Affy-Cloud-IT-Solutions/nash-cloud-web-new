import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
    {
        id: 1,
        title: "SAP Services",
        subtitle:
            "Empowering enterprises with seamless SAP integration and business intelligence.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        link: "/sap-services",
    },
    {
        id: 2,
        title: "IT Solutions",
        subtitle:
            "Driving efficiency through intelligent automation and innovative IT delivery.",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
        link: "/it-solutions",
    },
    {
        id: 3,
        title: "Resourcing & Consulting",
        subtitle:
            "Delivering expertise and talent that help organizations achieve operational excellence.",
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
        link: "/resourcing",
    },
    {
        id: 4,
        title: "Internal Product",
        subtitle:
            "Building high-performing, scalable, and user-centric digital solutions for enterprises.",
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
        link: "/internal-product",
    },
    {
        id: 5,
        title: "Opportunities & Training",
        subtitle:
            "Shaping future-ready talent through guided mentorship and real-world learning.",
        img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
        link: "/opportunities",
    },
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden text-white pt-20 md:pt-32">
            {/* === BACKGROUND === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
                }}
            ></div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(6,25,67,0.95),_rgba(7,12,28,0.98))]"></div>

            {/* Ambient Glows */}
            <div className="absolute top-[20%] right-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#00B4FF]/25 blur-[180px] rounded-full"></div>
            <div className="absolute bottom-[10%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0D47A1]/30 blur-[200px] rounded-full"></div>

            {/* Header */}
            <div className="text-center mb-8 z-10 max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#00B4FF] mb-4 drop-shadow-[0_0_15px_rgba(0,180,255,0.4)]">
                    Our Expertise
                </h1>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                    Delivering excellence across{" "}
                    <span className="text-[#00B4FF] font-semibold">
                        SAP, IT, and Digital Consulting
                    </span>{" "}
                    — empowering businesses to evolve, scale, and succeed through
                    innovation.
                </p>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                    At{" "}
                    <span className="text-[#00B4FF] font-medium">
                        Nash Cloud IT Solutions
                    </span>
                    , we bring together technology expertise, strategic insight, and
                    modern design thinking to build solutions that enhance productivity,
                    accelerate digital transformation, and ensure long-term business
                    value.
                </p>
            </div>

            {/* === Carousel === */}
            <div className="relative w-full flex justify-center items-center perspective-[1200px] h-[400px] sm:h-[460px] md:h-[500px] lg:h-[540px] z-10 mt-6 md:mt-8">
                {slides.map((slide, index) => {
                    const position = (index - current + slides.length) % slides.length;
                    let transform = "";
                    let opacity = 1;
                    let scale = 1;

                    if (position === 0) {
                        transform = "translateZ(200px)";
                        scale = 1.05;
                        opacity = 1;
                    } else if (position === 1 || position === slides.length - 1) {
                        transform = `translateX(${position === 1 ? "200px" : "-200px"
                            }) rotateY(${position === 1 ? "-20deg" : "20deg"}) translateZ(40px)`;
                        scale = 0.9;
                        opacity = 0.8;
                    } else {
                        transform = `translateX(${position === 2 ? "350px" : "-350px"
                            }) rotateY(${position === 2 ? "-35deg" : "35deg"}) translateZ(-180px)`;
                        scale = 0.8;
                        opacity = 0.3;
                    }

                    return (
                        <Link
                            to={slide.link}
                            key={slide.id}
                            className="absolute w-[240px] sm:w-[280px] md:w-[360px] lg:w-[400px] h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] rounded-3xl overflow-hidden text-center transition-all duration-700 ease-in-out transform-gpu group hover:scale-[1.05]"
                            style={{
                                transform,
                                opacity,
                                scale,
                                zIndex: position === 0 ? 10 : 5 - Math.abs(position),
                            }}
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/85 backdrop-blur-md rounded-3xl shadow-[0_4px_25px_rgba(255,255,255,0.15)] border border-white/20"></div>

                            {/* Image Section */}
                            <div className="relative h-[55%] sm:h-[60%] overflow-hidden rounded-t-3xl">
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="relative h-[45%] px-4 py-4 flex flex-col items-center justify-center text-center bg-[radial-gradient(circle_at_top_left,_#f0f7ff_0%,_#ffffff_60%,_#f3f8fb_100%)] backdrop-blur-xl border-t border-white/30 shadow-[inset_0_6px_25px_rgba(0,0,0,0.05)]">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0D47A1] mb-1 sm:mb-2 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs">
                                    {slide.subtitle}
                                </p>
                            </div>

                            {/* Hover Glow Border */}
                            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#00B4FF]/70 shadow-[0_0_25px_rgba(0,180,255,0.15)] group-hover:shadow-[0_0_40px_rgba(0,180,255,0.45)] transition-all duration-700"></div>
                        </Link>
                    );
                })}

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 sm:left-[8%] md:left-[12%] bg-white/10 hover:bg-[#00B4FF]/25 text-white/80 hover:text-[#00B4FF] text-2xl sm:text-3xl md:text-4xl p-2 sm:p-3 rounded-full backdrop-blur-md border border-[#00B4FF]/30 transition-all duration-300 z-20"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 sm:right-[8%] md:right-[12%] bg-white/10 hover:bg-[#00B4FF]/25 text-white/80 hover:text-[#00B4FF] text-2xl sm:text-3xl md:text-4xl p-2 sm:p-3 rounded-full backdrop-blur-md border border-[#00B4FF]/30 transition-all duration-300 z-20"
                >
                    ❯
                </button>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[900px] h-[300px] sm:h-[380px] bg-[#00B4FF]/15 blur-[180px] rounded-full"></div>
        </section>
    );
};

export default HeroSection;
// stop stop stop stop stpo stpo stpo stpo stpo stpo 