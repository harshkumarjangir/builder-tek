import React from 'react'

import whoWeServe from '../../data/who-we-serve.json'

import SolutionsHero from '../reusable/Hero'
import { motion } from 'motion/react'
import CenteredCtaSection from '../reusable/CenteredCtaSection'
import FaqSection from '../reusable/FaqSection'


const WhoWeServe = () => {
    return (
        <div>
            <SolutionsHero hero={whoWeServe.hero} badge={false} />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <CenteredCtaSection data={whoWeServe.bringStructure.section} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <FaqSection data={whoWeServe.faq} />
            </motion.div>
        </div>
    )
}

export default WhoWeServe