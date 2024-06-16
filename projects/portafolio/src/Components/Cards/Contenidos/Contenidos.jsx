import { ArrowIcon, ServicesData, SocialData } from "../../../Data";
import TailwindComponents from "../../../TailwindComponents";
import SocialButtonsCard from "../../SocialButtonsCard";
import Card from "../Card";
import { CardContent } from "../CardContent";

export const ContenidoCTA = () => {
    return <>
        <div className={`card-info grid grid-cols-4 place-content-end h-full w-full text-5xl font-extrabold text-left mb-10 m-5 cursor-pointer dark:text-white text-black`}>
            <div className="font-bold col-span-4 row-span-2">Vamos</div>
            <div className="font-bold col-span-4 row-span-2">a trabajar <span className={`font-bold ${TailwindComponents.TextPrincipal}`}>juntos</span></div>
            <span className={`text-[40px] material-symbols-outlined col-span-1 col-start-4 text-right mr-5 ${TailwindComponents.BotonLogo}`} translate="no">{ArrowIcon}</span>
        </div>

    </>;
};

export const ContenidoCifras = () => {
    return <>
        <div className={`grid grid-cols-3 h-2/3 w-full space-x-3 place-content-center text-center px-5`}>
            <div className={`col-span-1 ${TailwindComponents.BotonBgCard} dark:to-[#252525]`}>
                <div className='relative'>
                    <strong className='text-4xl after:content'>07</strong>
                    <div className="hidden absolute top-[20%] right-[70%] w-4 h-4">+</div>
                </div>
                <p className='text-zinc-400 font-normal flex-wrap mx-5 uppercase text-sm pt-2'>Year Experience</p>
            </div>
            <div className={`col-span-1 py-10 ${TailwindComponents.BotonBgCard} dark:to-[#222222]`}>
                <div className='relative'>
                    <strong className='text-4xl after:content'>125</strong>
                    <div className="absolute top-[20%] right-[70%] w-4 h-4">+</div>
                </div>
                <p className='text-zinc-400 font-normal flex-wrap mx-5 uppercase text-sm pt-2'>Usuarios Alcanzados</p>
            </div>
            <div className={`col-span-1 py-10 ${TailwindComponents.BotonBgCard}`}>
                <div className='relative'>
                    <strong className='text-4xl after:content'>21</strong>
                    <div className="absolute top-[20%] right-[70%] w-4 h-4">+</div>
                </div>
                <p className='text-zinc-400 font-normal flex-wrap mx-5 uppercase text-sm pt-2'>Proyectos realizados</p>
            </div>
        </div>
    </>;
};

export const ContenidoServicesLogos = () => {
    return <>
        <div className={`grid grid-cols-4 place-content-center h-2/3 w-full space-x-3`}>
            {ServicesData.map((Logo, Index) => (
                <div key={Index} className={`col-span-1 rounded-full dark:text-white text-black text-center`}>
                    <span className="material-symbols-outlined text-5xl" translate="no">{Logo.label}</span>
                </div>
            ))}
        </div>
    </>;
};