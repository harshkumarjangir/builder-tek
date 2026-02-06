import React from 'react'
import homeData from '../data/home.json'
import HomeHero from '../components/home/HomeHero'
import TrustedSlider from '../components/home/TrustedSlider'
import PlatformSection from '../components/home/PlatformSection'
import CenteredCtaSection from '../components/reusable/CenteredCtaSection'
import { motion } from 'motion/react'
import IndustriesSection from '../components/home/IndustriesSection'
import ConnectedOperations from '../components/home/ConnectedOperations'
import SmartFeatures from '../components/home/SmartFeatures'
import TestimonialSlider from '../components/home/TestimonialSlider'
const Home = () => {
  const { bringStructure } = homeData;
  return (
    <div>
      <HomeHero data={homeData} />
      <section className="pt-[12vw] ">
        <TrustedSlider data={homeData} />
        <PlatformSection data={homeData} />
        <IndustriesSection data={homeData} />
        <ConnectedOperations data={homeData} />
        <SmartFeatures data={homeData} />
        <TestimonialSlider data={homeData} />
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CenteredCtaSection data={bringStructure.section} />
      </motion.div>

    </div>
  )
}

export default Home