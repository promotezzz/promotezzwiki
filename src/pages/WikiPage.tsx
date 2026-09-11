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
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-1 px-4 sm:px-6 lg:px-8">
        {/* Left Navigation Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-72 bg-white lg:bg-[#fafafa]/80 dark:bg-[#0a0a0a] dark:lg:bg-[#0e0e0e]/80
            p-6 lg:py-12 border-r border-neutral-200/80 dark:border-neutral-800/80 overflow-y-auto transition-transform duration-200 ease-in-out
            lg:static lg:translate-x-0 shrink-0
            ${mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
          `}
        >
          {/* Top Bar inside Sidebar */}
          <div className="mb-8">
            <div className="flex items-center justify-between gap-2 mb-4">
              <Link
                to="/browse"
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                <span>Browse all wikis</span>
              </Link>
              <ThemeToggle />
            </div>

            <div className="mt-2">
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
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
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800 shadow-xs'
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
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 shadow-xs'
                          : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                      }
                    `}
                  >
                    <span>{dl.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                ))}
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
        <aside className="hidden xl:block w-56 shrink-0 py-12 pl-8 sticky top-0 h-screen overflow-y-auto">
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
            On this page
          </h4>
          <ul className="space-y-2">
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
                          ? 'text-emerald-700 dark:text-emerald-400 font-semibold'
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
