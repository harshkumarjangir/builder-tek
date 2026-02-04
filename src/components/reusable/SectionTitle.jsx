import { motion } from 'motion/react'

const SectionTitle = ({ 
  title, 
  subtitle, 
  description, 
  centered = true, 
  delay = 0,
  className = "" 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: delay
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`max-w-[902px] mx-auto pb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-[54px] font-bold text-gray-900 mb-4"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#505C7A] max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionTitle