import React from "react";

const itSolutions = [
    {
        title: "IT Infrastructure & Cloud Engineering",
        description:
            "We design and manage reliable IT infrastructures with secure cloud migration, scalable network architecture, and optimized server environments to power your business operations efficiently.",
        icon: "💻",
        img: "https://images.unsplash.com/photo-1590608897129-79da98d15971?auto=format&fit=crop&w=1800&q=80", // server racks / IT infra
    },
    {
        title: "Automation & DevOps Services",
        description:
            "Empowering enterprises with automated CI/CD pipelines, smart monitoring, and rapid deployments — ensuring agility, faster innovation, and reduced downtime.",
        icon: "⚙️",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80", // code and tech
    },
    {
        title: "Data Analytics & AI Solutions",
        description:
            "Transform your data into insights. Our analytics and AI-driven IT solutions help you automate decision-making and unlock new business potential through predictive intelligence.",
        icon: "📊",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1800&q=80", // data analytics
    },
    {
        title: "Cybersecurity & IT Support",
        description:
            "Protect your organization from threats with our advanced cybersecurity frameworks, proactive monitoring, and 24/7 IT support ensuring reliability and compliance.",
        icon: "🔒",
        img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d7?auto=format&fit=crop&w=1800&q=80", // abstract security bg
    },
];

const ITSolutions = () => {
    return (
        <section
            id="it-solutions"
            className="relative py-24 px-6 md:px-12 text-white overflow-hidden bg-[linear-gradient(180deg,_rgba(7,12,28,0.95),_rgba(6,25,67,0.98))]"
        >
            {/* === Background Image (Abstract Blue Technology) === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80')", // digital circuits / tech bg
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
                    Empowering digital enterprises with end-to-end IT infrastructure, cloud, automation, and
                    cybersecurity services — ensuring scalability, agility, and innovation across operations.
                </p>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {itSolutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden backdrop-blur-md border border-[#00B4FF]/25 hover:border-[#00B4FF]/50 shadow-[0_0_30px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.25)] transition-all duration-500"
                        >
                            {/* Card Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center brightness-110 contrast-110 scale-105 group-hover:scale-110 transition-transform duration-700"
                                style={{ backgroundImage: `url(${solution.img})` }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0D47A1]/50 via-[#061943]/60 to-[#061943]/90"></div>

                            {/* Card Content */}
                            <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                                <div className="text-5xl mb-4 text-[#00B4FF] drop-shadow-[0_0_10px_rgba(0,180,255,0.5)]">
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
