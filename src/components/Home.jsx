import { useGSAP } from "@gsap/react";
import { locations } from "../constants";
import { Draggable } from "gsap/Draggable";
import { useWindowStore } from "../store/store";
import { useFinderStore } from "../store/finderStore";

const projects = locations.work.children ?? [];

const Home = () => {
  const { openWindow } = useWindowStore()
  const { changeLocation } = useFinderStore()
  useGSAP(() => {
    const instances = Draggable.create(".folder")
     return () => instances.forEach((instance) => instance.kill())
  }, [])

  const handleFolderClick = item => {
    changeLocation(item)
    openWindow("finder")
  }

  return (
    <section id="home">
      <ul>
        {
          projects.map(project => (
            <li key={project.id} className={`group folder ${project.windowPosition}`} onClick={() => handleFolderClick(project)}>
              <img src="/images/folder.png" alt={project.name} />
              <p>{project.name}</p>
            </li>
          ))
        }
      </ul>

    </section>
  )
}

export default Home
