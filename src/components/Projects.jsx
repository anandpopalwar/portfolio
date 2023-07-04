import React from 'react'
import ProjectCompo from './ProjectCompo'
import CubeCalImg from '../project Images/cube calculator.png'
import Dice from '../project Images/dice game.png'
import Todo from '../project Images/Todo.png'
import Geo from '../project Images/geolocation api.png'
import Quote from '../project Images/quote.png'
import Clone from '../project Images/clone-tube.png'





let array =
 [
  {
    id:'7',
    project_name:'Clone-tube ',
    link:'https://clone-tube-anand.vercel.app/',
    github:'https://github.com/anandpopalwar/clone-tube-anand.git',
    image:Clone,
    flex:true    ,
    disc:'Clone-tube is created by me using YOUTUBES OFFICIAL API and tech stack used is React js , React Redux , React Route and Youtube Api ',
  },
  {
    id:'5',
    project_name:'Random Quote Generator',
    link:'https://quotes-app-by-anand.vercel.app/',
    github:'https://github.com/anandpopalwar/quotes-app.git',
    image:Quote,
    flex:false    ,
    disc:' I have created this project using Random Quote API , IN this project when we click the bottom button we will get A Random Quote with author name , and get 3 random author suggestions by clicking these author we can get list of Quote by this author , and the background is nice  ',
  },
  {
    id:'1',
    project_name:'Cube Calculator',
    link:'https://cube-calculator-2.vercel.app/',
    github:'https://github.com/anandpopalwar/cube-calculator-2.git',
    image:CubeCalImg,
    flex:true    ,
    disc:'This is a Project which i have created for younger students  , In this project we can calculate the nth Cube of any number , input value in input bar and click on the any nth cube btn to get ans at bottom  ',
  },
  {
    id:'2',
    project_name:'rolling-a-dice',
    link:'https://rolling-a-dice.vercel.app/',
    github:'https://github.com/anandpopalwar/rolling-a-dice.git',
    image:Dice,
    flex:false    ,
    disc:'This is Actually a 2 player game , created with plain JS , In this game when dice is Rolled we get know which player win and which player loose  ',
  },
  {
    id:'3',
    project_name:'Todos App',
    link:'https://todos-by-anand.vercel.app/',
    github:'https://github.com/anandpopalwar/todo-list-anand.git',
    image:Todo,
    flex:true    ,
    disc:'I have created this project using plain JS , In this project we can add a to-do and to complete the we need to  click checkbox  thats it...   ',
  },  {
    id:'4',
    project_name:'Geo Location App',
    link:'https://geolocation-anand.vercel.app/',
    github:'https://github.com/anandpopalwar/geolocation_anand/tree/main',
    image:Geo,
    flex:false    ,
    disc:'In this project we can get our current location Just by clicking the green button , I have implemented this app using geolocation api inside plain JS ',
  },  

  
]

const Projects = () => {
  return (
    <div className='w-full rounded-3xl container   p-4   border-2 text-stone-200 border-white  m-auto py-8  px-8 sm:px-8 md:px-10 lg:px-12' id='projects'>

      <h1 className=' font-extrabold  text-3xl sm:text-4xl md:text-4xl lg:text-4xl '>Projects</h1>
      <div className='grid  grid-cols-1  gap-6   sm:gap-4   px-0 sm:px-2 md:px-4 lg:px-6  '>
        {
          array.map((arr)=>{
            return(

              <ProjectCompo data={arr} key={arr.id} />
            )
          })
        }

      </div>

    </div>
  )
}

export default Projects