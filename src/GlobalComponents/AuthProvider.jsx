import {useContext, useState} from "react";
import {AuthContext} from "@/GlobalComponents/AuthContext.jsx";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return <>
        <AuthContext.Provider value={{user, setUser}} >
            {children}
        </AuthContext.Provider>
    </>
}

export const useAuth = () => {
    return useContext(AuthContext);
};