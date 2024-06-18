import Card from "../Components/Cards/Card";
import { CardColContent } from "../Components/Cards/CardContent";
import { ArrowIcon, ProyectosData } from "../Data";
import TailwindComponents from "../TailwindComponents";

export default function PortafolioPage({ ChangePage }) {
    return (
        <div className='grid grid-cols-3 gap-6'>

            <div className='col-span-3 md:col-span-2 md:col-start-2 md:row-end-1  text-5xl font-extrabold text-center uppercase text-black dark:text-white'>
                <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                Mis Proyectos
                <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
            </div>

            {
                [...ProyectosData].reverse().map((Proyecto, Index) => (
                    <div
                        key={Index}
                        className={`${TailwindComponents.bgCard} p-5 col-span-3 md:col-span-1 md:row-span-2 cursor-pointer`}
                        onClick={() => { ChangePage(7, Index) }}
                    >
                        <div className="w-full h-2/3">
                            <img className="h-full w-full justify-center object-cover" src={Proyecto.CoverImage} alt={Proyecto.Subtitle} />
                        </div>

                        <div className="card-info h-1/3 relative flex-1 content-center pl-2 pt-3 text-left">
                            <p className='font-bold text-zinc-500 text-xs uppercase'>
                                {Proyecto.Area}
                            </p>
                            <p className='font-semibold text-black dark:text-zinc-100 text-xl mb-2'>
                                {Proyecto.Nombre}
                            </p>
                            <span
                                className={`text-[40px] material-symbols-outlined absolute bottom-3 right-3 ${TailwindComponents.BotonLogo}`}
                                translate="no"
                            >
                                {ArrowIcon}
                            </span>
                        </div>

                    </div>
                ))
            }

        </div >
    )
}