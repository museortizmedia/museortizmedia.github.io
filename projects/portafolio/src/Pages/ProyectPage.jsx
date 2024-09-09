import { useState, useEffect } from 'react'
import { ProyectosData } from '../Data';
import Card from '../Components/Cards/Card';
import TailwindComponents from '../TailwindComponents';

export default function ProyectPage({CurrentLang}) {

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

    function renderMedia(src, classes) {
        // Asumimos que un videoId siempre tiene cierta longitud o un formato (por ejemplo, de Google Drive o YouTube)
        const isVideo = typeof src === 'string' && src.length === 11; // Puedes cambiar esta validación según el formato de tu videoId

        if (isVideo) {
            return (
                <div className={`relative pb-[56.25%] h-0 overflow-hidden rounded-[30px] ${classes}`}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-[30px]"
                        src={`https://www.youtube.com/embed/${src}`} // O cambia a tu proveedor de videos
                        title="Video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        } else {
            return <img className={`w-full object-center object-cover ${classes}`} src={src} alt={currentPage.Subtitle} />;
        }
    }

    return (
        <>
            <section className='my-5'>

                <span className='text-sm uppercase font-semibold'>{currentPage.Subtitle}</span>
                <div className='col-span-2 col-start-2 row-end-1 text-[2rem] text-pretty font-extrabold uppercase text-black dark:text-white mb-[50vh]'>
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                    {currentPage.Titulo}
                    <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                </div>
                {/* IMAGEN DE PORTADA */}
                {renderMedia(currentPage.ImagePortada, 'absolute h-[40vh] w-[100vw] left-0 top-[28vh] justify-center')}

                <Card gridClasses={{}} flexClassNames={{ 'md:flex': 'row', 'flex': 'col', 'gap': '6' }} >
                    <div className={`${TailwindComponents.bgCard} w-full md:w-1/2 p-6 space-y-2`}>
                        <span className='uppercase text-md font-semibold text-zinc-500'>{currentPage.NombreEmpresa}</span>
                        <p className='text-sm text-zinc-800 dark:text-zinc-300'>{currentPage.DescEmpresa}</p>
                    </div>
                    <div className='mx-9'></div>
                    <div className={`${TailwindComponents.bgCard} w-full md:w-1/2 p-6 space-y-2`}>
                        <span className='uppercase text-md font-semibold text-zinc-500'>{CurrentLang=="ES"?"Sobre el Proyecto":"About Project"}</span>
                        <p className='text-sm text-zinc-800 dark:text-zinc-300'>{currentPage.Resumen}</p>
                    </div>
                </Card>

                <div className='grid grid-flow-row grid-cols-2 gap-6 mt-10'>
                    {/* VIDEO */}
                    <div className='grid-flow-col col-span-2'>
                        {renderMedia(currentPage.ImagePrimary, 'appear rounded-[30px]')}
                    </div>

                    {/* CUATRO IMAGENES */}
                    <div className='col-span-1 grid-flow-col'>
                        {renderMedia(currentPage.Src1, 'appear rounded-[30px]')}
                    </div>
                    <div className=''>
                        {renderMedia(currentPage.Src2, 'appear rounded-[30px]')}
                    </div>
                    <div className=''>
                        {renderMedia(currentPage.Src3, 'appear rounded-[30px]')}
                    </div>
                    <div className=''>
                        {renderMedia(currentPage.Src4, 'appear rounded-[30px]')}
                    </div>
                </div>

                <Card gridClasses={{ 'flex': 'row', 'p': 9, 'my': 5, 'gap': 6 }} flexClassNames={{}}>

                    <div className={`${TailwindComponents.bgCard} w-[30%] p-6 space-y-5`}>
                        <div>
                            <span className='uppercase text-sm font-medium text-zinc-500'>{CurrentLang=="ES"?"Año":"Year"}</span>
                            <p className='text-md font-semibold text-zinc-800 dark:text-zinc-300'>{currentPage.Date}</p>
                        </div>
                        <div>
                            <span className='uppercase text-sm font-medium text-zinc-500'>{CurrentLang=="ES"?"Cliente":"Client"}</span>
                            <p className='text-md font-semibold text-zinc-800 dark:text-zinc-300'>{currentPage.NombreEmpresa}</p>
                        </div>
                        <div>
                            <span className='uppercase text-sm font-medium text-zinc-500'>{CurrentLang=="ES"?"Servicio":"Service"}</span>
                            <p className='text-md font-semibold text-zinc-800 dark:text-zinc-300'>{currentPage.Area}</p>
                        </div>
                        <div>
                            <span className='uppercase text-sm font-medium text-zinc-500'>{CurrentLang=="ES"?"Proyecto":"Project"}</span>
                            <p className='text-md font-semibold text-zinc-800 dark:text-zinc-300'>{currentPage.Nombre}</p>
                        </div>
                    </div>

                    <div className='mx-9 w-[70%] space-y-5'>
                        <span className='text-md font-semibold text-zinc-500'>{CurrentLang=="ES"?"Descripción":"Description"}</span>
                        <p className='text-md font-medium text-zinc-800 dark:text-zinc-300'>{currentPage.Desc}</p>
                    </div>

                </Card>
            </section>

            {/* IMAGEN FOOTER 
            <img className="my-8 absolute h-[40vh] w-[100vw] left-0 justify-center object-center object-cover" src={currentPage.ImageSecondary} alt={currentPage.Subtitle} />*/}
            {renderMedia(currentPage.ImageSecondary, 'my-8 absolute h-[40vh] w-[100vw] left-0 justify-center')}

            <div className='w-full mt-[55vh] grid grid-flow-row place-content-center'>
                {
                    !(numPage >= (ProyectosData.length - 1)) &&
                    <button className={`${TailwindComponents.BotonBgCard} px-24 py-7 text-5xl mx-auto`} onClick={HandleNextNumPage}> {CurrentLang=="ES"?"Siguiente":"Next"} </button>
                }

            </div>
        </>
    )
}