import React from 'react'
import Github from '../images/github.png'
import Mail from '../images/gmail.png'
import Linkedin from '../images/linkedin.png'

const Socials = () => {
  return (
    <div className='text-white container min-h-80   w-full m-auto rounded-3xl  p-4 sm:p-4   gap-10 lg:w-1/3'>
      <div className=' flex  gap-10 justify-center'>

        <a href="https://github.com/anandpopalwar" className='     hover:transition ease-in-out         hover:-translate-y-1 hover:scale-110  duration-300' target='blank'> <img src={Github} className='invert w-10   ' alt="github link" /> </a>

        <a href="mailto:anandpopalwar444@gmail.com" className='     hover:transition ease-in-out    hover:-translate-y-1 hover:scale-110  duration-300' target='blank'> <img src={Mail} className='  grayscale w-10 hover:grayscale-0  ' alt="mail link" /> </a>

        <a href="https://www.linkedin.com/in/anand-popalwar-79437222a/" className='    hover:transition ease-in-out        hover:-translate-y-1 hover:scale-110  duration-300' target='blank'> <img src={Linkedin} className='grayscale w-10 hover:grayscale-0 ' alt="github link" /> </a>


      </div>
      <div className='text-white my-2 text-center'>
        <h1>Thanks for visiting </h1>
        <h1>Design and Developed by <span className='text-pink-400'> Anand(me)</span>  </h1>
      </div>

    </div>
  )
}

export default Socials