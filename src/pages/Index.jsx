import {Link} from "react-router-dom";

export default function Index() {
    return (
        <>

            <section
                className="text-gray-600 body-font h-screen flex bg-[url(https://upload.wikimedia.org/wikipedia/commons/3/35/Bitcoin_Network_Blue_4k.jpg)] bg-cover bg-center">
                <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                    <div className="lg:w-2/3 w-full animate-fade-in-down">

                        <h1 className="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
                            Hello, We are Bank.
                        </h1>

                        <h1 className="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
                            Welcome to our website, We are here to help you to uncrease your business.
                        </h1>

                        <p className="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
                            So, what are you waiting for? Let's get started.'
                        </p>

                        <Link to={"/login"} className="uppercase rounded-sm bg-red-400 font-bold text-white px-8 py-4 mx-auto mr-4 hidden md:inline">Login</Link>
                        <Link to={"/register"} className="uppercase rounded-sm bg-green-400 font-bold text-white px-8 py-4 mx-auto hidden md:inline">Register</Link>
                    </div>
                </div>

            </section>



    </>
    )
}