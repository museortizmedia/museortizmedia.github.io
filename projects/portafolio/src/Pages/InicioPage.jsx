import Card from '../Components/Cards/Card.jsx'
import CardContainer from '../Components/Cards/CardContainer.jsx'
import TagLine from '../Components/Cards/TagLine.jsx'
import { CardContent, CardRowContent, CardColContent } from '../Components/Cards/CardContent.jsx'
import {SocialButtonsCard2} from '../Components/SocialButtonsCard.jsx'

import { GeneralData, ProfileData } from '../Data.js'
import { ContenidoCTA, ContenidoCifras, ContenidoServicesLogos } from '../Components/Cards/Contenidos/Contenidos.jsx'

export default function InicioPage({ ChangePage }) {

    return (
        <div className='space-y-5 md:space-y-5 xl:space-y-14'>

            <CardContainer hideHeigth xtraClasses={{ 'bg-red': 900 }}>
                <Card
                gridClasses={{ 'xl:col-span': 2, 'xl:row-span': 9, 'md:col-span': 4, }}
                flexClassNames={{'flex': 'row'}}
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
                    <TagLine space='5'/>
                </Card>

                <Card
                    gridClasses={{ 'xl:col-span': 1, 'xl:col-start': 3, 'xl:col-end': 4, 'xl:row-start': 2, 'xl:row-end': 10, }}
                    OnCardClick={() => { ChangePage(4) }}
                >
                    <CardColContent
                        ImageSrc={GeneralData.Card_CV.ImgSrc}
                        SubTitle={GeneralData.Card_CV.Subtitulo}
                        Title={GeneralData.Card_CV.Titulo}
                    />
                </Card>

                <Card
                    gridClasses={{ 'xl:col-span': 1, 'xl:col-start': 4, 'xl:row-start': 2, 'xl:row-end': 10, 'md:col-span': 2}}
                    OnCardClick={() => { ChangePage(2) }}
                >
                    <CardColContent
                        ImageSrc={GeneralData.Card_Portafolio.ImgSrc}
                        SubTitle={GeneralData.Card_Portafolio.Subtitulo}
                        Title={GeneralData.Card_Portafolio.Titulo}
                    />
                </Card>
            </CardContainer>

            <CardContainer xtraClasses={{ 'bg-red': 800, }} hideHeigth>
                <Card
                hideHeigth
                gridClasses={{ 'col-span': 1, 'xl:col-span': 1, 'md:col-span': 4,  }}
                OnCardClick={() => { ChangePage(5) }}
                >
                    <CardColContent
                        ImageSrc={GeneralData.Card_Blog.ImgSrc}
                        SubTitle={GeneralData.Card_Blog.Subtitulo}
                        Title={GeneralData.Card_Blog.Titulo}
                    />
                </Card>

                <Card
                gridClasses={{ 'col-span': 1, 'xl:col-span': 2, 'md:col-span': 4,}}
                OnCardClick={() => { ChangePage(6) }}
                >
                    <CardContent
                        Component={ContenidoServicesLogos}
                        SubTitle={GeneralData.Card_Serivicos.Subtitulo}
                        Title={GeneralData.Card_Serivicos.Titulo}
                    />
                </Card>

                <Card
                gridClasses={{ 'xl:col-span': 1, 'md:col-span': 4  }}
                OnCardClick={() => { ChangePage(3) }}
                >
                    <CardContent
                        Component={SocialButtonsCard2}
                        SubTitle={GeneralData.Card_SocialMedia.Subtitulo}
                        Title={GeneralData.Card_SocialMedia.Titulo}
                    />
                </Card>
            </CardContainer>

            <CardContainer hideHeigth xtraClasses={{ 'bg-red': 700 }}>
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