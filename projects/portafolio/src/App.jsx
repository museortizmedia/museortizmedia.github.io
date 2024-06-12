import { useState } from 'react'

import MenuBar from './Components/MenuBar.jsx'
import Footer from './Components/Footer.jsx'
import Transition from './Components/Transition.jsx'

import InicioPage from './Pages/InicioPage.jsx'
import BioPage from './Pages/BioPage.jsx'
import PortafolioPage from './Pages/PortafolioPage.jsx'
import ContactoPage from './Pages/ContactoPage.jsx'

function App() {

  localStorage.theme = 'dark';
  document.documentElement.classList.add('dark');

  const pages = [
    {label: "Inicio", page: InicioPage},
    {label: "Bio", page: BioPage},
    {label: "Portafolio", page: PortafolioPage},
    {label: "Contacto", page: ContactoPage},
  ]
  const [currentPage, setCurrentPage] = useState(0);
  const CurrentPageComponent = pages[currentPage].page;
  const [IsLoading, SetLoading] = useState(false);  
  
  const handleMenuClick = (pageIndex) => {
    SetLoading(true);
    
    setTimeout(() => {
      setCurrentPage(pageIndex);
      SetLoading(false);
    }, 1000);
  };

  


  return (
    <>
      <MenuBar OnItemClick={(e)=>{handleMenuClick(e)}} />
      {IsLoading ? <> <div className='h-[90vh]'></div> <Transition ActiveLoader/> </> : <CurrentPageComponent/>}
      {/*<p onClick={()=>handleMenuClick(0)}>home</p>
      <p onClick={()=>handleMenuClick(1)}>card</p>*/}
      <Footer OnItemClick={(e)=>{handleMenuClick(e)}} />
    </>
  )
}

export default App
