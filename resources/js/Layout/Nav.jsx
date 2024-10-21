import ForgotPassword from "@/Auth/ForgotPassword";
import Login from "@/Auth/Login";
import Register from "@/Auth/Register";
import { FaWallet } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Nav = ({NamaWebnya, Logonya}) => {
    return(
        <Router>
            <div className="bg-abu-3 w-full h-auto text-white border-b border-abu-1 flex items-center justify-between px-5 fixed z-30">
                <div id="Logo" className="flex space-x-2 items-center py-3">
                    <img src={Logonya} alt="" className="max-w-12" />
                    <h1 className="text-2xl font-bold">{NamaWebnya}</h1>
                </div>
                <input type="search" placeholder={`Cari di ${NamaWebnya} ...`} className="w-96 h-10 bg-abu-2 border-none rounded-full placeholder:text-abu-1 placeholder:pl-20 focus:text-white focus:ring-abu-1"/>
                <div id="Saldo">
                    <h1 className="flex items-center space-x-2"><FaWallet /><p>Saldo</p></h1>
                </div>
                <div id="Login" className="space-x-2">
                    <Link to="/login" type="submit" className="bg-abu-2 rounded-full px-6 py-3">Masuk</Link>
                    <Link to="/register" type="submit" className="bg-biru-grad rounded-full px-6 py-3">Daftar</Link>
                </div>
            </div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            </Routes>
        </Router>
    )
}

export default Nav