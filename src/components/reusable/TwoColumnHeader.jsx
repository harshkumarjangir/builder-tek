import Text from './Text'

const TwoColumnHeader = ({ title, subtitle }) => {
  return (
    <div className="two-column-header place-items-center">

      <Text
        variant="h2-solution"
        color="default"
        className="text-pre-line max-w-xl"
      >
        {title}
      </Text>

      <Text
        variant="body-lg"
        color="muted"
        className="max-w-md text-pre-line lg:text-[26px]"
        style={{ lineHeight: '1.2' }}
      >
        {subtitle}
      </Text>

    </div>
  )
}

export default TwoColumnHeader