import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

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

// Animation Variants
const containerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.25,
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
        },
    },
};

const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.9 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
        scale: 1.08,
        rotate: 1.5,
        boxShadow: "0px 0px 35px rgba(13,71,161,0.25)",
        transition: { duration: 0.4 },
    },
};

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="relative py-28 px-6 md:px-12 overflow-hidden text-[#0D47A1] 
      bg-gradient-to-br from-[#E3F2FD] via-white to-[#E1F5FE]"
            aria-label="Partners & Testimonials"
        >
            {/* === Background Glow Elements === */}
            <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-[#00B4FF]/20 blur-[180px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#0D47A1]/15 blur-[200px] rounded-full animate-pulse"></div>

            {/* === Section Heading === */}
            <div className="relative z-10 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Trusted by{" "}
                    <span className="bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(13,71,161,0.25)]">
                        Global Partners
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#0D47A1]/80 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                    Collaborating with global enterprises to build future-ready, scalable
                    digital ecosystems through SAP and IT excellence.
                </motion.p>
            </div>

            {/* === Partner Showcase === */}
            <motion.div
                variants={containerVariants}
                animate="animate"
                className="relative z-10 flex flex-wrap justify-center gap-10 max-w-6xl mx-auto"
            >
                {partners.map((p, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="relative w-[200px] h-[180px] md:w-[240px] md:h-[200px] 
              flex flex-col items-center justify-center rounded-2xl
              bg-white/70 backdrop-blur-xl border border-[#0D47A1]/20 
              shadow-[0_4px_20px_rgba(13,71,161,0.1)]
              hover:shadow-[0_8px_30px_rgba(13,71,161,0.2)]
              overflow-hidden group cursor-pointer transition-all duration-500"
                    >
                        {/* Hover Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-[#E3F2FD]/80 via-transparent to-[#00B4FF]/10 opacity-0 group-hover:opacity-100 transition duration-500"
                            layoutId={`hover-${i}`}
                        ></motion.div>

                        {/* Logo */}
                        <img
                            src={p.img}
                            alt={p.name}
                            className="w-[120px] h-auto object-contain filter contrast-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                        />

                        {/* Company Name */}
                        <h3 className="text-sm md:text-base font-semibold text-[#0D47A1] mt-3 group-hover:text-[#00B4FF] transition-colors duration-300">
                            {p.name}
                        </h3>

                        {/* Stars */}
                        <div className="flex mt-1">
                            {[...Array(5)].map((_, idx) => (
                                <FaStar
                                    key={idx}
                                    className="text-yellow-400 text-xs md:text-sm drop-shadow-[0_0_3px_rgba(255,215,0,0.4)]"
                                />
                            ))}
                        </div>

                        {/* Glow Ring Animation */}
                        <motion.div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.25),transparent_70%)] opacity-0 group-hover:opacity-50 transition-all duration-700"
                            animate={{
                                opacity: [0.2, 0.5, 0.2],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* === Bottom Accent Line === */}
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-20 h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent"
            ></motion.div>
        </section>
    );
};

export default Testimonials;
