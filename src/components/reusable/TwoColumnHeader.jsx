import Text from './Text'

const TwoColumnHeader = ({ title, subtitle }) => {
  return (
    <div className="two-column-header">

      <Text
        variant="h2"
        color="default"
        className="text-pre-line max-w-xl"
      >
        {title}
      </Text>

      <Text
        variant="body-lg"
        color="muted"
        className="max-w-md text-pre-line lg:text-[30px]"
      >
        {subtitle}
      </Text>

    </div>
  )
}

export default TwoColumnHeader