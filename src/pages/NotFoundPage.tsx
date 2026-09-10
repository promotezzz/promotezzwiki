import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, CornerDownLeft, Zap } from 'lucide-react';

interface NotFoundPageProps {
  isRoot?: boolean;
  slug?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ isRoot = false, slug }) => {
  const [targetSlug, setTargetSlug] = useState('');
  const navigate = useNavigate();

  const handleGo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = targetSlug.trim().replace(/^\//, '');
    if (clean) {
      navigate(`/${clean}`);
    }
  };

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
        {/* Colorful Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono mb-6 shadow-lg shadow-purple-500/10">
          <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-ping" />
          <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
            {isRoot ? 'NO SUBLINK PROVIDED' : `SUBLINK NOT FOUND: /${slug || ''}`}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

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

        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-md mb-8">
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

        {/* Colorful Interactive Sublink Jump Bar */}
        <div className="w-full max-w-sm mb-6 p-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-xl shadow-purple-500/20">
          <form onSubmit={handleGo} className="relative flex items-center bg-neutral-900 rounded-[14px] overflow-hidden">
            <span className="pl-3.5 pr-1 font-mono text-neutral-400 text-sm">/</span>
            <input
              type="text"
              value={targetSlug}
              onChange={(e) => setTargetSlug(e.target.value)}
              placeholder="enter-mod-sublink..."
              className="w-full py-3 pr-10 text-sm bg-transparent text-white placeholder:text-neutral-500 focus:outline-none font-mono"
            />
            <button
              type="submit"
              className="absolute right-2 p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white transition-all shadow-md active:scale-95"
              title="Jump to sublink"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Colorful Quick Links / Examples */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-neutral-400">
          <span className="text-neutral-500 flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-400" /> Examples:
          </span>
          <button
            onClick={() => navigate('/rightclickpots')}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-pink-500/40 text-pink-300 hover:text-pink-200 transition-all hover:scale-105"
          >
            /rightclickpots
          </button>
          <button
            onClick={() => navigate('/my-mod-wiki')}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 transition-all hover:scale-105"
          >
            /my-mod-wiki
          </button>
          <button
            onClick={() => navigate('/hud-customizer')}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-purple-500/40 text-purple-300 hover:text-purple-200 transition-all hover:scale-105"
          >
            /hud-customizer
          </button>
        </div>
      </div>

      {/* Colorful Bottom Glow Tag */}
      <footer className="relative z-10 mt-16 text-[11px] font-mono text-neutral-500">
        promotezz.cc • direct access only
      </footer>
    </div>
  );
};
