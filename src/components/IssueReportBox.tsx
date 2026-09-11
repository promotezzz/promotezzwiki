import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import type { IssueReportingConfig } from '../types/wiki';

interface IssueReportBoxProps {
  modTitle: string;
  modSlug: string;
  config: IssueReportingConfig;
}

export const IssueReportBox: React.FC<IssueReportBoxProps> = ({ modTitle, modSlug }) => {
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setIsSubmitting(true);
    const issueId = `ISSUE-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await fetch('https://formsubmit.co/ajax/tjackbeatz@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Promotezz Wiki] Issue: ${modTitle} - ${description.trim().slice(0, 50)}`,
          _template: 'table',
          _captcha: 'false',
          'Mod': modTitle,
          'Direct Sublink': `/${modSlug}`,
          'Issue ID': issueId,
          'Description': description.trim()
        })
      });
    } catch (err) {
      console.error('Submission sync error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 py-3 text-sm text-emerald-800 bg-emerald-50 px-4 rounded-xl border border-emerald-200 max-w-xl">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Report received. Thank you!</span>
        <button
          onClick={() => {
            setDescription('');
            setSubmitted(false);
          }}
          className="ml-auto text-xs text-emerald-700 hover:text-emerald-900 underline underline-offset-2 cursor-pointer"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="flex flex-col sm:flex-row gap-2.5">
        <input
          type="text"
          required
          placeholder="Describe the issue (make sure to add the version too)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-1 px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
        />
        <button
          type="submit"
          disabled={isSubmitting || !description.trim()}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-neutral-900 hover:bg-neutral-800 text-white transition-all disabled:opacity-40 cursor-pointer shrink-0"
        >
          <Send className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-pulse' : ''}`} />
          <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
        </button>
      </div>
    </form>
  );
};
