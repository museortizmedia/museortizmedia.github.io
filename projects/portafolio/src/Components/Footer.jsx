import { useState, useEffect } from "react"
import { IconPage, PageData, GeneralData, fetchBookData, postBookData, API_version } from "../Data"
import TailwindComponents from "../TailwindComponents"

export default function Footer({ OnItemClick = null }) {

    const [hide, SetHide] = useState("hidden");
    const [personaCount, SetPersonaCount] = useState(0);
    const HandlePersonas = (e) => {
        e.preventDefault();
        e.target.disabled = true;
        if (hide == "hidden") {
            AddVoteHandle()
        }
    }

    useEffect(() => {
        /*fetchBookData("GeneralData").then((e) => {
          SetPersonaCount(parseFloat(e.Users.replace(/"/g, '')));
          console.log("somos " + personaCount);
        }).catch((error) => {
          console.error('Fetch error:', error);
        });*/
    }, [personaCount]);

    const AddVoteHandle = () => {
        /*postBookData("GeneralData", "Users", (1+ +personaCount))
      .then((data) => {
        SetHide("");
        SetPersonaCount(1+ +personaCount);
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log('Error: '+error);
      });*/
    }

    return (
        <>
            <div className='footer w-full h-[10vh] grid place-content-start justify-center my-28 space-y-5'>

                <a href="#" className="col-span-1 w-full">
                    <img src={IconPage} className="h-11 w-full" alt="Logo" />
                    {/*<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CV - Diego Ortiz</span>*/}
                </a>

                <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse text-center">
                    {
                        PageData.map(({ link, label }) => (
                            <li key={"page " + label}>
                                <a
                                    href="#" onClick={(e) => { e.preventDefault(); OnItemClick(link) }}
                                    className="block py-2 px-3 hover:text-black hover:dark:text-white transition duration-300 ease-out hover:ease-in"
                                >
                                    {label}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <div className="text-center grid grid-flow-row gap-4">
                    <p className="dark:text-white font-medium text-lg">

                        {API_version.toString() == "ES" ? "Hazme saber que estuviste aquí" : "Let me know you were here"}
                    </p>

                    {
                        API_version.toString() == "ES" && <button className={hide ? TailwindComponents.Boton : "text-white text-lg font-medium cursor-default hover:underline"} onClick={(e) => { HandlePersonas(e) }}>
                            {hide ? "¡Presióname!" : `¡Somos ${GeneralData.Users}!`}
                        </button>
                    }
                    {
                        API_version.toString() == "EN" && <button className={hide ? TailwindComponents.Boton : "text-white text-lg font-medium cursor-default hover:underline"} onClick={(e) => { HandlePersonas(e) }}>
                            {hide ? "Press me!" : `We are ${GeneralData.Users}!`}
                        </button>
                    }

                </div>

                <p className="text-center">

                    {API_version.toString() == "ES" ? "© Copyrigth 2025 Hecho con ♥ por mi." : "© Copyrigth 2025 Made with ♥ for me."}
                </p>
                <br />
                {
                    API_version.toString() == "EN" && <p className="text-center text-xs pb-5">
                        This is a React Adaptation of <a className="hover:underline" href="https://wpriverthemes.com/gridx/" target="_blank" rel="noopener noreferrer">this</a> theme made for me.
                    </p>
                }
                {
                    API_version.toString() == "ES" && <p className="text-center text-xs pb-5">
                        Esta web es una adaptación en React de <a className="hover:underline" href="https://wpriverthemes.com/gridx/" target="_blank" rel="noopener noreferrer">este</a> tema realizado por mi.
                    </p>
                }

            </div>
        </>
    )
}