import React from 'react'
import GITHUB from '../images/github.png'

const ProjectCompo = ({ data }) => {
    console.log(data.id)
    
    return (data.flex ) ?   (

    
 
    <div className='sm:flex  flex-row-reverse gap-10 border-b-2  p-4 sm:p-4 md:p-8 lg:p-12  border-stone-200 '  > 

        
            <div className='sm:w-1/2 items-center justify-center  my-auto '>

                <img src={data.image} className='rounded md:rounded-xl object-contain     ' />

            </div>
            <div className='leftside  py-4 sm:w-1/2 place-content-between grid'>

                <h1 className='text-2xl font-semibold  my-2 text-pink-300 capitalize '>{data.project_name}</h1>
                <p className='font-mono my-2  sm:text-base' >{data.disc}</p>
                <div className='flex justify-between font-mono font-semibold text-xl items-center '>
                    <a className=' hover:border-b-2 flex   px-6 py-2   my-4 sm:"my-1"   hover:text-pink-300 border-b-2 border-transparent hover:border-pink-300  cursor-pointer ' target='blank' href={data.link} >
                        live <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                    </a>
                    <a className='  px-6 py-2 sm:"py-0 px-2"   my-4 flex justify-center cursor-pointer items-center gap-4  hover:bg-pink-300  text-black  sm:my-1 bg-white rounded-2xl ' href={data.github}  >code <img src={GITHUB} className='w-10  ' alt="" /></a>
                </div>
            </div>
        </div>
    ) :  (
        <div className='sm:flex   gap-10  border-b-2 py-8 border-stone-200'  > 

        
        <div className='sm:w-1/2 items-center justify-center my-auto    '>

            <img src={data.image} className='rounded md:rounded-xl object-contain    ' />

        </div>
        <div className='leftside  py-4 sm:w-1/2  place-content-between grid'>

            <h1 className='text-2xl  my-2 text-pink-300 capitalize font-semibold '>{data.project_name}</h1>
            <p className='font-mono my-2  sm:text-base' >{data.disc}</p>
            <div className='flex justify-between font-mono font-semibold text-xl items-center  '>
                <a className=' hover:border-b-2 flex   px-6 py-2   my-4 sm:"my-1"   hover:text-pink-300 border-b-2 border-transparent hover:border-pink-300   cursor-pointer ' target='blank' href={data.link} >
                    live <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
                </a>
                <a className='  px-6 py-2  my-4 flex justify-center cursor-pointer items-center gap-4  hover:bg-pink-300  text-black  sm:my-1 bg-white rounded-2xl ' href={data.github}  >code <img src={GITHUB} className='w-10  ' alt="" /></a>
            </div>
        </div>
    </div>
        
    )
}

export default ProjectCompo