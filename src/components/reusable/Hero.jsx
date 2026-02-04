import { motion } from 'motion/react'
import Text from './Text'

const Hero = ({ hero }) => {
  return (
    <section className="hero-section">

      {/* Background Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={hero.backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 img-cover"
      />

      {/* White Overlay Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hero-overlay" 
      />

      {/* Content */}
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-[622px]"
        >

          {/* Title */}
          <Text 
            variant="h1" 
            color="primary-dark"
            animated
            delay={0.7}
            className="text-pre-line"
          >
            {hero.title}
          </Text>

          {/* Description */}
          <Text 
            variant="body-lg"
            color="muted"
            animated
            delay={0.9}
            className="mt-6 lg:max-w-[80%]"
          >
            {hero.description}
          </Text>
        </motion.div>

        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          className="hidden lg:block absolute right-12 top-32 bg-white shadow-xl rounded-lg px-6 py-4 max-w-xs"
        >
          <Text 
            variant="body" 
            color="primary"
            className="text-pre-line"
          >
            {hero.badge}
          </Text>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
