import Phone from './Images/Phone.png';
import BgApp from './Images/BgApp.jpg';

type ProdukProps = {
    width: number
}

export const Produk = ({ width }: ProdukProps) => {
    return (
        <div>
            <div className="lg:flex lg:flex-row lg:my-24 lg:justify-center my-12">
                <div className='flex flex-row justify-center'>
                    <img alt='phone' src={Phone} width={'300px'} height={'100px'} />
                </div>
                <div className='lg:basis-6/12 lg:py-32 py-12'>
                    <div className="flex flex-col">
                        <div>
                            <p className='text-lg font-semibold text-justify mx-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto ipsum dolorum quaerat? Quaerat non repudiandae, necessitatibus ea culpa molestias.
                                Est ad molestias unde, illum eligendi voluptas numquam excepturi magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Enim quas iure molestias magnam, dolores odio tempora eligendi odit! Consectetur, esse?</p>
                        </div>
                        <div className='flex flex-row pt-12'>
                            <button className='mx-8 rounded-full bg-green-900 text-white font-semibold py-4 px-8'>App Store</button>
                            <button className='rounded-full bg-green-900 text-white font-semibold py-4 px-8'>Play Store</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img alt='background-app' src={BgApp}></img>
            </div>

            <div className='lg:flex lg:flex-row lg:mx-52 lg:my-24 mx-4 my-8'>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <div>
                            <img alt='info1' className='rounded-md' width='40px' height='30px' src='https://source.unsplash.com/featured/50x50'></img>
                            <h4 className='font-bold text-xl'>Lorem</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit!</p>
                        </div>
                        <div className='mt-4'>
                            <img alt='info2' className='rounded-md' width='40px' height='30px' src='https://source.unsplash.com/featured/50x50'></img>
                            <h4 className='font-bold text-xl'>Lorem</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit!</p>
                        </div>
                        <div className='mt-4'>
                            <img alt='info3' className='rounded-md' width='40px' height='30px' src='https://source.unsplash.com/featured/50x50'></img>
                            <h4 className='font-bold text-xl'>Lorem</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit!</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <img alt='info4' className='rounded-md' width='40px' height='30px' src='https://source.unsplash.com/featured/50x50'></img>
                            <h4 className='font-bold text-xl'>Lorem</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit!</p>
                        </div>
                        <div className='mt-4'>
                            <img alt='info5' className='rounded-md' width='40px' height='30px' src='https://source.unsplash.com/featured/50x50'></img>
                            <h4 className='font-bold text-xl'>Lorem</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit!</p>
                        </div>
                        <div className='mt-4'>
                            <img alt='info6' className='rounded-md' width='40px' height='30px' src='https://source.unsplash.com/featured/50x50'></img>
                            <h4 className='font-bold text-xl'>Lorem</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit!</p>
                        </div>
                    </div>
                </div>
                {width > 1020 ? <div>
                    <img alt='phone' src={Phone} width={'300px'} height={'100px'} />
                </div> :
                    <></>
                }
            </div>
        </div >
    )
}