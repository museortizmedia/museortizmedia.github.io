import { useState, useEffect } from 'react';
import TailwindComponents from '../TailwindComponents';
import { IconPage, PageData } from '../Data';

export default function MenuBar({ OnItemClick = null, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [IsDark, setIsDark] = useState(DARKMODEVAR);

 /* useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);*/

  return (
    <div className='menu w-full h-[10vh] mb-10'>
      <div className="max-w-screen-xl flex flex-wrap items-start justify-between mx-auto p-4 relative">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={IconPage} className="h-8" alt="Logo" />
          {/*<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CV - Diego Ortiz</span>*/}
        </a>

        <button
          className="block md:hidden text-black dark:text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen?"X":"☰"}
        </button>

        <nav className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:relative xl:top-0 md:top-0 top-20 left-0 w-full md:w-auto text-center md:text-left bg-zinc-800 opacity-95 md:bg-transparent z-50`}>
          <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            
            {
              PageData.map(({ link, label }) => (
                <li
                key={"page " + label}
                className={`${currentPage.label != label && menuOpen?"hover:bg-zinc-900":""} ${menuOpen?" py-4 ":" my-0 py-0 "} `}
                >
                  <a
                    href="#"
                    onClick={(e) => { if(currentPage.label != label){ e.preventDefault(); OnItemClick(link); setMenuOpen(false); } }}
                    className={`
                      block py-2 px-3 
                      transition duration-300 ease-out hover:ease-in 
                      ${link == currentPage.id ? 'text-black dark:text-white' : 'hover:text-black hover:dark:text-white'} 
                    `}
                  >
                    {label}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>

        <div className='relative flex place-content-center top-2 z-50'>
          <button className={`select-none transition duration-300 ease-out hover:ease-in  dark:hover:text-white hover:text-black`} onClick={() => { if(IsDark){DisactiveDarkMood(); setIsDark(false);}else{ActiveDarkMood(); setIsDark(true);} }}>{!IsDark?<i className="fa fa-moon-o"></i>:<i className="fa fa-sun-o"></i>}</button>
        </div>

        <div className={'hidden' + ' relative flex place-content-center top-2 z-50'}>
          <button className='hover:text-white' onClick={() => { }}>ES</button>
          <span className='px-1'>/</span>
          <button className='hover:text-white' onClick={() => { }}>EN</button>
        </div>

        <button className={`${TailwindComponents.Boton} disabled`} onClick={() => { if (currentPage.id != 3) OnItemClick(3) }}>
          Lets talk
        </button>
      </div>
    </div>
  );
}
