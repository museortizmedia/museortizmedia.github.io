import { useState } from "react"
import { PageData } from "../Data"
import TailwindComponents from "../TailwindComponents"

export default function Footer() {
    const [hide, SetHide] = useState("hidden");
    const [personaCount, SetPersonaCount] = useState(0);
    const HandlePersonas = () => {
        if (hide == "hidden") {
            SetHide(""); SetPersonaCount(personaCount + 1);
        }
    }
    return (
        <>
            <div className='footer w-full h-[10vh] grid place-content-center my-28 space-y-5'>

                <a href="#" className="col-span-1 w-full">
                    <img src="src/assets/react.svg" className="h-11 w-full" alt="Logo" />
                    {/*<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CV - Diego Ortiz</span>*/}
                </a>

                <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
                    {
                        PageData.map(({ link, label }) => (
                            <li key={"page " + label}>
                                <a
                                    href={link}
                                    className="block py-2 px-3 hover:text-black hover:dark:text-white transition duration-300 ease-out hover:ease-in"
                                >
                                    {label}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <div className="text-center grid grid-flow-row gap-4">
                    <p className="text-white font-medium text-lg">Hazme saber que estuviste aquí</p>
                    <button className={hide?TailwindComponents.Boton:"text-white text-lg font-medium"} onClick={HandlePersonas}>{hide?"¡Presióname!":`¡Somos ${personaCount}!`}</button>
                </div>

                <p className="text-center">
                    © Copyrigth 2025 Made with ♥ for me.
                </p>
            </div>
        </>
    )
}