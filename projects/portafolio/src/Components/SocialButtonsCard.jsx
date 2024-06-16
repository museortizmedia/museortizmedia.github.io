import { SocialData } from "../Data";
import TailwindComponents from "../TailwindComponents";

export default function SocialButtonsCard() {

    return (
        <>
            <div className={`flex flex-row items-center h-2/3 w-full ${TailwindComponents.bgCard}`}>

            {
                SocialData.map((Icon) => (
                    <div key={Icon.Red}
                    className={`m-3 w-[5em] h-[5em] rounded-full cursor-pointer hover:animate-pulse ${TailwindComponents.BotonBgCard}`}
                    onClick={() => { window.open(Icon.Link, "_blank"); }}
                    >
                        <i className={`fab fa-${Icon.Red.toLowerCase()} social-icon text-5xl`}></i>
                    </div>
                    
                  ))
                
            }

            </div>
        </>
    )
}