import React from 'react'

export default function CardContainer({ children, extraClasses, xlCols=4, mdCols=2, Cols=1 }) {

    const childrenArray = React.Children.toArray(children);

    const otherClassNames = extraClasses!=undefined?Object.entries(extraClasses)
  .map(([key, value]) => (value ? `${key}-${value}` : ''))
  .join(' '):undefined;

    return (
        <>
            <div className={`w-full my-2 h-[52vh] md:h-[40vh] xl:h-[33vh] grid grid-cols-${Cols} md:grid-cols-${mdCols} xl:grid-cols-${xlCols} gap-5 place-content-start text-white ${otherClassNames}`}>
                {children}
            </div>
        </>
    )
}