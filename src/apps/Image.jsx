import { useWindowStore } from "../store/store";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../components/WindowWrapper";

const ImageComponent = () => {
  const { windows } = useWindowStore()
  const data = windows["imgfile"]?.data
  const { name, imageUrl } = data || {};

  return (
    <>
      {/* Header */}
      <div className="relative flex h-9 items-center border-b border-gray-300 bg-gray-200 px-4 select-none">
        <WindowControls target="imgfile" />
        <div className="absolute left-1/2 -translate-x-1/2 text-[13px] font-medium text-gray-600">
          {name || "image.png"}
        </div>
      </div>

      {/* Body */}
      <div className="flex h-full items-center justify-center bg-gray-100 p-4 overflow-auto">

        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name || "image"}
            className="
              object-contain
              rounded-md
              shadow-md
            "
          />
        ) : (
          <p className="text-sm text-gray-500 font-mono">
            Image could not be loaded.
          </p>
        )}
      </div>
    </>
  );
};

const Image = WindowWrapper(ImageComponent, "imgfile");

export default Image;
