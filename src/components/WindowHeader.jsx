import { useWindowStore } from "../store/store";

const WindowHeader = ({ title = "Application", target }) => {
  const {closeWindow} = useWindowStore();
  return (
    <div className="relative flex h-9 items-center border-b border-gray-300 bg-gray-200 px-3 select-none">
      <div className="flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500 cursor-pointer" onClick={() => closeWindow(target)}/>
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 text-[13px] font-medium text-gray-600">
        {title}
      </div>
    </div>
  );
};

export default WindowHeader;
