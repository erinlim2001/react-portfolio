import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App () {
  return (
    <div className="App">
    <Navbar/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
