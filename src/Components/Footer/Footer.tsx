import './Footer.css';
import { IconContext } from "react-icons";
import { AiTwotonePhone, AiFillMail, AiOutlineCompass } from "react-icons/ai";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

type FooterProp = {
    width: number
}

export const Footer = ({ width }: FooterProp) => {
    return (
        <footer className='footer'>
            <div className="flex sm:flex-row flex-col sm:pt-14 sm:pl-14 p-4">
                <div className='basis-1/3 sm:pt-4 text-center sm:text-justify text-xs sm:text-base'>TaburTuai adalah platform yang menggantikan cara bertani konvensional menjadi Smart Farming dengan menggunakan teknologi Internet of Things (IOT) yang memudahkan petani dalam monitoring dan controlling kegiatan pertanian.</div>
                <div className='sm:pl-20 sm:basis-1/3'>
                    <h2 className='sm:pb-2 sm:text-xl text-sm underline font-bold pt-4'>Quick Links</h2>
                    <p><a href="index.html" className='sm:text-base text-xs'>About</a></p>
                    <p><a href="index.html" className='sm:text-base text-xs'>FAQ</a></p>
                    <p><a href="index.html" className='sm:text-base text-xs'>Privacy Policy</a></p>
                    <p><a href="index.html" className='sm:text-base text-xs'>Help</a></p>
                    <p><a href="index.html" className='sm:text-base text-xs'>Terms & Consitions</a></p>
                    <p><a href="index.html" className='sm:text-base text-xs'>Contact</a></p>
                </div>
                <div className='sm:pl-8  pt-4'>
                    <h2 className='sm:pb-2 sm:text-xl underline font-bold text-sm'>Contact Us</h2>
                    <IconContext.Provider value={{ color: 'white', size: '15px' }}>
                        <div className='flex flex-row py-2'>
                            <AiTwotonePhone /><p className='ml-1 sm:text-base text-xs'>0817 7045 0830</p>
                        </div>
                        <div className='flex flex-row py-2'>
                            <AiFillMail /><p className='ml-1 sm:text-base text-xs'>support@lesson.com</p>
                        </div>
                        <div className='flex flex-row py-2'>
                            <AiOutlineCompass /><p className='ml-1 sm:text-base text-xs'>Jl.Cemara No. 2, Kota Makassar, 90213</p>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            {width < 640 ? <div className='text-center py-4 px-4 sm:p-4 flex sm:flex-row sm:pt-14 sm:pl-14'>
                <IconContext.Provider value={{ color: 'white', size: '25px' }}>
                    <FaInstagramSquare className='w3-large' />
                    <FaFacebookSquare />
                    <FaLinkedin />
                    <FaTwitterSquare />
                </IconContext.Provider>
            </div > : <div className='flex py-4 sm:flex-row sm:pt-14 sm:pl-14'>
                <IconContext.Provider value={{ color: 'white', size: '35px' }}>
                    <FaInstagramSquare className='w3-large' />
                    <FaFacebookSquare />
                    <FaLinkedin />
                    <FaTwitterSquare />
                </IconContext.Provider>
            </div >}


            <div className="text-center">
                <hr className='opacity-50' />
                <p className='text-sm sm:text-base p-2'>&#169; 2022 Tabur Tuai Group. All Rights Reserved</p>
            </div>
        </footer >
    )
}