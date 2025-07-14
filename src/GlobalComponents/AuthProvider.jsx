import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/GlobalComponents/AuthContext.jsx";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loadingIsAuthenticated, setLoadingIsAuthenticated] = useState(true);

    // Fonction utilitaire pour parser JSON de manière sécurisée
    const safeJsonParse = (str) => {
        try {
            return JSON.parse(str);
        } catch (error) {
            console.error('Erreur lors du parsing JSON:', error);
            return null;
        }
    };

    // Fonction pour vérifier la validité du token (optionnel)
    const isTokenValid = (token) => {
        if (!token) return false;

        try {
            // Vérifier si c'est un JWT (doit avoir 3 parties séparées par des points)
            const parts = token.split('.');
            if (parts.length !== 3) {
                // Si ce n'est pas un JWT, on assume qu'il est valide
                return true;
            }

            // Décoder le payload du JWT
            const payload = JSON.parse(atob(parts[1]));

            // Vérifier l'expiration si elle existe
            if (payload.exp) {
                const currentTime = Date.now() / 1000;
                return payload.exp > currentTime;
            }

            // Si pas d'expiration, le token est considéré comme valide
            return true;
        } catch (error) {
            console.error('Erreur lors de la validation du token:', error);
            // En cas d'erreur de décodage, on assume que le token est valide
            // pour éviter de bloquer l'authentification
            return true;
        }
    };

    // Fonction pour nettoyer le localStorage en cas d'erreur
    const clearAuthData = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const storedToken = localStorage.getItem('token');
                const storedUser = localStorage.getItem('user');

                if (storedToken && storedUser) {
                    // Vérifier la validité du token
                    if (isTokenValid(storedToken)) {
                        const parsedUser = safeJsonParse(storedUser);

                        if (parsedUser) {
                            setToken(storedToken);
                            setUser(parsedUser);
                            setIsAuthenticated(true);
                        } else {
                            clearAuthData();
                        }
                    } else {
                        clearAuthData();
                    }
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Erreur lors de l\'initialisation de l\'authentification:', error);
                clearAuthData();
            } finally {
                setLoadingIsAuthenticated(false);
            }
        };

        initializeAuth();
    }, []);

    const getUserInLocalStorage = () => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? safeJsonParse(storedUser) : null;
    };

    const updateUser = (newUser) => {
        if (newUser) {
            localStorage.setItem('user', JSON.stringify(newUser));
            setUser(newUser);
        }
    };

    const login = async (newToken, userData = null) => {
        if (newToken) {
            localStorage.setItem('token', newToken);
            setToken(newToken);
            setIsAuthenticated(true);

            if (userData) {
                updateUser(userData);
            }

            // Force une mise à jour immédiate pour éviter les problèmes de timing
            return Promise.resolve();
        }
        return Promise.reject(new Error('Token invalide'));
    };

    const getToken = () => {
        return token || JSON.parse(localStorage.getItem('token')) || null;
    };

    const getUser = () => {
        if (user) {
            return user;
        }

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = safeJsonParse(storedUser);
            if (parsedUser) {
                setUser(parsedUser); // Met à jour l'état pour éviter les futurs accès au localStorage
                return parsedUser;
            }
        }

        return null;
    };

    const logout = () => {
        clearAuthData();
    };

    // Fonction register corrigée (le token ne doit pas être JSON.stringify)
    const register = (newToken, userData = null) => {
        if (newToken) {
            localStorage.setItem('token', newToken);
            setToken(newToken);
            setIsAuthenticated(true);

            if (userData) {
                updateUser(userData);
            }
        }
    };

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            register,
            isAuthenticated,
            getToken,
            getUser,
            loadingIsAuthenticated,
            updateUser,
            user,
            getUserInLocalStorage
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth doit être utilisé dans un AuthProvider');
    }
    return context;
};