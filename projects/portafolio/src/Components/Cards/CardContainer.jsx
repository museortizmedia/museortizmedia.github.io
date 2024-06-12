import React from 'react'

export default function CardContainer({ children }) {

    const childrenArray = React.Children.toArray(children);

    return (
        <>
            <div className={"w-full my-2 h-[52vh] md:h-[40vh] xl:h-[33vh] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 place-content-start text-center text-white"}>
                {children}
            </div>
        </>
    )
}