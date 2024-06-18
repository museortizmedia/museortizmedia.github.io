import { BlogData } from "../Data";
import TailwindComponents from "../TailwindComponents";

export default function BlogPage() {
    const currentPage = BlogData[0];
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
                    <p className="text-zinc-900 dark:text-zinc-400 whitespace-pre-wrap">{currentPage.Info}</p>
                </section>



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
                                [...BlogData].reverse().map( (Post, Index)=>(
                                        <>
                                        <a key={Index} href={"#"} className="lowercase" >{Post.Title}</a>
                                        <hr />
                                        </>
                                    ))
                            }
                        </div>

                    </div>

                    <div className={`${TailwindComponents.bgCard} w-full`}>
                        <div className="mb-2 text-2xl text-zinc-900 dark:text-zinc-500">Archivo</div>
                        //
                    </div>

                    <div className={`${TailwindComponents.bgCard} w-full`}>
                        <div className="mb-2 text-2xl text-zinc-900 dark:text-zinc-500">Categorías</div>
                        //
                    </div>

                </section>
            </div>
        </>
    )
}