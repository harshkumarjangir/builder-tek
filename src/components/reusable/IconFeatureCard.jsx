import {
    DollarSign,
    Gauge,
    Trophy
} from "lucide-react"

const iconMap = {
    pricing: DollarSign,
    speed: Gauge,
    win: Trophy
}

const IconFeatureCard = ({ card }) => {
    const Icon = iconMap[card.icon]

    return (
        <div className="bg-white rounded-2xl min-h-80 p-6 border border-[#A0B5FA] shadow-sm hover:shadow-md transition">

            {/* ICON OR IMAGE */}
            <div className="mb-4">
                {card.useImage ? (
                    <img
                        src={card.image}
                        alt={card.title}
                        className="h-20 w-20 object-contain"
                    />
                ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Icon size={20} />
                    </div>
                )}
            </div>

            <h3 className="text-lg lg:text-[30px] font-medium text-gray-900 leading-8">
                {card.title}
            </h3>

            <p className="mt-2 text-gray-600 text-base leading-relaxed">
                {card.description}
            </p>
        </div>
    )
}

export default IconFeatureCard





// import {
//     DollarSign,
//     Gauge,
//     Trophy
// } from "lucide-react"

// const iconMap = {
//     pricing: DollarSign,
//     speed: Gauge,
//     win: Trophy
// }

// const IconFeatureCard = ({ card }) => {
//     const Icon = iconMap[card.icon]

//     return (
//         <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition">

//             {/* Icon */}
//             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4">
//                 <Icon size={20} />
//             </div>

//             <h3 className="text-lg font-semibold text-gray-900">
//                 {card.title}
//             </h3>

//             <p className="mt-2 text-gray-600 text-sm leading-relaxed">
//                 {card.description}
//             </p>
//         </div>
//     )
// }

// export default IconFeatureCard
