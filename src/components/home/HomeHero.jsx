import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import TrustedSlider from "./TrustedSlider";

const HomeHero = ({ data }) => {
    const { hero } = data;

    return (
        <section className="relative w-full  pt-20 sm:pt-28 pb-10 text-center overflow-visible">
            {/* Background Image */}

            {/* Absoluet overlay div on image */}
            <div className="absolute inset-0 opacity-90"
                style={{ background: "linear-gradient(9.07deg, #126DFB -40.55%, #001A38 54.18%)" }}
            ></div>
            {/* <div className="absolute inset-0 bg-[#F4F4F4] opacity-90"></div> */}

            {/* Content */}
            <div className="relative w-[95%] flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-10 lg:gap-2 z-10 text-start ms-auto ps-4 sm:ps-4">

                <div className="w-full lg:w-[50%]">
                    {/* Option A: Use the new hero-title class */}
                    <motion.h1
                        className="hero-title2 "
                        style={{ color: "white " }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}

                    >
                        {hero.title}{" "}
                        {hero.subtitle}
                        <span className="text-[#126DFB]">{hero.highlight}</span>
                    </motion.h1>

                    {/* Option B: Or continue with Tailwind overrides */}
                    {/* <h1 className="text-3xl lg:text-4xl font-semibold text-[#032D60] leading-tight">
                    {hero.title}{" "}
   List.png                 <span className="text-[#126DFB]">{hero.highlight}</span>
                </h1> */}

                    <motion.p
                        className="mt-4 sm:mt-6 text-base lg:text-lg text-white max-w-3xl "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {hero.description}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        className="mt-4 sm:mt-5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link
                            to={hero.cta.link}
                            className="inline-flex items-center justify-center text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 rounded-2xl font-bold  text-white bg-gradient-to-r from-[#3785FF] to-[#1146F2] border border-[#1146F2]   hover:opacity-90 hover:scale-105 transition-all duration-300"
                        >
                            {hero.cta.label} <img src={hero.cta.icon} className="ml-2 max-w-6" alt="" />
                        </Link>
                    </motion.div>
                    <motion.div
                        className="mt-4 sm:mt-5 flex  "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href=" https://appexchange.salesforce.com/appxListingDetail?listingId=a0N30000009wK46EAE" target="_blank"><img src={hero.image1} className="cursor-pointer" alt="" /></a>
                        <img src={hero.image2} className="cursor-pointer" alt="" />
                    </motion.div>
                </div>

                {/* Right side Images */}
                <div className="relative w-full lg:w-[45%] flex justify-end items-center mt-12 lg:mt-0">
                    <div className="relative w-[80%] sm:w-[70%] lg:w-[85%] max-w-lg">
                        {/* Second Image (Base) */}
                        <img src={hero.sideimage.image1} className="w-full h-auto object-contain relative z-0" alt="" />

                        {/* First Image (Overlay) - overlapping top to center, left side half overlap */}
                        <img
                            src={hero.sideimage.image2}
                            className="absolute top-[10%] left-[-40%] w-[100%] h-auto object-contain z-10 drop-shadow-2xl"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* Foreground Image (Overlaps next section) */}
            <motion.div
                className="relative mx-auto mt-12 sm:mt-16 md:mt-20 w-[90%] sm:w-[85%]   px-4 z-20 -mb-20 sm:-mb-28 md:-mb-36 lg:-mb-44"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <TrustedSlider data={data} />
            </motion.div>
        </section>

    );
};

export default HomeHero;
