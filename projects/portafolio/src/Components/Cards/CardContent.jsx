import React from 'react';
import TailwindComponents from '../../TailwindComponents';

const CardRowContent = ({ ImageSrc, ImageAlt, Altura, Title, SubTitle, Desc, ButonLogo = "login" }) => {

    return (
        <>
            <img className="m-5 h-3/4 object-cover rounded-tl-[30px] rounded-br-[30px]" src={ImageSrc} alt={ImageAlt} height={Altura} />
            <div className="card-info relative flex-1 content-center text-left p-5">
                <p className={`font-semibold text-zinc-700 dark:text-zinc-400 text-lg uppercase`}>{SubTitle}</p>
                <p className='font-bold text-black dark:text-zinc-100 text-4xl mb-2'>{Title}</p>
                <p className='font-normal text-zinc-700 dark:text-zinc-400'>{Desc}</p>
                <span className={`text-[40px] material-symbols-outlined absolute bottom-3 right-3 ${TailwindComponents.BotonLogo}`}>{ButonLogo}</span>
            </div>
        </>
    )
}

const CardColContent = ({ ImageSrc, ImageAlt, Title, SubTitle, ButonLogo = "login" }) => {

    return (
        <>
            <img className="h-2/3 w-auto object-cover" src={ImageSrc} alt={ImageAlt} />
            <div className="card-info relative flex-1 content-center pl-2 pt-3 text-left">
                <p className='font-bold text-zinc-500 text-xs uppercase'>{SubTitle}</p>
                <p className='font-semibold text-black dark:text-zinc-100 text-xl mb-2'>{Title}</p>
                <span className={`text-[40px] material-symbols-outlined absolute bottom-3 right-3 ${TailwindComponents.BotonLogo}`}>{ButonLogo}</span>
            </div>
        </>
    )
}

const CardContent = ({ 
    Component, Title, SubTitle,
    HideAll = false, HideComponent = false, HideTitle = false, HideSubtitle = false, HideButton = false,
    ButonLogo = "login",
    TitleClases
}) => {
    return (
        <>
            {!HideComponent && Component()}
            {!HideAll && (
                <div className="card-info relative flex-1 content-center pl-2 pt-3 text-left">
                    {!HideSubtitle && <p className='font-bold text-zinc-500 text-xs uppercase'>{SubTitle}</p>}
                    {!HideTitle && <p className={TitleClases||'font-semibold text-black dark:text-zinc-100 text-xl mb-2'}>{Title}</p>}
                    {!HideButton && (
                        <span className={`text-[40px] material-symbols-outlined absolute bottom-3 right-3 ${TailwindComponents.BotonLogo}`}>{ButonLogo}</span>
                    )}
                </div>
            )}
        </>
    );
};


export { CardContent, CardRowContent, CardColContent };