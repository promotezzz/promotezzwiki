import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Menu,
  X,
  Sparkles,
  Download,
  Terminal,
  Sliders,
  HelpCircle,
  AlertCircle,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { getModBySlug } from '../data/wikiRegistry';
import { IssueReportBox } from '../components/IssueReportBox';
import { CodeBlock } from '../components/CodeBlock';
import { NotFoundPage } from './NotFoundPage';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

export const WikiPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const mod = getModBySlug(slug || '');
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const navGroups: NavGroup[] = [
    {
      group: 'Introduction',
      items: [
        { id: 'overview', label: `What is ${mod?.title || 'Mod'}?`, icon: BookOpen },
        ...(mod?.features && mod.features.length > 0
          ? [{ id: 'features', label: 'Key Features', icon: Sparkles }]
          : [])
      ]
    },
    {
      group: 'Getting Started',
      items: [
        ...(mod?.installation && mod.installation.length > 0
          ? [{ id: 'installation', label: 'Installation', icon: Download }]
          : []),
        ...(mod?.commands && mod.commands.length > 0
          ? [{ id: 'commands', label: 'Commands', icon: Terminal }]
          : []),
        ...(mod?.config
          ? [{ id: 'configuration', label: 'Configuration', icon: Sliders }]
          : [])
      ]
    },
    {
      group: 'Support',
      items: [
        ...(mod?.faq && mod.faq.length > 0
          ? [{ id: 'faq', label: 'FAQ', icon: HelpCircle }]
          : []),
        ...(mod?.issueReporting?.enabled
          ? [{ id: 'issues', label: 'Report an Issue', icon: AlertCircle }]
          : [])
      ]
    }
  ];

  const allNavItems = navGroups.flatMap((g) => g.items);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = allNavItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(allNavItems[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(allNavItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allNavItems]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!mod) {
    return <NotFoundPage slug={slug} />;
  }

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex flex-col selection:bg-pink-500 selection:text-white">
      {/* Ambient Animated Background Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Violet / Pink glowing orb */}
        <div className="absolute -top-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-pink-600/25 via-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
        
        {/* Cyan / Blue glowing orb */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 sm:w-[550px] sm:h-[550px] bg-gradient-to-bl from-cyan-500/20 via-blue-600/15 to-transparent rounded-full blur-3xl" />
        
        {/* Amber / Yellow bottom glow */}
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-gradient-to-t from-amber-500/15 via-rose-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Mobile Sticky Header with Menu Toggle */}
      <header className="lg:hidden sticky top-0 z-40 bg-neutral-950/85 backdrop-blur-xl border-b border-white/[0.08] px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span className="font-medium">Menu</span>
        </button>

        <span className="font-bold text-sm tracking-tight text-white">
          {mod.title}
        </span>

        <Link
          to="/browse"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Browse</span>
        </Link>
      </header>

      {/* Main Container Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-1 px-4 sm:px-6 lg:px-8">
        {/* Left Navigation Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-72 bg-neutral-950/95 lg:bg-transparent backdrop-blur-2xl lg:backdrop-blur-none
            p-6 lg:py-12 border-r border-white/[0.08] lg:border-white/[0.06] overflow-y-auto transition-transform duration-200 ease-in-out
            lg:static lg:translate-x-0 shrink-0
            ${mobileMenuOpen ? 'translate-x-0 shadow-2xl shadow-black' : '-translate-x-full'}
          `}
        >
          {/* Top Bar inside Sidebar */}
          <div className="mb-8">
            <Link
              to="/browse"
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors group mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5 text-neutral-400 group-hover:text-pink-400" />
              <span>Browse all wikis</span>
            </Link>

            <div className="flex items-center gap-2 mt-2">
              <h2 className="text-xl font-bold tracking-tight text-white">
                {mod.title}
              </h2>
              {mod.version && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  {mod.version}
                </span>
              )}
            </div>
          </div>

          {/* Grouped Navigation Links */}
          <nav className="space-y-6">
            {navGroups.map((group) => (
              <div key={group.group}>
                <h3 className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase mb-2 px-2">
                  {group.group}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`
                            w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-left cursor-pointer
                            ${
                              isActive
                                ? 'bg-pink-500/10 text-pink-400 font-semibold border border-pink-500/20 shadow-sm shadow-pink-500/5'
                                : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                            }
                          `}
                        >
                          <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-pink-400' : 'text-neutral-500'}`} />
                          <span className="truncate">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Backdrop for Mobile Sidebar */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}

        {/* Center Main Documentation Content */}
        <main className="flex-1 min-w-0 py-8 sm:py-12 lg:px-12">
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-24 pb-12 border-b border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {mod.badge && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/30">
                  {mod.badge}
                </span>
              )}
              {mod.loader && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                  {mod.loader}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
              What is {mod.title}?
            </h1>

            {mod.overview && mod.overview.length > 0 && (
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                {mod.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Action buttons (Modrinth, GitHub) */}
            {mod.downloads && mod.downloads.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mt-8">
                {mod.downloads.map((dl, idx) => (
                  <a
                    key={idx}
                    href={dl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer
                      ${
                        dl.type === 'modrinth'
                          ? 'bg-[#1bd96a]/15 text-[#1bd96a] border border-[#1bd96a]/30 hover:bg-[#1bd96a]/25 hover:border-[#1bd96a]/50 shadow-sm shadow-[#1bd96a]/10'
                          : 'bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >
                    <span>{dl.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                ))}
              </div>
            )}

            {/* Platform & Requirements badges */}
            {mod.requirements && mod.requirements.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs text-neutral-500 font-medium mr-1">Compatibility:</span>
                {mod.requirements.map((req, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/10"
                  >
                    {req}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Section 2: Features */}
          {mod.features && mod.features.length > 0 && (
            <section id="features" className="scroll-mt-24 py-12 border-b border-white/[0.08]">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                What are the features?
              </h2>
              <p className="text-sm text-neutral-400 mb-6">
                {mod.title} comes with engineered utilities optimized for PvP and rapid hotbar manipulation:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mod.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-base font-semibold text-white">
                        {feature.title}
                      </h3>
                      {feature.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 3: Installation */}
          {mod.installation && mod.installation.length > 0 && (
            <section id="installation" className="scroll-mt-24 py-12 border-b border-white/[0.08]">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Installation
              </h2>
              <p className="text-sm text-neutral-400 mb-6">
                Follow these quick steps to get {mod.title} running in your client:
              </p>

              <div className="space-y-4">
                {mod.installation.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-xs font-bold text-pink-400 shrink-0 mt-0.5">
                        {step.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          {step.description}
                        </p>
                        {step.commandOrPath && (
                          <div className="mt-3">
                            <code className="text-xs font-mono text-cyan-300 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 block overflow-x-auto">
                              {step.commandOrPath}
                            </code>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 4: Commands */}
          {mod.commands && mod.commands.length > 0 && (
            <section id="commands" className="scroll-mt-24 py-12 border-b border-white/[0.08]">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Commands
              </h2>
              <p className="text-sm text-neutral-400 mb-6">
                Use in-game chat commands to configure or test settings on the fly:
              </p>

              <div className="space-y-3">
                {mod.commands.map((cmd, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <code className="font-mono text-xs sm:text-sm text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-lg border border-pink-500/20 w-fit">
                      {cmd.command}
                    </code>
                    <span className="text-xs sm:text-sm text-neutral-400">
                      {cmd.description}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 5: Configuration */}
          {mod.config && (
            <section id="configuration" className="scroll-mt-24 py-12 border-b border-white/[0.08]">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Configuration
              </h2>
              <p className="text-sm text-neutral-400 mb-4">
                {mod.config.description}
              </p>

              <CodeBlock
                code={mod.config.code}
                language={mod.config.language}
                filename={mod.config.filename}
              />
            </section>
          )}

          {/* Section 6: FAQ */}
          {mod.faq && mod.faq.length > 0 && (
            <section id="faq" className="scroll-mt-24 py-12 border-b border-white/[0.08]">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {mod.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
                  >
                    <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>{item.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pl-6">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 7: Issue Tracker */}
          {mod.issueReporting?.enabled && (
            <section id="issues" className="scroll-mt-24 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Report an Issue
              </h2>
              <p className="text-sm text-neutral-400 mb-6">
                Encountered a bug or unexpected behavior? Submit an issue report directly below:
              </p>

              <IssueReportBox
                modTitle={mod.title}
                modSlug={mod.slug}
                config={mod.issueReporting}
              />
            </section>
          )}
        </main>

        {/* Right Sidebar: On This Page Table of Contents */}
        <aside className="hidden xl:block w-56 shrink-0 py-12 pl-8 sticky top-0 h-screen overflow-y-auto">
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-4">
            On this page
          </h4>
          <ul className="space-y-2 border-l border-white/[0.08] pl-3">
            {allNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      text-xs transition-colors text-left block w-full truncate py-1 cursor-pointer
                      ${
                        isActive
                          ? 'text-pink-400 font-semibold'
                          : 'text-neutral-500 hover:text-neutral-300'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
};
