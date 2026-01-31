import { useWindowStore } from "../store/store";

const WindowControls = ({ title = "Application", target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div className="flex gap-2">
      <span className="h-3 w-3 rounded-full bg-red-500 cursor-pointer" onClick={() => closeWindow(target)} />
      <span className="h-3 w-3 rounded-full bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  );
};

export default WindowControls;
