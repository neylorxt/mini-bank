import Navbar from "@/pages/components/Navbar.jsx";
import {Link} from "react-router-dom";

export default function Services() {
    return (
        <>
            <main>
                <Navbar/>

                <div
                    className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-25 ">

                    <h1
                        className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-400 sm:text-7xl">
                        Revolutionize Your Insurance
                        <span className="relative whitespace-nowrap text-white-600 text-gray-200">Operations</span>
                        <span className="relative whitespace-nowrap text-orange-500 dark:text-orange-300">
                          <svg aria-hidden="true" viewBox="0 0 418 42"
                               className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60"
                               preserveAspectRatio="none">
                            <path
                                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
                          </svg>
                          <span className="relative">with our Bank</span>
                        </span>
                    </h1>
                    <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-white-500 text-gray-300 leading-7">
                        Experience the future of insurance with our cutting-edge AI tool. From underwriting to claims
                        processing, our
                        intelligent system streamlines and enhances every aspect of your insurance operations.
                    </h2>
                    <Link to={"/login"} className="bg-orange-600 dark:bg-gray-800 rounded-xl text-white dark:text-gray-300 font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-orange-500 dark:hover:bg-gray-600 transition">
                        Get started
                    </Link>
                </div>

                <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
                    <div className="max-w-5xl mx-auto px-5 sm:px-10">
                        <h2 className="text-3xl font-bold mb-10 text-center">Pricing Plans</h2>
                        <div className="grid gap-8 md:grid-cols-3">


                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
                                <h3 className="text-xl font-semibold mb-4 text-center">Basic</h3>
                                <p className="text-4xl font-bold text-center mb-4">$0<span
                                    className="text-lg font-normal text-gray-700 dark:text-gray-300">/mo</span></p>
                                <ul className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        1 Page Website
                                    </li>
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Responsive Design
                                    </li>
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Basic SEO
                                    </li>
                                </ul>
                                <a href="#contact"
                                   className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium text-center transition">Choose
                                    Plan</a>
                            </div>


                            <div
                                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col border-2 border-indigo-600 dark:border-indigo-400 relative">
                                <span
                                    className="absolute top-0 right-0 bg-indigo-600 text-white text-sm px-3 py-1 rounded-bl-md rounded-tr-md">Most Popular</span>
                                <h3 className="text-xl font-semibold mb-4 text-center">Pro</h3>
                                <p className="text-4xl font-bold text-center mb-4">$19<span
                                    className="text-lg font-normal text-gray-700 dark:text-gray-300">/mo</span></p>
                                <ul className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Up to 5 Pages
                                    </li>
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Advanced SEO
                                    </li>
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Custom Design
                                    </li>
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text4821-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        1 Month Support
                                    </li>
                                </ul>
                                <a href="#contact"
                                   className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium text-center transition">Choose
                                    Plan</a>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
                                <h3 className="text-xl font-semibold mb-4 text-center">Enterprise</h3>
                                <p className="text-4xl font-bold text-center mb-4">$199<span
                                    className="text-lg font-normal text-gray-700 dark:text-gray-300">/mo</span></p>
                                <ul className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Unlimited Pages
                                    </li>
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        E-commerce Integration
                                    </li>
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Priority Support
                                    </li>
                                    <li className="mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Analytics Setup
                                    </li>
                                </ul>
                                <a href="#contact"
                                   className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium text-center transition">Choose
                                    Plan
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </>
    )
}