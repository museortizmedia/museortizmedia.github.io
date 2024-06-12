import TailwindComponents from '../TailwindComponents'
import { IconPage, PageData } from '../Data'

export default function MenuBar() {

  return (
    <div className='menu w-full h-[10vh] mb-10'>
      <div className="max-w-screen-xl flex flex-wrap items-start justify-between mx-auto p-4">

        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={IconPage} className="h-8" alt="Logo" />
          {/*<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CV - Diego Ortiz</span>*/}
        </a>

        <nav>
        <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
          {
            PageData.map(({ link, label }) => (
              <li key={"page " + label}>
                <a
                  href={link}
                  className="block py-2 px-3 hover:text-black hover:dark:text-white transition duration-300 ease-out hover:ease-in"
                  en='Home'
                >
                  {label}
                </a>
              </li>
            ))
          }
        </ul>
        </nav>

        <div className='relative flex place-content-center top-2 z-50'>
          <button className='hover:text-white' onClick={() => { DisactiveDarkMood(); }}>Ligth</button>
          <span className='px-1'>/</span>
          <button className='hover:text-white' onClick={() => { ActiveDarkMood(); }}>Dark</button>
        </div>

        <div className='relative flex place-content-center top-2 z-50'>
          <button className='hover:text-white' onClick={() => {  }}>ES</button>
          <span className='px-1'>/</span>
          <button className='hover:text-white' onClick={() => {  }}>EN</button>
        </div>

        <button className={TailwindComponents.Boton}>
          Lets talk
        </button>
      </div>
    </div>
  )
}
