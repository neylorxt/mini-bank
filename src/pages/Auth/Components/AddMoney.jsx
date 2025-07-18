import {IconCurrencyDollar, IconInfoCircle  } from "@tabler/icons-react";
import {Controller, useForm} from "react-hook-form";
import { sendData } from "@neylorxt/react-request"
import {useAuth} from "@/GlobalComponents/AuthProvider.jsx";
import { Alert } from '@mantine/core';
import {useState} from "react";



export default function AddMoney() {
    const {getToken, updateUser} = useAuth()
    const [serverResponse, setServerResponse] = useState(null);

    const {control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            amount: 0,
        }
    });


    const handleAddMoney = async (data) => {
        const response = await sendData("http://localhost:5000/mini-bank_api/user/auth/addMoney", {
            data: data,
            config: {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + getToken()
                }
            }
        })


        if (response.success) {
            updateUser( response.data.user );
            reset()
        }

        setServerResponse(response.data);
        setTimeout(() => {
            setServerResponse(null);
        }, 3000)
    }


    return <>
        <section className={"items-center justify-center flex h-full"}>

            <div className="bg-gray-800 dark:bg-gray-300 rounded-md
            shadow-md overflow-hidden border-2 border-white md:w-1/2 w-full mx-5">
                <div className="px-6 py-4 bg-gray-900 text-white">
                    <h1 className="text-lg font-bold">Add Money</h1>
                </div>

                <form onSubmit={handleSubmit(handleAddMoney)}
                    className="px-6 py-4">


                    <div className="mb-4 flex justify-between items-center">
                        <Controller
                            name="amount"
                            control={control}
                            rules={{
                                required: "amount is required.",
                                min: {
                                    value: 1,
                                    message: "Amount must be at least 1"
                                },
                                max: {
                                    value: 300,
                                    message: "Amount must be at most 300"
                                }
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

                                    {errors.amount && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.amount?.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        <div className="mt-6">
                            <IconCurrencyDollar className="w-10 h-10 text-blue-900 ml-2" size={32}/>
                        </div>
                    </div>

                    <button

                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer">
                        Add
                    </button>

                    {
                        serverResponse?.message && (
                            <div className="mt-4">
                                <Alert variant="filled" color="teal" title="Success" icon={<IconInfoCircle />}>
                                    { serverResponse?.message ?? "Something went wrong" }
                                </Alert>
                            </div>
                        )

                    }

                    {
                        serverResponse?.error && (
                            <div className="mt-4">
                                <Alert variant="filled" color="red" title="ERROR" icon={<IconInfoCircle />}>
                                    { serverResponse?.error ?? "Something went wrong" }
                                </Alert>
                            </div>
                        )
                    }


                </form>
            </div>

        </section>
    </>
}