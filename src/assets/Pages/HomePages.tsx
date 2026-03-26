import Navbar from "../components/navbar.tsx";
import About from "../components/about.tsx";
import Skills from "../components/skills.tsx";
import Contact from "../components/contact.tsx";
import Timeline from "../components/timeline.tsx";


const HomePages = ()=>{
    return(
        <>
                <Navbar/>
                <About/>
                <Skills/>
                <Timeline/>
                <Contact/>
        </>
    )
}

export default HomePages;