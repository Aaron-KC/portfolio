import WindowControls from "../components/WindowControls";
import WindowWrapper from "../components/WindowWrapper";
import { photosLinks, gallery } from "../constants";

const PhotosComponent = () => {
  return (
    <>
      {/* Header */}
      <div className="relative flex h-10 items-center border-b border-gray-300 bg-gray-200 px-4 select-none flex-none">
        <WindowControls target="photos" />

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-[12px] lg:text-[13px] font-bold text-gray-700">Photos</span>
          <span className="hidden sm:block text-[10px] text-gray-500 font-medium -mt-1">All Photos</span>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:gap-4">
          {/* Hide search bar on smaller tablets to save space */}
          <div className="hidden lg:flex items-center bg-gray-300/50 rounded-md px-2 py-1 w-32 xl:w-48 border border-transparent focus-within:bg-white focus-within:border-blue-400 transition-all">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-[12px] ml-1 w-full" />
          </div>

          <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 min-h-0"> {/* min-h-0 is crucial for inner scrolls */}
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="sidebar w-3/12 flex-none bg-gray-50 border-r border-gray-200 flex flex-col p-5">
            <h2>Albums</h2>
            <ul>
              {photosLinks.map((link, idx) => (
                <li
                  key={link.id}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors ${idx === 0 ? "bg-blue-100 text-blue-700" : ""
                    }`}
                >
                  <img src={link.icon} alt={link.title} className="w-4" />
                  <p className="text-sm font-medium">{link.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="gallery flex-1 overflow-auto p-5">
            <ul className="grid grid-cols-5 grid-rows-5 gap-2.5">
              {gallery.map((photo) => (
                <li key={photo.id}>
                  <img
                    src={photo.img}
                    alt={`Photo ${photo.id}`}
                    className="w-full max-h-87  object-cover object-top rounded-lg"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};


const Photos = WindowWrapper(PhotosComponent, "photos");

export default Photos;
