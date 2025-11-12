import React from "react";
import { motion } from "framer-motion";
import { ServerCog, Rocket, Cloud, Wrench } from "lucide-react";

const sapServices = [
    {
        title: "SAP Implementation & Integration",
        description:
            "Implement SAP solutions tailored to your enterprise needs — unifying systems, automating workflows, and enhancing operational efficiency.",
        icon: <ServerCog className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "SAP S/4HANA Migration",
        description:
            "Seamlessly migrate to SAP S/4HANA with optimized performance, minimal downtime, and intelligent real-time analytics.",
        icon: <Rocket className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "SAP Cloud & Analytics",
        description:
            "Leverage SAP Cloud and Analytics to transform data into actionable insights and drive smarter, data-backed decisions.",
        icon: <Cloud className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "SAP Managed & Support Services",
        description:
            "Our managed SAP services ensure high availability, proactive monitoring, and continuous improvement across your digital landscape.",
        icon: <Wrench className="w-10 h-10 text-[#00B4FF]" />,
    },
];

const SapServices = () => {
    return (
        <section
            id="sap"
            className="relative py-24 px-6 md:px-12 bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))] text-white overflow-hidden"
        >
            {/* Subtle Glowing Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,180,255,0.1),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(13,71,161,0.15),transparent_60%)]"></div>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(0,180,255,0.25)]">
                    SAP Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Empower your digital transformation journey with our comprehensive SAP
                    expertise — connecting innovation with intelligence.
                </p>
            </motion.div>

            {/* Zig-Zag Layout */}
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-20">
                {sapServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -80 : 80,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                        {/* Connecting Line */}
                        <div
                            className={`absolute hidden md:block top-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent ${index % 2 === 0 ? "left-[50%]" : "right-[50%]"
                                }`}
                        ></div>

                        {/* Icon Bubble */}
                        <div className="p-6 bg-[#0D47A1]/50 rounded-full border border-[#00B4FF]/40 shadow-[0_0_30px_rgba(0,180,255,0.2)]">
                            {service.icon}
                        </div>

                        {/* Card */}
                        <div
                            className="relative bg-white/10 backdrop-blur-md border border-[#00B4FF]/20 rounded-2xl p-8 max-w-md text-center md:text-left 
                         shadow-[0_0_25px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.4)] transition-all duration-500 group hover:-translate-y-1"
                        >
                            <h3 className="text-2xl font-semibold mb-3 text-[#00B4FF] group-hover:text-white transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#00B4FF]/10 via-transparent to-transparent blur-2xl"></div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/10 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default SapServices;
