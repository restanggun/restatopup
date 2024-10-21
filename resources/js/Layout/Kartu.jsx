const Kartu = () => {
    return(
        <div className="relative bg-abu-3 w-[221px] h-[274px] rounded-[30px] border border-abu-1 ml-10 mb-7 overflow-hidden transition-all duration-200 hover:scale-[1.03] hover:rotate-3 hover:border-2 hover:border-biru-1 hover:shadow-2xl hover:shadow-biru-1">
            <img src="https://i.ibb.co.com/4MSBZYV/ML-1.jpg" alt="" className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 w-full h-24  backdrop-blur text-white font-semibold flex flex-col justify-center items-center transition-all duration-200 hover:h-36">
                <h1 className="text-lg font-medium">Mobile Legends</h1>
                <h1 className="text-md font-medium">Moonton</h1>
            </div>
        </div>
    )
}

export default Kartu;
