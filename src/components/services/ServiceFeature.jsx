import { Check } from "lucide-react";

const ServiceFeature = ({ data }) => {
    return (
        <section className="py-24 bg-white">
            <div className="w-[85%] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl">
                        {/* Badge */}
                 {data.badge &&                        <span className="inline-block mb-6 px-4 py-1.5 rounded-md text-sm font-medium
              bg-blue-50 text-blue-600">
                            {data.badge}
                        </span>}

                        {/* Title */}
                        <h2 className="text-4xl lg:text-[54px] font-normal leading-tight mb-6">
                            {data.title}
                        </h2>

                        {/* Description */}
                        <p className="text-[22px] text-gray-600 mb-10">
                            {data.description}
                        </p>

                        {/* Bullet Points */}
                        <ul className="space-y-4">
                            {data.features.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-800">
                                    <span className="mt-1 flex items-center justify-center w-6 h-6
                    rounded-full border border-blue-600 text-blue-600">
                                        <Check size={14} />
                                    </span>
                                    <span className="text-base">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex max-w-xl justify-center">
                        <div className="bg-[#EDE7E1] rounded-2xl p-0">
                            <img
                                src={data.image}
                                alt={data.title}
                                className="rounded-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceFeature;
