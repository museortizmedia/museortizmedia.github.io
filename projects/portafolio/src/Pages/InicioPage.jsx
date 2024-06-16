import Card from '../Components/Cards/Card.jsx'
import CardContainer from '../Components/Cards/CardContainer.jsx'
import TagLine from '../Components/Cards/TagLine.jsx'
import { CardContent, CardRowContent, CardColContent } from '../Components/Cards/CardContent.jsx'
import SocialButtonsCard from '../Components/SocialButtonsCard.jsx'

import { ProfileData, TagLineData } from '../Data.js'
import { ContenidoCTA, ContenidoCifras, ContenidoServicesLogos } from '../Components/Cards/Contenidos/Contenidos.jsx'

export default function InicioPage({ ChangePage }) {

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
                        Component={ContenidoServicesLogos}
                        SubTitle={'Especialización'}
                        Title={'Servicios Ofrecidos'}
                    />
                </Card>

                <Card
                gridClasses={{ 'md:col-span': 2, 'xl:col-span': 1 }}
                OnCardClick={() => { ChangePage(3) }}
                >
                    <CardContent
                        Component={SocialButtonsCard}
                        SubTitle={'Contacta conmigo'}
                        Title={'Redes Sociales'}
                    />
                </Card>
            </CardContainer>

            <CardContainer xtraClasses={{ 'bg-red': 700 }}>
                <Card gridClasses={{ 'xl:col-span': 2, 'md:col-span': 2, }}>
                    <CardContent
                        Component={ContenidoCifras}
                        HideAll
                    />
                </Card>

                <Card
                gridClasses={{ 'xl:col-span': 2, 'md:col-span': 2, }}
                OnCardClick={()=>{ChangePage(3)}}
                >
                    <CardContent
                        HideAll
                        Component={ContenidoCTA}
                    />
                </Card>
            </CardContainer>

        </div>
    )
}