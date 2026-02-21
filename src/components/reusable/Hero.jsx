import { motion } from 'motion/react'
import Text from './Text'
import { Link } from 'react-router-dom'

const Hero = ({ hero, badge = false, person = false ,status=false }) => {
  return (
    <section className="hero-section pt-[15vw] sm:pt-0 " style={{minHeight:"100vh !important"}}>

      {/* Background Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={hero.backgroundImage}
        style={{ transform: "rotateY(180deg)" }}
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

      {/* Person Image */}
      {
        person && <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          src={hero.backgroundImage2}
          alt="Hero Background"
          className="absolute md:w-[50%] right-0 bottom-0 img-contain pointer-events-none"
        />
      }

      {/* Content */}
      {/* hero-content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        // className="w-[652px]"
        >

          {/* Top Badge */}
          {
            hero.topBadge && <span
              className="bg-[#D4E1F5] text-[#126DFB] font-medium px-3 py-1 rounded mb-6"
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
            className="text-pre-line text-[#032D60]"
            style={{ lineHeight: '1.1', marginTop: '1rem' }}
          >
            {hero.title}
            {/* <br />
            {hero.title2 && (
              <span>
                {hero.title2}

              </span>
            )}
            {hero.title3 && (
              <span>
                {hero.title3}

              </span>
            )} */}
          </Text>

          {/* Description */}
          <Text
            variant="body-lg"
            color="muted"
            animated
            delay={0.9}
            className="mt-6 lg:max-w-[600px]"
          >
            {hero.description}
          </Text>
         {status&& <div className="my-8 mb-16">
            <Link
              to={"/schedule-demo"}
              className="inline-flex items-center justify-center text-xl px-8 py-3 rounded-2xl font-semibold  text-white bg-gradient-to-r from-[#3785FF] to-[#1146F2] border border-[#1146F2] shadow-[0_6px_16px_rgba(0,0,0,0.2),0_0_0_1px_#155BC9]  hover:opacity-90 transition"
            >
              Schedule a Demo
            </Link>
          </div>}
        </motion.div>

        {/* Floating Badge */}
        {
          badge && <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            className="hidden lg:block absolute -right-5 top-32 bg-white shadow-xl rounded-lg px-6 py-4 max-w-[360px]"
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
      </div>
    </section >
  )
}

export default Hero
