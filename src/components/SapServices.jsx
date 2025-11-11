import React from "react";

const sapServices = [
    {
        title: "SAP Implementation & Integration",
        description:
            "End-to-end SAP implementation and seamless integration with your existing systems. We help automate operations, unify data, and optimize enterprise workflows with precision.",
        icon: "⚙️",
        img: "https://images.unsplash.com/photo-1665686305126-0f5a48b9f9d1?auto=format&fit=crop&w=1800&q=80",
    },
    {
        title: "SAP S/4HANA Migration",
        description:
            "Upgrade your business landscape with SAP S/4HANA. Our experts ensure smooth migration, real-time analytics, and enhanced process intelligence for your enterprise.",
        icon: "🚀",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80",
    },
    {
        title: "SAP Cloud & Analytics",
        description:
            "Drive better decisions with SAP Cloud and Analytics. We enable advanced insights through data visualization, cloud integration, and AI-driven dashboards.",
        icon: "☁️",
        img: "https://images.unsplash.com/photo-1603791452906-9cded7ad43aa?auto=format&fit=crop&w=1800&q=80",
    },
    {
        title: "SAP Support & Managed Services",
        description:
            "Comprehensive SAP managed services including maintenance, monitoring, and performance optimization to ensure maximum uptime and reliability.",
        icon: "🛠️",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1800&q=80",
    },
];

const SapServices = () => {
    return (
        <section
            id="sap"
            className="relative py-24 px-6 md:px-12 text-white overflow-hidden bg-[linear-gradient(180deg,_rgba(7,12,28,0.95),_rgba(6,25,67,0.98))]"
        >
            {/* === Updated Background Image (Pure Tech, No People) === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
                }}
            ></div>

            {/* === Glow Layers === */}
            <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] bg-[#00B4FF]/15 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#0D47A1]/25 blur-[200px] rounded-full"></div>

            {/* === Content === */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,180,255,0.25)]">
                    SAP Services
                </h2>
                <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
                    Accelerate innovation with our SAP-driven enterprise solutions — delivering scalability,
                    automation, and intelligent business insights through cloud and on-premise deployments.
                </p>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sapServices.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden backdrop-blur-md border border-[#00B4FF]/25 hover:border-[#00B4FF]/50 shadow-[0_0_30px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.25)] transition-all duration-500"
                        >
                            {/* Card Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center brightness-110 contrast-110 scale-105 group-hover:scale-110 transition-transform duration-700"
                                style={{ backgroundImage: `url(${service.img})` }}
                            ></div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0D47A1]/50 via-[#061943]/60 to-[#061943]/90"></div>

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                                <div className="text-5xl mb-4 text-[#00B4FF] drop-shadow-[0_0_10px_rgba(0,180,255,0.5)]">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-[#00B4FF] group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {service.description}
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

export default SapServices;
