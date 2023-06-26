
import './App.css';
import About from './components/About';
import ContectPage from './components/ContectPage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Socials from './components/Socials';
import Home from './components/home';
import Skills from './components/skills';


function App() {
  return (
    <>
      <Navbar />
    <div className="App  grid col-span-1 sm:gap-4 md:gap-8 gap-4  px-4  pt-16 pb-8      ">

      <Home /> 
      <About />
      <Skills />
      <Projects />
      <Resume />
      <div className='lg:flex   w-full rounded-3xl container     text-stone-200   m-auto     '>
      <ContectPage />
      <Socials />
      </div>



    </div>

    </>
  );
}

export default App;
