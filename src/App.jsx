import system from './App.module.css';
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={system.App}>
      <Navbar />
    </div>
  );
}

export default App;
