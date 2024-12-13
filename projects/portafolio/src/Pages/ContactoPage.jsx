import React, { useEffect, useState } from 'react';
import TailwindComponents from "../TailwindComponents";
import { ContactData, GeneralData, sendMailContact, SocialData, copyToClipboard, API_version } from '../Data';

export default function ContactoPage() {

    const [Enviando, setEnviando] = useState(false);
    const [message, setMessage] = useState("");
    

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    // Actualizar los valores de los inputs
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviando(true);
        setMessage("");
        sendMailContact("museortiz@gmail.com", formData.email, formData.name + " | " + formData.asunto + " | " + formData.mensaje,
            () => {
                setFormData({name: '', email: '', asunto: '', mensaje: ''});
                setMessage("Formulario enviado");
                setEnviando(false);
            },
            () => {
                setMessage("Hubo un problema enviando tu correo, inténtalo luego por favor.");
                setEnviando(false);
            },
            (m) => {
                setMessage(m);
                setEnviando(false);
            },
        );
    };

    useEffect(() => {
        //console.log("Formulario actualizado:", formData);
    }, [formData]);

    return (
        <div className="grid grid-cols-7 gap-5">
            <div className="xl:col-span-2 md:col-span-3 col-span-7 space-y-10">
                <p className="col-span-1 uppercase text-black dark:text-white font-semibold text-lg">{API_version.toString()=="EN" ? "Contact" : "Contacto"}</p>

                {ContactData.map((contact) => (
                    <div key={contact.FaIcon} className="col-span-1 grid grid-cols-2 mr-5 items-center">
                        <span className={`mx-2 h-[80px] w-[80px] text-center rounded-[20px] ${TailwindComponents.bgCard} text-black dark:text-white`}>
                            <i className={`fa ${contact.FaIcon} fa-envelope-o text-4xl m-auto`}></i>
                        </span>
                        <div className="ml-2 my-2 col-start-2 grid grid-rows-3 items-center">
                            <span className="uppercase font-semibold">{contact.Name}</span>
                            <span
                                className="text-gray-300 font-bold cursor-pointer hover:font-black"
                                title={API_version.toString()=="EN" ? "Copy" : "Copiar"}
                                onClick={() => copyToClipboard(contact.Data)}
                            >
                                {contact.Data}
                            </span>
                        </div>
                    </div>
                ))}

                <p className="col-span-1 uppercase text-black dark:text-white font-semibold text-lg">{API_version.toString()=="EN" ? "Social" : "Social"}</p>

                <div className="grid grid-cols-3 px-0 place-items-center">
                    {SocialData.slice(0, 3).map((Icon, Index) => (
                        <div
                            key={Index}
                            className={`w-[5em] h-[5em] rounded-full cursor-pointer text-center ${TailwindComponents.BotonBgCard}`}
                            onClick={() => { window.open(Icon.Link, "_blank"); }}
                        >
                            <i className={`fab fa-${Icon.Icon} social-icon text-4xl`}></i>
                        </div>
                    ))}
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
                        placeholder={API_version.toString()=="EN" ? "Your name *" : "Tu nombre *"}
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        id="email"
                        className={TailwindComponents.Input}
                        placeholder={API_version.toString()=="EN" ? "Your email *" : "Tu correo *"}
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        id="asunto"
                        className={TailwindComponents.Input}
                        placeholder={API_version.toString()=="EN" ? "Subject *" : "Asunto *"}
                        value={formData.asunto}
                        onChange={handleInputChange}
                    />
                    <textarea
                        id="mensaje"
                        className={`${TailwindComponents.Input} h-56`}
                        placeholder={API_version.toString()=="EN" ? "Message *" : "Mensaje *"}
                        value={formData.mensaje}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className={`${TailwindComponents.Boton} py-4`}
                        onClick={handleSubmit}
                        disabled={Enviando?true:false}
                    >
                        {
                        Enviando ?
                        API_version.toString()=="EN" ? "Sending..." : "Enviando..."
                        :
                        API_version.toString()=="EN" ? "Send" : "Enviar"
                        }
                    </button>
                    {message}
                </div>
            </div>
        </div>
    );
}