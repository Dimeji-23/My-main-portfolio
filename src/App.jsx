import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import ServicesOffered from "./Components/Services"
import Skills from "./Components/Skills";
import WorksSection from  "./Components/WorksSection";
import "./App.css";
import ContactForm from "./Components/Contact";

function App() {


  return (
    <>
      <Header />
      <Hero />
      <WorksSection />
      <AboutMe />
      <ServicesOffered />
      <Skills />
      <ContactForm/>
    </>
  );
}

export default App;
