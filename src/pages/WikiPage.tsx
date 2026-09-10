import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getModBySlug } from '../data/wikiRegistry';
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
    <div className="relative min-h-screen bg-neutral-950 text-white flex flex-col selection:bg-pink-500 selection:text-white overflow-hidden">
      {/* Ambient Animated Background Mesh Gradients matching 404 theme */}
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

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full flex-1">
        {/* Browse more button */}
        <div className="mb-8">
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 backdrop-blur-md group shadow-sm hover:shadow-pink-500/5"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5 text-neutral-400 group-hover:text-pink-400" />
            <span>Browse more</span>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
          {mod.title}
        </h1>

        {/* Description Section */}
        {mod.overview && mod.overview.length > 0 && (
          <section className="mt-8 space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
            {mod.overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>
        )}

        {/* Issue Reporting Box (for wikis that have it enabled) */}
        {mod.issueReporting?.enabled && (
          <div className="mt-14">
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
