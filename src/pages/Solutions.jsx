import { motion } from 'motion/react'
// import solutionData from '../data/solutions-one.json'
import SolutionsHero from '../components/reusable/Hero'
import SectionTitle from '../components/reusable/SectionTitle'
import FeatureCard from '../components/reusable/FeatureCard'
import SectionHeader from '../components/reusable/SectionHeader'
import FeatureGridCard from '../components/reusable/FeatureGridCard'
import CenteredSectionHeader from '../components/reusable/CenteredSectionHeader'
import IconFeatureCard from '../components/reusable/IconFeatureCard'
import CenteredCtaSection from '../components/reusable/CenteredCtaSection'
import FaqSection from '../components/reusable/FaqSection'
import PageTransition from '../components/reusable/PageTransition'

const Solutions = ({solutionData}) => {
    const { hero, sectionTitle, features, whyChoose, makeSmarter, bringStructure, faq } = solutionData
    const { section } = whyChoose

    return (
        <PageTransition>
                <SolutionsHero hero={hero} />
            <div className='max-w-7xl mx-auto'>
                
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-20 bg-white"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <SectionTitle
                            title={sectionTitle.title}
                            description={sectionTitle.description}
                        />

                        {features.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} index={index} />
                        ))}
                    </div>
                </motion.section>

                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-blue-50 py-20"
                >
                    <div className="max-w-7xl mx-auto p-8 lg:p-12">
                        <SectionHeader
                            title={section.title}
                            subtitle={section.subtitle}
                        />

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, staggerChildren: 0.2 }}
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            {whyChoose.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <FeatureGridCard feature={feature} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-20 bg-white"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <CenteredSectionHeader
                            title={makeSmarter.section.title}
                            description={makeSmarter.section.description}
                        />

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, staggerChildren: 0.2 }}
                            viewport={{ once: true }}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {makeSmarter.cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <IconFeatureCard card={card} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <CenteredCtaSection data={bringStructure.section} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <FaqSection data={faq} />
                </motion.div>
            </div>
        </PageTransition>
    )
}

export default Solutions