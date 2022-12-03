import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DesktopNavBar } from './Components/Navigation/DesktopNavBar';
import { MobileNavBar } from './Components/Navigation/MobileNavBar';
import { Beranda } from './Components/Beranda';

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth))
  })

  return (
    <div className="App">
      {width < 950 ? <MobileNavBar width={width}></MobileNavBar> : <DesktopNavBar></DesktopNavBar>}
      <Routes>
        <Route index element={<Beranda></Beranda>}></Route>
        <Route path='/Beranda' element={<Beranda></Beranda>}></Route>
      </Routes>
    </div >
  );
}

export default App;
