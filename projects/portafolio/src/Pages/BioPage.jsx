import Card from '../Components/Cards/Card.jsx'
import CardContainer from '../Components/Cards/CardContainer.jsx'
import { CardContent, CardRowContent, CardColContent } from '../Components/Cards/CardContent.jsx'
import SocialButtonsCard from '../Components/SocialButtonsCard.jsx'

import { ArrowIcon, PageData, ProfileData, fetchBookData } from '../Data.js'

export default function BioPage() {
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


    return (
        <div className='space-y-52 md:space-y-0 xl:space-y-14'>
            <CardContainer xlCols={6} extraClasses={{ 'bg-red': 500 }}>
                <Card gridClasses={{ 'xl:col-start': 1, 'xl:col-end': 3, 'xl:row-start': 1, 'xl:row-end': 4, }} flexType='row' OnButtonClick={() => { alert("1"); }}>
                    <CardContent
                        Component={ProfileImage}
                        HideAll
                        cardClassNames={{ 'p': 0 }}
                    />
                </Card>

                <div className='col-start-3 col-end-7 row-start-1 text-5xl font-extrabold text-center'>
                    <span className={`text-[40px] material-symbols-outlined select-none`}>airwave</span>
                    Resumen Personal
                    <span className={`text-[40px] material-symbols-outlined select-none`}>airwave</span>
                </div>

                <Card gridClasses={{ 'xl:col-start': 3, 'xl:col-end': 7, 'xl:row-start': 2, 'xl:row-end': 4 }}>
                    <div className='px-2 pb-2 mt-10'>
                        <p className='text-2xl font-bold'>{ProfileData.NombreCompleto}</p>
                        <br />
                        <p className='pt-0'>{ProfileData.Bio}</p>
                    </div>
                </Card>
            </CardContainer>



            <CardContainer extraClasses={{ 'bg-red': 700 }}>
                <Card gridClasses={{ 'xl:col-span': 2, 'xl:row-span': 2, }}>
                    <section className='p-4'>
                        <header className='uppercase font-semibold py-3'>Titulo</header>
                        <article className='py-3'>
                            <span className='text-zinc-500 py-5'>fecha-fecha</span>
                            <p className='text-xl'>Nombre</p>
                            <footer className='text-zinc-500'>Lugar</footer>
                        </article>
                        <article className='py-3'>
                            <span className='text-zinc-500 py-5'>fecha-fecha</span>
                            <p className='text-xl'>Nombre</p>
                            <footer className='text-zinc-500'>Lugar</footer>
                        </article>
                    </section>
                </Card>

                <Card gridClasses={{ 'xl:col-span': 2, 'xl:row-end': 1, }}>
                    <section className='p-4'>
                        <header className='uppercase font-semibold py-3'>Titulo</header>
                        <article className='py-3'>
                            <span className='text-zinc-500 py-5'>fecha-fecha</span>
                            <p className='text-xl'>Nombre</p>
                            <footer className='text-zinc-500'>Lugar</footer>
                        </article>
                        <article className='py-3'>
                            <span className='text-zinc-500 py-5'>fecha-fecha</span>
                            <p className='text-xl'>Nombre</p>
                            <footer className='text-zinc-500'>Lugar</footer>
                        </article>
                    </section>
                </Card>
            </CardContainer>

            <CardContainer xlCols={7} extraClasses={{ 'bg-red': 700 }}>
            <Card gridClasses={{ 'xl:col-span': 2 }}>
                    <CardContent
                        Component={CreateSocialMedia}
                        SubTitle={'Contacta conmigo'}
                        Title={'Redes Sociales'}
                        OnButtonClick={() => { }}
                    />
                </Card>

                <Card gridClasses={{'xl:col-span': 3}}>
                    //
                </Card>

                <Card gridClasses={{ 'xl:col-span': 2 }}>
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