export interface ModDownload {
  label: string;
  url: string;
  primary?: boolean;
  type?: 'direct' | 'github' | 'modrinth' | 'curseforge' | 'external';
}

export interface ModFeature {
  title: string;
  description: string;
  badge?: string;
}

export interface ModInstallStep {
  step: number;
  title: string;
  description: string;
  commandOrPath?: string;
}

export interface ModCommand {
  command: string;
  description: string;
  permission?: string;
}

export interface ModConfigSample {
  filename: string;
  language: string;
  description?: string;
  code: string;
}

export interface ModChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface ModFAQ {
  question: string;
  answer: string;
}

export interface IssueReportingConfig {
  enabled: boolean;
  githubRepoUrl?: string;
  submitHint?: string;
}

export interface ModWikiData {
  slug: string;
  title: string;
  tagline: string;
  badge?: string;
  version: string;
  loader: string;
  author?: string;
  lastUpdated: string;
  requirements?: string[];
  downloads?: ModDownload[];
  overview: string[];
  features?: ModFeature[];
  installation: ModInstallStep[];
  commands?: ModCommand[];
  config?: ModConfigSample;
  changelog?: ModChangelogEntry[];
  faq?: ModFAQ[];
  issueReporting?: IssueReportingConfig;
}
