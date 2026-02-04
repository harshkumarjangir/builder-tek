import React from "react";
import { Link } from "react-router-dom";

const HomeHero = ({ data }) => {
    const { hero } = data;

    return (
        <section className="relative w-full pt-28 pb-56 text-center overflow-visible">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${hero.backgroundImage})` }}
            />

            {/* White Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" /> */}

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* text-3xl lg:text-4xl font-semibold text-gray-900 max-w-[767px] mx-auto */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#032D60] leading-tight">
                    {hero.title}{" "}
                    <span className="text-[#126DFB]">{hero.highlight}</span>
                </h2>

                <p className="mt-6 text-base lg:text-xl text-gray-700 max-w-3xl mx-auto">
                    {hero.description}
                </p>

                {/* <a
                    href={hero.cta.link}
                    className="inline-flex items-center justify-center text-xl px-8 py-3 rounded-2xl text-white font-bold bg-[#126DFB] hover:opacity-90 transition"
                >
                    {hero.cta.label}
                </a> */}
                {/* CTA Button */}
                <div className="my-8 mb-16">
                    <Link

                        to={hero.cta.link}
                        className="inline-flex items-center justify-center text-xl px-8 py-3 rounded-2xl text-white font-bold bg-[#126DFB] hover:opacity-90 transition"
                    >
                        {hero.cta.label}
                    </Link>
                </div>
            </div>

            {/* Foreground Image (Drops Down) */}
            <div className="absolute left-1/2 -bottom-40 -translate-x-1/2 w-full max-w-3xl px-0 z-20">
                <img
                    src={hero.image}
                    alt={hero.imageAlt}
                    className="w-full rounded-xl"
                />
            </div>
        </section>
    );
};

export default HomeHero;
