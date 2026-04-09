import { motion } from 'motion/react'
// import solutionData from '../data/solutions-one.json'
import SolutionsHero from '../components/reusable/Hero'
import CenteredTitle from '../components/reusable/CenteredTitle'
import ImageTextCard from '../components/reusable/ImageTextCard'
import TwoColumnHeader from '../components/reusable/TwoColumnHeader'
import GridCard from '../components/reusable/GridCard'
import SimpleHeader from '../components/reusable/SimpleHeader'
import IconCard from '../components/reusable/IconCard'
import CenteredCtaSection from '../components/reusable/CenteredCtaSection'
import FaqSection from '../components/reusable/FaqSection'
import PageTransition from '../components/reusable/PageTransition'
import Text from '../components/reusable/Text'
import { useEffect, useState } from 'react'

const Solutions = ({ solutionData }) => {
    const { hero, sectionTitle, features, whyChoose, makeSmarter, bringStructure, faq } = solutionData
    const { section } = whyChoose
      const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
                useEffect(() =>{
                    const handleResize = () => {
                        setIsMobile(window.innerWidth < 768)
                    }
                    window.addEventListener('resize', handleResize)
                    return () => {
                        window.removeEventListener('resize', handleResize)
                    }
                },[])
    return (
        <PageTransition>
            <SolutionsHero hero={hero} showTheme={!isMobile}   badge={hero.badge} />
            {isMobile   && 
      <div className="hero-content2 w-full bg-[#001A38] flex-col p-10 items-start justify-center" style={{width:"100% !important"}}>
     
  {
          hero.badge && <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            className=" bg-white shadow-xl w-fit rounded-lg px-6 my-4"
          >
            <Text
              variant="body"
              color="primary"
              className="text-pre-line"
            >
              {hero.badge}
            </Text>
          </motion.div>
        }

          {/* Top Badge */}
          {
            hero.topBadge && <span
              className="bg-[#126DFB80] text-white font-medium px-3 py-1 rounded mb-6"
            >
              {hero.topBadge}
            </span>
          }

          {/* Title */}
          <Text
            variant="h1"
            color="primary-dark"
            animated
            delay={0.7}
            className="text-pre-line text-white"
            style={{ lineHeight: '1.1', marginTop: '1rem' }}
          >
            {hero.title}
          
          </Text>

          <Text
            variant="body-lg"
            color="muted"
            animated
            delay={0.9}
            className="mt-6 lg:max-w-[600px] text-white"
          >
            {hero.description}
          </Text>
      
       

      
      </div>

      }

            <div className=''>
                {/* w-[85%] mx-auto */}

                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="section-bg-white sm:w-[85%] mx-auto"
                >
                    <div className="sub-container">
                        <CenteredTitle
                            title={sectionTitle.title}
                            description={sectionTitle.description}
                        />

                        {features.map((feature, index) => (
                            <ImageTextCard key={index} feature={feature} index={index} />
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="section-bg-blue"
                >
                    <div className="w-[85%] mx-auto ">
                        <TwoColumnHeader
                            title={section.title}
                            subtitle={section.subtitle}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, staggerChildren: 0.2 }}
                            viewport={{ once: true }}
                            className="grid-2 place-items-center"
                        >
                            {whyChoose.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <GridCard feature={feature} />
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
                    className="section-bg-white "
                >
                    <div className="container-main">
                        <SimpleHeader
                            title={makeSmarter.section.title}
                            description={makeSmarter.section.description}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, staggerChildren: 0.2 }}
                            viewport={{ once: true }}
                            className="grid-3 card-padding relative"
                        >
                            {makeSmarter.cards.map((card, index) => (
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
                            <div className='absolute bluesh'></div>
                     
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