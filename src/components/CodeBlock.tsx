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
    <div className="my-4 rounded-lg border border-neutral-200 bg-neutral-50/70 overflow-hidden font-mono text-sm">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-200 bg-neutral-100/60 text-xs text-neutral-500">
          <span>{filename || language}</span>
          <button
            onClick={handleCopy}
            aria-label="Copy code"
            className="flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-sans">Copied</span>
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
            className="absolute top-3 right-3 p-1.5 rounded text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        )}
        <pre className="text-neutral-800 leading-relaxed font-mono text-xs sm:text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
