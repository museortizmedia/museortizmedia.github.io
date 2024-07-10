import { BlogData } from "../Data";
import TailwindComponents from "../TailwindComponents";
import MarkdownRenderer from "../Components/Cards/Contenidos/MarkdownRenderer";

export default function BlogPage() {
    const currentPage = BlogData[0];
    const markdownText = `
    # Título Principal

    ## Subtítulo

    - Elemento no numerado
    - Otro elemento no numerado

    1. Elemento numerado
    2. Otro elemento numerado

    \`\`\`javascript
    console.log('Código de ejemplo');
    \`\`\`

    **Texto en negrita**

    *Texto en cursiva*

    ![Alt text](https://via.placeholder.com/150)

    [Enlace a Google](https://www.google.com)
    `;
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

            <div className="grid grid-flow-col grid-cols-3 space-y-3">
                <section className="col-span-2 p-5">
                    <img className="w-full my-3 object-center object-cover" src={currentPage.Image} alt={currentPage.Subtitle} />
                    <span className={`text-md ${TailwindComponents.TextPrincipal}`}>
                        {currentPage.Date + " - " + (currentPage.Category == "" ? "Uncategorized" : currentPage.Category)}
                    </span>

                    <MarkdownRenderer markdownText={markdownText} />
                    
                    <p className="text-zinc-900 dark:text-zinc-400 whitespace-pre-wrap">
                        {currentPage.Info}
                    </p>
                </section>

{/*

                <section className="col-span-1 p-5 space-y-6">
                    <div className={`${TailwindComponents.bgCard} w-full`}>
                        <div className="mb-2 ml-3 text-2xl text-zinc-900 dark:text-zinc-500">Search</div>
                        <div className="relative flex items-center space-x-2 w-full">
                            <input className={`${TailwindComponents.Input} w-full`} type="text" placeholder="Enter text" />
                            <button className={`${TailwindComponents.Boton} absolute right-0 text-sm h-full`}>Search</button>
                        </div>
                    </div>

                    <div className={`${TailwindComponents.bgCard} w-full p-5`}>
                        <div className="mb-2 text-2xl text-zinc-900 dark:text-zinc-500">Recientes</div>
                        <div className="grid grid-flow-row space-y-6 text-zinc-500 dark:text-zinc-100">
                            {
                                [...BlogData].reverse().map((Post, Index) => (
                                    <div key={`${Index}-${Post.Title}`}>
                                        <a href={"#"} className="lowercase">{Post.Title}</a>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div className={`${TailwindComponents.bgCard} w-full`}>
                        <div className="mb-2 text-2xl text-zinc-900 dark:text-zinc-500">Archivo</div>
                        //
                    </div>

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

                </section>*/}
            </div>
        </>
    )
}