import { techStack } from "../constants";
import WindowHeader from "./WindowHeader";
import WindowWrapper from "./WindowWrapper";

const TerminalComponent = () => {
  return (
    <>
      <WindowHeader title="Tech Stack" target="terminal" />
      <div className="techstack">
        <p className="font-bold text-sm">@aaron % <span className="font-normal">show tech stack</span></p>
        <div className="flex">
          <p className="label w-32">Category</p>
          <p className="label ms-0">Technologies</p>
        </div>
        <ul className="content">
          {
            techStack.map(({ category, items }) => (
              <li key={category} className="list-none flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check check"><path d="M20 6 9 17l-5-5" /></svg>
                <h3>{category}</h3>
                <ul>
                  {
                    items.map((item, index) => (
                      `${item}${index < items.length - 1 ? ', ' : ''}`
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
        <div className="footnote">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check w-5"><path d="M20 6 9 17l-5-5" /></svg>
            <h3 className="ps-5">6 of 6 stacks loaded successfully (100%)</h3>
          </div>
          <p className="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flag-icon lucide-flag"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" /></svg> Render time: 6ms</p>
        </div>
      </div>
    </>
  )
}

const Terminal = WindowWrapper(TerminalComponent, 'terminal');

export default Terminal