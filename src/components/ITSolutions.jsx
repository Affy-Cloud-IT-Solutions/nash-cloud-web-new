import React from "react";
import {
    Server,
    Settings2,
    BrainCircuit,
    ShieldCheck
} from "lucide-react";

const itSolutions = [
    {
        title: "IT Infrastructure & Cloud Engineering",
        description:
            "We design and manage secure, scalable IT infrastructures with seamless cloud migration, optimized servers, and network architecture that empower digital growth.",
        icon: <Server className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1590608897129-79da98d15971?auto=format&fit=crop&w=1800&q=80",
    },
    {
        title: "Automation & DevOps Services",
        description:
            "Empower innovation with automated CI/CD pipelines, real-time monitoring, and fast deployments — improving agility and reducing downtime.",
        icon: <Settings2 className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80",
    },
    {
        title: "Data Analytics & AI Solutions",
        description:
            "Turn your data into strategy. Our analytics and AI-driven IT solutions deliver real-time insights and predictive intelligence to accelerate smart decision-making.",
        icon: <BrainCircuit className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1800&q=80",
    },
    {
        title: "Cybersecurity & IT Support",
        description:
            "Protect your enterprise with our advanced cybersecurity frameworks, 24/7 threat monitoring, and compliance-driven IT support solutions.",
        icon: <ShieldCheck className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d7?auto=format&fit=crop&w=1800&q=80",
    },
];

const ITSolutions = () => {
    return (
        <section
            id="it-solutions"
            className="relative py-24 px-6 md:px-12 text-white overflow-hidden bg-[linear-gradient(180deg,_rgba(7,12,28,0.95),_rgba(6,25,67,0.98))]"
        >
            {/* === Background Image === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80')",
                }}
            ></div>

            {/* === Glows === */}
            <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] bg-[#00B4FF]/15 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#0D47A1]/25 blur-[200px] rounded-full"></div>

            {/* === Content === */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,180,255,0.25)]">
                    IT Solutions
                </h2>
                <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
                    Delivering cutting-edge IT infrastructure, automation, AI, and cybersecurity services to
                    future-proof your enterprise and drive innovation with resilience.
                </p>

                {/* === Service Cards === */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {itSolutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden backdrop-blur-lg border border-[#00B4FF]/25 hover:border-[#00B4FF]/50 
                            shadow-[0_0_30px_rgba(0,180,255,0.15)] hover:shadow-[0_0_45px_rgba(0,180,255,0.35)] transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Background Image */}
                            {/* <div
                                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700 brightness-[0.85]"
                                style={{ backgroundImage: `url(${solution.img})` }}
                            ></div> */}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0D47A1]/40 via-[#061943]/70 to-[#061943]/95"></div>

                            {/* Card Content */}
                            <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                                <div className="mb-5 bg-[#0D47A1]/50 p-4 rounded-full border border-[#00B4FF]/40 shadow-[0_0_20px_rgba(0,180,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                                    {solution.icon}
                                </div>

                                <h3 className="text-xl font-semibold mb-3 text-[#00B4FF] group-hover:text-white transition-colors duration-300">
                                    {solution.title}
                                </h3>

                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00B4FF]/10 blur-[180px] rounded-full"></div>
        </section>
    );
};

export default ITSolutions;
