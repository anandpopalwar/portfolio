import React from 'react'


const About = () => {
  return (
    <div className=' container min-h-80   w-full m-auto rounded-3xl  p-4 sm:p-4 md:p-8 lg:p-12  py-8  bg-fuchsia-300 ' id='about'>
      <h1 className=' font-extrabold text-4xl my-5'> About me ! </h1>
      <div className='font-semibold text-lg md:text-xl lg:text-xl text-neutral-600  '>

        <p >
          Hey <span className='text-black underline ' >Anand here</span> , recent <span className='text-black underline ' >B.Sc Graduate specialization in Computer Science</span>  </p>
        <p > i am a Passionate   <span className='text-black underline ' >Front-End React Developer</span> dedicated to creating seamless user experiences.
        </p>

        <p>
          Skilled in<span className='text-black underline' > HTML, CSS, and JavaScript,</span> I specialize in leveraging   <span className='text-black underline' >React JS</span> to bring ideas to life.
        </p>
        <p>
          With an eye for detail and commitment to clean code, I deliver   <span className='text-black underline' >visually appealing</span> and optimized web applications.
        </p>

        <p>
          with <span className='text-black underline' >
            Responsive web design   </span>
          using CSS libreries such as<span className='text-black underline' > Tailwind and Bootstrap   </span>
        </p>

        <a href="mailto:anandpopalwar444@gmail.com" className=' text-black hover:underline  hover:transition ease-in-out    hover:-translate-y-1 hover:scale-110  duration-300' target='blank'> @ anandpopalwar444@gmail.com </a>

      </div>
    </div>
  )
}

export default About