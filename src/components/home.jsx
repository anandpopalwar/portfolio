import React from 'react'
import { Link } from 'react-scroll'
const home = () => {
  return (
    <div className='home container min-h-80   w-full m-auto rounded-3xl  p-4 sm:p-4 md:p-8 lg:p-12  py-8  ' id='home'>
      <div className='homeleft   '>
        <div>

        <h1 className=' font-extrabold  text-3xl sm:text-4xl md:text-4xl lg:text-4xl'>Hi,</h1>
        <h1 className=' font-extrabold  text-3xl  sm:text-4xl md:text-4xl lg:text-4xl '>I'm Anand popalwar,</h1>
        <div className=' my-2 '>

          <p className=' font-mono text-base sm:text-base md:text-xl lg:text-xl  '>Front-end web developer / React developer</p>

          <p className='m-0 font-mono text-base sm:text-base md:text-xl lg:text-xl   animate-pulse text-yellow-50 flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
</svg>

            ready to get hired</p>
        </div>
        </div>
        <div className='grid grid-rows-1 gap-2'>

          <Link className='cursor-pointer sm:text-base bg-stone-900 rounded-2xl px-8 py-2 w-48 text-neutral-200  flex text-lg uppercase hover:text-rose-400 gap-2' to="contact" spy={true} smooth={true} offset={-100} duration={500}>Hire me<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg></Link>


          <Link className='cursor-pointer  sm:text-base bg-stone-900 rounded-2xl px-8 py-2 w-48 text-neutral-200 flex text-lg uppercase  hover:text-rose-400 gap-2' to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg></Link>
        </div>

      </div>


    </div>
  )
}

export default home