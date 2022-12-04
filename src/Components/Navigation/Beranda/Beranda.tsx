import './Beranda.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type BerandaProps = {
    width: number
}

export const Beranda = ({ width }: BerandaProps) => {

    const renderSizeCard = (): number => {
        if (width > 620 && width < 1040) {
            return 450
        }
        else if (width > 1040) {
            return 300
        }
        else {
            return 200
        }
    }

    return (
        <main>
            <div className=' berandaBg bg-no-repeat bg-cover' style={{ height: '600px' }}>
                <h1 className='sm:px-24 sm:pt-44 sm:text-5xl text-white font-bold
                pt-24 leading-9 px-14 text-4xl'>Bertumbuh bersama TaburTuai <br></br>dalam mensejahterahkan<br></br> petani di Indonesia</h1>
                <p className='text-white sm:px-24 sm:pt-12 pt-8 leading-1 px-14 text-lg'>Ciptakan market yang luas dan penerapan smart farming guna menuju pertanian yang<br></br> berkelanjutan untuk meningkatkan kesejahteraan petani</p>
            </div>
            <div className='sm:flex sm:flex-row'>
                <div className='pt-8 sm:py-24 sm:pl-24'> <img alt="content" className='sm:h-44 md:h-56 rounded-xl' src={'https://source.unsplash.com/featured/600x250'}></img>
                </div>
                <div className='px-4 sm:flex sm:flex-col sm:py-16 sm:px-4 md:px-16'>
                    <h2 className='pt-4 px-2 heading text-4xl font-bold'>TENTANG KAMI</h2>
                    <p className='Pberanda pt-4 px-2 sm:pt-8 text-justify sm:w-96 text-lg'>TaburTuai adalah platform yang menggantikan cara bertani konvensional menjadi Smart Farming dengan menggunakan teknologi Internet of Things (IOT) yang memudahkan petani dalam monitoring dan controlling kegiatan pertanian.</p>
                    <button className='my-4 text-center w-44 sm:w-44 p-4 rounded-xl text-white font-semibold bg-green-800'>Baca Selengkapnya </button>
                </div>
            </div>
            <div style={{ backgroundColor: 'rgb(8, 90, 67)' }} className='bg-green-900'>
                <h2 className='text-4xl text-center py-12 text-white font-semibold'>Lorem ipsum dolor sit,<br></br> amet consectetur adipisicing elit. Eligendi, consequatur?</h2>
                <div className='sm:flex sm:flex-row'>
                    <div className="sm:ml-12 sm:h-48 rounded-3xl bg-white sm:flex-none sm:w-5/12
                    lg:ml-24
                    h-28 mx-4 my-2">
                        01
                    </div>
                    <div className="sm:ml-8 sm:h-48 rounded-3xl bg-white flex-initial sm:flex-none sm:w-1/6
                    lg:ml-16
                    h-28 mx-4 my-2">
                        02
                    </div>
                    <div className="sm:ml-8  sm:h-48 rounded-3xl bg-white sm:flex-none sm:w-1/6
                    lg:ml-16
                    h-28 mx-4 my-2">
                        03
                    </div>
                </div>
                <div className='sm:flex sm:flex-row sm:py-12 py-4'>
                    <div className="sm:ml-12 sm:h-48 rounded-3xl bg-white sm:flex-none sm:w-1/6 
                    lg:ml-24
                    h-28 mx-4 my-2">
                        01
                    </div>
                    <div className="sm:ml-8 sm:h-48 rounded-3xl bg-white sm:flex-none sm:w-1/6
                    lg:ml-16
                    h-28 mx-4 my-2">
                        02
                    </div>
                    <div className="sm:ml-8 rounded-3xl bg-white sm:flex-none sm:w-5/12 sm:h-48
                    lg:ml-16
                    h-28 mx-4 my-2">
                        03
                    </div>
                </div>
            </div>
            <div>
                <h2 style={{ color: 'rgb(8, 90, 67)' }} className='mx-4 text-2xl md:text-5xl font-semibold sm:ml-24 pt-16'>FITUR PLATFORM TABURTUAI</h2>
                <p style={{ color: 'rgb(8, 90, 67)' }} className='mx-4 text-xl sm:ml-24 pt-4 sm:text-lg '>Tabur Tuai memiliki 4 fitur unggulan yang saling terintegrasi dalam mewujudkan visi misi nya.
                </p>
            </div>
            <div className='flex flex-col items-center mx-2 py-12 lg:flex lg:flex-row justify-center'>
                <div className='lg:px-4 my-4'>
                    <Card sx={{ maxWidth: renderSizeCard(), height: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/600x350"
                            alt="content"
                        />
                        <CardContent style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                            <Typography className='text-white' gutterBottom variant="h5" component="div">
                                Smart Farming
                            </Typography>
                            <Typography className='text-white' variant="body2">
                                Monitoring & Controlling lahan pertanian.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='lg:px-4 my-4'>
                    <Card sx={{ maxWidth: renderSizeCard(), height: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/600x350"
                            alt="content"
                        />
                        <CardContent style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                            <Typography className='text-white' gutterBottom variant="h5" component="div">
                                Marketplace
                            </Typography>
                            <Typography className='text-white' variant="body2">
                                Menghubungkan produsen & konsumen.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='lg:px-4 my-4'>
                    <Card sx={{ maxWidth: renderSizeCard(), height: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/600x350"
                            alt="content"
                        />
                        <CardContent style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                            <Typography className='text-white' gutterBottom variant="h5" component="div">
                                Investasi
                            </Typography>
                            <Typography className='text-white' variant="body2">
                                Memudahkan petani memperoleh bantuan investasi.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='lg:px-4 my-4'>
                    <Card sx={{ maxWidth: renderSizeCard(), height: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/600x350"
                            alt="content"
                        />
                        <CardContent style={{ backgroundColor: 'rgb(8, 90, 67)' }}>
                            <Typography className='text-white' gutterBottom variant="h5" component="div">
                                Komunitas
                            </Typography>
                            <Typography className='text-white' variant="body2">
                                Wadah diskusi antar semua pihak terkait.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </main >
    )
}