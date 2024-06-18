import { useState, useEffect } from 'react'
import { ProyectosData } from '../Data';
import Card from '../Components/Cards/Card';
import TailwindComponents from '../TailwindComponents';

export default function ProyectPage() {

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const data = params.get('data');
        if (data != null) {
            setCurrentPage(ProyectosData[data]);
        }
    }, []);

    return (
        <>
            {/*<div>page {currentPage+": "+JSON.stringify(currentPage)}</div>*/}
            <section className='my-5'>

                <span className='text-sm uppercase font-semibold'>{currentPage.Subtitle}</span>
                <div className='col-span-2 col-start-2 row-end-1 text-5xl font-extrabold uppercase text-black dark:text-white mb-[50vh]'>
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                    {currentPage.Titulo}
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                </div>
                <img className="my-8 absolute h-[40vh] w-[100vw] left-0 top-[30vh] justify-center object-center object-cover" src={currentPage.ImagePortada} alt={currentPage.Subtitle} />

                <Card gridClasses={{ 'flex': 'row', 'p': 9, 'my': 5 }} flexType=''>
                    <div className={`${TailwindComponents.bgCard} w-1/2 p-6 space-y-2`}>
                        <span className='uppercase text-md font-semibold text-zinc-500'>{currentPage.NombreEmpresa}</span>
                        <p className='text-sm text-zinc-800 dark:text-zinc-300'>{currentPage.DescEmpresa}</p>
                    </div>
                    <div className='mx-9'></div>
                    <div className={`${TailwindComponents.bgCard} w-1/2 p-6 space-y-2`}>
                        <span className='uppercase text-md font-semibold text-zinc-500'>sobre el proyecto</span>
                        <p className='text-sm text-zinc-800 dark:text-zinc-300'>{currentPage.Resumen}</p>
                    </div>
                </Card>

                <div className='grid grid-flow-row grid-cols-2 gap-6'>
                    <div className='grid-flow-col col-span-2'>
                        <img className="rounded-[30px] object-center object-cover" src={currentPage.ImagePrimary} alt={currentPage.Subtitle} />
                    </div>

                    <div className='col-span-1 grid-flow-col'>
                        <img className="rounded-[30px] w-full object-center object-cover" src={currentPage.Src1} alt={currentPage.Subtitle} />
                    </div>
                    <div className=''>
                        <img className="rounded-[30px] w-full object-center object-cover" src={currentPage.Src2} alt={currentPage.Subtitle} />
                    </div>
                    <div className=''>
                        <img className="rounded-[30px] w-full object-center object-cover" src={currentPage.Src3} alt={currentPage.Subtitle} />
                    </div>
                    <div className=''>
                        <img className="rounded-[30px] w-full object-center object-cover" src={currentPage.Src4} alt={currentPage.Subtitle} />
                    </div>
                </div>

                <Card gridClasses={{ 'flex': 'row', 'p': 9, 'my': 5 }} flexType=''>

                    <div className={`${TailwindComponents.bgCard} w-[30%] p-6 space-y-5`}>
                        <div>
                            <span className='uppercase text-sm font-medium text-zinc-500'>Año</span>
                            <p className='text-md font-semibold text-zinc-800 dark:text-zinc-300'>{currentPage.Date}</p>
                        </div>
                        <div>
                            <span className='uppercase text-sm font-medium text-zinc-500'>Cliente</span>
                            <p className='text-md font-semibold text-zinc-800 dark:text-zinc-300'>{currentPage.NombreEmpresa}</p>
                        </div>
                        <div>
                            <span className='uppercase text-sm font-medium text-zinc-500'>Servicio</span>
                            <p className='text-md font-semibold text-zinc-800 dark:text-zinc-300'>{currentPage.Area}</p>
                        </div>
                        <div>
                            <span className='uppercase text-sm font-medium text-zinc-500'>Proyecto</span>
                            <p className='text-md font-semibold text-zinc-800 dark:text-zinc-300'>{currentPage.Nombre}</p>
                        </div>
                    </div>

                    <div className='mx-9 w-[70%] space-y-5'>
                        <span className='text-md font-semibold text-zinc-500'>Descripción</span>
                        <p className='text-md font-medium text-zinc-800 dark:text-zinc-300'>{currentPage.Desc}</p>
                    </div>

                </Card>
            </section>

            <img className="my-8 absolute h-[40vh] w-[100vw] left-0 justify-center object-center object-cover" src={currentPage.ImageSecondary} alt={currentPage.Subtitle} />

            <div className='w-full mt-[50vh] grid grid-flow-row place-content-center'>
                <button className={`${TailwindComponents.BotonBgCard} px-24 py-7 text-5xl mx-auto`}> Siguiente </button>
            </div>
        </>
    )
}