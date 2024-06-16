import React, { useState } from 'react';
import TailwindComponents from "../TailwindComponents";

export default function ContactoPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const SocialIcons = [
        { name: 'linkedin', link: 'https://www.linkedin.com/in/museortizmedia/' },
        { name: 'facebook', link: 'https://www.linkedin.com/in/museortizmedia/' },
        { name: 'twitter', link: 'https://www.linkedin.com/in/museortizmedia/' },
    ]

    return (
        <div className="grid grid-cols-7">

            <div className="col-span-2 space-y-10">
                <p className="col-span-1 uppercase text-black dark:text-white font-semibold text-lg " >contacto</p>

                <div className="col-span-1 grid grid-cols-3 place-items-center">
                    <span
                        className={`mx-2 h-[80px] w-[80px] text-center rounded-[20px] ${TailwindComponents.bgCard} text-black dark:text-white`}
                    >
                        <i className={`fa fa-envelope-o text-4xl m-auto`}></i>
                    </span>
                    <div className="ml-8 my-2 col-star-2 grid grid-rows-3">
                        <span className="uppercase font-semibold">Mail info</span>
                        <span className="text-gray-300 font-bold">info@mail.com</span>
                        <span className="text-gray-300 font-bold">info@mail.com</span>
                    </div>
                </div>

                <div className="col-span-1 grid grid-cols-3 place-items-center">
                    <span
                        className={`mx-2 h-[80px] w-[80px] text-center rounded-[20px] ${TailwindComponents.bgCard} text-black dark:text-white`}
                    >
                        <i className={`fa fa-phone text-4xl m-auto`}></i>
                    </span>
                    <div className="ml-8 my-2 col-star-2 grid grid-rows-3">
                        <span className="uppercase font-semibold">Phone info</span>
                        <span className="text-gray-300 font-bold">info@mail.com</span>
                        <span className="text-gray-300 font-bold">info@mail.com</span>
                    </div>
                </div>

                <div className="col-span-1 grid grid-cols-3 place-items-center">
                    <span
                        className={`mx-2 h-[80px] w-[80px] text-center rounded-[20px] ${TailwindComponents.bgCard} text-black dark:text-white`}
                    >
                        <i className={`fa fa-map-marker text-4xl m-auto`}></i>
                    </span>
                    <div className="ml-8 my-2 col-star-2 grid grid-rows-2">
                        <span className="uppercase font-semibold">Location</span>
                        <span className="text-gray-300 font-bold text-nowrap">Cali, Colombia</span>
                        
                    </div>
                </div>

                <p className="col-span-1 uppercase text-black dark:text-white font-semibold text-lg" >Social</p>

                <div className="grid grid-cols-3 px-0">
                    {
                        SocialIcons.map(({ Icon }, Index) => (
                            <div key={Index}
                                className={`w-[5em] h-[5em] rounded-full cursor-pointer text-center ${TailwindComponents.BotonBgCard}`}
                                onClick={() => { window.open(SocialIcons[Index].link, "_blank"); }}
                            >
                                <i className={`fab fa-${SocialIcons[Index].name} social-icon text-4xl`}></i>
                            </div>
                        ))
                    }
                </div>

            </div>





            <div className="col-span-5 mx-4">
                <div className={`${TailwindComponents.Card} grid grid-cols-1 p-10 space-y-3 h-full`}>

                    <div className="text-4xl text-black dark:text-white font-bold col-span-1 w-full mb-6">
                        Vamos a trabajar <span className="font-bold text-rose-700">juntos</span>
                    </div>

                    <input
                        type="text"
                        id="name"
                        className={TailwindComponents.Input}
                        placeholder="Nombre *"
                    />

                    <input
                        type="email"
                        id="email"
                        className={TailwindComponents.Input}
                        placeholder="Email *"
                    />
                    <input
                        type="text"
                        id="asunto"
                        className={TailwindComponents.Input}
                        placeholder="Tu Asunto *"
                    />
                    <textarea
                        type="text"
                        id="mensaje"
                        className={`${TailwindComponents.Input} h-56`}
                        placeholder="Tu mensaje *"
                    />
                    <button
                        type="submit"
                        className={`${TailwindComponents.Boton} py-4`}
                        onClick={handleSubmit}
                    >
                        Enviar
                    </button>

                </div>
            </div>

        </div>
    )
}