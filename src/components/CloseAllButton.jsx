import { useWindowStore } from "../store/store";

const CloseAllButton = () => {
  const { windows, closeAllWindows } = useWindowStore();

  // Only show the button if at least one window is open
  const anyWindowOpen = Object.values(windows).some(win => win.isOpen);


  if (!anyWindowOpen) return null;

  return (
    <button
      onClick={closeAllWindows}
      className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 rounded-md transition-all active:scale-95 max-sm:hidden cursor-pointer leading-none"
    >
      {/* Small Close All SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" />
      </svg>

      <span>Close All</span>
    </button>
  );
};

export default CloseAllButton;