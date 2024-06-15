export default function Transition( {ActiveLoader} ){
    return(
        <div className={`preloader left-0 h-[200%] w-full`}>
            {ActiveLoader&&<div className="loader top-0 h-[3px] w-full bg-red-500"></div>}
            <div className="black_wall h-full w-full bg-zinc-800"></div>
        </div>
    )
}