

const TrustedSlider = ({data}) => {
    const { trustedLogos } = data;

    // duplicate for seamless loop
    const logos = [...trustedLogos.logos, ...trustedLogos.logos];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h3 className="text-lg md:text-xl font-normal text-black mb-10">
                    Trusted by{" "}
                    <span className="font-semibold">construction leaders</span>{" "}
                    across North America
                </h3>

                {/* Slider */}
                <div className="relative overflow-hidden w-full">
                    <div className="flex gap-16 whitespace-nowrap animate-[scroll_25s_linear_infinite]">
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="brand"
                                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Animation defined inside component */}
            <style>
                {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </section>
    );
};

export default TrustedSlider;
