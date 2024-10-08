import Nav from "./nav";
import About from "./About";
import Skills from "./skills";
import Projects from "./projects";
import Footer from "./footer";


const main = () => {
  return (
    <div className="bg-gradient-to-r from-black to-green-900 text-white">
        <Nav/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default main