import React, { useState } from 'react';
import TailwindComponents from "../TailwindComponents";
import { ContactData, GeneralData, SocialData, copyToClipboard } from '../Data';

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

    return (
        <div className="grid grid-cols-7 gap-5">

            <div className="xl:col-span-2 md:col-span-3 col-span-7 space-y-10">
                <p className="col-span-1 uppercase text-black dark:text-white font-semibold text-lg " >contacto</p>

                {
                    ContactData.map((contact) => (
                        <div key={contact.FaIcon} className="col-span-1 grid grid-cols-2 mr-5 items-center">
                            <span className={`mx-2 h-[80px] w-[80px] text-center rounded-[20px] ${TailwindComponents.bgCard} text-black dark:text-white`}>
                                <i className={`fa ${contact.FaIcon} fa-envelope-o text-4xl m-auto`}></i>
                            </span>
                            <div className="ml-2 my-2 col-start-2 grid grid-rows-3 items-center">
                                <span className="uppercase font-semibold">{contact.Name}</span>
                                <span
                                    className="text-gray-300 font-bold cursor-pointer hover:font-black"
                                    title='Copiar información'
                                    onClick={() => copyToClipboard(contact.Data)}
                                >
                                    {contact.Data}
                                </span>
                            </div>
                        </div>

                    ))
                }

                <p className="col-span-1 uppercase text-black dark:text-white font-semibold text-lg" >Social</p>

                <div className="grid grid-cols-3 px-0 place-items-center">
                    {
                        SocialData.slice(0, 3).map((Icon, Index) => (
                            <div key={Index}
                                className={`w-[5em] h-[5em] rounded-full cursor-pointer text-center ${TailwindComponents.BotonBgCard}`}
                                onClick={() => { window.open(Icon.Link, "_blank"); }}
                            >
                                <i className={`fab fa-${Icon.Icon} social-icon text-4xl`}></i>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className="xl:col-span-5 md:col-span-4 col-span-7 mx-4 mt-5 md:mt-0">
                <div className={`${TailwindComponents.Card} grid grid-cols-1 p-10 space-y-3 h-full`}>

                    <div className="text-4xl text-black dark:text-white font-bold col-span-1 w-full my-6">
                        {GeneralData.CallTo} <span className={`font-bold ${TailwindComponents.TextPrincipal}`}>{GeneralData.Action}</span>
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