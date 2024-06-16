import Card from '../Components/Cards/Card.jsx'
import CardContainer from '../Components/Cards/CardContainer.jsx'
import TagLine from '../Components/Cards/TagLine.jsx'
import { CardContent, CardRowContent, CardColContent } from '../Components/Cards/CardContent.jsx'
import SocialButtonsCard from '../Components/SocialButtonsCard.jsx'

import { ArrowIcon, PageData, ProfileData, TagLineData } from '../Data.js'
import TailwindComponents from '../TailwindComponents.js'

export default function InicioPage({ ChangePage }) {

    const CreateSocialMedia = () => {
        return <>
            <SocialButtonsCard SocialIcons={[
                { name: 'linkedin', link: 'https://www.linkedin.com/in/museortizmedia/' },
                { name: 'github', link: 'https://github.com/museortizmedia' }
            ]} />
        </>;
    };

    const ServicesLogos = () => {
        return <>
            <div className={`grid grid-cols-4 place-content-center h-2/3 w-full space-x-3`}>
                <div className={`col-span-1 rounded-full dark:text-white text-black text-center`}>
                    <span className="material-symbols-outlined text-5xl" translate="no">Photo_Camera</span>
                </div>
                <div className={`col-span-1 rounded-full dark:text-white text-black text-center`}>
                    <span className="material-symbols-outlined text-5xl" translate="no">draft_orders</span>
                </div>
                <div className={`col-span-1 rounded-full dark:text-white text-black text-center`}>
                    <span className="material-symbols-outlined text-5xl" translate="no">overview_key</span>
                </div>
                <div className={`col-span-1 rounded-full dark:text-white text-black text-center`}>
                    <span className="material-symbols-outlined text-5xl" translate="no">screenshot</span>
                </div>
            </div>
        </>;
    };

    const Cifras = () => {
        return <>
            <div className={`grid grid-cols-3 h-2/3 w-full space-x-3 place-content-center text-center px-5`}>
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
                    <p className='text-zinc-400 font-normal flex-wrap mx-5 uppercase text-sm pt-2'>Proyectos realizados</p>
                </div>
            </div>
        </>;
    };

    const CTA = () => {
        return <>
            <div className={`card-info grid grid-cols-4 place-content-end h-full w-full text-5xl font-extrabold text-left mb-10 m-5 cursor-pointer dark:text-white text-black`}>
                <div className="font-bold col-span-4 row-span-2">Vamos</div>
                <div className="font-bold col-span-4 row-span-2">a trabajar <span className="font-bold text-rose-700">juntos</span></div>
                <span className={`text-[40px] material-symbols-outlined col-span-1 col-start-4 text-right mr-5 ${TailwindComponents.BotonLogo}`} translate="no">{ArrowIcon}</span>
            </div>

        </>;
    };


    return (
        <div className='space-y-52 md:space-y-0 xl:space-y-14'>

            <CardContainer xtraClasses={{ 'bg-red': 900 }}>
                <Card gridClasses={{ 'xl:col-span': 2, 'xl:row-span': 10, 'md:col-span': 4, }}
                    flexType='row'
                    OnCardClick={() => { ChangePage(1) }}
                >
                    <CardRowContent
                        ImageSrc={ProfileData.ImageSrc}
                        SubTitle={ProfileData.Rol}
                        Title={ProfileData.Nombre}
                        Desc={ProfileData.SortBio}
                    />
                </Card>

                <Card gridClasses={{ 'xl:col-span': 2, 'xl:row-span': 1, 'md:col-span': 4 }}>
                    <TagLine space='5' tagline={TagLineData} Color='text-black dark:text-white ' />
                </Card>

                <Card
                    gridClasses={{ 'xl:col-span': 1, 'xl:col-start': 3, 'xl:col-end': 4, 'xl:row-span': 9, 'xl:row-start': 2, 'md:col-span': 2 }}
                    OnCardClick={() => { ChangePage(4) }}
                >
                    <CardColContent
                        ImageSrc='https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png'
                        SubTitle={'Más acerca de mi'}
                        Title={'Credenciales'}
                    />
                </Card>

                <Card
                    gridClasses={{ 'xl:col-span': 1, 'xl:col-start': 4, 'xl:row-span': 9, 'xl:row-start': 2, 'md:col-span': 2 }}
                    OnCardClick={() => { ChangePage(2) }}
                >
                    <CardColContent
                        ImageSrc='https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png'
                        SubTitle={'Portafolio'}
                        Title={'Proyectos'}
                    />
                </Card>
            </CardContainer>

            <CardContainer xtraClasses={{ 'bg-red': 800 }}>
                <Card
                gridClasses={{ 'col-span': 1, 'md:col-span': 2, 'xl:col-span': 1 }}
                OnCardClick={() => { ChangePage(5) }}
                >
                    <CardColContent
                        ImageSrc='https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Fa8a7d413c81ac8a5cf104d3dab696a61010b8838-1920x1080.jpg&w=1920&q=75'
                        SubTitle={'blog'}
                        Title={'Unity POC'}
                    />
                </Card>

                <Card
                gridClasses={{ 'col-span': 1, 'xl:col-span': 2, 'md:col-span': 4 }}
                OnCardClick={() => { ChangePage(6) }}
                >
                    <CardContent
                        Component={ServicesLogos}
                        SubTitle={'Especialización'}
                        Title={'Servicios Ofrecidos'}
                    />
                </Card>

                <Card
                gridClasses={{ 'md:col-span': 2, 'xl:col-span': 1 }}
                OnCardClick={() => { ChangePage(3) }}
                >
                    <CardContent
                        Component={CreateSocialMedia}
                        SubTitle={'Contacta conmigo'}
                        Title={'Redes Sociales'}
                    />
                </Card>
            </CardContainer>

            <CardContainer xtraClasses={{ 'bg-red': 700 }}>
                <Card gridClasses={{ 'xl:col-span': 2, 'md:col-span': 2, }}>
                    <CardContent
                        Component={Cifras}
                        HideAll
                    />
                </Card>

                <Card
                gridClasses={{ 'xl:col-span': 2, 'md:col-span': 2, }}
                OnCardClick={()=>{ChangePage(3)}}
                >
                    <CardContent
                        HideAll
                        Component={CTA}
                    />
                </Card>
            </CardContainer>

        </div>
    )
}