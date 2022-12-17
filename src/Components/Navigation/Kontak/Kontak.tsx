import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type KontakProps = {
    width: number
}

export const Kontak = ({ width }: KontakProps) => {

    return (
        <div>
            <div className='mt-16 lg:mx-96'>
                <h1 className='text-center text-3xl font-bold'>Hubungi Kami</h1>
                <h1 className='font-semibold text-center text-2xl my-4'>Punya pertanyaan tentang TaburTuai Group? Dengan senang hati kami akan menjawabnya.</h1>
            </div>
            <div className="lg:m-16 xl:flex xl:flex-row">
                <div className="lg:rounded-2xl lg:shadow-2xl bg-slate-50 p-8 lg:mx-4">
                    {width > 1020 ? <form>
                        <TextField color='success' style={{ width: '500px', marginBottom: '30px' }} id="standard-basic" label="Nama Lengkap" variant="standard" />
                        <TextField color='success' className='my-4' style={{ width: '500px', marginBottom: '30px' }} id="standard-basic" label="Email" variant="standard" />
                        <TextField color='success' style={{ width: '500px' }} id="standard-basic" label="No.Telpon" variant="standard" />
                        <textarea
                            placeholder="Pesan"
                            style={{ width: 500, height: 230, marginTop: '30px', resize: 'none' }} /><br></br>
                        <Button style={{ marginTop: '30px', backgroundColor: 'rgb(8, 90, 67)' }} variant="contained">Kirim Pesan</Button>
                    </form>
                        :
                        <form className='text-center'>
                            <TextField style={{ width: width / 1.2, marginBottom: '30px' }} id="standard-basic" label="Nama Lengkap" variant="standard" />
                            <br></br>
                            <TextField className='my-4' style={{ width: width / 1.2, marginBottom: '30px' }} id="standard-basic" label="Email" variant="standard" />
                            <br></br>
                            <TextField style={{ width: width / 1.2 }} id="standard-basic" label="No.Telpon" variant="standard" />
                            <br></br>
                            <textarea
                                placeholder="Pesan"
                                style={{ width: width / 1.2, height: 230, marginTop: '30px', resize: 'none' }} />
                            <br></br>
                            <Button style={{ marginTop: '30px', backgroundColor: 'rgb(8, 90, 67)' }} variant="contained">Kirim Pesan</Button>
                        </form>
                    }
                </div>
                {
                    width > 1020 ?
                        <div className='my-12 flex flex-row justify-center'>
                            <iframe className="rounded-2xl shadow-2xl" title="Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.67967756095!2d119.43936821412765!3d-5.1551472535317275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3c971cb2ddb%3A0xdd05652dd2b23d9e!2sKetemulagi%20cafe!5e0!3m2!1sen!2sid!4v1666877910014!5m2!1sen!2sid" width='600px' height="660" loading="lazy"></iframe>
                        </div>
                        :
                        <div className='my-12 flex flex-row justify-center'>
                            <iframe className="rounded-2xl shadow-2xl" title="Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.67967756095!2d119.43936821412765!3d-5.1551472535317275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3c971cb2ddb%3A0xdd05652dd2b23d9e!2sKetemulagi%20cafe!5e0!3m2!1sen!2sid!4v1666877910014!5m2!1sen!2sid" width={width / 1.2} height="600" loading="lazy"></iframe>
                        </div>
                }
            </div>
        </div>
    )
}