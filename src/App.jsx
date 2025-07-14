import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Services from "@/pages/Services.jsx";
import Login from "@/pages/Login.jsx";
import Register from "@/pages/Register.jsx";
import About from "@/pages/About.jsx";
import Contact from "@/pages/Contact.jsx";
import Navbar from "@/pages/components/Navbar.jsx";
import Footer from "@/pages/components/Footer.jsx";
import Dashboard from "@/pages/Auth/Dashboard.jsx";
import {AuthProvider} from "@/GlobalComponents/AuthProvider.jsx";
import {Secure} from "@/GlobalComponents/Secure.jsx";

function App() {

  return (
      <AuthProvider>
        <BrowserRouter>
            <main className="bg-gray-300 dark:bg-gray-800">
                <Navbar/>

                <Routes>
                    <Route path="/" element={ <Index /> } />
                    <Route path="/services" element={ <Services /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/register" element={ <Register /> } />
                    <Route path="/dashboard" element={ <Secure children={ <Dashboard /> } /> } />
                </Routes>

                <Footer />

            </main>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App
