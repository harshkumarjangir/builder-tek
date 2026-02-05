const SmartFeatures = ({ data }) => {
    const { title, description, features } = data.featuresSection

    // first item = featured (Mobile Tools Access)
    const featured = features[0]
    const rest = features.slice(1)

    return (
        <section className="bg-[#F3F7FF] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">

                    {/* Left Text */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
                            {title.split("\n").map((line, i) => (
                                <span key={i} className="block">
                                    {line}
                                </span>
                            ))}
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            {description}
                        </p>
                    </div>

                    {/* Featured Card */}
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <img
                            src={featured.image}
                            alt={featured.title}
                            className="w-full h-48 object-contain mb-6"
                        />
                        <h3 className="text-xl font-semibold text-gray-900">
                            {featured.title}
                        </h3>
                    </div>
                </div>

                {/* Bottom Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white rounded-2xl shadow-md p-6"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-40 object-contain mb-6"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default SmartFeatures












// const SmartFeatures = ({data}) => {
//     const { title, description, features } = data.featuresSection;

//     return (
//         <section className="bg-[#F3F7FF] py-20">
//             <div className="w-[80%] mx-auto px-6">
//                 {/* Header */}
//                 <div className="max-w-3xl mb-14">
//                     <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
//                         {title.split("\n").map((line, i) => (
//                             <span key={i} className="block">
//                                 {line}
//                             </span>
//                         ))}
//                     </h2>

//                     <p className="mt-6 text-gray-600 text-lg">
//                         {description}
//                     </p>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {features.map((feature) => (
//                         <div
//                             key={feature.id}
//                             className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
//                         >
//                             {/* Image */}
//                             <div className="mb-6">
//                                 <img
//                                     src={feature.image}
//                                     alt={feature.title}
//                                     className="w-full h-40 object-contain"
//                                 />
//                             </div>

//                             {/* Title */}
//                             <h3 className="text-xl font-semibold text-gray-900 leading-snug">
//                                 {feature.title}
//                             </h3>

//                             {/* Optional CTA (Approve button like screenshot) */}
//                             {/* {feature.cta && (
//                                 <div className="mt-4">
//                                     <button className="px-4 py-2 rounded-md bg-lime-400 text-black font-medium text-sm hover:bg-lime-500 transition">
//                                         {feature.cta}
//                                     </button>
//                                 </div>
//                             )} */}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SmartFeatures;
