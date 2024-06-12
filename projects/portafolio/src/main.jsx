import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import MenuBar from './Components/MenuBar.jsx'
import Card from './Components/Cards/Card.jsx'
import CardContainer from './Components/Cards/CardContainer.jsx'
import Footer from './Components/Footer.jsx'
import TagLine from './Components/Cards/TagLine.jsx'
import { CardContent, CardRowContent, CardColContent } from './Components/Cards/CardContent.jsx'
import SocialButtonsCard from './Components/SocialButtonsCard.jsx'

import { ArrowIcon, ProfileData } from './Data.js'
import TailwindComponents from './TailwindComponents.js'

const CreateSocialMedia = () => {
  return <>
    <SocialButtonsCard SocialIcons={[
      {name:'linkedin', link:'https://www.linkedin.com/in/museortizmedia/'},
      {name:'github', link:'https://github.com/museortizmedia'}
      ]}/>
  </>;
};

const ServicesLogos = () => {
  return <>
    <div className={`grid grid-cols-4 place-content-center h-2/3 w-full space-x-3`}>
      <div className={`col-span-1 rounded-full dark:text-white text-black`}>
        <span className="material-symbols-outlined text-5xl">Photo_Camera</span>
      </div>
      <div className={`col-span-1 rounded-full dark:text-white text-black`}>
        <span className="material-symbols-outlined text-5xl">draft_orders</span>
      </div>
      <div className={`col-span-1 rounded-full dark:text-white text-black`}>
        <span className="material-symbols-outlined text-5xl">overview_key</span>
      </div>
      <div className={`col-span-1 rounded-full dark:text-white text-black`}>
        <span className="material-symbols-outlined text-5xl">screenshot</span>
      </div>
    </div>
  </>;
};

const Cifras = () => {
  return <>
    <div className={`grid grid-cols-3 h-2/3 w-full space-x-3 place-content-center px-5`}>
      <div className={`col-span-1 ${TailwindComponents.BotonBgCard} dark:to-[#252525]`}>
        <div className='relative'>
          <strong className='text-4xl after:content'>07</strong>
          <div className="hidden absolute top-[20%] right-[70%] w-4 h-4">+</div>
        </div>
        <p className='text-zinc-400 font-normal flex-wrap mx-5 uppercase text-sm pt-2'>Year Experience</p>
      </div>
      <div className={`col-span-1 py-10 ${TailwindComponents.BotonBgCard} dark:to-[#222222]`}>
        <div className='relative'>
          <strong className='text-4xl after:content'>125</strong>
          <div className="absolute top-[20%] right-[70%] w-4 h-4">+</div>
        </div>
        <p className='text-zinc-400 font-normal flex-wrap mx-5 uppercase text-sm pt-2'>Usuarios Alcanzados</p>
      </div>
      <div className={`col-span-1 py-10 ${TailwindComponents.BotonBgCard}`}>
        <div className='relative'>
          <strong className='text-4xl after:content'>21</strong>
          <div className="absolute top-[20%] right-[70%] w-4 h-4">+</div>
        </div>
        <p className='text-zinc-400 font-normal flex-wrap mx-5 uppercase text-sm pt-2'>Proyectos realizado</p>
      </div>
    </div>
  </>;
};

const CTA = () => {
  return <>
    <div onClick={()=>{alert("ok")}} className={`card-info grid grid-cols-4 place-content-end h-full w-full text-5xl font-extrabold text-left mb-10 m-5 cursor-pointer dark:text-white text-black`}>
      <div className="font-bold col-span-4 row-span-2">Vamos</div>
      <div className="font-bold col-span-4 row-span-2">a trabajar <span className="font-bold text-blue-800">juntos</span></div>
      <span className={`text-[40px] material-symbols-outlined col-span-1 col-start-4 text-right mr-5 ${TailwindComponents.BotonLogo}`}>{ArrowIcon}</span>
    </div>
    
  </>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <MenuBar />
      <div className='space-y-52 md:space-y-0 xl:space-y-14'>

        <CardContainer>

          <Card gridClasses={{ 'xl:col-span': 2, 'xl:row-span': 10, 'md:col-span': 4, }} flexType='row' OnButtonClick={() => { alert("1"); }}>
            <CardRowContent
              ImageSrc={ProfileData.ImageSrc}
              SubTitle={ProfileData.Rol}
              Title={ProfileData.Nombre}
              Desc={ProfileData.SortBio}
            />
          </Card>

          <Card gridClasses={{ 'xl:col-span': 2, 'xl:row-span': 1, 'md:col-span': 4 }}><TagLine space='5' tagline='Content in red' /></Card>

          <Card gridClasses={{ 'xl:col-span': 1, 'xl:col-start': 3, 'xl:col-end': 4, 'xl:row-span': 9, 'xl:row-start': 2, 'md:col-span': 2 }}>
            <CardColContent
              ImageSrc='https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png'
              SubTitle={'Más acerca de mi'}
              Title={'Credenciales'}
              OnButtonClick={() => { }}
            />
          </Card>

          <Card gridClasses={{ 'xl:col-span': 1, 'xl:col-start': 4, 'xl:row-span': 9, 'xl:row-start': 2,'md:col-span': 2}}>
            <CardColContent
              ImageSrc='https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png'
              SubTitle={'Portafolio'}
              Title={'Proyectos'}
              OnButtonClick={() => { }}
            />
          </Card>
        </CardContainer>

        <CardContainer>
          <Card gridClasses={{ 'col-span': 1, 'md:col-span': 2, 'xl:col-span': 1 }}>
            <CardColContent
              ImageSrc='https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Fa8a7d413c81ac8a5cf104d3dab696a61010b8838-1920x1080.jpg&w=1920&q=75'
              SubTitle={'blog'}
              Title={'Unity POC'}
              OnButtonClick={() => { }}
            />
          </Card>

          <Card gridClasses={{ 'col-span': 1, 'xl:col-span': 2, 'md:col-span': 4 }}>
            <CardContent
              Component={ServicesLogos}
              SubTitle={'Especialización'}
              Title={'Servicios Ofrecidos'}
              OnButtonClick={() => { }}
            />
          </Card>

          <Card gridClasses={{ 'md:col-span': 2, 'xl:col-span': 1 }}>
            <CardContent
              Component={CreateSocialMedia}
              SubTitle={'Contacta conmigo'}
              Title={'Redes Sociales'}
              OnButtonClick={() => { }}
            />
          </Card>
        </CardContainer>

        <CardContainer>
          <Card gridClasses={{ 'xl:col-span': 2, 'md:col-span': 2, }}>
            <CardContent
              Component={Cifras}
              HideAll
            />
          </Card>

          <Card gridClasses={{ 'xl:col-span': 2, 'md:col-span': 2, }}>
            <CardContent
              HideAll
              Component={CTA}
              OnButtonClick={() => { }}
            />
          </Card>
        </CardContainer>

      </div>



      {/*
      <div className=' h-[25vh] bg-red-600 rounded-lg w-auto col-span-2'>08</div>
      <img className="rounded-md" src="https://picsum.photos/200/300" />
      <img className="rounded-md" src="https://picsum.photos/300/200" />
      <img className="rounded-md" src="https://picsum.photos/300/200" />
      */}

      <Footer />

      {/*
      <App />

      <Card>
      
        123
      </Card>
      */}



    </>
  </React.StrictMode>
)