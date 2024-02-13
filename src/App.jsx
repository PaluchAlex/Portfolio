import system from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";


function App() {
    return (
        <div className={system.App}>
            <Navbar />
            <Hero />
            <About />
            <footer>Icons by <a href="https://icons8.com">Icons8.com</a> </footer>
        </div>
    );
}

export default App;
