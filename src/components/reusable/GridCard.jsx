import Text from './Text'

const GridCard = ({ feature }) => {
    return (
        <div className="card-base card-padding max-w-[620px]">

            <Text
                variant="h5"
                color="default"
                className="lg:text-[30px] mb-3"
            >
                {feature.title}
            </Text>

            <Text
                variant="body-lg"
                color="muted"
                className="space-small"
            >
                {feature.description}
            </Text>

            {/* Image */}
            <div className="mt-6 bg-gray-100 rounded-lg overflow-hidden h-full flex-center">
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="img-cover"
                />
            </div>
        </div>
    )
}

export default GridCard