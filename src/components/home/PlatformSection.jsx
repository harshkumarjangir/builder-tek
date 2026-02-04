

const PlatformSection = ({ data }) => {
    const { platformSection } = data;
    const main = platformSection.mainFeature;
    const main2 = platformSection.mainFeature2;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Heading */}
                <div className="grid md:grid-cols-2 gap-10 mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold">
                        {platformSection.title}
                    </h2>

                    <p className="text-lg text-blue-900/80">
                        {platformSection.description}
                    </p>
                </div>

                {/* Main Feature Card */}
                <div className="relative overflow-hidden rounded-3xl bg-blue-100 p-10 py-20 mb-12">

                    {/* Cloud Background */}
                    <img
                        src={main.cloudImage}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

                        {/* Left Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <img
                                    src={main.circleImage}
                                    alt=""
                                    className="w-5 h-auto"
                                />
                                <img
                                    src={main.tagImage}
                                    alt=""
                                    className="h-5  w-auto"
                                />
                            </div>

                            <h3 className="text-4xl lg:text-5xl font-normal mb-4 max-w-md">
                                {main.title}
                            </h3>

                            <p className="text-[#1C1B17CC] text-lg max-w-md">
                                {main.description}
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="flex-1 relative">
                            <img
                                src={main.image}
                                alt=""
                                className="w-full relative z-10"
                            />

                            {/* Salesforce Badge */}
                            <img
                                src={main.badgeImage}
                                alt=""
                                className="absolute -top-5 right-10 w-24 z-20"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Cards */}
                {/* <div className="grid md:grid-cols-2 gap-10">
                    {platformSection.features.map((item, index) => (
                        <div key={index} className="bg-gradient-to-b from-[#DAEFFE] to-[#F5F1ED] rounded-3xl px-8 lg:px-12 pt-8 text-center">
                            <h4 className="text-2xl lg:text-3xl font-normal mb-3">
                                {item.title}
                            </h4>

                            <p className="text-gray-600 text-base font-normal mb-6">
                                {item.description}
                            </p>

                            <img src={item.image} alt="" className="w-full" />
                        </div>
                    ))}
                </div> */}
                <div className="grid md:grid-cols-2 gap-10">
                    {platformSection.features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-[#DAEFFE] to-[#F5F1ED] rounded-3xl pt-10 px-12 text-center overflow-hidden flex flex-col justify-between"
                        >
                            {/* Content */}
                            <div>
                                <h4 className="text-2xl lg:text-3xl font-normal mb-3">
                                    {item.title}
                                </h4>

                                <p className="text-gray-600 text-base font-normal mb-8">
                                    {item.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="w-full mt-auto flex justify-center">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="max-w-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default PlatformSection;
