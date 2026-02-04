import { motion } from 'motion/react'

const FeatureCard = ({ feature, index = 0 }) => {
    const isImageRight = feature.imagePosition === "right"

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-10"
        >
            <div
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                    isImageRight ? "" : "lg:flex-row-reverse"
                }`}
            >
                {/* Text */}
                <motion.div
                className='max-w-[422px]'
                    initial={{ opacity: 0, x: isImageRight ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="text-base font-medium tracking-wider text-[#126DFB] uppercase bg-[#EBF0F9] p-2"
                    >
                        {feature.tag}
                    </motion.span>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                        className="mt-3 text-2xl lg:text-[40px] font-semibold text-[#0A2540] leading-11  w-[85%]"
                    >
                        {feature.title}
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="mt-4 text-[#425466] text-[18px] leading-relaxed"
                    >
                        {feature.description}
                    </motion.p>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: isImageRight ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`${isImageRight ? "" : "lg:order-first"}`}
                >
                    <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full rounded-lg"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default FeatureCard
