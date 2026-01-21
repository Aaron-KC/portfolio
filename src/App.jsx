import gsap from "gsap";
import Dock from "./components/Dock"
import Navbar from "./components/Navbar"
import Terminal from "./components/Terminal"
import Welcome from "./components/Welcome"
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  )
}

export default App
