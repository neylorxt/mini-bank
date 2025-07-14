import { useAuth } from "@/GlobalComponents/AuthProvider.jsx";
import { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Secure({ children, fallback = null, redirectTo = "/" }) {
    const { isAuthenticated, loadingIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [hasRedirected, setHasRedirected] = useState(false);

    useEffect(() => {
        if (!loadingIsAuthenticated && !isAuthenticated && !hasRedirected) {
            setHasRedirected(true);
            navigate(redirectTo, { replace: true });
        }
    }, [loadingIsAuthenticated, isAuthenticated, navigate, redirectTo, hasRedirected]);

    // Réinitialise le flag de redirection si l'utilisateur devient authentifié
    useEffect(() => {
        if (isAuthenticated && hasRedirected) {
            setHasRedirected(false);
        }
    }, [isAuthenticated, hasRedirected]);

    // Affichage pendant le chargement
    if (loadingIsAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-2">Vérification de l'authentification...</span>
            </div>
        );
    }

    // Si pas authentifié, affiche le fallback ou rien
    if (!isAuthenticated) {
        return fallback;
    }

    // Si authentifié, affiche le contenu protégé
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span className="ml-2">Chargement...</span>
                </div>
            }
        >
            {children}
        </Suspense>
    );
}