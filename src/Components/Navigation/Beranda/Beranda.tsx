import './Beranda.css';
import { useState } from 'react';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";


type BerandaProps = {
    width: number
}

const steps = [
    {
        label: 'Lorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Numquam obcaecati ab, commodi fuga eius maxime molestiae doloremque 
        cumque amet ipsa adipisci dolorum aperiam a, consequuntur fugiat illo temporibus cum, 
        soluta reiciendis perferendis provident? Deleniti facere cum sed, minus molestias 
        non quibusdam hic eligendi laudantium odio suscipit obcaecati a aperiam aspernatur`,
    },
    {
        label: 'Lorem ipsum dolor sit amet',
        description:
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Numquam obcaecati ab, commodi fuga eius maxime molestiae doloremque 
        cumque amet ipsa adipisci dolorum aperiam a, consequuntur fugiat illo temporibus cum, 
        soluta reiciendis perferendis provident? Deleniti facere cum sed, minus molestias 
        non quibusdam hic eligendi laudantium odio suscipit obcaecati a aperiam aspernatur`,
    },
    {
        label: 'CLorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Numquam obcaecati ab, commodi fuga eius maxime molestiae doloremque 
        cumque amet ipsa adipisci dolorum aperiam a, consequuntur fugiat illo temporibus cum, 
        soluta reiciendis perferendis provident? Deleniti facere cum sed, minus molestias 
        non quibusdam hic eligendi laudantium odio suscipit obcaecati a aperiam aspernatur`,
    },
    {
        label: 'CLorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Numquam obcaecati ab, commodi fuga eius maxime molestiae doloremque 
        cumque amet ipsa adipisci dolorum aperiam a, consequuntur fugiat illo temporibus cum, 
        soluta reiciendis perferendis provident? Deleniti facere cum sed, minus molestias 
        non quibusdam hic eligendi laudantium odio suscipit obcaecati a aperiam aspernatur`,
    },
    {
        label: 'CLorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Numquam obcaecati ab, commodi fuga eius maxime molestiae doloremque 
        cumque amet ipsa adipisci dolorum aperiam a, consequuntur fugiat illo temporibus cum, 
        soluta reiciendis perferendis provident? Deleniti facere cum sed, minus molestias 
        non quibusdam hic eligendi laudantium odio suscipit obcaecati a aperiam aspernatur`,
    },
    {
        label: 'CLorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Numquam obcaecati ab, commodi fuga eius maxime molestiae doloremque 
        cumque amet ipsa adipisci dolorum aperiam a, consequuntur fugiat illo temporibus cum, 
        soluta reiciendis perferendis provident? Deleniti facere cum sed, minus molestias 
        non quibusdam hic eligendi laudantium odio suscipit obcaecati a aperiam aspernatur`,
    }
]

export const Beranda = ({ width }: BerandaProps) => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState<number>(0);
    const maxSteps = steps.length;

    const renderCustomCard = (): boolean => {
        if (width > 1020) return true
        else {
            return false
        }
    }

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

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <main>
            <div className=' berandaBg bg-no-repeat bg-cover' style={{ height: '600px' }}>
                <h1 className='sm:px-24 sm:pt-44 sm:text-5xl text-white font-bold
                pt-24 leading-9 px-14 text-2xl'>Bertumbuh bersama TaburTuai <br></br>dalam mensejahterahkan<br></br> petani di Indonesia</h1>
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
            {renderCustomCard() ? <div style={{ backgroundColor: 'rgb(8, 90, 67)' }} className='bg-green-900'>
                <h2 className='text-4xl text-center py-12 text-white font-semibold'>Lorem ipsum dolor sit,<br></br> amet consectetur adipisicing elit. Eligendi, consequatur?</h2>
                <div className='sm:flex sm:flex-row '>
                    <div className="shadow-xl shadow-slate-800 flex flex-row sm:ml-12 sm:h-72 rounded-tr-3xl rounded-br-3xl bg-white sm:flex-none sm:w-5/12
                    lg:ml-24 h-96  mx-4 my-2">
                        <div className='basis-5/12 bg-cover' style={{ backgroundImage: ' url(https://source.unsplash.com/featured/203x250)' }}>
                        </div>
                        <div className='basis-7/12'>
                            <h5 className='p-4 text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, veritatis!</h5>
                            <p className='p-4 text-base pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam earum laboriosam. Ex fugiat, eligendi minima tempore nemo incidunt quisquam itaque quasi obcaecati neque dolorum?</p>
                        </div>
                    </div>
                    <div className="shadow-xl shadow-slate-800 flex flex-col sm:ml-8 sm:h-72 rounded-b-3xl bg-white flex-initial sm:flex-none sm:w-1/6
                    lg:ml-16
                    h-28 mx-4 my-2">
                        <div className='bg-cover basis-1/2' style={{ backgroundImage: ' url(https://source.unsplash.com/featured/202x250)' }}></div>
                        <div>
                            <h5 className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</h5>
                            <p className='p-2 text-sm text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempore at adipisci laudantium accusantium mollitia atque nulla illum, sit delectus?</p>
                        </div>
                    </div>
                    <div className="shadow-xl shadow-slate-800 flex flex-col sm:ml-8 sm:h-72 rounded-b-3xl bg-white flex-initial sm:flex-none sm:w-1/6
                    lg:ml-16
                    h-28 mx-4 my-2">
                        <div className='bg-cover basis-1/2' style={{ backgroundImage: ' url(https://source.unsplash.com/featured/201x250)' }}></div>
                        <div>
                            <h5 className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</h5>
                            <p className='p-2 text-sm text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempore at adipisci laudantium accusantium mollitia atque nulla illum, sit delectus?</p>
                        </div>
                    </div>
                </div>
                <div className='sm:flex sm:flex-row sm:py-12 py-4'>
                    <div className="shadow-2xl shadow-slate-800 flex flex-col sm:ml-12 sm:h-72 rounded-3xl bg-white sm:flex-none sm:w-1/6 
                    lg:ml-24
                    h-28 mx-4 my-2">
                        <div className='bg-cover basis-1/2' style={{ backgroundImage: ' url(https://source.unsplash.com/featured/151x250)' }}></div>
                        <div>
                            <h5 className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</h5>
                            <p className='p-2 text-sm text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempore at adipisci laudantium accusantium mollitia atque nulla illum, sit delectus?</p>
                        </div>
                    </div>
                    <div className="shadow-2xl shadow-slate-800 flex flex-col sm:ml-8 sm:h-72 rounded-3xl bg-white sm:flex-none sm:w-1/6 
                    lg:ml-20
                    h-28 mx-4 my-2">
                        <div className='bg-cover basis-1/2' style={{ backgroundImage: ' url(https://source.unsplash.com/featured/152x250)' }}></div>
                        <div>
                            <h5 className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</h5>
                            <p className='p-2 text-sm text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempore at adipisci laudantium accusantium mollitia atque nulla illum, sit delectus?</p>
                        </div>
                    </div>
                    <div className="shadow-2xl shadow-slate-800 flex flex-row sm:ml-8 sm:h-72 rounded-bl-3xl rounded-tl-3xl bg-white sm:flex-none sm:w-5/12
                    lg:ml-12 h-96  mx-4 my-2">
                        <div className='basis-7/12'>
                            <h5 className='p-4 text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, veritatis!</h5>
                            <p className='p-4 text-base pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam earum laboriosam. Ex fugiat, eligendi minima tempore nemo incidunt quisquam itaque quasi obcaecati neque dolorum?</p>
                        </div>
                        <div className='basis-5/12 bg-cover' style={{ backgroundImage: ' url(https://source.unsplash.com/featured/150x250)' }}>
                        </div>
                    </div>
                </div>
            </div>
                :
                <div style={{ backgroundColor: 'rgb(8, 90, 67)' }} className='flex flex-col items-center'>
                    <h2 className='text-4xl text-center py-12 text-white font-semibold'>Lorem ipsum dolor sit,<br></br> amet consectetur adipisicing elit. Eligendi, consequatur?</h2>
                    <Box className='pb-8' sx={{ maxWidth: 450, flexGrow: 1 }}>
                        <Paper
                            style={{ backgroundColor: 'rgb(8, 90, 67)' }}
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: 'background.default',
                            }}
                        >
                            <Typography className='text-white'>{steps[activeStep].label}</Typography>
                        </Paper>
                        <Box className='bg-cover rounded-xl text-white' sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
                            {steps[activeStep].description}
                        </Box>
                        <MobileStepper
                            style={{ backgroundColor: 'rgb(8, 90, 67)' }}
                            variant="text"
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    style={{ color: 'white' }}
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Lanjut
                                    {theme.direction === 'rtl' ? (
                                        <AiOutlineCaretRight />
                                    ) : (
                                        <AiOutlineCaretRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button style={{ color: 'white' }}
                                    size="small"
                                    onClick={handleBack}
                                    disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <AiOutlineCaretLeft />
                                    ) : (
                                        <AiOutlineCaretLeft />
                                    )}
                                    Kembali
                                </Button>
                            }
                        />
                    </Box>
                </div>
            }
            <div>
                <h2 style={{ color: 'rgb(8, 90, 67)' }} className='mx-4 text-2xl md:text-5xl font-semibold sm:ml-24 pt-16'>FITUR PLATFORM TABURTUAI</h2>
                <p style={{ color: 'rgb(8, 90, 67)' }} className='mx-4 text-xl sm:ml-24 pt-4 sm:text-lg '>Tabur Tuai memiliki 4 fitur unggulan yang saling terintegrasi dalam mewujudkan visi misi nya.
                </p>
            </div>
            <div className='flex flex-wrap items-center mx-2 py-12 lg:flex lg:flex-row justify-center'>
                <div className='lg:px-4 my-4 mx-2'>
                    <Card sx={{ maxWidth: renderSizeCard(), height: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/604x350"
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
                <div className='lg:px-4 my-4 mx-2'>
                    <Card sx={{ maxWidth: renderSizeCard(), height: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/601x350"
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
                <div className='lg:px-4 my-4 mx-2'>
                    <Card sx={{ maxWidth: renderSizeCard(), height: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/602x350"
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
                <div className='lg:px-4 my-4 mx-2'>
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
            <h1 className='text-center font-semibold lg:text-5xl text-3xl py-2' style={{ color: ' rgb(8, 90, 67)' }}>Berita Terbaru</h1>
            <div className='flex flex-wrap items-center justify-center'>

                <Card className='mx-2 my-4' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/609x350"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                lorem ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repellat soluta laborum quod quo vitae?
                                Fugit excepturi autem saepe sint voluptatum mollitia ex accusantium velit.
                            </Typography>
                            <Typography className='py-2 font-bold' variant="body2" color="text.secondary">
                                29 JUNE, 2022
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" style={{ color: 'rgb(8, 90, 67)' }}>
                            Baca Selengkapnya
                        </Button>
                    </CardActions>
                </Card>
                <Card className='mx-2 my-4' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/609x350"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                lorem ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repellat soluta laborum quod quo vitae?
                                Fugit excepturi autem saepe sint voluptatum mollitia ex accusantium velit.
                            </Typography>
                            <Typography className='py-2 font-bold' variant="body2" color="text.secondary">
                                29 JUNE, 2022
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" style={{ color: 'rgb(8, 90, 67)' }}>
                            Baca Selengkapnya
                        </Button>
                    </CardActions>
                </Card>
                <Card className='mx-2 my-4' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://source.unsplash.com/featured/609x350"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                lorem ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repellat soluta laborum quod quo vitae?
                                Fugit excepturi autem saepe sint voluptatum mollitia ex accusantium velit.
                            </Typography>
                            <Typography className='py-2 font-bold' variant="body2" color="text.secondary">
                                29 JUNE, 2022
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" style={{ color: 'rgb(8, 90, 67)' }}>
                            Baca Selengkapnya
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className='text-center my-8'>
                <button className='my-4 text-center w-44 sm:w-44 p-4 rounded-xl text-white font-semibold bg-green-800'>Selengkapnya </button>
            </div>
        </main >
    )
}