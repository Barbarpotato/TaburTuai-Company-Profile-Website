import { useRef } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Logo from './Logo/TaburTuaiLogoHorisontal.jpg';

export const DesktopNavBar = () => {
    const beranda = useRef<any | undefined>()
    const tentang = useRef<any | undefined>()
    const mitra = useRef<any | undefined>()
    const produk = useRef<any | undefined>()
    const blog = useRef<any | undefined>()
    const kontak = useRef<any | undefined>()

    const handleActiveNavBar = (reference: any): void => {
        reference.current.style.fontWeight = 'bold'
        reference.current.style.textDecoration = 'underline'
        reference.current.style.textDecorationThickness = '2px'
    }

    const handleInactiveNavBar = (reference: any): void => {
        for (let i = 0; i < reference.length; i++) {
            reference[i].current.style.fontWeight = 'normal'
            reference[i].current.style.textDecoration = 'none'
            reference[i].current.style.color = 'rgb(8, 90, 67)'
            reference[i].current.paddingRight = '30px'
        }
    }

    const handleonMouseEnter = (reference: any): void => {
        reference.current.style.fontWeight = 'bold'
    }

    const handleonMouseLeave = (reference: any): void => {
        reference.current.style.fontWeight = 'normal'
    }

    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: 'white' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <img alt='TaburTuaiLogo' style={{ height: '50px', width: '140px' }} src={Logo}></img>
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }} />
                        <Typography ref={beranda} onClick={() => {
                            handleInactiveNavBar([tentang, mitra, produk, blog, kontak])
                            handleActiveNavBar(beranda)
                        }} onMouseEnter={() => handleonMouseEnter(beranda)}
                            onMouseLeave={() => handleonMouseLeave(beranda)}
                            variant='h6' id='navBar' style={{ color: 'rgb(8, 90, 67)', paddingRight: '30px' }}><Link to={'/Beranda'}>Beranda</Link></Typography>
                        <Typography ref={tentang} onClick={() => {
                            handleInactiveNavBar([beranda, mitra, produk, blog, kontak])
                            handleActiveNavBar(tentang)
                        }} onMouseEnter={() => handleonMouseEnter(tentang)}
                            onMouseLeave={() => handleonMouseLeave(tentang)}
                            variant='h6' id='navBar' style={{ color: 'rgb(8, 90, 67)', paddingRight: '30px' }} ><Link to={'/About'}>Tentang</Link></Typography>
                        <Typography ref={mitra} onClick={() => {
                            handleInactiveNavBar([beranda, tentang, produk, blog, kontak])
                            handleActiveNavBar(mitra)
                        }} onMouseEnter={() => handleonMouseEnter(mitra)}
                            onMouseLeave={() => handleonMouseLeave(mitra)}
                            variant='h6' className='navBar' style={{ color: 'rgb(8, 90, 67)', paddingRight: '30px' }} ><Link to={'/Mitra'}>Mitra</Link></Typography>
                        <Typography ref={produk} onClick={() => {
                            handleInactiveNavBar([beranda, tentang, mitra, blog, kontak])
                            handleActiveNavBar(produk)
                        }} onMouseEnter={() => handleonMouseEnter(produk)}
                            onMouseLeave={() => handleonMouseLeave(produk)}
                            variant='h6' className='navBar' style={{ color: 'rgb(8, 90, 67)', paddingRight: '30px' }}><Link to={'/Produk'}>Produk</Link></Typography>
                        <Typography ref={blog} onClick={() => {
                            handleInactiveNavBar([beranda, tentang, mitra, produk, kontak])
                            handleActiveNavBar(blog)
                        }} onMouseEnter={() => handleonMouseEnter(blog)}
                            onMouseLeave={() => handleonMouseLeave(blog)}
                            variant='h6' className='navBar' style={{ color: 'rgb(8, 90, 67)', paddingRight: '30px' }} ><Link to={'/Blog'}>Blog</Link></Typography>
                        <Typography ref={kontak} onClick={() => {
                            handleInactiveNavBar([beranda, tentang, mitra, produk, blog])
                            handleActiveNavBar(kontak)
                        }} onMouseEnter={() => handleonMouseEnter(kontak)}
                            onMouseLeave={() => handleonMouseLeave(kontak)}
                            variant='h6' className='navBar' style={{ color: 'rgb(8, 90, 67)', paddingRight: '30px' }}><Link to={'/Kontak'}>Kontak</Link></Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </header >
    )
}