import { TagLineData } from "../../Data";

export default function TagLine({ tagline = "Esto es una tagline", space = "10", Color }) {

    tagline = TagLineData;

    const TagLineString = (
        <>
            <strong>
                {tagline.split(" ").slice(0, Math.ceil(tagline.split(" ").length / 2) ).join(" ")+" "}
            </strong>
            <span>
                {tagline.split(" ").slice( Math.ceil(tagline.split(" ").length / 2) ).join(" ")}
            </span>
        </>
    );

    return (
        <>
            <div className='rounded-lg w-auto overflow-hidden relative'>
                <div className={"scroll-container flex align-middle text-black dark:text-white space-x-"+space}>
                    {
                        Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className='scroll-text'>
                                <div className={`content ${Color||''}`}>
                                    {<span> {" • "} </span>}
                                    {TagLineString}
                                    {<span> {"   "} </span>}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );

}