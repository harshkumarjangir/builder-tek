import Text from './Text'

const CenteredTitle = ({ 
  title, 
  subtitle, 
  description, 
  centered = true, 
  delay = 0,
  className = "" 
}) => {
  return (
    <div className={`max-w-[902px] mx-auto pb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <Text
          variant="subtitle"
          animated
          delay={delay}
          className="mb-2"
        >
          {subtitle}
        </Text>
      )}
      
      <Text
        variant="h2"
        color="default"
        animated
        delay={delay + 0.2}
        className="mb-4"
      >
        {title}
      </Text>
      
      {description && (
        <Text
          variant="body-lg"
          color="secondary"
          animated
          delay={delay + 0.4}
          className="max-w-3xl mx-auto"
        >
          {description}
        </Text>
      )}
    </div>
  )
}

export default CenteredTitle