import { useState } from "react";

const IndustriesSection = ({ data }) => {
    const { industriesSection } = data;
    const [active, setActive] = useState(0);

    const tab = industriesSection.tabs[active];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-14">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                        {industriesSection.title}
                    </h2>
                    <p className="text-lg text-blue-900/80">
                        {industriesSection.description}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {industriesSection.tabs.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`px-6 py-3 rounded-xl border transition
              ${active === i
                                    ? "bg-white shadow-md font-semibold"
                                    : "bg-gray-50"
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Content Card */}
                <div className="relative rounded-3xl bg-gradient-to-r from-[#F5F1ED] to-[#EDEDED] p-0 overflow-hidden">

                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left Content */}
                        <div className="p-10">
                            <span className="text-blue-600 text-sm font-semibold bg-blue-50 px-3 py-1 rounded-md">
                                {tab.tag}
                            </span>

                            <h3 className="text-4xl font-semibold mt-4 mb-2">
                                {tab.title}
                            </h3>

                            <p className="text-gray-600 mb-6">
                                {tab.subtitle}
                            </p>

                            <ul className="space-y-3 mb-6">
                                {tab.points.map((p, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                                        <span className="text-green-500">✔</span>
                                        {p}
                                    </li>
                                ))}
                            </ul>

                            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">
                                Explore
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            {/* Absolute div of color */}
                            <div className="absolute inset-0 bg-[#F5F1ED]/10"></div>
                            <img
                                src={tab.image}
                                alt=""
                                className="w-full object-cover"
                            />
                        </div>
                        {/* Right Image */}
                        {/* <div className="relative h-full flex items-end justify-end">
                            <img
                                src={tab.image}
                                alt=""
                                className="w-full h-full object-contain object-bottom"
                            />
                        </div> */}


                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
