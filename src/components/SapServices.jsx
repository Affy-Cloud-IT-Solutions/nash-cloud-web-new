import React from "react";
import { motion } from "framer-motion";
import { ServerCog, Rocket, Cloud, Wrench } from "lucide-react";

const sapServices = [
    {
        title: "SAP Implementation & Integration",
        description:
            "Implement SAP solutions tailored to your enterprise needs — unifying systems, automating workflows, and enhancing operational efficiency.",
        icon: <ServerCog className="w-10 h-10 text-[#0D47A1]" />,
    },
    {
        title: "SAP S/4HANA Migration",
        description:
            "Seamlessly migrate to SAP S/4HANA with optimized performance, minimal downtime, and intelligent real-time analytics.",
        icon: <Rocket className="w-10 h-10 text-[#0D47A1]" />,
    },
    {
        title: "SAP Cloud & Analytics",
        description:
            "Leverage SAP Cloud and Analytics to transform data into actionable insights and drive smarter, data-backed decisions.",
        icon: <Cloud className="w-10 h-10 text-[#0D47A1]" />,
    },
    {
        title: "SAP Managed & Support Services",
        description:
            "Our managed SAP services ensure high availability, proactive monitoring, and continuous improvement across your digital landscape.",
        icon: <Wrench className="w-10 h-10 text-[#0D47A1]" />,
    },
];

const SapServices = () => {
    return (
        <section
            id="sap"
            className="relative py-24 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-[#E3F2FD] via-white to-[#E1F5FE] text-[#0D47A1]"
        >
            {/* Background Glow Accents */}
            <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-[#00B4FF]/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#0D47A1]/10 blur-[180px] rounded-full"></div>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] bg-clip-text text-transparent mb-4 drop-shadow-[0_0_10px_rgba(13,71,161,0.4)]">
                    SAP Services
                </h2>
                <p className="text-[#0D47A1]/80 text-lg max-w-3xl mx-auto">
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
                            className={`absolute hidden md:block top-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF]/30 to-transparent ${index % 2 === 0 ? "left-[50%]" : "right-[50%]"
                                }`}
                        ></div>

                        {/* Icon Bubble */}
                        <div
                            className="p-6 rounded-full border border-white/30 
  bg-gradient-to-br from-[#0D47A1] via-[#0A3C91] to-[#092E73] 
  shadow-[0_0_30px_rgba(255,255,255,0.15)] 
  hover:shadow-[0_0_45px_rgba(255,255,255,0.25)] 
  transition-all duration-500 relative overflow-hidden flex items-center justify-center"
                        >
                            {/* Inner subtle glow animation */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.15),transparent_70%)] blur-md opacity-70"></div>

                            {/* Glowing Icon */}
                            <div className="relative z-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse-slow">
                                {React.cloneElement(service.icon, {
                                    className: "w-10 h-10 text-white", // Force icon color to white
                                })}
                            </div>
                        </div>


                        {/* Service Card */}
                        <div
                            className="relative max-w-md text-center md:text-left p-8 rounded-2xl border border-white/20 
  bg-gradient-to-br from-[#0D47A1] via-[#0A3C91] to-[#082B66]
  shadow-[0_8px_25px_rgba(255,255,255,0.1)] 
  hover:shadow-[0_12px_35px_rgba(255,255,255,0.25)] 
  transition-all duration-500 group hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Glow sheen on hover */}
                            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>

                            <h3 className="text-2xl font-semibold mb-3 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300">
                                {service.title}
                            </h3>

                            <p className="text-white/90 text-sm leading-relaxed drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] relative z-10">
                                {service.description}
                            </p>

                            {/* Hover glow background */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent blur-2xl"></div>
                            </div>
                        </div>


                    </motion.div>
                ))}
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/15 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default SapServices;
// stop stpo stpo stop stop stop stop stop stop 