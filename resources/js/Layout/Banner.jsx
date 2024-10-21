const Banner = ({ gambar, tag, ket }) => {
    return (
        <div className="flex justify-between space-x-8 bg-abu-3 border border-abu-1 rounded-[30px] overflow-hidden mt-24 mb-6 mx-5">
            <div className="w-full h-[440px]">
                <img src={gambar} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="m-4 flex flex-col justify-center">
                <h1 className="text-biru-1 font-semibold text-2xl">{tag}</h1>
                <h2 className="text-white font-semibold text-4xl">{ket}</h2>
            </div>
        </div>
    );
};

export default Banner;
