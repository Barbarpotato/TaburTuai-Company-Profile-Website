import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type MitraProps = {
    width: number
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Mitra = ({ width }: MitraProps) => {

    return (
        <div>
            <div className=' berandaBg bg-no-repeat bg-cover' style={{ height: '600px' }}>
                <h1 className='sm:px-24 sm:pt-44 sm:text-5xl text-white font-bold
            pt-24 leading-9 px-14 text-2xl'>Bertumbuh bersama TaburTuai <br></br>dalam mensejahterahkan<br></br> petani di Indonesia</h1>
                <p className='text-white sm:px-24 sm:pt-12 pt-8 leading-1 px-14 text-lg'>Ciptakan market yang luas dan penerapan smart farming guna menuju pertanian yang<br></br> berkelanjutan untuk meningkatkan kesejahteraan petani</p>
            </div>
            <div>
                <h1 className="text-4xl font-bold text-center py-8 text-green-900">Keuntungan menjadi mitra kami?</h1>
                <Carousel className='my-8 lg:mx-44' responsive={responsive}>
                    <div className='mb-8 mx-12 h-[500px] rounded-3xl' style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                        <img draggable={false} className='h-[250px] w-full rounded-3xl' src='https://source.unsplash.com/featured/210x250'></img>
                        <h1 className='text-white text-xl text-center py-4'> Mitra mendapatasuransi kesehatan</h1>
                        <p className='text-white text-base text-center p-2'>Untuk mitra teknisi, kami memberikan bantuan asuransi kesehatan untuk
                            mendapat perlindungan dengan premi terjangkau.</p>
                        <div className='flex flex-row justify-center py-4'>
                        </div>
                    </div>
                    <div className='mb-8 mx-12 h-[500px] rounded-3xl' style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                        <img draggable={false} className='h-[250px] w-full rounded-3xl' src='https://source.unsplash.com/featured/210x250'></img>
                        <h1 className='text-white text-xl text-center py-4'>Pendaftaran Gratis</h1>
                        <p className='text-white text-base text-center p-2'>Mulai pengalaman kerja kalian dengan kami tanpa biaya pendaftaran.</p>
                        <div className='flex flex-row justify-center py-4'>
                        </div>
                    </div>
                    <div className='mb-8 mx-12 h-[500px] rounded-3xl' style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                        <img draggable={false} className='h-[250px] w-full rounded-3xl' src='https://source.unsplash.com/featured/210x250'></img>
                        <h1 className='text-white text-xl text-center py-4'>Penghasilan dapat diatur dan mudah dicairin</h1>
                        <p className='text-white text-base text-center p-2'>Penghasilan mitra dapat diatur oleh mitra tanpa campur tangan dari kami
                            serta penghasilan mudah dicairin tanpa waktu yang lama.</p>
                        <div className='flex flex-row justify-center py-4'>
                        </div>
                    </div>
                    <div className='mb-8 mx-12 h-[500px] rounded-3xl' style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                        <img draggable={false} className='h-[250px] w-full rounded-3xl' src='https://source.unsplash.com/featured/210x250'></img>
                        <h1 className='text-white text-xl text-center py-4'>Pelatihan bagi yang belum memiliki sertifikasi</h1>
                        <p className='text-white text-base text-center p-2'>Bagi yang ingin bergabung dengan mitra kami dan tidak memiliki sertifikasi
                            untuk sebuah bidang jasa, kami menyediakan tempat pelatihan untuk memberikan
                            kesempatan kepada masyarakat yang ingin menjadi mitra kami.</p>
                        <div className='flex flex-row justify-center py-4'>
                        </div>
                    </div>
                    <div className='mb-8 mx-12 h-[500px] rounded-3xl' style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                        <img draggable={false} className='h-[250px] w-full rounded-3xl' src='https://source.unsplash.com/featured/210x250'></img>
                        <h1 className='text-white text-xl text-center py-4'>Tawaran Khusus buat Teknisi</h1>
                        <p className='text-white text-base text-center p-2'>Mitra akan diberikan tawaran dan penghematan untuk perawatan kendaraan,
                            bahan bakar serta alat yang digunakan dalam sebuah layanan. Serta penambahan
                            penghasilan per layanan.</p>
                        <div className='flex flex-row justify-center py-4'>
                        </div>
                    </div>
                    <div className='mb-8 mx-12 h-[500px] rounded-3xl' style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                        <img draggable={false} className='h-[250px] w-full rounded-3xl' src='https://source.unsplash.com/featured/210x250'></img>
                        <h1 className='text-white text-xl text-center py-4'>Dukungan Mitra Terpercaya</h1>
                        <p className='text-white text-lg text-center p-2'>Kami menyediakan bidang manager yang dapat membantu mitra kami untuk
                            membantu menyelesaikan masalah yang dihadapi mitra kami.</p>
                        <div className='flex flex-row justify-center py-4'>
                        </div>
                    </div>
                </Carousel>;
            </div >
        </div >
    )
}