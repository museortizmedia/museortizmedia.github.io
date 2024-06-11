import TailwindComponents from "../TailwindComponents";

export default function SocialButtonsCard() {

    return (
        <>
            <div className={`grid grid-cols-2 h-2/3 w-full space-x-3 ${TailwindComponents.bgCard}`}>
                <div className={`col-span-1 rounded-full ${TailwindComponents.BotonBgCard}`}>
                    <span className="material-symbols-outlined text-5xl">highlight_mouse_cursor</span>
                </div>
                <div className={`col-span-1 rounded-full ${TailwindComponents.BotonBgCard}`}>
                    <span className="material-symbols-outlined text-5xl">highlight_mouse_cursor</span>
                </div>
            </div>
        </>
    )
}