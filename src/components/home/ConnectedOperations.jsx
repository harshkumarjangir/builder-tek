const ConnectedOperations = ({ data }) => {
    const section = data.connectedOperations;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 max-w-lg mx-auto">
                        {section.title}
                    </h2>
                    <p className="text-xl font-normal text-[#637091]">
                        {section.description}
                    </p>
                </div>

                {/* First Row → 2 Boxes */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {section.items.slice(0, 2).map((item, index) => (
                        // <div
                        //     key={index}
                        //     className="bg-[#F5F1ED] rounded-2xl p-8 text-center flex flex-col justify-between"
                        // >
                        //     {/* Image */}
                        //     <div className="mb-6 flex justify-center">
                        //         <img
                        //             src={item.image}
                        //             alt=""
                        //             className="w-full max-w-[420px] mx-auto object-contain"
                        //         />
                        //     </div>

                        //     {/* Text */}
                        //     <div>
                        //         <h4 className="text-xl font-semibold mb-2">
                        //             {item.title}
                        //         </h4>
                        //         <p className="text-gray-600 text-sm">
                        //             {item.desc}
                        //         </p>
                        //     </div>
                        // </div>
                        <div
                            key={index}
                            className="relative bg-gradient-to-b from-[#F5F1ED] to-[#F7F7F8] rounded-2xl p-8 text-center overflow-hidden h-[400px]"
                        >
                            {/* Image */}
                            <div className="mb-6 flex justify-center">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full max-w-[420px] mx-auto object-contain"
                                />
                            </div>

                            {/* Text */}
                            {/* <div>
                            <h4 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                                {item.desc}
                            </p>
                        </div> */}
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full min-h-44 p-6 z-20 bg-gradient-to-t from-[#F7F7F8] to-[#F7F7F8]/50 text-black">
                                <h4 className="text-xl lg:text-2xl font-normal mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-base font-normal opacity-100 text-[#6B7280] max-w-md mx-auto">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>


                {/* Second Row → 3 Boxes */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.items.slice(2, 5).map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-gradient-to-b from-[#F5F1ED] via-[#F8F7F6] to-[#F7F7F8] rounded-2xl p-8 text-center overflow-hidden h-[400px]"
                        >
                            {/* Image */}
                            <div className="mb-6 flex justify-center">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full max-w-[420px] mx-auto object-contain"
                                />
                            </div>

                            {/* Text */}
                            {/* <div>
                                <h4 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {item.desc}
                                </p>
                            </div> */}
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full min-h-48 p-6 z-20 bg-gradient-to-t from-[#F7F7F8] via-[#F8F7F6] to-[#F7F7F8]/50 text-black">
                                <h4 className="text-xl lg:text-2xl font-normal mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-base font-normal opacity-100 text-[#6B7280]">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                        // <div
                        //     key={index}
                        //     className="relative rounded-2xl overflow-hidden h-[350px]"
                        // >

                        //     {/* Background Image */}
                        //     <img
                        //         src={item.image}
                        //         alt=""
                        //         className="absolute inset-0 w-full h-full object-cover"
                        //     />

                        //     {/* Optional Dark Gradient Overlay */}
                        //     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

                        // {/* Content Overlay */}
                        // <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
                        //     <h4 className="text-xl font-semibold mb-2">
                        //         {item.title}
                        //     </h4>
                        //     <p className="text-sm opacity-90">
                        //         {item.desc}
                        //     </p>
                        // </div>

                        // </div>

                    ))}
                </div>


            </div>
        </section>
    );
};

export default ConnectedOperations;
