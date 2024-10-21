import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, NamaWeb } from "@/Config/config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [step, setStep] = useState(1);

  const handlePasswordReset = () => {
    if (newPassword !== confirmNewPassword) {
      setError(true);
      setNewPassword("");
      setConfirmNewPassword("");
    } else {
      setError(false);
      setStep(3);
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
        <div className="grid justify-center mx-8 my-8 py-8 lg:my-4 lg:mx-14 space-y-4 lg:space-y-6">
          <div className="flex w-full justify-end">
            <Link to="/" className="font-medium hover:underline">
              Kembali
            </Link>
          </div>
          {step === 1 && (
            <>
              <h1 className="font-bold text-3xl text-center">Lupa Password</h1>
              <input
                type="email"
                placeholder="Masukan Email Kamu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-abu-2 border border-abu-1 rounded-full focus:ring-biru-1 placeholder:text-abu-1 px-4 py-3 transition-all duration-300 ease-in-out w-full"
              />
              <button
                type="submit"
                onClick={() => setStep(2)}
                className="bg-biru-grad w-64 py-3 rounded-full text-white font-semibold hover:bg-biru-1 transition-all duration-300 ease-in-out"
              >
                Kirim Kode Verifikasi
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <h1 className="font-bold text-3xl text-center">Verifikasi Email</h1>
              <input
                type="text"
                maxLength={4}
                placeholder="Masukan Kode Verifikasi"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="bg-abu-2 border border-abu-1 rounded-full focus:ring-biru-1 placeholder:text-abu-1 px-4 py-3 transition-all duration-300 ease-in-out w-full"
              />
              <input
                type="password"
                placeholder="Masukan Password Baru"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={`bg-abu-2 border ${error ? "border-merah-1" : "border-abu-1"} rounded-full focus:ring-biru-1 placeholder:text-abu-1 px-4 py-3 transition-all duration-300 ease-in-out w-full`}
              />
              <input
                type="password"
                placeholder="Konfirmasi Password Baru"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className={`bg-abu-2 border ${error ? "border-merah-1" : "border-abu-1"} rounded-full focus:ring-biru-1 placeholder:text-abu-1 px-4 py-3 transition-all duration-300 ease-in-out w-full`}
              />
              {error && <p className="text-sm text-merah-1">Password tidak sesuai</p>}
              <button
                type="submit"
                onClick={handlePasswordReset}
                className="bg-biru-grad w-64 py-3 rounded-full text-white font-semibold hover:bg-biru-1 transition-all duration-300 ease-in-out"
              >
                Ubah Password
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <h1 className="font-bold text-3xl text-center">Password Berhasil Diubah</h1>
              <p className="text-sm text-center">
                Silahkan masuk dengan password baru Anda
              </p>
              <button className="bg-biru-grad w-64 py-3 rounded-full text-white font-semibold hover:bg-biru-1 transition-all duration-300 ease-in-out">
                Masuk
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
