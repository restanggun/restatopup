import { useState } from "react";
import { Logo, NamaWeb } from "@/Config/config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsPasswordValid(false);
      setConfirmPassword(""); 
    } else {
      setIsPasswordValid(true);
      setIsSubmitted(true); 
    }
  };

  return (
    <div className="w-full h-screen bg-transparent backdrop-blur flex justify-center items-center fixed z-20">
      <div className="w-full max-w-[750px] h-auto rounded-[30px] bg-abu-3 border border-abu-1 mt-16 flex flex-col lg:flex-row justify-between overflow-hidden shadow-lg">
        <div className="w-full lg:w-[375px] relative flex">
          <img
            src="https://i.ibb.co.com/4MSBZYV/ML-1.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div id="Logo" className="flex space-x-2 items-center py-3 absolute bottom-3 left-7">
            <img src={Logo} alt="Logo" className="w-12" />
            <h1 className="text-2xl font-bold">{NamaWeb}</h1>
          </div>
        </div>
        <div className="grid justify-center mx-8 my-8 lg:my-4 lg:mx-14 space-y-4 lg:space-y-6">
          <div className="flex w-full justify-end">
            <Link to="/" className="font-medium hover:underline">
              Kembali
            </Link>
          </div>
          <h1 className="font-bold text-3xl text-center">Daftar</h1>
          <input
            type="text"
            placeholder="Masukan Nama Kamu"
            className="bg-abu-2 border border-abu-1 rounded-full focus:ring-biru-1 focus:border-biru-1 placeholder:text-abu-1 px-4 py-3 transition-all duration-300 ease-in-out w-full"
          />
          <input
            type="email"
            placeholder="Masukan Email Kamu"
            className="bg-abu-2 border border-abu-1 rounded-full focus:ring-biru-1 focus:border-biru-1 placeholder:text-abu-1 px-4 py-3 transition-all duration-300 ease-in-out w-full"
          />
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukan Password Kamu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-abu-2 border border-abu-1 rounded-full focus:ring-biru-1 focus:border-biru-1 placeholder:text-abu-1 px-4 py-3 transition-all duration-300 ease-in-out w-full"
            />
            <div className="absolute right-4 cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={isPasswordValid ? "Konfirmasi Password Kamu" : "Konfirmasi Password Salah"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`bg-abu-2 border ${isPasswordValid ? "border-abu-1" : "border-red-500"} rounded-full focus:ring-biru-1 focus:border-biru-1 placeholder:text-abu-1 px-4 py-3 transition-all duration-300 ease-in-out w-full`}
            />
            <div className="absolute right-4 cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className={`w-64 py-3 rounded-full text-white font-semibold transition-all duration-300 ease-in-out ${isSubmitted ? "bg-green-500 hover:bg-green-600" : "bg-biru-grad hover:bg-biru-1"}`}
          >
            {isSubmitted ? "Cek Email Mu Sekarang" : "Daftar"}
          </button>
          <p className="text-sm text-center">
            Sudah Punya Akun?{" "}
            <Link to="/login" className="text-biru-1 font-medium cursor-pointer hover:underline">
              Masuk Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
