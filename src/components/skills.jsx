import React from 'react'
import Html5 from '../images/html-5.png'
import CSS from '../images/css-3.png'
import JAVASCRIPT from '../images/js.png'
import GIT from '../images/git.png'
import Bootstrap from '../images/bootstrap.png'
import Reactimg from '../images/science.png'
import BG from '../images/layered-waves-haikei.png'

const skills = () => {
    return (
        <div className='skills  w-full rounded-3xl container     border-2 border-black bg-stone-300 bg-opacity-75 m-auto   p-4 sm:p-4 md:p-8 lg:p-12   ' id='skills  '>
            {/* <img src={BG} className=' object-contain' alt='' /> */}
            <h1 className='font-extrabold text-4xl my-4'>Skills !</h1>
            <div className='grid  grid-cols-3  sm:grid-cols-3 font-medium  md:grid-cols-3 lg:grid-cols-6 gap-4 text-center my-4  mx-auto '>

                <div className='grid place-content-center'>
                    <img src={Html5} className='w-20 flex  justify-center hover:transition ease-in-out  mx-auto   hover:-translate-y-1 hover:scale-110  duration-300' alt="html" />
                    <h3 >HTML5    </h3>
                </div>

                <div className='grid place-content-center'>
                    <img src={CSS} className='w-20 grid place-content-center hover:transition ease-in-out    mx-auto     hover:-translate-y-1 hover:scale-110  duration-300' alt='css' />
                    <h3>CSS3</h3>
                </div>

                <div className='grid place-content-center'>


                    <img src={JAVASCRIPT} className='w-20 grid place-content-center hover:transition ease-in-out  mx-auto  hover:-translate-y-1 hover:scale-110  duration-300' alt='js' />
                    <h3>JAVASCRIPT</h3>
                </div>

                <div className='grid place-content-center'>


                    <img src={GIT} className='w-20 grid place-content-center hover:transition ease-in-out    mx-auto    hover:-translate-y-1 hover:scale-110  duration-300 ' alt='git' />
                    <h3>GIT , GITHUB</h3>
                </div>

                <div className='grid place-content-center'>


                    <img src={Reactimg} className='w-20 grid place-content-center hover:transition ease-in-out   mx-auto    hover:-translate-y-1 hover:scale-110  duration-300' alt='react' />
                    <h3>REACT , REACT ROUTE</h3>
                </div>

                <div className='grid place-content-center'>


                    <img src={Bootstrap} className='w-20 grid  justify-center hover:transition ease-in-out   mx-auto    hover:-translate-y-1 hover:scale-110  duration-300' alt='tailwind' />
                    <h3>BOOTSTRAP, TAILWIND </h3>
                </div>

            </div>


        </div>
    )
}

export default skills