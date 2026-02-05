import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const TestimonialSlider = ({ data }) => {
    const { title, items, quoteImage } = data.testimonials;
    const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null)
    const [containerWidth, setContainerWidth] = useState(0)

    // Layout constants
    const CARD_WIDTH = 760;
    const GAP = 40;

    // Track container width for responsive behavior
    useEffect(() => {
        const el = sliderRef.current
        if (!el) return

        const update = () => setContainerWidth(el.clientWidth || 0)
        update()

        if (typeof ResizeObserver !== "undefined") {
            const ro = new ResizeObserver(() => update())
            ro.observe(el)
            return () => ro.disconnect()
        }

        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    const isMobile = containerWidth > 0 && containerWidth < 768

    // Auto Slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % items.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [items.length]);

    // Keep current index valid if items change
    useEffect(() => {
        if (current > items.length - 1) setCurrent(0)
    }, [current, items.length])

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + items.length) % items.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % items.length);
    };

    const trackStyle = useMemo(() => {
        if (isMobile) {
            return { transform: `translateX(-${current * 100}%)` }
        }
        return {
            transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${current * (CARD_WIDTH + GAP)}px))`,
        }
    }, [CARD_WIDTH, GAP, current, isMobile])

    return (
        <section className="bg-[#F3F7FF] py-20 relative overflow-hidden">
            <div className="max-w-full mx-auto px-4 text-center">

                {/* Title */}
                <motion.h2
                    className="text-4xl lg:text-[54px] font-normal text-black mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h2>

                {/* Slider */}
                <div ref={sliderRef} className="relative overflow-hidden">

                    <div className={`flex ${isMobile ? "justify-start" : "justify-center"}`}>
                        <div
                            className={`${isMobile ? "gap-0" : "gap-10"} flex transition-transform duration-500 ease-in-out`}
                            style={trackStyle}
                        >
                            {items.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`shrink-0 w-full ${isMobile ? "" : "md:w-[760px] lg:w-[800px]"} transition-all duration-500 ${index === current
                                        ? "opacity-100 scale-100 z-10"
                                        : "opacity-40 scale-95"
                                        }`}
                                >
                                    <div className={`bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] px-6 md:px-10 py-10 md:py-10 text-center ${isMobile ? "mx-2 w-[360px]" : ""}`}>

                                        {/* Quote Icon */}
                                        <div className="flex justify-center mb-6 md:mb-8">
                                            <img
                                                src={quoteImage}
                                                alt="Quote"
                                                className="w-14 h-14 md:w-20 md:h-20 opacity-40"
                                            />
                                        </div>

                                        {/* Quote */}
                                        <p className="text-lg md:text-2xl lg:text-[28px] text-gray-900 font-normal leading-relaxed mb-8 md:mb-10">
                                            “{item.quote}”
                                        </p>

                                        {/* Author */}
                                        <h4 className="font-normal text-gray-900 text-base md:text-lg">
                                            {item.name}
                                        </h4>
                                        <p className="text-sm font-normal text-gray-500 mt-1">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-3xl shadow-md rounded-full w-11 h-11 items-center justify-center cursor-pointer"
                    >
                        ‹
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-3xl shadow-md rounded-full w-11 h-11 items-center justify-center cursor-pointer"
                    >
                        ›
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-10 gap-3">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-2 rounded-full transition-all ${current === index
                                ? "bg-blue-600 w-8"
                                : "bg-gray-300 w-2"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;



