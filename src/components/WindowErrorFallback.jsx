export const SystemCrash = ({ error }) => (
  <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white font-sans p-10">
    <div className="max-w-md w-full border border-white/20 p-8 rounded-lg bg-[#111]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
        <h1 className="text-xs font-mono uppercase tracking-[0.3em] text-red-500">System Failure</h1>
      </div>
      
      <p className="text-lg font-bold mb-4 tracking-tight">
        The portfolio environment has encountered a critical error.
      </p>
      
      <div className="bg-black/50 p-4 rounded font-mono text-[10px] text-gray-400 mb-8 overflow-x-auto">
        <code>{error?.message || "Unknown Kernel Error"}</code>
      </div>

      <button 
        onClick={() => window.location.href = '/'}
        className="w-full py-3 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded hover:bg-gray-200 transition-all"
      >
        Reboot System
      </button>
      
      <p className="mt-6 text-[9px] text-gray-600 uppercase tracking-widest text-center">
        Error Code: 0x8004100FS_AARON_PORTFOLIO
      </p>
    </div>
  </div>
);