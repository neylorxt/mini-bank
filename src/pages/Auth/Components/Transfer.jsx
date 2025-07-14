import {IconCurrencyDollar, IconMessage } from "@tabler/icons-react";
import {Controller, useForm} from "react-hook-form";



export default function Transfer() {

    const {control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            amount: 10,
            message: "",
        }
    });


    const handleTransfer = (data) => {
        console.log(data);
    }


    return <>
        <section className={"items-center justify-center flex h-full"}>

            <div className="bg-gray-800 dark:bg-gray-300 rounded-md
            shadow-md overflow-hidden border-2 border-white md:w-1/2 w-full mx-5">
                <div className="px-6 py-4 bg-gray-900 text-white">
                    <h1 className="text-lg font-bold">Transfer</h1>
                </div>

                <form onSubmit={handleSubmit(handleTransfer)}
                    className="px-6 py-4">

                    <div className="mb-4">
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
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="transfer-to">
                                        Transfer to
                                    </label>
                                    <input
                                        {...field}
                                        required
                                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3
                                        text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                                        type="text" placeholder="name of money recipient" id={"transfer-to"}
                                    />

                                    {errors.username && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.username.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <div className="mb-4 flex justify-between items-center">
                        <Controller
                            name="amount"
                            control={control}
                            rules={{
                                required: "amount is required.",
                            }}
                            render={({ field }) => (
                                <div className="w-full">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
                                        Amount
                                    </label>
                                    <input
                                        {...field}
                                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="number" placeholder="***" id={"amount"}
                                        min={1}
                                    />

                                    {errors.username && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.amount.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        <div className="mt-6">
                            <IconCurrencyDollar className="w-10 h-10 text-blue-900 ml-2" size={32}/>
                        </div>
                    </div>


                    <div className="mb-4">
                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <div className="w-full">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="transfer-to">
                                        Message
                                    </label>

                                    <textarea {...field} placeholder="***" id={"message"}
                                              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700
                                              leading-tight focus:outline-none focus:shadow-outline resize-none h-40 ">

                                    </textarea>

                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <button

                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer">
                        Pay Now
                    </button>
                </form>
            </div>

        </section>
    </>
}