import React from 'react'


// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import PDF from '../images/AnandPopalwarNaukariResume.pdf'


const Resume = () => {
  return (
    <div id='resume' className='mx-auto container min-h-80   w-full m-auto rounded-3xl  p-4 sm:p-4 md:p-8 lg:p-12 py-8  gap-10 border-pink-300 border-2 '  >

      <div className='pb-4' >
        <h1 className='font-extrabold text-2xl my-5 text-neutral-200 lg:text-4xl md:text-4xl'> Resume </h1>
        <a href={PDF} download={PDF} className='flex bg-pink-300 w-fit px-8 py-2 font-bold rounded-xl text-lg hover:bg-white'>Download<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
          <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
          <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
        </svg>
        </a>
      </div>

 

      <div className='text-neutral-300 border-t-2'>
        <h1 className=' font-extrabold text-2xl my-5 lg:text-4xl md:text-4xl'> Certifications </h1>
        <h1 className='text-xl'>
         1) Full Stack Web Development Bootcamp (MERN) from 
          <a href="https://codekaro.in/ " className='hover:underline hover:text-pink-300 font-bold font-xl px-2' target='blank'>Codekaro.in</a>
        </h1>
        <h1 className='text-2xl text-pink-300'>

        <a href="https://codekaro.in/course-certificate/540500bc49ca23ac" className='hover:underline  font-bold font-2xl' target='blank'>See Certificate </a>
        </h1>
      </div>
    </div>
  )
}

export default Resume