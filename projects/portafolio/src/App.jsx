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
import ServicesPage from './Pages/ServicesPage.jsx'
import ProyectPage from './Pages/ProyectPage.jsx'
import { PreLoad } from './Data.js'

function App() {

  //DATA INTERNA
  //pages router
  const pages = [
    { id: 0, label: "Inicio", page: InicioPage },
    { id: 1, label: "Bio", page: BioPage },
    { id: 2, label: "Portafolio", page: PortafolioPage },
    { id: 3, label: "Contacto", page: ContactoPage },
    { id: 4, label: "CV", page: CVPage },
    { id: 5, label: "Blog", page: BlogPage },
    { id: 6, label: "Servicios", page: ServicesPage },
    { id: 7, label: "ProyectoPage", page: ProyectPage },
  ]

  // VARIABLES
  const [currentPage, setCurrentPage] = useState(0);
  const CurrentPageComponent = pages[currentPage].page;
  const [IsLoading, SetLoading] = useState(true);
  const [CurrentLang, SetCurrentLang] = useState('ES');

  // HOOKS

  useEffect(() => {
    // Confirma si se quiere renderizar una pagina en especifico
    const params = new URLSearchParams(window.location.search);
    const pageLabel = params.get('page');
    if (pageLabel != null) {
      setCurrentPage(pages.findIndex(page => page.label === pageLabel));
    }
    // Precarga los datos de la BD para dar inicio a la web
    PreLoad(() => {
      SetLoading(false);

    });
  }, []);

  useEffect(() => {
    MoverScrollArriba();
  }, [currentPage]);


  // FUNCTIONS
  const handleMenuClick = (pageIndex, data = null) => {
    SetLoading(true);

    setTimeout(() => {
      setCurrentPage(pageIndex);

      const newUrl = `?page=${pages[pageIndex].label}${data != null ? '&data=' + data : ''}`;
      window.history.pushState(null, '', newUrl);

      // Confirmar si hay cambio de datos de la BD antes de actualizar la página
      PreLoad(() => {
        SetLoading(false);
      });

    }, 1000);
  };

  const MoverScrollArriba = () => {
    // Mueve el scroll arriba
    window.scrollTo({
      top: 0,
      behavior: "smooth" // opcional: puedes usar "auto" si no quieres la animación
    });
  }

  const ChangeLenguage = (newLenguage) => {
    SetCurrentLang(newLenguage);
    SetLoading(true);
    PreLoad(() => {
      setTimeout(() => {
        SetLoading(false);
        }, 1000);
    }, newLenguage);
  }


  return (
    <>
      <MenuBar OnItemClick={(e) => { handleMenuClick(e) }} currentPage={pages[currentPage]} SetLenguage={ChangeLenguage} />
      {IsLoading ?
        <>
          <div className='h-[90vh]'></div>
          <Transition ActiveLoader />
        </>
        :
        <CurrentPageComponent ChangePage={handleMenuClick} CurrentLang={CurrentLang} />
      }
      <Footer OnItemClick={(e) => { handleMenuClick(e) }} />
    </>
  )
}

export default App
