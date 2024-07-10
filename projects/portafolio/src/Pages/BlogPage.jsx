import { useEffect, useState } from "react";

import { BlogData } from "../Data";
import TailwindComponents from "../TailwindComponents";
import MarkdownRenderer from "../Components/Cards/Contenidos/MarkdownRenderer";

export default function BlogPage() {

    const [blogPage, setBlogPage] = useState(0);
    const [tags, setTags] = useState(null);

    useEffect(() => {
        try {
            const tagsArray = JSON.parse(BlogData[blogPage].Tags);
            setTags(tagsArray);
        } catch (error) {
            console.error('Hay un error con el arreglo de etiquetas de la base de datos:', error);
        }
    }, [blogPage]);

    const currentPage = BlogData[blogPage];

    return (
        <>
            <span className='text-sm px-5 uppercase font-semibold'>{currentPage.Subtitle}</span>
            <div className={`
            xl:col-span-2 xl:col-start-2 xl:row-end-1
            col-span-4
            px-5 text-5xl font-extrabold uppercase
            text-black dark:text-white
            `}>
                <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
                {currentPage.Title}
                <span className={`text-[40px] material-symbols-outlined select-none`} translate="no">airwave</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                
                <section className="col-span-1 md:col-span-2 p-5">
                    <img className="w-full my-3 object-center object-cover" src={currentPage.Image} alt={currentPage.Subtitle} />
                    <span className={`text-md ${TailwindComponents.TextPrincipal}`}>
                        {currentPage.Date + " - " + (currentPage.Category == "" ? "Uncategorized" : currentPage.Category)}
                    </span>

                    <article className="text-zinc-900 dark:text-zinc-400 whitespace-pre-wrap">
                        <MarkdownRenderer markdownText={currentPage.Info} />
                    </article>
                </section>

                <section className="col-span-1 md:col-span-1 p-5 md:col-start-3 md:row-start-1 space-y-6">
                    <div className={`${TailwindComponents.bgCard} w-full`}>
                        <div className="mb-2 ml-3 text-2xl text-zinc-900 dark:text-zinc-500">Search</div>
                        <div className="relative flex items-center space-x-2 w-full">
                            <input className={`${TailwindComponents.Input} w-full`} type="text" placeholder="Enter text" />
                            <button className={`${TailwindComponents.Boton} absolute right-0 text-sm h-full`}>Search</button>
                        </div>
                    </div>

                    <div className={`${TailwindComponents.bgCard} w-full`}>
                        <div className="mb-2 text-2xl text-zinc-900 dark:text-zinc-500">Archivo</div>
                        {
                                [...BlogData].reverse().map((Post, Index) => (
                                    <div key={`${Index}-${Post.Title}`}>
                                        {}
                                        <a href={Index==blogPage?"#":"#"}>{Post.Title}</a>
                                        <hr />
                                    </div>
                                ))
                            }
                    </div>

                    {tags && (
                        <div className={`${TailwindComponents.bgCard} w-full`}>
                            <div className="mb-4 text-2xl text-zinc-900 dark:text-zinc-500">Categorías</div>
                            <div className="mx-5 my-2 grid space-y-5 text-center text-zinc-500 dark:text-zinc-100">
                                {
                                    JSON.parse(currentPage.Tags).map((tag, index) => (
                                        <span key={index} className="bg-zinc-300 text-zinc-500 dark:bg-zinc-600 dark:text-white rounded-lg px-2 py-3">{tag}</span>
                                    ))
                                }
                            </div>
                        </div>
                    )}

                </section>
            </div>
        </>
    )
}