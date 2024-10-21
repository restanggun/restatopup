import { BannerData } from "@/Config/config";
import Banner from "@/Layout/Banner";
import Nav from "@/Layout/Nav";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { IoFlash, IoGameController } from "react-icons/io5";
import Kartu from "@/Layout/Kartu";
import { FaFire, FaSquareWhatsapp, FaTelegram, FaSquareInstagram, FaFacebook, FaRegCopyright } from "react-icons/fa6";
import { FiChevronsRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Home = ({ NamaWebnya, Logonya }) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const flashSaleSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div className='w-full h-auto bg-abu-2 overflow-hidden text-white'>
            <Nav NamaWebnya={NamaWebnya} Logonya={Logonya}/>
            <Slider {...settings}>
                {BannerData.map((data, index) => (
                    <Banner 
                        key={index}
                        gambar={data.gambar}
                        tag={data.tag}
                        ket={data.ket}
                    />
                ))}
            </Slider>
            <div className="w-full h-auto border-t border-abu-1">
                <div className="flex list-none space-x-10 text-white text-1xl py-5 px-10">
                    <button className="bg-abu-3 hover:scale-[1.02] hover:bg-biru-grad px-4 py-2 rounded-full">Game</button>
                    <button className="bg-abu-3 hover:scale-[1.02] hover:bg-biru-grad px-4 py-2 rounded-full">Token Listrik</button>
                    <button className="bg-abu-3 hover:scale-[1.02] hover:bg-biru-grad px-4 py-2 rounded-full">Pulsa</button>
                    <button className="bg-abu-3 hover:scale-[1.02] hover:bg-biru-grad px-4 py-2 rounded-full">Kuota</button>
                </div>
            </div>
            <div id="diskon" className="w-full max-w-[1300px] h-[250px] bg-abu-3 m-7 rounded-[30px] border border-abu-1 overflow-hidden mx-auto">
                <div className="flex items-top justify-between p-5 bg-biru-grad border-b border-biru-1">
                    <div className="flex space-x-1">
                        <IoFlash className="text-yellow-400 text-4xl"/>
                        <h1 className="font-medium text-3xl">Flashsale</h1>
                    </div>
                    <h1 className="text-2xl">24.30.00</h1>
                </div>
                <Slider {...flashSaleSettings} className="w-full h-full my-9 mx-7">
                    <div className="max-w-[200px] h-[100px] bg-abu-2 border border-abu-1 rounded-[15px] flex items-center justify-center">
                        <h1>Tes Coyy</h1>
                    </div>
                    <div className="max-w-[200px] h-[100px] bg-abu-2 border border-abu-1 rounded-[15px] flex items-center justify-center">
                        <h1>Tes Coyy</h1>
                    </div>
                    <div className="max-w-[200px] h-[100px] bg-abu-2 border border-abu-1 rounded-[15px] flex items-center justify-center">
                        <h1>Tes Coyy</h1>
                    </div>
                    <div className="max-w-[200px] h-[100px] bg-abu-2 border border-abu-1 rounded-[15px] flex items-center justify-center">
                        <h1>Tes Coyy</h1>
                    </div>
                    <div className="max-w-[200px] h-[100px] bg-abu-2 border border-abu-1 rounded-[15px] flex items-center justify-center">
                        <h1>Tes Coyy</h1>
                    </div>
                </Slider>
            </div>
            <div id="Populer" className="px-20 py-14">
                <h1 className="flex text-3xl"><FaFire className="text-red-500 mr-2"/>Game Populer</h1>
            </div>
            <Kartu/>
            <div id="Populer" className="px-20 py-14">
                <h1 className="flex text-3xl"><IoGameController className="text-yellow-400 mr-2"/>Game</h1>
            </div>
            <div id="Game" className="flex flex-wrap">
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
                <Kartu/>
            </div>
            <div id="cs" className="w-full h-40 bg-biru-grad border-y border-y-biru-1 mt-14 font-medium text-2xl text-center p-5 grid justify-center">
                <div>
                    <h1 className="font-bold text-3xl ">Media Sosial {NamaWebnya}</h1>
                    <h1>Follow Media Sosial Kita Dan Dapatkan Voucernya!</h1>
                </div>
                <div className="flex space-x-5 justify-center">
                    <FaSquareWhatsapp/>
                    <FaTelegram/>
                    <FaSquareInstagram/>
                    <FaFacebook/>
                </div>
            </div>
            <div id="footer" className="w-full p-16 flex">
                <div id="restatopup" className="">
                    <div id="logo" className="flex items-center space-x-2 font-bold">
                        <img src={Logonya} alt="" className="w-9"/>
                        <h1 className="text-2xl">{NamaWebnya}</h1>
                    </div>
                    <p className="w-80 font-light text-2sm text-abu-1 mt-5">
                        Resta Topup adalah website yang menyediakan produk digital, dari topup game sampai kebutuhan listrik dan lain-lainnya. kami memproses pesanan anda dengan otomatis dan pastinya cepat!
                    </p>
                    <div className="flex space-x-2 items-center pt-5 text-abu-1">
                        <FaRegCopyright/>
                        <p>Copyright Resta Topup 2024</p>
                    </div>
                </div>
                <div id="petasitus" className="font-bold text-2xl">
                    <h1>Peta Situs</h1>
                    <div className="flex">
                        <div className="list-none text-lg text-abu-1 font-light space-y-3 m-5">
                            <p><a href="">FlashSale</a></p>
                            <p><a href="">Produk Game</a></p>
                            <p><a href="">Game Populer</a></p>
                            <p><a href="">Game Lainnya</a></p>
                        </div>
                        <div className="list-none text-lg text-abu-1 font-light space-y-3 m-5">
                            <p><a href="">Prodek Token PLN</a></p>
                            <p><a href="">Token PLN</a></p>
                            <p><a href="">Promo Harga</a></p>
                        </div>
                        <div className="list-none text-lg text-abu-1 font-light space-y-3 m-5">
                            <p><a href="">FlashSale Pulsa</a></p>
                            <p><a href="">Pulsa All Operator</a></p>
                            <p><a href="">Produk Populer</a></p>
                            <p><a href="">Promo Pulsa</a></p>
                        </div>
                        <div className="list-none text-lg text-abu-1 font-light space-y-3 m-5">
                            <p><a href="">FlashSale Kuota</a></p>
                            <p><a href="">Kuota Populer</a></p>
                            <p><a href="">Kuota Unlimited</a></p>
                            <p className="text-biru-1"><a href="">Selengkapnya<FiChevronsRight/></a></p>
                        </div>
                    </div>
                </div>
                <div id="customerservice" className="font-bold text-2xl">
                    <h1>Customer Service</h1>
                    <div>
                        <div className="flex text-lg items-center space-x-2 font-light text-abu-1 m-5">
                            <FaWhatsapp/><p className="font-light text-sm">+62813-2860-8503</p>
                        </div>
                        <div className="flex text-lg items-center space-x-2 font-light text-abu-1 m-5">
                            <FaTelegram/><p className="font-light text-sm">+62813-2860-8503</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
