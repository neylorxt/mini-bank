import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Services from "@/pages/Services.jsx";
import Login from "@/pages/Login.jsx";
import Register from "@/pages/Register.jsx";
import About from "@/pages/About.jsx";
import Contact from "@/pages/Contact.jsx";

function App() {

  return (
    <BrowserRouter>
        <main className="bg-gray-800 ">
            <Routes>
                <Route path="/" element={ <Index /> } />
                <Route path="/services" element={ <Services /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
