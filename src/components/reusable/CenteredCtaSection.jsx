import { Link } from "react-router-dom"

// Original centered CTA section used on Solutions page
const CenteredCtaSection = ({ data }) => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6 text-center bg-[#F4F4F4] lg:px-16 pt-16">

                {/* Title */}
                <h2 className="text-3xl lg:text-5xl font-normal leading-14 text-gray-900 max-w-[767px] mx-auto">
                    {data.title}{" "}
                    <span className="text-[#126DFB]">
                        {data.highlight}
                    </span>
                    {
                        data.title2 && (
                            <span className="">
                                {" "}{data.title2}
                            </span>
                        )
                    }
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-600 text-base lg:text-xl font-normal max-w-[767px] mx-auto">
                    {data.description}
                </p>

                {/* CTA Button */}
                <div className="my-8 mb-16">
                    <Link
                        to={data.cta.link}
                        className="inline-flex items-center justify-center text-xl px-8 py-3 rounded-2xl text-white font-semibold bg-[#126DFB] hover:opacity-90 transition"
                    >
                        {data.cta.label}
                    </Link>
                </div>

                {/* Image */}
                <div className="mt-1 shadow-lg p-4 max-w-[995px] bg-[#E9E9EA]">
                    <img
                        src={data.image}
                        alt="RFQ Preview"
                        className="w-full h-full rounded-l-xl rounded-r-xl"
                    />
                </div>

            </div>
        </section>
    )
}

export default CenteredCtaSection
