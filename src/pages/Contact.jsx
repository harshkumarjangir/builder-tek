import React from 'react'
import servicesData from '../data/Contact.json'
import SolutionsHero from '../components/reusable/Hero'
import PageTransition from '../components/reusable/PageTransition';
import ContactForm from '../components/contact/ContactForm';
import IconCard from '../components/reusable/IconCard';
import { motion } from 'motion/react'

const Contact = () => {
    const { hero, cards, form } = servicesData

    const data = hero
    return (
        <PageTransition>
            <div className=''>
                <SolutionsHero hero={hero} badge={false} />

                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">

                            {/* LEFT CONTENT */}
                            <div className={`max-w-xl`}>


                                {/* Title */}
                                <h2 className="text-3xl lg:text-[54px] font-normal leading-tight mb-6">
                                    {data.title}
                                </h2>

                                {/* Description */}
                                <p className="text-[22px] text-gray-600 text-pre-line mb-10" >
                                    {data.description}
                                </p>

                                {/* Bullet Points */}
                            </div>
                            <ContactForm data={form} />



                        </div>
                    </div>
                </section>
                <div className='bg-[#F6F7F9]'>
<div className="container-main ">
                     

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, staggerChildren: 0.2 }}
                            viewport={{ once: true }}
                            className="grid relative   card-padding grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className='w-full z-10 h-full card-base card-padding   border border-[#A0B5FA]'
                                >
                                    <IconCard card={card} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
</div>

            </div>
        </PageTransition>
    );
};

export default Contact;