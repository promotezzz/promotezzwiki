import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Menu,
  X,
  Sparkles,
  Sliders,
  HelpCircle,
  AlertCircle,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { getModBySlug } from '../data/wikiRegistry';
import { IssueReportBox } from '../components/IssueReportBox';
import { ThemeToggle } from '../components/ThemeToggle';
import { NotFoundPage } from './NotFoundPage';

const ModrinthIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.252.004a11.78 11.78 0 0 0-2.52.272 12.09 12.09 0 0 0-4.715 2.247c-.18.14-.15.22.06.27.73.19 1.48.36 2.21.57.11.03.2.02.28-.05a9.3 9.3 0 0 1 3.53-1.42c1.71-.35 3.42-.22 5.08.41 2.11.8 3.72 2.23 4.81 4.19.86 1.55 1.25 3.23 1.21 5.01-.06 2.9-1.29 5.24-3.6 6.95-.83.61-1.74 1.05-2.73 1.34-.12.04-.18.1-.18.23.04.82.03 1.66.02 2.49 0 .2.06.25.24.2 1.66-.44 3.19-1.16 4.54-2.19 2.58-1.96 4.12-4.57 4.58-7.77.41-2.84-.2-5.47-1.74-7.85C21.49 2.18 17.27.17 12.252.004zm-8.87 3.82c-.17.03-.23.1-.28.25-.86 2.61-.95 5.23-.27 7.9.61 2.37 1.8 4.37 3.59 5.99.2.18.24.28.16.53-.25.8-.49 1.6-.72 2.4-.05.18-.03.27.14.39 1.82 1.29 3.84 2.09 6.06 2.41.11.02.2.07.28.16.2.2.4.4.6.61.1.1.2.14.35.1.86-.23 1.72-.46 2.58-.69.21-.06.26-.14.23-.35-.12-.86-.23-1.72-.35-2.58-.02-.13 0-.22.1-.3 1.7-1.4 2.82-3.2 3.38-5.3.08-.31.02-.38-.28-.38-1.58-.01-3.16 0-4.74-.01-.2 0-.27.05-.35.22-.55 1.3-1.47 2.2-2.76 2.69-.97.37-1.97.4-2.98.11-1.34-.38-2.33-1.23-2.97-2.45-.63-1.2-.74-2.49-.33-3.8.44-1.39 1.37-2.33 2.72-2.81 1.01-.36 2.05-.36 3.09-.03 1.19.38 2.09 1.15 2.66 2.26.09.18.17.23.38.23 1.61-.01 3.22-.01 4.83 0 .26 0 .32-.08.26-.33-.63-2.62-2.1-4.6-4.39-5.93-1.63-.95-3.41-1.41-5.28-1.41-1.89.01-3.69.51-5.32 1.48-.13.08-.22.08-.35 0-.74-.48-1.48-.96-2.22-1.44z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

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
      group: 'Configuration',
      items: [
        ...(mod?.configGuide || mod?.config
          ? [{ id: 'configuration', label: 'Controls & Settings', icon: Sliders }]
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
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-950 dark:selection:text-emerald-300">
      {/* Mobile Sticky Header with Menu Toggle */}
      <header className="lg:hidden sticky top-0 z-40 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white px-2.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span className="font-medium">Menu</span>
        </button>

        <span className="font-bold text-sm tracking-tight text-neutral-900 dark:text-white">
          {mod.title}
        </span>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/browse"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white px-2.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Browse</span>
          </Link>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-1 px-4 sm:px-6 lg:px-8 items-start">
        {/* Left Navigation Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-72 bg-white lg:bg-[#fafafa]/80 dark:bg-[#0a0a0a] dark:lg:bg-[#0e0e0e]/80
            p-6 lg:py-10 border-r border-neutral-200/80 dark:border-neutral-800/80 overflow-y-auto transition-transform duration-200 ease-in-out
            lg:sticky lg:top-0 lg:h-screen lg:self-start lg:translate-x-0 shrink-0 flex flex-col justify-between
            ${mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
          `}
        >
          <div>
            {/* Top Bar inside Sidebar */}
            <div className="mb-8">
              <Link
                to="/browse"
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group mb-4"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1 text-neutral-400 dark:text-neutral-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <span>Browse all wikis</span>
              </Link>

              <div className="mt-1">
                <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
                  {mod.title}
                </h2>
              </div>
            </div>

            {/* Grouped Navigation Links */}
            <nav className="space-y-6">
              {navGroups.map((group) => (
                <div key={group.group}>
                  <h3 className="text-[11px] font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase mb-2 px-2">
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
                                  ? 'text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 dark:bg-emerald-400/10'
                                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-900/70'
                              }
                            `}
                          >
                            <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-400 dark:text-neutral-500'}`} />
                            <span className="truncate">{item.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom Footer inside Sticky Sidebar */}
          <div className="pt-6 mt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">Theme</span>
            <ThemeToggle />
          </div>
        </aside>

        {/* Backdrop for Mobile Sidebar */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40 lg:hidden"
          />
        )}

        {/* Center Main Documentation Content */}
        <main className="flex-1 min-w-0 py-8 sm:py-12 lg:px-12">
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-24 pb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {mod.loader && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  {mod.loader}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6">
              What is {mod.title}?
            </h1>

            {mod.overview && mod.overview.length > 0 && (
              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
                {mod.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Action buttons (Modrinth, GitHub) */}
            {mod.downloads && mod.downloads.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mt-8">
                {mod.downloads.map((dl, idx) => {
                  const Icon = dl.type === 'modrinth' ? ModrinthIcon : dl.type === 'github' ? GitHubIcon : ExternalLink;
                  return (
                    <a
                      key={idx}
                      href={dl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer
                        ${
                          dl.type === 'modrinth'
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 shadow-xs'
                            : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                        }
                      `}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${dl.type === 'modrinth' ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-700 dark:text-neutral-300'}`} />
                      <span>{dl.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                    </a>
                  );
                })}
              </div>
            )}
          </section>

          {/* Section 2: Features */}
          {mod.features && mod.features.length > 0 && (
            <section id="features" className="scroll-mt-24 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
                What are the features?
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Key features included with {mod.title}:
              </p>

              <ul className="space-y-4 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                {mod.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg leading-none mt-1">•</span>
                    <div>
                      <strong className="text-neutral-900 dark:text-white font-semibold">{feature.title}</strong>
                      <span className="text-neutral-600 dark:text-neutral-400"> — {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Section 3: Configuration & Controls */}
          {(mod.configGuide || mod.config) && (
            <section id="configuration" className="scroll-mt-24 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
                Configuration & Controls
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                RightClickPots can be customized and toggled in-game:
              </p>

              <ul className="space-y-4 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg leading-none mt-1">•</span>
                  <div>
                    <strong className="text-neutral-900 dark:text-white font-semibold">In-Game Settings (Mod Menu)</strong>
                    <span className="text-neutral-600 dark:text-neutral-400"> — {mod.configGuide?.modMenuDescription || 'Access and configure all settings directly in-game through the Mod Menu graphical screen.'}</span>
                    <div className="mt-1.5">
                      <code className="text-xs font-mono text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded">
                        Mod Menu &gt; RightClickPots
                      </code>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg leading-none mt-1">•</span>
                  <div>
                    <strong className="text-neutral-900 dark:text-white font-semibold">Quick-Toggle Keybind</strong>
                    <span className="text-neutral-600 dark:text-neutral-400"> — {mod.configGuide?.quickToggleDescription || 'Quickly toggle RightClickPots on or off on the fly by configuring your toggle key.'}</span>
                    <div className="mt-1.5">
                      <code className="text-xs font-mono text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded">
                        Options &gt; Controls &gt; Key Binds &gt; RightClickPots
                      </code>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          )}

          {/* Section 4: FAQ */}
          {mod.faq && mod.faq.length > 0 && (
            <section id="faq" className="scroll-mt-24 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 text-base leading-relaxed">
                {mod.faq.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1.5">
                      {item.question}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 5: Issue Tracker */}
          {mod.issueReporting?.enabled && (
            <section id="issues" className="scroll-mt-24 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                Report an Issue
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                Found a bug or issue? Submit a report below (make sure to add the version too):
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
        <aside className="hidden xl:block w-56 shrink-0 py-10 pl-8 sticky top-0 h-screen self-start overflow-y-auto">
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
            On this page
          </h4>
          <ul className="space-y-2.5">
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
                          ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                          : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
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
