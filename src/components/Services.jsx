import React from "react";

const servicesData = [
    {
        id: 1,
        title: "Project Delivery & Professional Services",
        subtitle: "IT Project Management & Delivery Services",
        description:
            "IT Project Management from Nash Cloud IT Solutions ensures your projects run smoothly, with expert delivery that reduces risk and saves time. We specialize in planning, execution, and optimization to achieve business-critical results.",
        icon: "🚀",
    },
    {
        id: 2,
        title: "SAP & Cloud Transformation",
        subtitle: "Empowering Businesses with Scalable Cloud",
        description:
            "Delivering full-cycle SAP consulting and cloud transformation services — from implementation to integration — helping you optimize operations and accelerate digital maturity.",
        icon: "💼",
    },
    {
        id: 3,
        title: "Automation & IT Services",
        subtitle: "Optimizing Processes with Smart Tech",
        description:
            "We design and implement intelligent automation and IT systems to streamline operations, enhance scalability, and reduce manual inefficiencies across your business workflows.",
        icon: "⚙️",
    },
    {
        id: 4,
        title: "Resourcing & Consulting",
        subtitle: "Expert Talent for Every Need",
        description:
            "With a vast network of skilled IT professionals, we provide consulting and resourcing services to meet evolving project demands — ensuring the right people drive your success.",
        icon: "👥",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="relative py-24 px-6 md:px-12 bg-[linear-gradient(180deg,_rgb(6,25,67),_rgb(7,12,28))] text-white overflow-hidden"
        >
            {/* === Soft Background Glows === */}
            <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#00B4FF]/10 blur-[150px] animate-pulseSlow"></div>
            <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-[#0D47A1]/20 blur-[160px] animate-pulseSlow delay-300"></div>

            {/* === Section Header === */}
            <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(0,180,255,0.3)]">
                    Our <span className="text-[#00B4FF]">Services</span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    We deliver enterprise-grade IT, SAP, and automation solutions designed
                    to drive innovation, efficiency, and digital transformation for your
                    business.
                </p>
            </div>

            {/* === Services Grid === */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {servicesData.map((service, index) => (
                    <div
                        key={service.id}
                        style={{ animationDelay: `${index * 0.15}s` }}
                        className="group relative backdrop-blur-xl bg-[#0D47A1]/10 border border-[#00B4FF]/20 rounded-2xl p-8 text-center transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,180,255,0.25)] animate-fadeInUp"
                    >
                        {/* Glow overlay */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D47A1]/40 via-[#00B4FF]/20 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700"></div>

                        {/* Icon */}
                        <div className="relative text-5xl mb-5 drop-shadow-[0_0_10px_rgba(0,180,255,0.3)] animate-floatSlow">
                            {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className="relative text-xl font-semibold mb-2 text-[#00B4FF] group-hover:text-white transition-colors duration-500">
                            {service.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-gray-400 italic mb-3 text-sm">
                            {service.subtitle}
                        </p>

                        {/* Description */}
                        <p className="relative text-gray-300 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* === Decorative Glow Center === */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00B4FF]/5 blur-[250px] rounded-full -z-10 animate-pulseSlow"></div>
        </section>
    );
};

export default Services;
