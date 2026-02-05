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
            <div className="max-w-full mx-auto px-6 text-center">

                {/* Title */}
                <motion.h2 
                    className="text-4xl font-semibold text-gray-900 mb-14"
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
                                    className={`shrink-0 w-full ${isMobile ? "" : "md:w-[760px]"} transition-all duration-500 ${index === current
                                            ? "opacity-100 scale-100 z-10"
                                            : "opacity-40 scale-95"
                                        }`}
                                >
                                    <div className={`bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] px-6 md:px-14 py-10 md:py-14 text-center ${isMobile ? "mx-2 w-[360px]" : ""}`}>

                                        {/* Quote Icon */}
                                        <div className="flex justify-center mb-6 md:mb-8">
                                            <img
                                                src={quoteImage}
                                                alt="Quote"
                                                className="w-14 h-14 md:w-20 md:h-20 opacity-40"
                                            />
                                        </div>

                                        {/* Quote */}
                                        <p className="text-lg md:text-2xl text-gray-900 leading-relaxed mb-8 md:mb-10">
                                            “{item.quote}”
                                        </p>

                                        {/* Author */}
                                        <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                                            {item.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-1">
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
                        className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-11 h-11 items-center justify-center"
                    >
                        ‹
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-11 h-11 items-center justify-center"
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



// import { useEffect, useState } from "react";

// const TestimonialSlider = ({ data }) => {
//     const { title, items, quoteImage } = data.testimonials;
//     const [current, setCurrent] = useState(0);

//     // Auto slide
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % items.length);
//         }, 4000);

//         return () => clearInterval(timer);
//     }, [items.length]);

//     // const CARD_WIDTH = 720; // px
//     // const GAP = 32; // px (gap-8)
//     const CARD_WIDTH = 760;
//     const GAP = 40;




//     const prevSlide = () => {
//         setCurrent((prev) => (prev - 1 + items.length) % items.length);
//     };

//     const nextSlide = () => {
//         setCurrent((prev) => (prev + 1) % items.length);
//     };

//     return (
//         <section className="bg-[#F3F7FF] py-20 relative overflow-hidden">
//             <div className="max-w-full mx-auto px-6 text-center">
//                 {/* Title */}
//                 <h2 className="text-4xl font-semibold text-gray-900 mb-14">
//                     {title}
//                 </h2>




//                 {/* Slider */}
//                 <div className="relative overflow-hidden">
//                     <div className="flex justify-center">
//                         <div
//                             className="flex gap-6 md:gap-10 transition-transform duration-500 ease-in-out"
//                             style={{
//                                 transform: `translateX(
//           ${window.innerWidth < 768
//                                         ? `-${current * 100}%`
//                                         : `calc(50% - ${CARD_WIDTH / 2}px - ${current * (CARD_WIDTH + GAP)
//                                         }px)`
//                                     }
//         )`,
//                             }}
//                         >
//                             {items.map((item, index) => (
//                                 <div
//                                     key={item.id}
//                                     className={`shrink-0 transition-all duration-500 w-full md:w-auto ${index === current
//                                         ? "opacity-100 scale-100"
//                                         : "opacity-40 md:opacity-40 scale-95"
//                                         }`}
//                                     style={{ width: window.innerWidth < 768 ? "100%" : CARD_WIDTH }}
//                                 >
//                                     <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] px-6 md:px-14 py-10 md:py-14 text-center mx-4 md:mx-0">

//                                         {/* Quote Image */}
//                                         <div className="flex justify-center mb-6 md:mb-8">
//                                             <img
//                                                 src={quoteImage}
//                                                 alt="Quote"
//                                                 className="w-14 h-14 md:w-20 md:h-20 opacity-40"
//                                             />
//                                         </div>

//                                         {/* Quote */}
//                                         <p className="text-lg md:text-2xl text-gray-900 leading-relaxed mb-8 md:mb-10">
//                                             “{item.quote}”
//                                         </p>

//                                         {/* Author */}
//                                         <h4 className="font-semibold text-gray-900 text-base md:text-lg">
//                                             {item.name}
//                                         </h4>
//                                         <p className="text-sm text-gray-500 mt-1">
//                                             {item.role}
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Controls (hide on mobile) */}
//                     <button
//                         onClick={prevSlide}
//                         className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-11 h-11 items-center justify-center"
//                     >
//                         ‹
//                     </button>

//                     <button
//                         onClick={nextSlide}
//                         className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-11 h-11 items-center justify-center"
//                     >
//                         ›
//                     </button>
//                 </div>




//                 {/* Dots */}
//                 {/* <div className="flex justify-center mt-8 gap-2">
//                     {items.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrent(index)}
//                             className={`h-2 w-2 rounded-full transition ${current === index ? "bg-blue-600 w-6" : "bg-gray-300"
//                                 }`}
//                         />
//                     ))}
//                 </div> */}
//                 <div className="flex justify-center mt-10 gap-3">
//                     {items.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrent(index)}
//                             className={`h-2 rounded-full transition-all ${current === index
//                                 ? "bg-blue-600 w-8"
//                                 : "bg-gray-300 w-2"
//                                 }`}
//                         />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default TestimonialSlider;








// // ---------
// {/* Slider */ }
// <div className="relative overflow-hidden">
//     <div className="flex justify-center">
//         <div
//             className="flex gap-10 transition-transform duration-500 ease-in-out"
//             style={{
//                 transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${current * (CARD_WIDTH + GAP)
//                     }px))`,
//             }}
//         >
//             {items.map((item, index) => (
//                 <div
//                     key={item.id}
//                     className={`shrink-0 transition-all duration-500 ${index === current
//                         ? "opacity-100 scale-100 z-10"
//                         : "opacity-40 scale-95"
//                         }`}
//                     style={{ width: CARD_WIDTH }}
//                 >
//                     <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] px-14 py-14 text-center">

//                         {/* Quote Image */}
//                         <div className="flex justify-center mb-8">
//                             <img
//                                 src={quoteImage}
//                                 alt="Quote"
//                                 className="w-20 h-20 opacity-40"
//                             />
//                         </div>

//                         {/* Quote */}
//                         <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-10">
//                             “{item.quote}”
//                         </p>

//                         {/* Author */}
//                         <h4 className="font-semibold text-gray-900 text-lg">
//                             {item.name}
//                         </h4>
//                         <p className="text-sm text-gray-500 mt-1">
//                             {item.role}
//                         </p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>

//     {/* Controls */}
//     <button
//         onClick={prevSlide}
//         className="absolute left-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-11 h-11 flex items-center justify-center"
//     >
//         ‹
//     </button>

//     <button
//         onClick={nextSlide}
//         className="absolute right-10 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-11 h-11 flex items-center justify-center"
//     >
//         ›
//     </button>
// </div>
















// // {/* Slider */}
// // <div className="relative">
// // {/* Cards */}
// // <div className="flex transition-transform duration-500 ease-in-out"
// //     style={{ transform: `translateX(-${current * 100}%)` }}
// // >
// //     {items.map((item) => (
// //         <div
// //             key={item.id}
// //             className="min-w-full flex justify-center"
// //         >
// //             <div className="bg-white rounded-2xl shadow-md max-w-3xl px-10 py-12">
// //                 {/* Quote Icon */}
// //                 {/* <div className="text-blue-200 text-7xl mb-6 leading-none">
// //                     “”
// //                 </div> */}

// //                 {/* Quote Image */}
// //                 <div className="flex justify-center mb-6">
// //                     <img
// //                         src={quoteImage}
// //                         alt="Quote icon"
// //                         className="w-16 h-16 opacity-70"
// //                     />
// //                 </div>



// //                 {/* Quote */}
// //                 <p className="text-xl text-gray-800 leading-relaxed mb-8">
// //                     “{item.quote}”
// //                 </p>

// //                 {/* Author */}
// //                 <h4 className="font-semibold text-gray-900">
// //                     {item.name}
// //                 </h4>
// //                 <p className="text-sm text-gray-500 mt-1">
// //                     {item.role}
// //                 </p>
// //             </div>
// //         </div>
// //     ))}
// // </div>

// // {/* Controls */}
// // <button
// //     onClick={prevSlide}
// //     className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
// // >
// //     ‹
// // </button>

// // <button
// //     onClick={nextSlide}
// //     className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
// // >
// //     ›
// // </button>
// // </div>