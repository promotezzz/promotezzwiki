import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface HeaderProps {
  currentModSlug?: string;
  currentModTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentModSlug }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-white tracking-tight select-none">
            promotezz.cc
          </span>
          {currentModSlug && (
            <>
              <span className="text-neutral-600 select-none font-light">/</span>
              <span className="text-neutral-400 font-normal tracking-tight">{currentModSlug}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          {currentModSlug && (
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-md border border-white/10 transition-colors"
              title="Copy direct sublink to this wiki"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied link</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Copy sublink</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
