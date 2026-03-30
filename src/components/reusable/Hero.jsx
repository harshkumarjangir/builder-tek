import { motion } from 'motion/react'
import Text from './Text'
import { Link } from 'react-router-dom'

const Hero = ({ hero, badge = false,showTheme=true,bgImage=false, person = false, status = false,h=false }) => {

  
  return (
    <section className={`hero-section  pt-[15vw] sm:pt-0  h-[50vh] md:h-[100vh]`} style={{ minHeight: "100vh !important" }}>
      {/* background: ;
 */}
      {/* Background Image */}
     {!bgImage&& <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={hero.backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 img-cover"
      />}

      {/* White Overlay Gradient */}
{showTheme   &&  <>

 <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className='hero-overlay'
        style={{ "background":!bgImage? "linear-gradient(269.31deg, rgba(0, 26, 56, 0) 40%, rgba(0, 26, 56, 0.514775) 55%, rgba(0, 26, 56, 0.86595) 75%, rgba(0, 26, 56, 0.93682) 85%, #001A38 100%)" :"#001A38"}}
      />

      {/* Person Image */}
   
      

      {/* Content */}
      {/* hero-content */}
      <div className={`${badge?"hero-content20  justify-between h-[50vh] lg:h-max  -translate-y-1/2 top-1/2 ":"hero-content"} ${h&&"justify-between"} ${h&&"flex-col"}`}>
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
            className={`text-pre-line text-white ${hero.topBadge?"mt-[1rem]":"lg:mt-[-1.5rem]"}` }
            style={{ lineHeight: '1.1'}}      >
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
              className="inline-flex items-center justify-center  text-xl px-8 py-3 rounded-2xl font-semibold  text-white bg-gradient-to-r from-[#3785FF] to-[#1146F2] border border-[#1146F2]   hover:opacity-90 transition"
            >
              Schedule a Demo
            </Link>
          </div>}
        </motion.div>
 {
        person && <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          src={hero.backgroundImage2}
          alt="Hero Background"
          className=" w-[80%] sm:w-[40%] lg:h-[70%]  self-baseline img-contain pointer-events-none"
          style={{alignSelf:"end"}}
        />
      }
        {/* Floating Badge */}
        {
          badge && <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            className="hidden lg:block self-baseline bg-white shadow-xl rounded-lg px-6 py-4 max-w-[360px]"
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
</>
      }
    </section >
  )
}

export default Hero
