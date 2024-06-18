import { ProfileData, ExperienceData, EducationData, SkillsData, CertificationsData, SocialData } from "../Data";
import TailwindComponents from "../TailwindComponents";

export default function CVPage() {

    return (
        <div className="flex flex-col md:flex-row space-y-24">

            <div className="md:w-[20.6vw] md:h-[70vh] relative md:fixed place-content-center text-center">
                <div className={TailwindComponents.Card + " p-7 space-x-4"}>
                    <img className="m-5 h-[350px] w-[320px] mx-auto my-auto object-cover rounded-[30px]" src={ProfileData.ImageSrc} alt={ProfileData.Apodo} height={"20px"} />
                    <div>
                        <p className="text-black dark:text-white text-2xl font-medium mt-8">{ProfileData.NombreCompleto}</p>
                        <p className="text-zinc-500 my-2 text-lg">{ProfileData.Apodo}</p>
                    </div>
                    <div className="grid grid-cols-4 mx-6 my-5">
                        {
                            SocialData.map((Icon, Index) => (
                                <div key={Index}
                                    className={`w-[45px] h-[45px] rounded-full cursor-pointer text-center ${TailwindComponents.BotonBgCard} p-0 m-0`}
                                    onClick={() => { window.open(Icon.Link, "_blank"); }}
                                >
                                    <i className={`fab fa-${Icon.Icon} social-icon text-[20px]`}></i>
                                </div>
                            ))
                        }
                    </div>
                    <button className={`${TailwindComponents.Boton} w-full `}>Contáctame</button>
                </div>
            </div>


            <div className="w-full md:w-[52vw] md:ml-[20.6vw] md:pl-20">
                <section className="mb-5">
                    <header className="text-lg text-black dark:text-white uppercase font-semibold mb-10">Perfil</header>
                    <article>
                        <p className="mb-28">{ProfileData.Bio}</p>
                    </article>


                    <header className="text-lg text-black dark:text-white uppercase font-semibold mb-3">EXPERIENCIA</header>
                    {
                        [...ExperienceData].reverse().map((experence, Index) => (
                            <article key={Index}>
                                <p className="text-zinc-600 font-bold text-normal">{experence.InitAge} - {experence.FinishAge}</p>
                                <p className={`font-semibold text-lg ${TailwindComponents.TextPrincipal} py-2`}>{experence.Cargo}</p>
                                <p className="text-zinc-600 text-sm">{experence.Insitution}</p>

                                <p className="text-black dark:text-white pt-2">{experence.Desc}</p>
                            </article>
                        ))
                    }


                    <header className="text-lg text-black dark:text-white uppercase font-semibold mb-3 mt-28">Educación</header>
                    {
                        [...EducationData].reverse().map((education, Index) => (
                            <article key={Index}>
                                <p className="text-zinc-600 font-bold text-normal">{education.InitAge} - {education.FinishAge}</p>
                                <p className={`font-semibold text-lg ${TailwindComponents.TextPrincipal} py-2`}>{education.Name}</p>
                                <p className="text-zinc-600 text-sm">{education.Insitution}</p>

                                <p className="text-black dark:text-white pt-2">{education.Desc}</p>
                            </article>
                        ))
                    }


                    <header className="text-lg text-black dark:text-white uppercase font-semibold mb-3 mt-28">Habilidades</header>
                    <div className="columns-2">
                        {
                            SkillsData.map((skill, Index) => (
                                <div key={Index} className="col-span-1 my-2">
                                    <span>{skill.Dominio}%</span>
                                    <header className="text-black dark:text-white font-medium text-lg">{skill.Nombre}</header>
                                    <p className="text-normal">{skill.Desc}</p>
                                </div>
                            ))
                        }
                    </div>


                    <header className="text-lg text-black dark:text-white uppercase font-semibold mb-3 mt-28">Reconocimientos</header>
                    {
                        CertificationsData.map((diploma, Index) => (
                            <div key={Index} className="col-span-1 my-2">
                                <span>{diploma.Date}</span>
                                <header className="text-black dark:text-white font-medium text-lg">{diploma.Nombre}</header>
                                <p className="text-normal">{diploma.Desc}</p>
                            </div>
                        ))
                    }

                </section>
            </div>
            
        </div>
    )
}