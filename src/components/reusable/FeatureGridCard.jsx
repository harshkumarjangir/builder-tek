const FeatureGridCard = ({ feature }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 hover:shadow-md transition max-w-[620px]">

            <h3 className="text-lg lg:text-[30px] font-medium text-gray-900">
                {feature.title}
            </h3>

            <p className="mt-2 text-gray-600 text-xl leading-relaxed">
                {feature.description}
            </p>

            {/* Image */}
            <div className="mt-6 bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover h-full"
                />
            </div>
        </div>
    )
}

export default FeatureGridCard
