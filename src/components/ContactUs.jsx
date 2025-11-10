import React from "react";

const ContactUs = () => {
    return (
        <section
            id="contact-us"
            className="relative py-24 px-6 md:px-12 bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))] text-white"
        >
            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Contact <span className="text-[#00B4FF]">Us</span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Have questions or want to collaborate? Let’s connect. Our team will
                    get back to you shortly.
                </p>
            </div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Left - Contact Form */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="bg-[#0D47A1]/10 border border-[#0D47A1]/30 rounded-2xl p-8 backdrop-blur-md shadow-[0_0_25px_rgba(0,180,255,0.15)]"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-[#00B4FF]">
                        Send us a message
                    </h3>
                    <div className="flex flex-col gap-5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-transparent border border-[#0D47A1]/40 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-[#00B4FF] transition-colors duration-300"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-transparent border border-[#0D47A1]/40 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-[#00B4FF] transition-colors duration-300"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="bg-transparent border border-[#0D47A1]/40 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-[#00B4FF] transition-colors duration-300 resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] py-3 px-8 rounded-full font-semibold text-white hover:shadow-[0_0_25px_rgba(0,180,255,0.4)] transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Right - Contact Info */}
                <div className="flex flex-col justify-center bg-[#0D47A1]/10 border border-[#0D47A1]/30 rounded-2xl p-8 backdrop-blur-md">
                    <h3 className="text-2xl font-semibold mb-6 text-[#00B4FF]">
                        Get in touch
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Reach out to us for inquiries, project discussions, or partnership
                        opportunities. We’d love to hear from you.
                    </p>

                    <ul className="space-y-4 text-gray-200">
                        <li>
                            📍 <span className="text-gray-400">Bangalore, India</span>
                        </li>
                        <li>
                            📧 <span className="text-gray-400">contact@nashcloudit.com</span>
                        </li>
                        <li>
                            📞 <span className="text-gray-400">+91 98765 43210</span>
                        </li>
                    </ul>

                    {/* Social Links */}
                    <div className="flex space-x-6 mt-8">
                        <a
                            href="#"
                            className="text-[#00B4FF] hover:text-white text-2xl transition-colors duration-300"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="#"
                            className="text-[#00B4FF] hover:text-white text-2xl transition-colors duration-300"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className="text-[#00B4FF] hover:text-white text-2xl transition-colors duration-300"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Soft glow background */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00B4FF]/10 blur-3xl rounded-full -z-10"></div>
        </section>
    );
};

export default ContactUs;
