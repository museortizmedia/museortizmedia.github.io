import Card from '../Components/Cards/Card.jsx'
import CardContainer from '../Components/Cards/CardContainer.jsx'
import { CardContent, CardColContent } from '../Components/Cards/CardContent.jsx'
import { SocialButtonsCard2 } from '/src/Components/SocialButtonsCard.jsx?t=1718694515541';

import { ContenidoCTA } from '../Components/Cards/Contenidos/Contenidos.jsx';

import { EducationData, ExperienceData, GeneralData, ProfileData } from '../Data.js'


export default function BioPage({ ChangePage }) {


    return (
        <div className='space-y-5 md:space-y-5 xl:space-y-14'>
            <CardContainer xlCols={6} xtraClasses={{ 'bg-red': 500 }} hideHeigth >
                <Card
                    gridClasses={{ 'xl:col-start': 1, 'xl:col-end': 3, 'xl:row-start': 1, 'xl:row-end': 4, 'col-span': 6 }}
                >
                    <img className="m-5 h-3/4 object-cover object-top rounded-tl-[30px] rounded-br-[30px]" src={ProfileData.ImageSrc} alt={ProfileData.Apodo} height={"20px"} />
                </Card>

                <div className='col-span-6 xl:col-start-3 xl:col-end-7 xl:row-start-1 text-black dark:text-white text-[2.5rem] font-extrabold text-center uppercase'>
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                    Resumen Personal
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                </div>

                <Card gridClasses={{ 'col-span':6, 'xl:col-start': 3, 'xl:col-end': 7, 'xl:row-start': 2, 'xl:row-end': 4 }}>
                    <div className='px-2 pb-2 mt-10 text-black dark:text-white'>
                        <p className='text-2xl font-bold'>{ProfileData.NombreCompleto}</p>
                        <br />
                        <p className='pt-0'>{ProfileData.Bio}</p>
                    </div>
                </Card>
            </CardContainer>



            <CardContainer xtraClasses={{ 'bg-red': 700 }} hideHeigth>
                <Card
                gridClasses={{ 'xl:col-start': 1, 'xl:col-end': 3, 'xl:row-end': 2 }}
                freeHeigth
                >
                    <section className='p-4'>
                        <header className='uppercase font-semibold py-3 text-black dark:text-white'>Experiencia</header>
                        <article className='py-3'>
                            <span className='text-zinc-500 py-5'>{ExperienceData[1].InitAge + " - " + ExperienceData[1].FinishAge}</span>
                            <p className='text-xl text-black dark:text-white'>{ExperienceData[1].Cargo}</p>
                            <footer onClick={() => { window.open(ExperienceData[1].Link, '_blank', 'noopener,noreferrer'); }} className='text-zinc-500 hover:cursor-pointer hover:underline'>{ExperienceData[1].Insitution}</footer>
                        </article>
                        <article className='py-3'>
                            <span className='text-zinc-500 py-5'>{ExperienceData[0].InitAge + " - " + ExperienceData[0].FinishAge}</span>
                            <p className='text-xl text-black dark:text-white'>{ExperienceData[0].Cargo}</p>
                            <footer onClick={() => { window.open(ExperienceData[0].Link, '_blank', 'noopener,noreferrer'); }} className='text-zinc-500 hover:cursor-pointer hover:underline'>{ExperienceData[0].Insitution}</footer>
                        </article>
                    </section>
                </Card>

                <Card
                freeHeigth
                gridClasses={{ 'xl:col-start': 3, 'xl:col-end': 5, 'xl:row-end': 2 }}
                >
                    <section className='p-4'>
                        <header className='uppercase font-semibold py-3 text-black dark:text-white'>Educación</header>
                        <article className='py-3'>
                            <span className='text-zinc-500 py-5'>{EducationData[1].InitAge + " - " + EducationData[1].FinishAge}</span>
                            <p className='text-xl text-black dark:text-white'>{EducationData[1].Name}</p>
                            <footer onClick={() => { window.open(EducationData[1].Link, '_blank', 'noopener,noreferrer'); }} className='text-zinc-500 hover:cursor-pointer hover:underline'>{EducationData[1].Insitution}</footer>
                        </article>
                        <article className='py-3'>
                            <span className='text-zinc-500 py-5'>{EducationData[0].InitAge + " - " + EducationData[0].FinishAge}</span>
                            <p className='text-xl text-black dark:text-white'>{EducationData[0].Name}</p>
                            <footer onClick={() => { window.open(EducationData[0].Link, '_blank', 'noopener,noreferrer'); }} className='text-zinc-500 hover:cursor-pointer hover:underline'>{EducationData[0].Insitution}</footer>
                        </article>
                    </section>
                </Card>
            </CardContainer>

            <CardContainer xlCols={7} xtraClasses={{ 'bg-red': 700 }} hideHeigth>
                <Card
                    gridClasses={{ 'xl:col-span': 2, 'md:col-span': 1, 'col-span': 1 }}
                    OnCardClick={() => { ChangePage(3); }}
                >
                    <CardContent
                        Component={SocialButtonsCard2}
                        SubTitle={GeneralData.Card_SocialMedia.Subtitulo}
                        Title={GeneralData.Card_SocialMedia.Titulo}
                        OnButtonClick={() => { }}
                    />
                </Card>

                <Card
                    gridClasses={{ 'xl:col-span': 3, 'md:col-span': 1, 'col-span': 1 }}
                    OnCardClick={() => { ChangePage(3) }}
                >
                    <CardContent
                        HideAll
                        Component={ContenidoCTA}

                    />
                </Card>

                <Card
                    gridClasses={{ 'xl:col-span': 2, 'md:col-span': 2, 'col-span': 1 }}
                    OnCardClick={() => { ChangePage(4); }}
                >
                    <CardColContent
                        ImageSrc={GeneralData.Card_CV.ImgSrc}
                        SubTitle={GeneralData.Card_CV.Subtitulo}
                        Title={GeneralData.Card_CV.Titulo}
                    />
                </Card>
            </CardContainer>

        </div>
    )
}