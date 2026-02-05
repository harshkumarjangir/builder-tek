import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const IndustriesSection = ({ data }) => {
    const { industriesSection } = data;
    const [active, setActive] = useState(0);

    const tab = industriesSection.tabs[active];

    return (
        <section className="py-24 bg-white">
            <div className="w-[85%] mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-14">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-semibold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {industriesSection.title}
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-blue-900/80"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {industriesSection.description}
                    </motion.p>
                </div>

                {/* Tabs */}
                <motion.div 
                    className="mb-12 overflow-x-auto no-scrollbar bg-[#F8F8F8] py-1 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="flex w-max mx-auto gap-4 px-1">
                        {industriesSection.tabs.map((item, i) => (
                            <motion.button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`whitespace-nowrap px-6 py-3 rounded-xl border border-[#1C1B1733] transition shrink-0
                ${active === i
                                        ? "bg-white shadow-md font-semibold text-[#020805]"
                                        : "bg-gray-50 text-[#757267]"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Content Card */}
                <motion.div 
                    className="relative rounded-3xl bg-gradient-to-r from-[#F5F1ED] to-[#EDEDED] p-0 overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                >
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left Content */}
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={active}
                                className="p-10"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.span 
                                    className="text-blue-600 text-sm font-semibold bg-blue-50 px-3 py-1 rounded-md"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    {tab.tag}
                                </motion.span>

                                <motion.h3 
                                    className="text-4xl font-semibold mt-4 mb-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {tab.title}
                                </motion.h3>

                                <motion.p 
                                    className="text-gray-600 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {tab.subtitle}
                                </motion.p>

                                <motion.ul 
                                    className="space-y-3 mb-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {tab.points.map((p, idx) => (
                                        <motion.li 
                                            key={idx} 
                                            className="flex items-center gap-2 text-gray-700"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                                        >
                                            <span className="text-green-500">✔</span>
                                            {p}
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <motion.button 
                                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>

                        {/* Right Image */}
                        <div className="relative">
                            {/* Absolute div of color */}
                            <div className="absolute inset-0 bg-[#F5F1ED]/10"></div>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={active}
                                    src={tab.image}
                                    alt=""
                                    className="w-full object-cover"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustriesSection;
