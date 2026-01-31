export const SystemCrash = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white font-sans p-10 select-none">
    <div className="max-w-md w-full border border-white/10 p-8 rounded-lg bg-[#0a0a0a] shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
        <h1 className="text-xs font-mono uppercase tracking-[0.3em] text-red-600 font-bold">System Halt</h1>
      </div>
      
      <p className="text-lg font-bold mb-4 tracking-tight leading-snug">
        A critical exception has occurred in the kernel. All processes have been suspended to protect data integrity.
      </p>
      
      {/* Generic message instead of raw error */}
      <div className="bg-white/5 p-4 rounded font-mono text-[10px] text-gray-500 mb-8 border border-white/5">
        <code>STATUS: KERNEL_SECURITY_CHECK_FAILURE<br/>ACTION: MANUAL_REBOOT_REQUIRED</code>
      </div>

      <button 
        onClick={() => window.location.reload()}
        className="w-full py-3 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded hover:bg-gray-200 transition-all active:scale-95"
      >
        Reboot System
      </button>
      
      <p className="mt-6 text-[9px] text-gray-600 uppercase tracking-widest text-center opacity-50">
        Reference: 0x8004100FS_AARON_PORTFOLIO
      </p>
    </div>
  </div>
);