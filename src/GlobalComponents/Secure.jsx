import {useAuth} from "@/GlobalComponents/AuthProvider.jsx";


export function Secure({children}) {
    const {user} = useAuth();

    if(!user) {
        console.log("Secure");
        window.location.href = "/";
        return ;
    }

    return <>
        {children}
    </>
}