const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
      
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 whitespace-pre-line max-w-xl">
        {title}
      </h2>

      <p className="text-gray-600 text-base lg:text-[30px] max-w-md whitespace-pre-line">
        {subtitle}
      </p>

    </div>
  )
}

export default SectionHeader
