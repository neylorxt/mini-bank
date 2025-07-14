import SidebarDashboard from "@/pages/Auth/Components/SidebarDashboard.jsx";
import {useEffect, useState} from "react";
import MainDashboard from "@/pages/Auth/Components/MainDashboard.jsx";
import Transfer from "@/pages/Auth/Components/Transfer.jsx";
import Settings from "@/pages/Auth/Components/Settings.jsx";
import Account from "@/pages/Auth/Components/Account.jsx";
import { getData } from "@neylorxt/react-request"
import {useAuth} from "@/GlobalComponents/AuthProvider.jsx";


export default function Dashboard() {
    const {getToken, updateUser, logout} = useAuth();

    const [clickOnIcon, setClickOnIcon] = useState("dashboard");

    useEffect( () => {

        const getMyData = async () => {
            const response = await getData("http://localhost:5000/mini-bank_api/user/auth/getMyData", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + getToken()
                }
            })

            if (response.success) {
                updateUser(response.data.user);
            }else{
                console.log(response.data?.error);
                logout();
                window.location.href = "/";
            }
        }

        getMyData();

    }, []);

    useEffect(() => {
        if(clickOnIcon.toLowerCase().includes("home")) {
            window.location.href = "/";
        }
    }, [clickOnIcon])

    return <>
        <section className="flex h-full pt-18">
            <aside className="w-fit" >
                <SidebarDashboard clickOnIcon={clickOnIcon} setClickOnIcon={setClickOnIcon}/>
            </aside>
            <article className="w-full">
                { clickOnIcon.toLowerCase().includes("dashboard")  && <MainDashboard/> }
                { clickOnIcon.toLowerCase().includes("settings") && <Settings/> }
                { clickOnIcon.toLowerCase().includes("transfer") && <Transfer/> }
                { clickOnIcon.toLowerCase().includes("account") && <Account/> }

            </article>
        </section>
    </>
}
