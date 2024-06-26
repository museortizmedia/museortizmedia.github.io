import React from "react";
import { SocialData } from "../Data";
import TailwindComponents from "../TailwindComponents";

export function SocialButtonsCard2() {

    return (
        <>
            <div className={`flex flex-row items-center h-2/3 w-full mb-5 ${TailwindComponents.bgCard}`}>

                {
                    SocialData.slice(0, 2).map((Icon) => (
                        <div key={Icon.Red}
                            className={`m-3 w-[4em] h-[4em] rounded-full cursor-pointer hover:animate-pulse ${TailwindComponents.BotonBgCard}`}
                            onClick={() => { window.open(Icon.Link, "_blank"); }}
                        >
                            <i className={`fab fa-${Icon.Red.toLowerCase()} social-icon text-center text-3xl`}></i>
                        </div>

                    ))

                }

            </div>
        </>
    )
}

export function SocialButtonsCardAll() {

    return (
        <>
            <div className={`flex flex-row items-center h-2/3 w-full mb-5 ${TailwindComponents.bgCard}`}>

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