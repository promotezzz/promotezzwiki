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
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-neutral-900 tracking-tight select-none">
            promotezz.cc
          </span>
          {currentModSlug && (
            <>
              <span className="text-neutral-300 select-none font-light">/</span>
              <span className="text-neutral-500 font-normal tracking-tight">{currentModSlug}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          {currentModSlug && (
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/70 rounded border border-neutral-200 transition-colors"
              title="Copy direct sublink to this wiki"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied link</span>
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
