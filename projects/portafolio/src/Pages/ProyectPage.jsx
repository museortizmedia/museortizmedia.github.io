import { useState, useEffect } from 'react'
import { ProyectosData } from '../Data';
import Card from '../Components/Cards/Card';
import TailwindComponents from '../TailwindComponents';

export default function ProyectPage() {

    const [currentPage, setCurrentPage] = useState(0);
    const [numPage, setNumPage] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const data = params.get('data');
        if (data != null) {
            // Si el data es un valor fuera del rango de proyectos
            if (data >= ProyectosData.length) {
                // Setea el proyecto mas lejano
                setNumPage(ProyectosData.length - 1);
                setCurrentPage(ProyectosData[ProyectosData.length - 1]);
                // Actualiza al valor real
                const params = new URLSearchParams(window.location.search);
                params.set('data', ProyectosData.length - 1);
                window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
            } else {
                // Establece el valor del data
                setNumPage(data);
                setCurrentPage(ProyectosData[data]);
            }
        }
    }, []);

    const HandleNextNumPage = () => {
        // Establece el nuevo indice del proyecto
        const currentNumPage = 1 + +numPage >= ProyectosData.length - 1 ? ProyectosData.length - 1 : 1 + +numPage;

        MoverScrollArriba();

        // Espera que termine el scroll y cambia los valores
        setTimeout(() => {
            setNumPage(currentNumPage);
            setCurrentPage(ProyectosData[currentNumPage]);

            // Actualiza la URL con el nuevo valor de data
            const params = new URLSearchParams(window.location.search);
            params.set('data', currentNumPage);
            window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
        }, 300)
    }

    const MoverScrollArriba = () => {
        // Mueve el scroll arriba
        window.scrollTo({
            top: 0,
            behavior: "smooth" // opcional: puedes usar "auto" si no quieres la animación
        });
    }

    //MoverScrollArriba();

    return (
        <>
            <section className='my-5'>

                <span className='text-sm uppercase font-semibold'>{currentPage.Subtitle}</span>
                <div className='col-span-2 col-start-2 row-end-1 text-[2rem] text-pretty font-extrabold uppercase text-black dark:text-white mb-[50vh]'>
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                    {currentPage.Titulo}
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                </div>

                <img className="absolute h-[40vh] w-[100vw] left-0 top-[28vh] justify-center object-center object-cover" src={currentPage.ImagePortada} alt={currentPage.Subtitle} />

                <Card gridClasses={{}} flexClassNames={{ 'md:flex': 'row', 'flex': 'col', 'gap': '6' }} >
                    <div className={`${TailwindComponents.bgCard} w-full md:w-1/2 p-6 space-y-2`}>
                        <span className='uppercase text-md font-semibold text-zinc-500'>{currentPage.NombreEmpresa}</span>
                        <p className='text-sm text-zinc-800 dark:text-zinc-300'>{currentPage.DescEmpresa}</p>
                    </div>
                    <div className='mx-9'></div>
                    <div className={`${TailwindComponents.bgCard} w-full md:w-1/2 p-6 space-y-2`}>
                        <span className='uppercase text-md font-semibold text-zinc-500'>sobre el proyecto</span>
                        <p className='text-sm text-zinc-800 dark:text-zinc-300'>{currentPage.Resumen}</p>
                    </div>
                </Card>

                <div className='grid grid-flow-row grid-cols-2 gap-6 mt-10'>
                    <div className='grid-flow-col col-span-2'>
                        <img className="appear rounded-[30px] object-center object-cover" src={currentPage.ImagePrimary} alt={currentPage.Subtitle} />
                    </div>

                    <div className='col-span-1 grid-flow-col'>
                        <img className="appear rounded-[30px] w-full object-center object-cover" src={currentPage.Src1} alt={currentPage.Subtitle} />
                    </div>
                    <div className=''>
                        <img className="appear rounded-[30px] w-full object-center object-cover" src={currentPage.Src2} alt={currentPage.Subtitle} />
                    </div>
                    <div className=''>
                        <img className="appear rounded-[30px] w-full object-center object-cover" src={currentPage.Src3} alt={currentPage.Subtitle} />
                    </div>
                    <div className=''>
                        <img className="appear rounded-[30px] w-full object-center object-cover" src={currentPage.Src4} alt={currentPage.Subtitle} />
                    </div>
                </div>

                <Card gridClasses={{ 'flex': 'row', 'p': 9, 'my': 5, 'gap': 6 }} flexClassNames={{}}>

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

            <div className='w-full mt-[55vh] grid grid-flow-row place-content-center'>
                {
                    !(numPage >= (ProyectosData.length - 1)) &&
                    <button className={`${TailwindComponents.BotonBgCard} px-24 py-7 text-5xl mx-auto`} onClick={HandleNextNumPage}>  {` Siguiente `} </button>
                }

            </div>
        </>
    )
}