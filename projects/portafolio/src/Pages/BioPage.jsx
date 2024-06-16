import Card from '../Components/Cards/Card.jsx'
import CardContainer from '../Components/Cards/CardContainer.jsx'
import { CardContent, CardRowContent, CardColContent } from '../Components/Cards/CardContent.jsx'
import SocialButtonsCard from '../Components/SocialButtonsCard.jsx'

import { ArrowIcon, PageData, EducationData, ExperienceData, ProfileData, fetchBookData } from '../Data.js'
import TailwindComponents from '../TailwindComponents.js'

export default function BioPage({ChangePage}) {
    const ProfileImage = () => (
        <img className="m-5 h-3/4 object-cover rounded-tl-[30px] rounded-br-[30px]" src={ProfileData.ImageSrc} alt={ProfileData.Apodo} height={"20px"} />)

    //fetchBookData("Data").then((e)=>{console.log(e)});

    const CreateSocialMedia = () => {
        return <>
            <SocialButtonsCard SocialIcons={[
                { name: 'linkedin', link: 'https://www.linkedin.com/in/museortizmedia/' },
                { name: 'github', link: 'https://github.com/museortizmedia' }
            ]} />
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
            <CardContainer xlCols={6} xtraClasses={{ 'bg-red': 500 }}>
                <Card
                gridClasses={{ 'xl:col-start': 1, 'xl:col-end': 3, 'xl:row-start': 1, 'xl:row-end': 4, }}
                flexType='row'
                >
                    <CardContent
                        Component={ProfileImage}
                        HideAll
                        cardClassNames={{ 'p': 0 }}
                    />
                </Card>

                <div className='col-start-3 col-end-7 row-start-1 text-5xl font-extrabold text-center uppercase'>
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                    Resumen Personal
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                </div>

                <Card gridClasses={{ 'xl:col-start': 3, 'xl:col-end': 7, 'xl:row-start': 2, 'xl:row-end': 4 }}>
                    <div className='px-2 pb-2 mt-10'>
                        <p className='text-2xl font-bold'>{ProfileData.NombreCompleto}</p>
                        <br />
                        <p className='pt-0'>{ProfileData.Bio}</p>
                    </div>
                </Card>
            </CardContainer>



            <CardContainer xtraClasses={{ 'bg-red': 700 }}>
                <Card gridClasses={{ 'xl:col-start': 1, 'xl:col-end': 3, }}>
                    <section className='p-4'>
                        <header className='uppercase font-semibold py-3'>Experiencia</header>
                        <article className='py-3'>
                        <span className='text-zinc-500 py-5'>{ExperienceData[1].InitAge+" - "+ExperienceData[1].FinishAge}</span>
                            <p className='text-xl'>{ExperienceData[1].Cargo}</p>
                            <footer onClick={()=>{ window.open(ExperienceData[1].link, '_blank', 'noopener,noreferrer'); }} className='text-zinc-500 hover:cursor-pointer hover:underline'>{ExperienceData[1].Insitution}</footer>
                        </article>
                        <article className='py-3'>
                        <span className='text-zinc-500 py-5'>{ExperienceData[0].InitAge+" - "+ExperienceData[0].FinishAge}</span>
                            <p className='text-xl'>{ExperienceData[0].Cargo}</p>
                            <footer onClick={()=>{ window.open(ExperienceData[1].link, '_blank', 'noopener,noreferrer'); }} className='text-zinc-500 hover:cursor-pointer hover:underline'>{ExperienceData[0].Insitution}</footer>
                        </article>
                    </section>
                </Card>

                <Card gridClasses={{ 'xl:col-start': 3, 'xl:col-end': 5, }}>
                    <section className='p-4'>
                        <header className='uppercase font-semibold py-3'>Educación</header>
                        <article className='py-3'>
                            <span className='text-zinc-500 py-5'>{EducationData[1].InitAge+" - "+EducationData[1].FinishAge}</span>
                            <p className='text-xl'>{EducationData[1].Name}</p>
                            <footer onClick={()=>{ window.open(ExperienceData[1].link, '_blank', 'noopener,noreferrer'); }} className='text-zinc-500 hover:cursor-pointer hover:underline'>{EducationData[1].Insitution}</footer>
                        </article>
                        <article className='py-3'>
                        <span className='text-zinc-500 py-5'>{EducationData[0].InitAge+" - "+EducationData[0].FinishAge}</span>
                            <p className='text-xl'>{EducationData[0].Name}</p>
                            <footer onClick={()=>{ window.open(ExperienceData[1].link, '_blank', 'noopener,noreferrer'); }} className='text-zinc-500 hover:cursor-pointer hover:underline'>{EducationData[0].Insitution}</footer>
                        </article>
                    </section>
                </Card>
            </CardContainer>

            <CardContainer xlCols={7} xtraClasses={{ 'bg-red': 700 }}>
            <Card
            gridClasses={{ 'xl:col-span': 2 }}
            OnCardClick={() => { ChangePage(3); }}
            >
                    <CardContent
                        Component={CreateSocialMedia}
                        SubTitle={'Contacta conmigo'}
                        Title={'Redes Sociales'}
                        OnButtonClick={() => { }}
                    />
                </Card>

                <Card
                gridClasses={{ 'xl:col-span': 3, 'md:col-span': 2, }}
                OnCardClick={()=>{ChangePage(3)}}
                >
                    <CardContent
                        HideAll
                        Component={CTA}
                        
                    />
                </Card>

                <Card
                gridClasses={{ 'xl:col-span': 2 }}
                OnCardClick={() => { ChangePage(4); }}
                >
                    <CardColContent
                        ImageSrc='https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png'
                        SubTitle={'Más acerca de mi'}
                        Title={'Credenciales'}
                        OnButtonClick={() => { }}
                    />
                </Card>
            </CardContainer>

        </div>
    )
}