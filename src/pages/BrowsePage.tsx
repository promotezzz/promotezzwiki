import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUniqueModList } from '../data/wikiRegistry';
import { ArrowRight } from 'lucide-react';

export const BrowsePage: React.FC = () => {
  const navigate = useNavigate();
  const mods = getUniqueModList();

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full flex-1">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
            Wikis
          </h1>
        </div>

        {/* Wikis List */}
        <div className="space-y-4">
          {mods.map((mod) => (
            <div
              key={mod.slug}
              onClick={() => navigate(`/${mod.slug}`)}
              className="group relative rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50/80 hover:border-neutral-300 p-6 shadow-xs hover:shadow-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="mb-2">
                <h2 className="text-xl font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors">
                  {mod.title}
                </h2>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-4">
                {mod.tagline || mod.overview[0]}
              </p>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 group-hover:text-emerald-700">
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
