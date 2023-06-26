import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState(true)
  return (
    <div className='flex   fixed backdrop-blur-4xl   bg-opacity-75 background-bg-lg bg-stone-900/70   w-full '>
      <div className=' w-full h-16 flex   sm:px-8 justify-between sm:"justify-between" md:justify-around  lg:justify-around  items-center   p-8 text-lg  '>
        <div className='left w-1/2 font-bold  '>
          <Link to="home" className='cursor-pointer  hover:text-rose-400 text-4xl sm:text-3xl text-neutral-200 ' spy={true} smooth={true} offset={-100} duration={500}>Anand.Portfolio</Link>

        </div>

        <div className='right  justify-between w-1/2    hidden sm:hidden md:flex lg:flex text-neutral-400     '>

          <Link className='cursor-pointer  hover:text-rose-300 border-b-2 border-transparent hover:border-rose-300 ' to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
          <Link className='cursor-pointer  hover:text-rose-300  border-b-2 border-transparent hover:border-rose-300 ' to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skill</Link>
          <Link className='cursor-pointer  hover:text-rose-300 border-b-2 border-transparent hover:border-rose-300  ' to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
          <Link className='cursor-pointer  hover:text-rose-300 border-b-2 border-transparent hover:border-rose-300  ' to="resume" spy={true} smooth={true} offset={-100} duration={500}>Resume</Link>
          <Link className='cursor-pointer  hover:text-rose-300  border-b-2 border-transparent hover:border-rose-300 ' to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>

        </div>



        <div className=' sm:block md:hidden lg:hidden cursor-pointer text-white'>
          {

            menu ? (
              <div onClick={() => setMenu(false)} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>

            ) : (
              <div onClick={() => setMenu(true)} >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )
          }

        </div>
        {
          menu == false && (


            <div className='right sm:visible md:hidden lg:hidden absolute top-16 left-0   grid sm:row-span-1 grid-rows-1  text-xl backdrop-blur-4xl   text-white background-bg-lg bg-stone-900/70  w-full py-4  '>
          
              <Link className='mx-auto w-full   px-8 cursor-pointer  hover:text-rose-300 border-b-2 border-transparent hover:border-rose-300  ' to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
              <Link className='mx-auto  w-full px-8 cursor-pointer  hover:text-rose-300 border-b-2 border-transparent hover:border-rose-300 ' to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
              <Link className='mx-auto  w-full px-8 cursor-pointer  hover:text-rose-300 border-b-2 border-transparent hover:border-rose-300 ' to="resume" spy={true} smooth={true} offset={-100} duration={500}>Resume</Link>
              <Link className='mx-auto  w-full px-8 cursor-pointer   hover:text-rose-300 border-b-2 border-transparent hover:border-rose-300 ' to="contact" spy={true} smooth={true} offset={-100} duration={500} >Contact</Link>

            </div>
          )
        }

      </div>
    </div>
  )
}

export default Navbar