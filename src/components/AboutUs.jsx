import React from "react";

const aboutData = [
    {
        id: 1,
        title: "SAP",
        description:
            "We specialize in SAP implementation, integration, and support services to help organizations streamline operations, improve efficiency, and unlock the full value of enterprise data.",
        icon: "💼",
    },
    {
        id: 2,
        title: "IT Test & Delivery / Digital Transformations",
        description:
            "Our IT delivery and digital transformation solutions ensure seamless product deployment, testing, and modernization across industries — empowering businesses to stay agile and future-ready.",
        icon: "⚙️",
    },
    {
        id: 3,
        title: "Resourcing / Consulting",
        description:
            "With a strong network of experienced professionals, we provide end-to-end IT resourcing and consulting solutions tailored to meet the evolving needs of clients worldwide.",
        icon: "🌐",
    },
];

const AboutUs = () => {
    return (
        <section
            id="about-us"
            className="relative py-24 px-6 md:px-12 bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))] text-white"
        >
            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    About <span className="text-[#00B4FF]">Us</span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    At Nash Cloud IT Solutions, we deliver end-to-end enterprise solutions
                    that empower digital transformation, drive efficiency, and enable
                    long-term business growth.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
                {aboutData.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-[#0D47A1]/10 border border-[#0D47A1]/40 rounded-2xl p-8 text-center hover:bg-[#0D47A1]/20 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,180,255,0.2)]"
                    >
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold mb-3 text-[#00B4FF] group-hover:text-white transition-colors duration-300">
                            {item.title}
                        </h3>
                        <p className="text-gray-300 text-base">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Subtle glow */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00B4FF]/10 blur-3xl rounded-full -z-10"></div>
        </section>
    );
};

export default AboutUs;
