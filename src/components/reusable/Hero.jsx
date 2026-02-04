import { motion } from 'motion/react'

const Hero = ({ hero }) => {
  return (
    <section className="relative w-full h-[520px] lg:h-[709px] px-5 md:px-[80px] overflow-hidden">

      {/* Background Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={hero.backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* White Overlay Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" 
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-[622px]"
        >

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight whitespace-pre-line"
          >
            {hero.title}
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 text-gray-600 lg:max-w-[80%] text-base lg:text-lg leading-relaxed"
          >
            {hero.description}
          </motion.p>
        </motion.div>

        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          className="hidden lg:block absolute right-12 top-32  bg-white shadow-xl rounded-lg px-6 py-4 max-w-xs"
        >
          <p className="text-[#032D60] font-normal whitespace-pre-line">
            {hero.badge}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
