import Navbar from "@/pages/components/Navbar.jsx";

export default function About() {
    return<>
            <Navbar/>

            <section className="text-gray-700 body-font container pt-15 mx-auto h-screen items-center justify-center flex flex-col">
                <aside>
                    <div className="flex justify-center mt-10 text-4xl font-regular text-gray-300">
                        Why Us?
                    </div>
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img alt={'img'}
                                             src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                                             className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-300">Latest Milling
                                        Machinery</h2>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img alt={''}
                                             src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                                             className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-300">Reasonable Rates</h2>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img alt={'img'}
                                             src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                                             className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-300">Time Efficiency</h2>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img alt={'img'}
                                             src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                                             className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-300">Expertise in
                                        Industry</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </aside>

                <aside id="features" className="px-2 space-y-6 py-8 md:py-12 lg:py-24 max-w-5xl mx-auto">
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-gray-300">Features</h2>
                        <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7 text-gray-300">
                            Tools to empower your creative journey, enabling you to bring your artistic
                            visions to life effortlessly.</p>
                    </div>
                    <div
                        className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                        <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
                            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round" className="">
                                    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                                </svg>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-gray-300">Custom Brushes</h3>
                                    <p className="text-sm text-gray-800">
                                        Enhance your creativity with a
                                        variety of custom brushes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
                            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round" className="">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                    <line x1="12" y1="16" x2="16" y2="12"></line>
                                    <line x1="12" y1="16" x2="8" y2="12"></line>
                                </svg>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-gray-300">Layer Management</h3>
                                    <p className="text-sm text-gray-800">Efficiently organize your artwork
                                        with layer management
                                        tools.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
                            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round" className="">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="3" y1="15" x2="21" y2="15"></line>
                                    <line x1="9" y1="3" x2="9" y2="21"></line>
                                    <line x1="15" y1="3" x2="15" y2="21"></line>
                                </svg>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-gray-300">Live Collaboration</h3>
                                    <p className="text-sm text-gray-800">Work simultaneously with others on
                                        the same project in
                                        real-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>



            </section>

    </>
}