import React from 'react';

interface NotFoundPageProps {
  isRoot?: boolean;
  slug?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ isRoot = false, slug }) => {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-4 overflow-hidden selection:bg-pink-500 selection:text-white">
      {/* Colorful Animated Background Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Violet / Pink glowing orb */}
        <div className="absolute -top-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-pink-600/40 via-purple-600/30 to-transparent rounded-full blur-3xl animate-pulse" />
        
        {/* Cyan / Blue glowing orb */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 sm:w-[550px] sm:h-[550px] bg-gradient-to-bl from-cyan-500/40 via-blue-600/30 to-transparent rounded-full blur-3xl" />
        
        {/* Amber / Yellow bottom glow */}
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-gradient-to-t from-amber-500/30 via-rose-500/20 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">

        {/* Massive Colorful 404 Header */}
        <div className="relative mb-2">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter leading-none select-none bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(236,72,153,0.3)]">
            404
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl -z-10" />
        </div>

        {/* Expressive Subheading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          {isRoot ? 'There is no home page here' : 'Lost in the void'}
        </h2>

        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-md">
          {isRoot ? (
            <>
              This website operates strictly via <span className="text-pink-400 font-medium">direct sublinks</span>. You need a specific link given by Promotezz to view a mod wiki.
            </>
          ) : (
            <>
              The sublink <code className="font-mono text-cyan-300 bg-white/10 px-1.5 py-0.5 rounded">/{slug}</code> does not exist on this wiki network.
            </>
          )}
        </p>
      </div>
    </div>
  );
};
