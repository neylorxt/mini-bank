import {Controller, useForm} from "react-hook-form";
import {useAuth} from "@/GlobalComponents/AuthProvider.jsx";
import { deleteData } from "@neylorxt/react-request"


export default function Account() {
    const {user, getToken, logout} = useAuth()


    const {control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            username: user?.username ?? "none",
            email: user?.email ?? "none",
            password: "******",
        }
    });


    const handleUpdate = (data) => {
        console.log(data);
    }

    const handleDelete = async () => {

        const response = await deleteData("http://localhost:5000/mini-bank_api/user/auth/delete", {
            config:{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + getToken()
                }
            }
        })

        console.log(response);

        if(response.success) {
            logout();
            window.location.href = "/login";
        }


    }


    return (
        <section className="text-gray-600 body-font h-screen flex bg-gray-800">
            <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                <div className="max-w-md w-full text-gray-600 space-y-5 border-2 px-10 py-5 rounded-lg bg-gray-900">
                    <div className="text-center">
                        <img alt="logo"
                             src="https://ossimg.cmdgametransit.com/OK.Win/other/h5setting_20240313155706n3d7.png"
                             width="150" className="mx-auto"/>
                        <div className="mt-5">
                            <h3 className="text-gray-200 text-2xl font-bold sm:text-3xl">
                                Account
                            </h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(handleUpdate)} className="space-y-5">

                        <Controller
                            name="username"
                            control={control}
                            rules={{
                                required: "Username is required.",
                                pattern:{
                                    value: /^[a-zA-Z0-9_]+$/,
                                    message: "Username must contain only letters, numbers and underscores"
                                },
                                minLength: {
                                    value: 3,
                                    message: "Username must be at least 3 characters long"
                                }
                            }}
                            render={({ field }) => (
                                <div>
                                    <label className="font-medium"> Username </label>
                                    <input
                                        {...field}
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                                    />

                                    {errors.username && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.username.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

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
                            rules={ { required: true,
                                minLength: 4,
                                pattern:{ required: true, value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{6,}$/,
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


                        <div className="flex items-center justify-between text-sm gap-x-3">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-red-600
                                    rounded-lg duration-150 hover:cursor-pointer"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => {
                                    handleDelete()
                                }}
                                className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600
                                    rounded-lg duration-150 hover:cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}