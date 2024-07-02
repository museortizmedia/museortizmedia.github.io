import Card from "../Components/Cards/Card";
import { CardColContent, CardContent } from "../Components/Cards/CardContent";
import { ContenidoCTA } from "../Components/Cards/Contenidos/Contenidos";
import { SocialButtonsCard2 } from "../Components/SocialButtonsCard";
import { ServicesData } from "../Data";
import TailwindComponents from "../TailwindComponents";

export default function ServicesPage({ ChangePage }) {
    return (
        <div className="grid grid-cols-9 gap-5">

            <div className={`${TailwindComponents.bgCard} col-span-3 row-span-4 grid grid-cols-1 space-y-24 p-12 py-12`}>
                {ServicesData.map((Servicio, Index) => (
                    <div key={Servicio.name + Index} className="flex items-center mx-auto w-full">
                        <span className="material-symbols-outlined text-[3rem] text-black dark:text-white" translate="no">{Servicio.label}</span>
                        <span className="ml-7 uppercase font-semibold text-left">{Servicio.name}</span>
                    </div>
                ))}
            </div>

            <div className='col-span-6 px-5 col-start-4 row-end-1 text-5xl font-extrabold uppercase text-black dark:text-white'>
                <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                Servicio Freelance
                <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
            </div>

            <div className={`${TailwindComponents.bgCard} col-span-6 row-span-3 col-start-4 grid grid-cols-2 gap-6 p-7`}>

                {
                    ServicesData.map((Servicio, Index) => (
                        <div key={Index + Servicio.name} className={`${TailwindComponents.bgCard} col-span-1 p-5`}>
                            <header className="text-black dark:text-zinc-500 uppercase font-semibold text-sm mb-3">{Servicio.name}</header>
                            <p className="text-zinc-500 dark:text-zinc-300 text-justify font-semibold text-sm leading-5 pb-7">{Servicio.desc}</p>
                        </div>
                    ))
                }
            </div>

            <div className="col-span-2 row-span-1">
                <Card
                    gridClasses={{ 'xl:col-span': 2 }}
                    OnCardClick={() => { ChangePage(3); }}
                >
                    <CardContent
                        Component={SocialButtonsCard2}
                        SubTitle={'Contacta conmigo'}
                        Title={'Redes Sociales'}
                        OnButtonClick={() => { }}
                    />
                </Card>
            </div>
            <div className="col-span-5 row-span-1">
                <Card
                    gridClasses={{ 'xl:col-span': 2, 'md:col-span': 2, }}
                    OnCardClick={() => { ChangePage(3) }}
                >
                    <CardContent
                        HideAll
                        Component={ContenidoCTA}
                    />
                </Card>
            </div>
            <div className="col-span-2 row-span-1">
                <Card
                    gridClasses={{ 'xl:col-span': 2 }}
                    OnCardClick={() => { ChangePage(4); }}
                >
                    <CardColContent
                        ImageSrc='https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png'
                        SubTitle={'Más acerca de mi'}
                        Title={'Credenciales'}
                    />
                </Card>
            </div>

        </div>
    )
}