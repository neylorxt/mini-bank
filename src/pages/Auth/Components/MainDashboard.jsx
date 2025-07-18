import {useAuth} from "@/GlobalComponents/AuthProvider.jsx";
import {
    IconCoinBitcoin
} from '@tabler/icons-react';


export default function MainDashboard({ sentTransferArray, receivedTransferArray }) {
    const {user} = useAuth();

    return <>
        <section>

            <aside>

                <div className="text-gray-900 pt-16 pb-24 px-6 w-full 0">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 text-gray-200">Dashboard</h2>
                        <p className="text-lg text-gray-300 mb-16">Here are the lastest data</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                            <div
                                className="flex flex-col items-center p-8 bg-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div
                                    className="mb-6 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 p-1">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                             className="w-12 h-12 text-gray-900"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-3xl font-extrabold text-gray-800">{user?.receivedTransfers?.length ?? 0}</div>
                                <div className="text-gray-800 font-semibold">Received Transfers</div>
                            </div>

                            <div
                                className="flex flex-col items-center p-8 bg-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div
                                    className="mb-6 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 p-1">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                             className="w-12 h-12 text-gray-900"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 2h7v5h5v11H6zm2 8v2h8v-2zm0 4v2h5v-2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-3xl font-extrabold text-gray-800">{user?.sentTransfers?.length ?? 0}</div>
                                <div className="text-gray-500 font-semibold">Sent Transfers</div>
                            </div>

                            <div
                                className="flex flex-col items-center p-8 bg-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div
                                    className="mb-6 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 p-1">
                                    <div
                                        className="w-full h-full rounded-full bg-white flex items-center justify-center">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="icon icon-tabler icons-tabler-outline icon-tabler-currency-bitcoin">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"/>
                                            <path d="M8 6l0 12"/>
                                            <path d="M8 12l6 0"/>
                                            <path d="M9 3l0 3"/>
                                            <path d="M13 3l0 3"/>
                                            <path d="M9 18l0 3"/>
                                            <path d="M13 18l0 3"/>
                                        </svg>

                                    </div>
                                </div>
                                <div className="text-3xl text-amber-600 font-extrabold">{
                                    user?.money ?? "none"
                                }</div>
                                <div className="text-amber-600 font-semibold">Amount</div>
                            </div>
                        </div>
                    </div>
                </div>

            </aside>

            <article>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 px-6 h-150 ">

                <div className="bg-gray-300 rounded-lg shadow overflow-auto">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Recent Funds Transfer</h2>
                        </div>
                        <div className="">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-300">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-300 divide-y divide-gray-200">


                                {
                                    receivedTransferArray && receivedTransferArray.map( (receive, index) => {
                                        return (
                                            <tr key={index} >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900"> {receive?.sender?.username} </div>
                                                            <div className="text-sm text-gray-500">{receive?.sender?.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">Transfer</div>
                                                    <div className="text-sm text-orange-500 font-bold flex items-center justify-center">
                                                        {receive?.amount} <IconCoinBitcoin className="h-5 w-5 ml-1"/>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {receive?.createdAt}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Success
                                                    </span>
                                                </td>
                                            </tr>

                                        )
                                    })
                                }


                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="bg-gray-300 rounded-lg shadow overflow-auto">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Sent Transfers</h2>
                        </div>
                        <div className="bg-gray-300">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-300">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                                </thead>

                                <tbody className="bg-gray-300 divide-y divide-gray-200">

                                {
                                    sentTransferArray && sentTransferArray.map( (transfer, index) => {
                                        return (
                                            <tr key={index} >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900"> {transfer?.receiver?.username} </div>
                                                        <div className="text-sm text-gray-500">{transfer?.receiver?.email}</div>
                                                    </div>
                                                </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">Receive</div>
                                                    <div className="text-sm text-orange-500 font-bold flex items-center justify-center">
                                                        {transfer?.amount} <IconCoinBitcoin className="h-5 w-5 ml-1"/>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {transfer?.createdAt}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Success
                                                    </span>
                                                </td>
                                            </tr>

                                        )
                                    })
                                }


                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>


            </article>

        </section>
    </>
}