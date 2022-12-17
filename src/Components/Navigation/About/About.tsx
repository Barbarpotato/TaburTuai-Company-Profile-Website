import './About.css';
import { IconContext } from "react-icons";
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

type AboutProps = {
    width: number
}

export const About = ({ width }: AboutProps) => {
    return (
        <div>
            <div className='berandaBg bg-no-repeat bg-cover' style={{ height: '600px' }}>
                <p className='text-base text-white font-semibold
                pt-24 px-12 pb-4
                lg:pt-48 lg:pb-12 lg:px-24 test-justify'>
                    TaburTuai merupakan platform Smart Farming berbasis IOT
                    yang <br></br> pertama di Sulawesi khususnya di Sulawesi Selatan.
                    Dan merupakan<br></br> hasil karya anak bangsa dari berbagai macam latar belakang.
                </p>
                <hr className="
                w-[200px] mx-12
                lg:mx-24 h-2 lg:w-[450px]"></hr>
                <p className='text-white text-2xl 
                px-12 pt-2
                lg:px-24 lg:pt-4 font-bold'>Tentang Kami</p>
            </div>
            <div className="background lg:flex lg:flex-row pb-16">
                <div className="lg:flex lg:flex-col lg: basis-7/12">
                    <div>
                        <h1 className='font-bold text-lg text-white mb-4
                        mx-8 pt-8
                        lg:mx-24'>Visi</h1>
                        <p className='py-4 text-white  mx-8 lg:mx-24'>Membentuk karakter petani yang cerdas dan berkompetensi dalam penerapan teknologi di bidang pertanian.</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-lg text-white mb-4  mx-8
                        lg:mx-24'>Misi</h1>
                        <ul className=' mx-8 lg:mx-24 text-white list-disc'>
                            <li>Mendorong penerapan smart farming guna menuju pertanian yang berkelanjutan (sustainable).</li>
                            <li>Menumbuhkan inovasi dan kreativitas petani milenial dalam mengolah pertanian yang modern dan berbasis teknologi.</li>
                            <li>Menciptakan market yang luas sehingga meningkatkan kesejahteraan petani.</li>
                            <li>Menjalin kerjasama dengan instansi atau lembaga (stake holder) untuk pembangunan sektor pertanian yang modern dan berbasis teknologi.</li>
                        </ul>
                    </div>
                </div>
                <div className='mx-8 mt-4 lg:mt-8'>
                    <iframe width={width > 500 ? 500 : width / 1.3} height="315" src="https://www.youtube.com/embed/MjLhJkr0LzA"
                        title="YouTube video player"></iframe>
                </div>
            </div>
            <div>
                <h1 className='my-12 text-center text-2xl font-bold' style={{ color: 'rgb(8, 90, 67)' }}>Tim Tabur Tuai</h1>
                <div className='flex flex-col items-center lg:flex lg:flex-row lg:mx-40 lg:my-12 justify-center'>
                    <div className='mb-8 lg:mx-4 w-[260px] lg:w-[230px] h-[400px] rounded-3xl' style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                        <img className='h-[250px] w-full rounded-3xl' src='https://source.unsplash.com/featured/200x250'></img>
                        <h1 className='text-white text-xl text-center py-4'>Lorem Ipsum</h1>
                        <p className='text-white text-lg text-center'>Lorem ipsum dolor sit amet.</p>
                        <div className='flex flex-row justify-center py-4'>
                            <IconContext.Provider value={{ size: '30' }}>
                                <button ><FaFacebookSquare className=''></FaFacebookSquare></button>
                                <button className='pl-2'><FaInstagramSquare></FaInstagramSquare></button>
                                <button className='pl-2'><FaLinkedin></FaLinkedin></button>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className='mb-8 lg:mx-4 w-[260px] lg:w-[230px] h-[400px] rounded-3xl' style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                        <img className='h-[250px] w-full rounded-3xl' src='https://source.unsplash.com/featured/210x250'></img>
                        <h1 className='text-white text-xl text-center py-4'>Lorem Ipsum</h1>
                        <p className='text-white text-lg text-center'>Lorem ipsum dolor sit amet.</p>
                        <div className='flex flex-row justify-center py-4'>
                            <IconContext.Provider value={{ size: '30' }}>
                                <button ><FaFacebookSquare className=''></FaFacebookSquare></button>
                                <button className='pl-2'><FaInstagramSquare></FaInstagramSquare></button>
                                <button className='pl-2'><FaLinkedin></FaLinkedin></button>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className='mb-8 lg:mx-4 w-[260px] lg:w-[230px] h-[400px] rounded-3xl' style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                        <img className='h-[250px] w-full rounded-3xl' src='https://source.unsplash.com/featured/211x250'></img>
                        <h1 className='text-white text-xl text-center py-4'>Lorem Ipsum</h1>
                        <p className='text-white text-lg text-center'>Lorem ipsum dolor sit amet.</p>
                        <div className='flex flex-row justify-center py-4'>
                            <IconContext.Provider value={{ size: '30' }}>
                                <button ><FaFacebookSquare className=''></FaFacebookSquare></button>
                                <button className='pl-2'><FaInstagramSquare></FaInstagramSquare></button>
                                <button className='pl-2'><FaLinkedin></FaLinkedin></button>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}