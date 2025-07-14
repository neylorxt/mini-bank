import Navbar from "@/pages/components/Navbar.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useForm, Controller} from "react-hook-form"
import { sendData, sendRequest } from "@neylorxt/react-request"
import {useAuth} from "@/GlobalComponents/AuthProvider.jsx";

export default function Login() {
    const {login} = useAuth();
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const handleLogin = async (data) => {
        // const response = await sendData("http://localhost:5000/mini-bank_api/user/login", {
        //     data: data
        // })

        const response = await sendRequest("http://localhost:5000/mini-bank_api/user/login", {
            method: "POST",
            data: data
        })

        if(response.success) {
            await login(response.data.token);

            setTimeout(() => {
                navigate("/dashboard");
            }, 300);
        }

        console.log(response);
    }

    return (
        <>
            <main>
                <Navbar/>

                <section className="text-gray-600 body-font h-screen flex bg-gray-800">
                    <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                        <div className="max-w-md w-full text-gray-600 space-y-5 border-2 px-10 py-5 rounded-lg bg-gray-900">
                            <div className="text-center">
                                <img alt="logo"
                                    src="https://ossimg.cmdgametransit.com/OK.Win/other/h5setting_20240313155706n3d7.png"
                                    width="150" className="mx-auto"/>
                                <div className="mt-5">
                                    <h3 className="text-gray-200 text-2xl font-bold sm:text-3xl">
                                        Log in to your account
                                    </h3>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                    }}
                                    render={({ field }) => (
                                        <div>
                                            <label className="font-medium">Email</label>
                                            <input
                                                {...field}
                                                type="email"
                                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.email.type === "required" && "Email is required"}
                                                    {errors.email.type === "pattern" && "Invalid email format"}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                />


                                <Controller
                                    name={"password"}
                                    control={control}
                                    rules={ { required: true, minLength: 4,
                                        pattern:{ required: true, value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]{6,}$/,
                                        }}
                                    }
                                    render={ ({ field }) => (

                                        <div>
                                            <label className="font-medium"> Password </label>
                                            <input
                                                {...field}
                                                type="password"
                                                required
                                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                                            />

                                            {errors.password && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.password.type === "required" && "Password is required"}
                                                    {errors.password.type === "minLength" && "Password must be at least 4 characters"}
                                                    {errors.password.type === "pattern" && "Password must contain uppercase, lowercase, number and special character"}
                                                </p>
                                            )}

                                        </div>

                                    )  }
                                />



                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            type="checkbox"
                                            id="remember-me-checkbox"
                                            className="checkbox-item peer hidden"
                                        />
                                        <label
                                            htmlFor="remember-me-checkbox"
                                            className="relative flex w-5 h-5 bg-white peer-checked:bg-red-600 rounded-md border ring-offset-2 ring-red-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                        ></label>
                                        <span>Remember me</span>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-center text-red-600 hover:text-red-500"
                                    >Forgot password?</a
                                    >
                                </div>
                                <button type="submit"
                                    className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600
                                    rounded-lg duration-150 hover:cursor-pointer"
                                >
                                    Login
                                </button>
                            </form>
                            <button
                                className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm
                                font-medium hover:bg-gray-50 duration-150 active:bg-gray-100 hover:cursor-pointer"
                            >

                                <img
                                    src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
                                    alt="Google"
                                    className="w-5 h-5"
                                />

                                Continue with Google
                            </button>
                            <p className="text-center">
                                Don't have an account?

                                <Link to={"/register"}
                                    className="font-medium text-red-600 hover:text-red-500">Sign up
                                </Link>
                            </p>
                        </div>
                    </div>

                </section>


            </main>
        </>
    )
}