import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUniqueModList } from '../data/wikiRegistry';
import { ArrowRight, Search, Sparkles } from 'lucide-react';

export const BrowsePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const mods = getUniqueModList();

  const filteredMods = mods.filter((mod) => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return true;
    return (
      mod.title.toLowerCase().includes(q) ||
      mod.slug.toLowerCase().includes(q) ||
      mod.tagline?.toLowerCase().includes(q)
    );
  });

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full flex-1">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-pink-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>WIKI DIRECTORY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            All Wikis
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Browse all client mods, plugins, and software creations by Promotezz.
          </p>

          {/* Quick Search */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search wikis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-pink-500/60 focus:border-pink-500/40 backdrop-blur-md transition-all"
            />
          </div>
        </div>

        {/* Wikis List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMods.map((mod) => (
            <div
              key={mod.slug}
              onClick={() => navigate(`/${mod.slug}`)}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-pink-500/40 p-5 sm:p-6 backdrop-blur-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-pink-300 transition-colors">
                  {mod.title}
                </h2>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/10 text-neutral-400 border border-white/10">
                  /{mod.slug}
                </span>
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

        {filteredMods.length === 0 && (
          <div className="text-center py-12 text-neutral-500 text-sm">
            No wikis match "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};
