import { useWindowStore } from "../store/store";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div className="flex items-center gap-0.5">
      {/* Close Button: Functional with Hover */}
      <button
      type="button"
        onClick={() => {
          if(target) {
            closeWindow(target);
          }
        }}
        className="relative flex items-center justify-center h-5 w-5 rounded-md group active:scale-90"
        aria-label="Close Window"
      >
        <span className="h-3 w-3 rounded-full bg-[#ff5f57] border border-black/5 flex items-center justify-center">
          <svg 
            className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </span>
      </button>

      {/* Minimize: Decorative Only */}
      <div className="flex items-center justify-center h-5 w-5">
        <span className="h-3 w-3 rounded-full bg-[#febc2e] border border-black/5" />
      </div>

      {/* Maximize: Decorative Only */}
      <div className="flex items-center justify-center h-5 w-5">
        <span className="h-3 w-3 rounded-full bg-[#28c840] border border-black/5" />
      </div>
    </div>
  );
};

export default WindowControls;