import { motion } from 'motion/react'

const Text = ({ 
  variant = 'body', 
  children, 
  className = '', 
  color = 'default',
  animated = false,
  delay = 0,
  ...props 
}) => {
  // Define typography variants
  const variants = {
    // Headings
    h1: 'text-4xl lg:text-5xl xl:text-[70px] font-bold leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-[54px] font-bold leading-tight',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold leading-tight',
    h4: 'text-xl md:text-2xl font-semibold leading-tight',
    h5: 'text-lg md:text-xl font-semibold leading-tight',
    h6: 'text-base md:text-lg font-semibold leading-tight',
    
    // Body text
    body: 'text-base leading-relaxed',
    'body-lg': 'text-lg md:text-xl leading-relaxed',
    'body-sm': 'text-sm leading-relaxed',
    
    // Special variants
    subtitle: 'text-blue-600 font-semibold text-sm uppercase tracking-wide',
    caption: 'text-xs text-gray-500',
    lead: 'text-lg md:text-xl leading-relaxed font-medium',
  }

  // Define color variants
  const colors = {
    default: 'text-gray-900',
    primary: 'text-[#032D60]',
    'primary-light': 'text-blue-600',
    'primary-dark': 'text-blue-900',
    secondary: 'text-[#505C7A]',
    muted: 'text-gray-600',
    light: 'text-gray-500',
    white: 'text-white',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
  }

  // Get the appropriate HTML tag based on variant
  const getTag = (variant) => {
    if (variant.startsWith('h')) return variant
    return 'p'
  }

  const Tag = getTag(variant)
  const baseClasses = `${variants[variant] || variants.body} ${colors[color] || colors.default} ${className}`

  // Animation variants for motion
  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay
      }
    }
  }

  if (animated) {
    return (
      <motion.div
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Tag className={baseClasses} {...props}>
          {children}
        </Tag>
      </motion.div>
    )
  }

  return (
    <Tag className={baseClasses} {...props}>
      {children}
    </Tag>
  )
}

export default Text