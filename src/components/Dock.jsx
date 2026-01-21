import { Tooltip } from "react-tooltip"
import { dockApps } from "../constants"
import { useRef } from "react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useWindowStore } from "../store/store";

const Dock = () => {
  const dockRef = useRef(null);
  const { openWindow, closeWindow, windows } = useWindowStore();

  const toggleIcon = id => {
    const window = windows[id];

    if(!window) return

    window.isOpen ? closeWindow(id) : openWindow(id);
  }

  useGSAP(() => {
    const dock = dockRef.current;

    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const handleIconsHover = (e) => {
      const { left } = dock.getBoundingClientRect();
      const mouseX = e.clientX - left;

      icons.forEach(icon => {
        const { left: iconLeft, width: iconWidth } = icon.getBoundingClientRect();
        const iconCenter = iconLeft + iconWidth / 2;
        const distance = Math.abs(mouseX - (iconCenter - left))
        const intensity = Math.exp(-(distance ** 2.5) / 2000)

        gsap.to(icon, { scale: 1 + 0.5 * intensity, y: -15 * intensity, duration: 0.2, ease: "power2.out" })
      })
    }

    const handleMouseLeave = () => {
      icons.forEach(icon => {
        gsap.to(icon, { scale: 1, duration: 0.3, y: 0, ease: "power2.out" })
      })
    }

    dock.addEventListener("mousemove", handleIconsHover);
    dock.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      dock.removeEventListener("mousemove", handleIconsHover);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, [])
  return (
    <section id="dock">
      <div className="dock-container" ref={dockRef}>
        {
          dockApps.map(({ id, name, icon, canOpen }) => (
            <div key={id} className="relative flex justify-center items-center" onClick={() => toggleIcon(id)}>
              <button type="button" data-tooltip-id="dock-tooltip" data-tooltip-content={name} data-tooltip-place="bottom" disabled={!canOpen} className="dock-icon">
                <img src={`/images/${icon}`} alt={name} loading="lazy" className={`${!canOpen && "opacity-60"}`}/>
              </button>
            </div>
          ))
        }
        <Tooltip id="dock-tooltip" className="tooltip" />
      </div>
    </section>
  )
}

export default Dock
