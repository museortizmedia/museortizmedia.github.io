import { useState } from 'react'

export default function Card ({ gridClasses, children, flexType='col', OnButtonClick}) {

  const gridClassNames = gridClasses!=undefined?Object.entries(gridClasses)
  .map(([key, value]) => (value ? `${key}-${value}` : ''))
  .join(' '):undefined;

  return (
    <>
      <div className={
        `card appear first:h-[52vh] first:md:h-[30vh] first:xl:h-[33vh]
        p-4 place-content-start
        bg-gradient-to-tl from-[#f5f5f5] to-[#e0e0e0] dark:from-[#121212] dark:to-[#1f1f1f]
        rounded-[30px] border-t-[1px] border-l-[1px] dark:border-zinc-700 border-zinc-200
        w-full
        ${OnButtonClick!=null?'hover:cursor-pointer':""}
        ${gridClassNames??""}`}
        onClick={OnButtonClick}
      >
      <div className={`h-full w-full flex flex-${flexType} justify-center`}>
      {children}
      </div>
      </div>
    </>
  )
}

//export default Card