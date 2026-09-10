import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getModBySlug } from '../data/wikiRegistry';
import { Header } from '../components/Header';
import { IssueReportBox } from '../components/IssueReportBox';
import { NotFoundPage } from './NotFoundPage';

export const WikiPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const mod = getModBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!mod) {
    return <NotFoundPage slug={slug} />;
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header currentModSlug={mod.slug} currentModTitle={mod.title} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full flex-1">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900">
          {mod.title}
        </h1>

        {/* Description Section */}
        {mod.overview && mod.overview.length > 0 && (
          <section className="mt-8 space-y-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            {mod.overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>
        )}

        {/* Issue Reporting Box (for wikis that have it enabled) */}
        {mod.issueReporting?.enabled && (
          <div className="mt-12">
            <IssueReportBox
              modTitle={mod.title}
              modSlug={mod.slug}
              config={mod.issueReporting}
            />
          </div>
        )}
      </div>
    </div>
  );
};
