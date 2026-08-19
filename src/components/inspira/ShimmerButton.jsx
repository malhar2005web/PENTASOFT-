import React from 'react';

export default function ShimmerButton({ 
  children, 
  href = '#', 
  onClick, 
  className = '', 
  variant = 'lime' 
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      {/* Animated rotating border gradient */}
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#060906_0%,#CCFF00_50%,#060906_100%)] opacity-80" />
      
      {/* Inner Button Content */}
      <span className={`inline-flex h-full w-full items-center justify-center space-x-2 rounded-[11px] px-6 py-3.5 backdrop-blur-3xl transition-colors ${
        variant === 'lime'
          ? 'bg-[#CCFF00] text-black font-bold hover:bg-[#b8e600] shadow-[0_0_25px_rgba(204,255,0,0.35)]'
          : 'bg-[#0b110b] text-slate-100 border border-white/10 hover:bg-[#111a11]'
      }`}>
        {/* Shimmer Light Reflection effect across button */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform ease-out" />
        <span className="relative z-10 flex items-center space-x-2">{children}</span>
      </span>
    </a>
  );
}
