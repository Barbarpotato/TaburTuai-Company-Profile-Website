import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Logo from './Logo/TaburTuaiLogoHorisontal.jpg';
import { AiOutlineMenu } from "react-icons/ai";

type MobileNavBarProps = {
    width: number
}

export const MobileNavBar = ({ width }: MobileNavBarProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const handleModal = (): void => {
        setOpenModal(!openModal)
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width / 1.2,
        bgcolor: 'background.paper',
        border: '2px solid rgb(8, 90, 67)',
        borderRadius: 6,
        boxShadow: 24,
        p: 4,
    };

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
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        </Typography>
                        <Button style={{ color: 'rgb(8, 90, 67)' }} onClick={handleModal}><AiOutlineMenu></AiOutlineMenu></Button>
                    </Toolbar>
                </AppBar>
                <Modal
                    open={openModal}
                    onClose={handleModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography style={{ paddingTop: '15px' }} id="modal-modal-title" variant="h6" component="h2">
                            <Link onClick={handleModal} to={'/Beranda'}>Beranda</Link>
                        </Typography>
                        <Divider />
                        <Typography style={{ paddingTop: '15px' }} id="modal-modal-title" variant="h6" component="h2">
                            <Link onClick={handleModal} to={'/Beranda'}>Tentang</Link>
                        </Typography>
                        <Divider />
                        <Typography style={{ paddingTop: '15px' }} id="modal-modal-title" variant="h6" component="h2">
                            <Link onClick={handleModal} to={'/Beranda'}>Mitra</Link>
                        </Typography>
                        <Divider />
                        <Typography style={{ paddingTop: '15px' }} id="modal-modal-title" variant="h6" component="h2">
                            <Link onClick={handleModal} to={'/Produk'}>Produk</Link>
                        </Typography>
                        <Divider />
                        <Typography style={{ paddingTop: '15px' }} id="modal-modal-title" variant="h6" component="h2">
                            <Link onClick={handleModal} to={'/Beranda'}>Blog</Link>
                        </Typography>
                        <Divider />
                        <Typography style={{ paddingTop: '15px' }} id="modal-modal-title" variant="h6" component="h2">
                            <Link onClick={handleModal} to={'/Beranda'}>Kontak</Link>
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </header>
    );
}