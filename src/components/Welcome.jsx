import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const FONT_WEIGHTS = {
  title: { min: 400, max: 900 },
  subtitle: { min: 100, max: 400 }
}
const renderText = (text, baseWeight = 400) => [...text].map((char, idx) => (<span key={idx} aria-hidden="true" style={{ fontVariationSettings: `"wght" ${baseWeight}` }}>{char === " " ? "\u00A0" : char}</span>))

const setUpMouseHover = (container, type) => {
  if (!container) return () => { };
  const letters = container.querySelectorAll("span")
  const { min, max } = FONT_WEIGHTS[type]

  const animateText = (letter, weight, duration = 0.25) => {
    gsap.to(letter, { fontVariationSettings: `"wght" ${weight}`, duration, ease: "power2.out" })
  }

  const handleHover = e => {
    const { left } = container.getBoundingClientRect()
    const mouseX = e.clientX - left

    letters.forEach(letter => {
      const { left: letterLeft, width: letterWidth } = letter.getBoundingClientRect()
      const letterCenter = letterLeft + letterWidth / 2
      const distance = Math.abs(mouseX - (letterCenter - left))
      const intensity = Math.exp(-(distance ** 2) / 2000)
      const targetWeight = min + (max - min) * intensity

      animateText(letter, targetWeight)
    })
  }

  const handleMouseLeave = () => {
    letters.forEach(letter => animateText(letter, min))
  }

  container.addEventListener("mousemove", handleHover)
  container.addEventListener("mouseleave", handleMouseLeave)

  return () => {
    container.removeEventListener("mousemove", handleHover)
    container.removeEventListener("mouseleave", handleMouseLeave)
  }
}

const Welcome = () => {
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)

  useGSAP(() => {
    const cleanUpSubtitle = setUpMouseHover(subtitleRef.current, "subtitle")
    const cleanUpTitle = setUpMouseHover(titleRef.current, "title")

    return () => {
      cleanUpSubtitle && cleanUpSubtitle()
      cleanUpTitle && cleanUpTitle()
    }
  }, [])

  return (
    <div id="welcome">
      <p className="font-georama text-3xl hidden xs:block" ref={subtitleRef} aria-label="Hey, I'm Aaron KC! Welcome to my">
        {renderText("Hey, I'm Aaron KC! Welcome to my", 100)}
      </p>
      <p className="font-georama text-8xl italic mt-1 hidden xs:block" ref={titleRef} aria-label="portfolio">
        {renderText("portfolio")}
      </p>
      <div className="small-screen">
        <p>This portfolio's appeal is only visible in desktops and tablets with large screens.</p>
      </div>
    </div>
  )
}

export default Welcome
