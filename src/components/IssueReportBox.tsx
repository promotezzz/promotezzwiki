import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Send, MessageSquarePlus } from 'lucide-react';
import type { IssueReportingConfig } from '../types/wiki';

interface IssueReportBoxProps {
  modTitle: string;
  modSlug: string;
  config: IssueReportingConfig;
}

interface SubmittedIssue {
  id: string;
  title: string;
  version: string;
  timestamp: string;
}

export const IssueReportBox: React.FC<IssueReportBoxProps> = ({ modTitle, modSlug }) => {
  const [title, setTitle] = useState('');
  const [version, setVersion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recentIssues, setRecentIssues] = useState<SubmittedIssue[]>(() => {
    try {
      const stored = localStorage.getItem(`issues_${modSlug}`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);

    const issueId = `ISSUE-${Math.floor(1000 + Math.random() * 9000)}`;
    const newIssue: SubmittedIssue = {
      id: issueId,
      title: title.trim(),
      version: version.trim() || 'Not specified',
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    // Forward issue automatically via silent email delivery
    try {
      await fetch('https://formsubmit.co/ajax/tjackbeatz@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Promotezz Wiki] Issue: ${modTitle} - ${title.trim()}`,
          _template: 'table',
          _captcha: 'false',
          'Mod': modTitle,
          'Direct Sublink': `/${modSlug}`,
          'Issue ID': issueId,
          'Issue Summary': title.trim(),
          'Version': version.trim() || 'Not specified'
        })
      });
    } catch (err) {
      console.error('Submission sync error:', err);
    } finally {
      setIsSubmitting(false);
    }

    const updated = [newIssue, ...recentIssues];
    setRecentIssues(updated);
    try {
      localStorage.setItem(`issues_${modSlug}`, JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  const handleResetForm = () => {
    setTitle('');
    setVersion('');
    setSubmitted(false);
  };

  return (
    <section id="issues" className="scroll-mt-20 pt-10 border-t border-white/10">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-7 shadow-2xl">
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-pink-400 mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-pink-400" />
            <span>Issue Tracker</span>
          </div>
          <h2 className="text-xl font-semibold text-white tracking-tight">
            Publish an issue you found
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
            Encountered a bug or unexpected behavior with {modTitle}?
          </p>
        </div>

        {submitted ? (
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-left space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Issue recorded successfully!</span>
            </div>
            <p className="text-xs text-neutral-400">
              Thank you for reporting. Your issue has been logged.
            </p>
            <div className="pt-2">
              <button
                onClick={handleResetForm}
                className="text-xs text-neutral-400 hover:text-white underline underline-offset-4"
              >
                Submit another issue
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Issue Summary <span className="text-neutral-500 font-normal">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Potions fail to trigger when holding shield"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-pink-500/60 focus:border-pink-500/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Version
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1.20.4 Fabric"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-pink-500/60 focus:border-pink-500/40 transition-colors"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-purple-500 text-white transition-all shadow-md shadow-purple-500/20 active:scale-95 disabled:opacity-50"
              >
                <Send className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                <span>{isSubmitting ? 'Publishing...' : 'Publish Issue'}</span>
              </button>
            </div>
          </form>
        )}

        {/* Recently published issues on this wiki */}
        {recentIssues.length > 0 && (
          <div className="mt-6 pt-5 border-t border-white/10">
            <div className="flex items-center gap-2 mb-2.5">
              <MessageSquarePlus className="w-3.5 h-3.5 text-neutral-500" />
              <h3 className="text-xs font-medium tracking-wide text-neutral-400">
                Published Reports ({recentIssues.length})
              </h3>
            </div>
            <div className="space-y-1.5">
              {recentIssues.slice(0, 5).map((iss) => (
                <div
                  key={iss.id}
                  className="p-2.5 rounded-lg border border-white/10 bg-white/[0.03] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 text-[11px] font-medium">{iss.id}</span>
                    <span className="font-medium text-white">{iss.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500 text-[11px]">
                    <span>{iss.version}</span>
                    <span>•</span>
                    <span>{iss.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
