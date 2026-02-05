import Text from './Text'

const SimpleHeader = ({ title, description }) => {
    return (
        <div className="container-narrow text-center-section">
            <Text
                variant="h2"
                color="default"
                className="text-pre-line"
            >
                {title}
            </Text>

            <Text
                variant="body-lg"
                color="muted"
                className="mt-4 lg:text-[20px]"
            >
                {description}
            </Text>
        </div>
    )
}

export default SimpleHeader