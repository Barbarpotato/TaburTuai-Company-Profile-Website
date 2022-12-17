import TextField from '@mui/material/TextField';

export const Blog = () => {
    return (
        <div>
            <div className="lg:py-16 lg:px-24
            py-8 px-8" style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                <div className="bg-white rounded-3xl">
                    <div className="lg:px-24 lg:py-16
                    px-8 py-4">
                        <h5 className="font-semibold text-2xl pt-4" style={{ color: 'rgb(8,90,67)' }}>Explore Farming</h5>
                        <hr className="my-4 mx-auto w-full h-1 bg-green-800 rounded border-0 md:my-10"></hr>
                        <p className="font-semibold text-xl text-justify lg:text-left " style={{ color: 'rgb(8,90,67)' }}>Kamu bisa menemukan berbagai hal menarik yang berkaitan dengan Farming dan
                            hasil kebun disini. Terdapat beragam informasi seperti penerapan smart
                            farming di pertanian, inovasi dan kreativitas petani milenial
                            dalam mengolah pertanian yang modern dan berbasis teknologi.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row mx-8 my-4 
            lg:mx-24 lg:py-8
            xl:mx-44 xl:py-12 rounded-2xl'>
                <div className='border-green-900 border-2 rounded-2xl py-4 px-8 w-full'>
                    <input placeholder='Cari Artikel...' className=' w-full text-decoration focus:outline-none'></input>
                </div>
                <button>Cari</button>
            </div>
            <div className=' mx-8 my-4 
            lg:py-16 lg:px-24'>
                <h1 className='text-3xl font-semibold mt-4'>Baca Artikel</h1>
                {/* //TODO: API REQUEST. */}
                <div className='shadow-2xl rounded-2xl my-8'>
                    <h4 className='px-4 pt-8
                    lg:px-8 lg:pt-16 lg:text-2xl font-semibold'>Artikel Belum Tersedia</h4>
                    <hr className="lg:px-8 my-4 h-1 lg:mx-8 mx-4 bg-black rounded border-0"></hr>
                    <p className='px-4 pt-8
                    lg:px-8 lg:pt-4 pb-16  lg:text-xl'>Nantikan artikel terbaru kami dan jangan lupa pantau terus social media kami untuk mendapat
                        informasi-informasi terbaru di @servin.id sehingga anda tetap update tentang kami.</p>
                </div>
                <div className='shadow-2xl rounded-2xl my-8'>
                    <h4 className='px-4 pt-8
                    lg:px-8 lg:pt-16 lg:text-2xl font-semibold'>Artikel Belum Tersedia</h4>
                    <hr className="lg:px-8 my-4 h-1 lg:mx-8 mx-4 bg-black rounded border-0"></hr>
                    <p className='px-4 pt-8
                    lg:px-8 lg:pt-4 pb-16  lg:text-xl'>Nantikan artikel terbaru kami dan jangan lupa pantau terus social media kami untuk mendapat
                        informasi-informasi terbaru di @servin.id sehingga anda tetap update tentang kami.</p>
                </div>
            </div>
        </div>
    )
}