const RotationWarning = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-zinc-900 flex flex-col items-center justify-center p-8 text-center">
      {/* Visual Icon - A Phone Rotating */}
      <div className="relative mb-6">
        <div className="w-16 h-28 border-4 border-zinc-500 rounded-2xl flex items-center justify-center animate-bounce">
           <div className="w-1 h-1 bg-zinc-500 rounded-full absolute bottom-2"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="text-3xl animate-pulse">🔄</span>
        </div>
      </div>

      {/* Message */}
      <h2 className="text-zinc-100 text-xl font-bold mb-2 tracking-tight">
        Resolution Not Supported
      </h2>
      <p className="text-zinc-400 text-sm max-w-[280px] leading-relaxed mb-6">
        This OS-style experience requires a larger viewport or a different orientation to render correctly.
      </p>

      {/* System "Tag" */}
      <div className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
          Status: 403 Restricted
        </span>
      </div>
    </div>
  );
};

export default RotationWarning;