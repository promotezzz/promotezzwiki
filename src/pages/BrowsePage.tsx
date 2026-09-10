import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUniqueModList } from '../data/wikiRegistry';
import { ArrowRight } from 'lucide-react';

export const BrowsePage: React.FC = () => {
  const navigate = useNavigate();
  const mods = getUniqueModList();

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex flex-col selection:bg-pink-500 selection:text-white overflow-hidden">
      {/* Ambient Animated Background Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Violet / Pink glowing orb */}
        <div className="absolute -top-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-pink-600/30 via-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
        
        {/* Cyan / Blue glowing orb */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 sm:w-[550px] sm:h-[550px] bg-gradient-to-bl from-cyan-500/30 via-blue-600/20 to-transparent rounded-full blur-3xl" />
        
        {/* Amber / Yellow bottom glow */}
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-gradient-to-t from-amber-500/20 via-rose-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full flex-1">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Wikis
          </h1>
        </div>

        {/* Wikis List */}
        <div className="space-y-4">
          {mods.map((mod) => (
            <div
              key={mod.slug}
              onClick={() => navigate(`/${mod.slug}`)}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-pink-500/40 p-5 sm:p-6 backdrop-blur-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="mb-2">
                <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-pink-300 transition-colors">
                  {mod.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2 mb-4">
                {mod.tagline || mod.overview[0]}
              </p>

              <div className="flex items-center gap-1.5 text-xs font-medium text-pink-400 group-hover:text-pink-300">
                <span>View Documentation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
