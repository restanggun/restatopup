import { useState } from "react";
import { Logo, NamaWeb } from "@/Config/config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-full h-screen bg-transparent backdrop-blur flex justify-center items-center fixed z-20">
      <div className="w-[750px] h-[450px] rounded-[30px] bg-abu-3 border border-abu-1 mt-16 flex justify-between overflow-hidden">
        <div className="w-[375px] h-full relative">
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

        <div className="grid justify-center m-14 space-y-2">
          <div className="flex w-full justify-end">
            <Link to="/" className="font-medium hover:underline">
              Kembali
            </Link>
          </div>
          <h1 className="font-bold text-2xl">Masuk</h1>

          <input
            type="email"
            placeholder="Masukan Email Kamu"
            className="bg-abu-2 border border-abu-1 rounded-full focus:ring-biru-1 placeholder:text-abu-1 px-4 py-2"
          />

          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukan Password Kamu"
              className="bg-abu-2 border border-abu-1 rounded-full focus:ring-biru-1 placeholder:text-abu-1 px-4 py-3 w-full"
            />
            <div
              className="absolute right-4 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <Link to="/forgotpassword" className="text-sm text-biru-1 cursor-pointer ml-2">Lupa Password?</Link>

          <button type="submit" className="bg-biru-grad w-64 py-2 rounded-full">
            Masuk
          </button>

          <p className="text-sm text-center">
            Belum Punya Akun? <Link to="/register" className="text-biru-1 cursor-pointer">Daftar Sekarang</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
