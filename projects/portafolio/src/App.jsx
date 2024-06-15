import { useState, useEffect } from 'react'

import MenuBar from './Components/MenuBar.jsx'
import Footer from './Components/Footer.jsx'
import Transition from './Components/Transition.jsx'

import InicioPage from './Pages/InicioPage.jsx'
import BioPage from './Pages/BioPage.jsx'
import PortafolioPage from './Pages/PortafolioPage.jsx'
import ContactoPage from './Pages/ContactoPage.jsx'
import CVPage from './Pages/CVPage.jsx'
import BlogPage from './Pages/BlogPage.jsx'

function App() {

  //DATA INTERNA
  const pages = [
    { id:0, label: "Inicio", page: InicioPage },
    { id:1, label: "Bio", page: BioPage },
    { id:2, label: "Portafolio", page: PortafolioPage },
    { id:3, label: "Contacto", page: ContactoPage },
    { id:4, label: "CV", page: CVPage },
    { id:5, label: "Blog", page: BlogPage },
  ]

  // VARIABLES
  const [currentPage, setCurrentPage] = useState(0);
  const CurrentPageComponent = pages[currentPage].page;
  const [IsLoading, SetLoading] = useState(false);

  // HOOKS
  // Confirma si se quiere renderizar una pagina en especifico
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageLabel = params.get('page');
    if (pageLabel != null) {
      setCurrentPage(pages.findIndex(page => page.label === pageLabel));
    }
  }, []);

  // FUNCTIONS
  const handleMenuClick = (pageIndex) => {
    SetLoading(true);

    setTimeout(() => {
      setCurrentPage(pageIndex);

      const newUrl = `/details?page=${pages[pageIndex].label}`;
      window.history.pushState(null, '', newUrl);

      SetLoading(false);
    }, 1000);
  };


  return (
    <>
      <MenuBar OnItemClick={(e) => { handleMenuClick(e) }} />
      {IsLoading ?
        <>
          <div className='h-[90vh]'></div>
          <Transition ActiveLoader />
        </>
        :
        <CurrentPageComponent ChangePage={handleMenuClick}/>
      }
      <Footer OnItemClick={(e) => { handleMenuClick(e) }} />
    </>
  )
}

export default App
