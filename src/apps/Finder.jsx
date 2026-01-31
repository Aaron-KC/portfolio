import { locations } from "../constants";
import { useFinderStore } from "../store/finderStore";
import { useWindowStore } from "../store/store";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../components/WindowWrapper";

const Finder = () => {
  const { currentLocation, changeLocation } = useFinderStore()
  const { openWindow } = useWindowStore()

  const openItem = item => {
    if (item.fileType === "pdf") return openWindow("resume")
    if (item.kind === "folder") return changeLocation(item)
    if (item.kind === "file" && item.fileType == "txt") return openWindow("txtfile", item)
    if (item.kind === "file" && item.fileType == "img") return openWindow("imgfile", item)
    if (item.kind === "file" && item.fileType == "url") return window.open(item.href, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <div className="flex h-9 items-center border-b border-gray-300 bg-gray-200 px-3 select-none justify-between">
        <WindowControls target="finder" />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
      </div>
      <div className="flex">
        <div className="sidebar">
          <div>
            <h3>Favourites</h3>
            <ul>
              {
                Object.values(locations).map(item => (
                  <li key={item.id} className={currentLocation.id == item.id ? "active" : "not-active"} onClick={() => changeLocation(item)} role="button"
                    tabIndex={0}>
                    <img src={item.icon} alt={item.name} className="size-4" />
                    <span className="text-sm text-gray-500">{item.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <h3>Work</h3>
            <ul>
              {
                locations.work.children.map(item => (
                  <li key={item.id} className={currentLocation.id == item.id ? "active" : "notactive"} onClick={() => changeLocation(item)} role="button" tabIndex={0}>
                    <img src={item.icon} alt={item.name} className="size-4" />
                    <span className="text-sm text-gray-500 truncate">{item.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <ul className="content">
          {
            currentLocation.children.map(item => (
              <li key={item.id} className={`${item.position} cursor-pointer`} onClick={() => openItem(item)} role="button"
                tabIndex={0}>
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow