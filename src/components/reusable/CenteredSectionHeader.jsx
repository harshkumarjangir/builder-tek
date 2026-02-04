const CenteredSectionHeader = ({ title, description }) => {
    return (
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 whitespace-pre-line">
                {title}
            </h2>

            <p className="mt-4 text-gray-600 text-base lg:text-[24px]">
                {description}
            </p>
        </div>
    )
}

export default CenteredSectionHeader
