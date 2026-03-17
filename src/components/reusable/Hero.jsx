import { motion } from 'motion/react'
import Text from './Text'
import { Link } from 'react-router-dom'

const Hero = ({ hero, badge = false, person = false, status = false }) => {
  return (
    <section className="hero-section pt-[15vw] sm:pt-0 " style={{ minHeight: "100vh !important" }}>
      {/* background: ;
 */}
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
        className='hero-overlay'
        style={{ "background": "linear-gradient(269.31deg, rgba(0, 26, 56, 0) 40%, rgba(0, 26, 56, 0.514775) 55%, rgba(0, 26, 56, 0.86595) 75%, rgba(0, 26, 56, 0.93682) 85%, #001A38 100%)" }}
      />

      {/* Person Image */}
      {

        hero.isBg && <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          src={hero.isBg}
          alt="Hero Background"
          className="absolute md:w-[35%] right-30 bottom-0 img-contain pointer-events-none"
        />

      }
      {
        person && <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          src={hero.backgroundImage2}
          alt="Hero Background"
          className="absolute md:w-[50%] h-[70vh] right-0 bottom-0 img-contain pointer-events-none"
        />}

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
            className="mt-6 lg:max-w-[600px] text-white"
          >
            {hero.description}
          </Text>
          {status && <div className="my-8 mb-16">
            <Link
              to={"/schedule-demo"}
              className="inline-flex items-center justify-center text-xl px-8 py-3 rounded-2xl font-semibold  text-white bg-gradient-to-r from-[#3785FF] to-[#1146F2] border border-[#1146F2]   hover:opacity-90 transition"
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
