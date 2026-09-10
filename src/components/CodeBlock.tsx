import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="my-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden font-mono text-sm">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02] text-xs text-neutral-400">
          <span>{filename || language}</span>
          <button
            onClick={handleCopy}
            aria-label="Copy code"
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-sans">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="font-sans">Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <div className="relative p-4 overflow-x-auto">
        {!filename && !language && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        )}
        <pre className="text-neutral-200 leading-relaxed font-mono text-xs sm:text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
