const TailwindComponents = {
  Card: `
  card appear
  p-4 place-content-start
  bg-gradient-to-tl from-[#f5f5f5] to-[#e0e0e0] dark:from-[#121212] dark:to-[#1f1f1f]
  rounded-[30px] border-t-[1px] border-l-[1px] dark:border-zinc-700 border-zinc-200
  w-full`,
  Boton: `
  py-2 px-8 rounded-[13px] 
  text-md font-semibold
  dark:bg-[#323232] dark:text-white
  bg-white text-zinc-500
  hover:font-medium
  hover:dark:bg-[#FFF] hover:dark:text-[#181818]
  hover:bg-zinc-700 hover:text-white
  transition duration-200 ease-out hover:ease-in
  `,
  BotonInactivo: `
  pointer-events-none
  py-2 px-6 rounded-lg 
  bg-[#323232] text-white font-semibold
  hover:bg-[#FFF] hover:text-[#181818] hover:font-medium
  transition duration-200 ease-out hover:ease-in
  `,
  BotonLogo: `
  rounded-lg
  text-zinc-300 
  dark:text-[#323232]
  hover:text-white hover:animate-pulse
  transition duration-200 ease-out hover:ease-in
  `,
  bgCard: `
  p-4 place-content-center
  text-black dark:text-white
  bg-gradient-to-tl from-[#f5f5f5] to-[#e0e0e0] dark:from-[#121212] dark:to-[#1f1f1f]
  rounded-[30px] border-t-[1px] border-l-[1px] dark:border-zinc-700 border-zinc-200
  `,
  BotonBgCard: `
  p-4 place-content-center
  text-black dark:text-white
  hover:text-white hover:dark:text-black
  bg-gradient-to-tl from-[#f5f5f5] to-[#e0e0e0] dark:from-[#121212] dark:to-[#1f1f1f]
  hover:from-[#121212] hover:to-[#1f1f1f] hover:dark:from-[#f5f5f5] hover:dark:to-[#e0e0e0]
  rounded-[30px] border-t-[1px] border-l-[1px] dark:border-zinc-700 border-zinc-200
  `,
  Input: `
  text-base font-normal
  py-3 px-4
  rounded-[.6em] border-0
  bg-gradient-to-br from-[#f1f1f1] to-[#f5f5f5] dark:from-[#252525] dark:to-[#202020]
  focus:outline-none focus:ring-0
  text-black dark:text-white placeholder:text-zinc-500
  `,

};

export default TailwindComponents;