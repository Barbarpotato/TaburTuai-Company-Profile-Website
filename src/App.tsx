import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DesktopNavBar } from './Components/Navigation/DesktopNavBar';
import { MobileNavBar } from './Components/Navigation/MobileNavBar';
import { Beranda } from './Components/Navigation/Beranda/Beranda';
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
      </Routes>
      <Footer width={width} />
    </div >
  );
}

export default App;
