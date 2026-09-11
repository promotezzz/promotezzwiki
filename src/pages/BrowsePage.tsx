import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUniqueModList } from '../data/wikiRegistry';
import { ArrowRight } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export const BrowsePage: React.FC = () => {
  const navigate = useNavigate();
  const mods = getUniqueModList();

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-950 dark:selection:text-emerald-300">
      {/* Top right theme toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full flex-1">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Wikis
          </h1>
        </div>

        {/* Wikis List */}
        <div className="space-y-4">
          {mods.map((mod) => (
            <div
              key={mod.slug}
              onClick={() => navigate(`/${mod.slug}`)}
              className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] hover:bg-neutral-50/80 dark:hover:bg-neutral-900/60 hover:border-neutral-300 dark:hover:border-neutral-700 p-6 shadow-xs hover:shadow-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="mb-2">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {mod.title}
                </h2>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2 mb-4">
                {mod.tagline || mod.overview[0]}
              </p>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
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
