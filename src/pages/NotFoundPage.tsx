import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  isRoot?: boolean;
  slug?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
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
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
          Lost in the void
        </h2>

        {/* Back to Home Button */}
        <Link
          to="/browse"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-pink-500/40 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-black/20 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5 text-pink-400" />
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
};
