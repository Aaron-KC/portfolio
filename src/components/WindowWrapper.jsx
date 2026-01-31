import { useLayoutEffect, useRef } from "react";
import { useWindowStore } from "../store/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

const WindowWrapper = (Component, windowId) => {
  const Wrapped = (props) => {
    const { focusWindow } = useWindowStore();
    const isOpen = useWindowStore((s) => s.windows[windowId].isOpen);
    const zIndex = useWindowStore((s) => s.windows[windowId].zIndex);
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: function (e) {
          // 1. Manually check if the click target is the model or inside no-drag
          focusWindow(windowId);
          if (e.target.closest(".no-drag") || e.target.tagName === "CANVAS") {
            this.endDrag(); // Immediately kill the drag
            return;
          }
        }, cancel: ".no-drag"
      });


      return () => instance.kill();
    }, []);

    useGSAP(() => {
      const el = ref.current;
      if (!isOpen || !el) return;
      el.style.display = 'block';
      gsap.fromTo(el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? 'block' : 'none';
    }, [isOpen]);

    return (<section id={windowId} style={{ zIndex }} ref={ref} className="hidden md:block pointer-events-auto">
      <Component {...props} />
    </section>);
  }
  return Wrapped;
}

export default WindowWrapper
