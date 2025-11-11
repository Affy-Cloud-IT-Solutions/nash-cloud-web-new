import React from "react";
import { FaStar } from "react-icons/fa"; // ⭐ icon

const partners = [
    {
        name: "SAP Partner",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    },
    {
        name: "HCC Limited",
        img: "/images/testimonials/hccLogo.jpg",
    },
    {
        name: "Mitsubishi Electric",
        img: "/images/testimonials/mitsubishi.png",
    },
    {
        name: "Salesforce Services",
        img: "/images/testimonials/salesforce.png",
    },
];

const Row = ({ reverse = false }) => (
    <div
        className={`flex w-[200%] ${reverse ? "animate-marqueeReverse" : "animate-marquee"
            } select-none`}
    >
        {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center shrink-0">
                {partners.map((p, i) => (
                    <div
                        key={`${p.name}-${dup}-${i}`}
                        className="relative mx-6 flex flex-col items-center justify-center 
              min-w-[190px] md:min-w-[230px] h-[160px] rounded-2xl 
              bg-gradient-to-br from-white/10 via-white/5 to-transparent
              border border-[#00B4FF]/30 backdrop-blur-xl 
              shadow-[0_0_25px_rgba(0,180,255,0.1)]
              overflow-hidden transition-all duration-500
              hover:shadow-[0_0_40px_rgba(0,180,255,0.4)] hover:scale-[1.05]
              group"
                    >
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/10 via-transparent to-[#0D47A1]/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        {/* Logo */}
                        <div className="relative z-10 flex justify-center items-center w-full">
                            <img
                                src={p.img}
                                alt={p.name}
                                className="h-12 md:h-14 w-auto max-w-[150px] object-contain 
                  filter brightness-110 contrast-110 grayscale group-hover:grayscale-0 
                  transition-all duration-500"
                            />
                        </div>

                        {/* Company Name */}
                        <span className="relative z-10 mt-3 text-gray-100 text-xs md:text-sm font-semibold text-center whitespace-nowrap group-hover:text-[#00B4FF] transition-colors duration-500">
                            {p.name}
                        </span>

                        {/* Stars */}
                        <div className="relative z-10 mt-1 flex space-x-1">
                            {[...Array(5)].map((_, idx) => (
                                <FaStar key={idx} className="text-yellow-400 text-xs md:text-sm" />
                            ))}
                        </div>

                        {/* Inner glow ring */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 bg-[radial-gradient(circle_at_center,_rgba(0,180,255,0.3),_transparent_70%)]"></div>
                    </div>
                ))}
            </div>
        ))}
    </div>
);

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="relative py-24 px-6 md:px-12 overflow-hidden text-white 
      bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))]"
            aria-label="Partners & Testimonials"
        >
            {/* Ambient Glows */}
            <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] bg-[#00B4FF]/15 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-[#0D47A1]/25 blur-[200px] rounded-full"></div>

            {/* Heading */}
            <div className="relative z-10 text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Trusted by{" "}
                    <span className="bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent">
                        Global Partners
                    </span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Collaborating with industry pioneers and enterprise leaders to deliver
                    cutting-edge IT and SAP solutions worldwide.
                </p>
            </div>

            {/* Ticker Container */}
            <div className="relative z-10 overflow-hidden py-6">
                {/* Fading edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#061943] to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#061943] to-transparent"></div>

                {/* Row 1 */}
                <div className="flex justify-center">
                    <Row />
                </div>

                <div className="h-10" />

                {/* Row 2 (reverse direction for dynamic flow) */}
                <div className="flex justify-center">
                    <Row reverse />
                </div>
            </div>

            {/* Decorative line */}
            <div className="mt-16 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent"></div>
        </section>
    );
};

export default Testimonials;
