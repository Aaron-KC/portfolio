import { useWindowStore } from "../store/store";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../components/WindowWrapper";

const TextComponent = () => {
  const { windows } = useWindowStore()
  const data = windows["txtfile"]?.data
  const { name, subtitle, image, description } = data || {};

  return (
    <>
      {/* Header */}
      <div className="relative flex h-9 items-center border-b border-gray-300 bg-gray-200 px-4 select-none">
        <WindowControls target="txtfile" />
        <div className="absolute left-1/2 -translate-x-1/2 text-[13px] font-medium text-gray-600">
          {name || "text-file.txt"}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 text-sm text-gray-800 leading-relaxed bg-white h-full overflow-y-auto">

        {/* Optional image */}
        {image && (
          <div className="mb-4 flex justify-center">
            <img
              src={image}
              alt="profile"
              className="w-24 h-24 rounded-md object-cover shadow"
            />
          </div>
        )}

        {/* Optional subtitle */}
        {subtitle && (
          <h2 className="mb-4 text-center text-base font-semibold text-gray-700">
            {subtitle}
          </h2>
        )}

        {/* Text content */}
        <div className="space-y-3 font-mono">
          {description?.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

      </div>
    </>
  );
};

const Text = WindowWrapper(TextComponent, "txtfile");

export default Text;
