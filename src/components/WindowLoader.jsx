const WindowLoader = ({ label = "Loading...", isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 z-2000 flex items-center justify-center bg-black/5 backdrop-blur-[1px]">
      {/* The System Window Fragment */}
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/40 bg-white/70 p-7 shadow-2xl backdrop-blur-xl">
        <style>{`
          @keyframes mac-fade {
            0% { opacity: 1; }
            100% { opacity: 0.15; }
          }
        `}</style>
        
        {/* Spinner */}
        <div className="relative mb-4 h-8 w-8">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute left-[46%] top-[38%] h-[24%] w-[9%] rounded-full bg-gray-600"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-130%)`,
                animation: 'mac-fade 1s linear infinite',
                animationDelay: `${(i * 0.083) - 1}s`,
              }}
            />
          ))}
        </div>

        {/* Text */}
        <span className="text-[13px] font-semibold text-gray-700 tracking-tight">
          {label}
        </span>
      </div>
    </div>
  );
};

export default WindowLoader;