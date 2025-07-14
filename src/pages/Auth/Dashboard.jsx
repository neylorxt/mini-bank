import SidebarDashboard from "@/pages/Auth/Components/SidebarDashboard.jsx";
import {useEffect, useState} from "react";
import MainDashboard from "@/pages/Auth/Components/MainDashboard.jsx";
import Transfer from "@/pages/Auth/Components/Transfer.jsx";
import Settings from "@/pages/Auth/Components/Settings.jsx";
import Account from "@/pages/Auth/Components/Account.jsx";


export default function Dashboard() {
    const [clickOnIcon, setClickOnIcon] = useState("dashboard");

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
            <article className="w-full border-3">
                { clickOnIcon.toLowerCase().includes("dashboard")  && <MainDashboard/> }
                { clickOnIcon.toLowerCase().includes("settings") && <Settings/> }
                { clickOnIcon.toLowerCase().includes("transfer") && <Transfer/> }
                { clickOnIcon.toLowerCase().includes("account") && <Account/> }
            </article>
        </section>
    </>
}
