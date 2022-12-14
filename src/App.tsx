import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DesktopNavBar } from './Components/Navigation/DesktopNavBar';
import { MobileNavBar } from './Components/Navigation/MobileNavBar';
import { Beranda } from './Components/Navigation/Beranda/Beranda';
import { About } from './Components/Navigation/About/About';
import { Mitra } from './Components/Navigation/Mitra/Mitra';
import { Produk } from './Components/Navigation/Produk/Produk';
import { Blog } from './Components/Navigation/Blog/Blog';
import { Kontak } from './Components/Navigation/Kontak/Kontak';
import { Footer } from './Components/Footer/Footer';

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    //? Keep tracking the windowd width size.
    window.addEventListener("resize", () => setWidth(window.innerWidth))
    //? Cleaning up the eventListener after component its no longer needed.
    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  return (
    <div className="App justify-between">
      {width < 950 ? <MobileNavBar width={width}></MobileNavBar> : <DesktopNavBar></DesktopNavBar>}
      <Routes>
        <Route index element={<Beranda width={width}></Beranda>}></Route>
        <Route path='/Beranda' element={<Beranda width={width}></Beranda>}></Route>
        <Route path='/About' element={<About width={width}></About>}></Route>
        <Route path='/Mitra' element={<Mitra width={width}></Mitra>}></Route>
        <Route path='/Produk' element={<Produk width={width}></Produk>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/Kontak' element={<Kontak width={width}></Kontak>}></Route>
      </Routes>
      <Footer width={width} />
    </div >
  );
}

export default App;
