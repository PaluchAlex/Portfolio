import system from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
    return (
        <div className={system.App}>
            <Navbar />
            <Hero />
        </div>
    );
}

export default App;
