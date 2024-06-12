import TailwindComponents from "../TailwindComponents";

export default function SocialButtonsCard({SocialIcons}) {

    if (!Array.isArray(SocialIcons)) {
        console.error('SocialIcons debe ser un array');
        return null;
    }

    return (
        <>
            <div className={`flex flex-row items-center h-2/3 w-full ${TailwindComponents.bgCard}`}>

            {
                SocialIcons &&
                SocialIcons.map(({ Icon }, Index) => (
                    <div key={Index}
                    className={`m-3 w-[5em] h-[5em] rounded-full cursor-pointer hover:animate-pulse ${TailwindComponents.BotonBgCard}`}
                    onClick={() => { window.open(SocialIcons[Index].link, "_blank"); }}
                    >
                        <i className={`fab fa-${SocialIcons[Index].name} social-icon text-5xl`}></i>
                    </div>
                    
                  ))
                
            }

            </div>
        </>
    )
}