export const site = {
  name: 'Daniel Alvarado',
  shortName: 'DA',
  email: 'djalvarado3@gmail.com',
  github: 'https://github.com/Tuff-Tech-coder',
  linkedin: 'https://www.linkedin.com/in/daniel-alvarado-080105148/',
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  repository: string;
  problem: string;
  constraints: string[];
  responsibility: string;
  solution: string[];
  demonstration: string;
  reliability: string[];
  deliverables: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'google-sheets-auto-report-generator',
    title: 'Google Sheets Auto-Report Generator',
    eyebrow: 'Reporting automation',
    summary:
      'A scheduled Python reporting pipeline that turns an existing Google Sheet into a consistent, email-ready HTML report.',
    repository: 'https://github.com/Tuff-Tech-coder/Google-Sheets-Auto-Report-Generator',
    problem:
      'Teams can maintain current data in a shared spreadsheet and still lose time manually calculating, formatting, and circulating the same recurring report.',
    constraints: [
      'Work with an existing Google Sheets workflow rather than introducing a new system.',
      'Keep credentials out of source control through environment-based configuration.',
      'Make the core pipeline reviewable without requiring live Google or email credentials.',
    ],
    responsibility:
      'Designed and implemented the reporting pipeline, KPI calculations, HTML rendering, configuration, delivery path, logging, and credential-free demo mode.',
    solution: [
      'Loads tabular data from Google Sheets or a local demonstration CSV into pandas.',
      'Calculates revenue, profit, margin, units, transaction counts, and grouped breakdowns.',
      'Renders an inline-styled HTML report and can deliver it to configured recipients over SMTP/TLS.',
      'Supports cron or Task Scheduler deployment for recurring delivery.',
    ],
    demonstration:
      'The repository includes sample data, a generated sample report, and a --demo --no-email path that exercises the reporting flow locally.',
    reliability: [
      'Service-account access can be limited to Viewer permission on the source sheet.',
      'Runtime configuration and secrets are separated from the reporting code.',
      'Logging provides an operational record for scheduled runs.',
    ],
    deliverables: [
      'Python source',
      'Report configuration',
      'Sample dataset and report',
      'Dependency manifest',
      'Run and scheduling documentation',
    ],
    outcome:
      'Verifiable in the public repository: demo mode generates the included HTML report from sample data without Google credentials. No client or commercial-performance claim is made.',
  },
  {
    slug: 'excel-csv-file-merger',
    title: 'Excel / CSV File Merger',
    eyebrow: 'Spreadsheet operations',
    summary:
      'A repeatable normalization pipeline for combining inconsistent Excel and CSV exports into one traceable workbook.',
    repository: 'https://github.com/Tuff-Tech-coder/Excel-CSV-File-Merger',
    problem:
      'Recurring file consolidation becomes fragile when teams use different column names, layouts, formats, and conventions—and manual cleanup obscures where rows came from.',
    constraints: [
      'Accept .xlsx, .xls, and .csv inputs with different schemas.',
      'Preserve source traceability while aligning missing or rearranged columns.',
      'Produce an output that remains useful to non-technical spreadsheet users.',
    ],
    responsibility:
      'Designed and built file discovery, normalization, alias mapping, currency cleanup, deduplication, source tracking, workbook formatting, and the run interface.',
    solution: [
      'Discovers supported files in a selected input folder.',
      'Maps configurable column aliases to canonical names and normalizes currency and whitespace.',
      'Aligns uneven schemas, optionally removes duplicates, and records each row’s source file.',
      'Writes formatted Merged Data and Merge Summary worksheets.',
    ],
    demonstration:
      'The repository includes varied sample input files, a sample merged workbook, and a sample generator so the workflow can be inspected end to end.',
    reliability: [
      'Uses a configurable alias dictionary rather than hard-coding a single input layout.',
      'Fills schema gaps instead of failing when a file omits a column.',
      'Produces per-file counts and duplicate-removal details for review.',
    ],
    deliverables: [
      'Python source',
      'Sample input set',
      'Generated master workbook',
      'Dependency manifest',
      'Usage and customization documentation',
    ],
    outcome:
      'Verifiable in the public repository: the included inputs can be processed into the included two-sheet workbook with source tracking and a merge summary. No usage or savings metric is claimed.',
  },
  {
    slug: 'listing-engine',
    title: 'Listing Engine',
    eyebrow: 'Structured content workflow',
    summary:
      'A prototype that converts one product model into validated marketplace-specific listing outputs while respecting platform constraints.',
    repository: 'https://github.com/Tuff-Tech-coder/Listing-Engine',
    problem:
      'Preparing the same product for multiple marketplaces creates duplicated writing and validation work, while each platform expects different fields and limits.',
    constraints: [
      'Use one product description as the source of truth.',
      'Respect platform-specific title, tag, and keyword limits before submission.',
      'Avoid unsupported or impermissible automation where a platform does not provide a public API.',
    ],
    responsibility:
      'Designed the product and output models, generation interface, orchestration flow, platform adapters, validations, CLI, and deterministic demonstration backend.',
    solution: [
      'Generates a shared superset of listing content from one product model.',
      'Uses adapters to render and validate eBay, Etsy, and Amazon KDP output formats.',
      'Warns and truncates when content exceeds documented platform limits.',
      'Produces a paste-ready KDP metadata sheet instead of automating a restricted browser workflow.',
    ],
    demonstration:
      'The repository includes sample products and a zero-setup template backend that demonstrates the full pipeline deterministically without an LLM service.',
    reliability: [
      'Platform-specific rules are separated from generation and orchestration logic.',
      'The deterministic backend makes the pipeline testable without third-party credentials.',
      'Unsupported KDP API submission is intentionally excluded and documented.',
    ],
    deliverables: [
      'Typed Python models',
      'Generation and adapter modules',
      'Command-line runner',
      'Sample product data',
      'Setup and architecture documentation',
    ],
    outcome:
      'Verifiable in the public repository: the sample command produces platform-shaped output through the deterministic template backend. This is identified as a personal working prototype, not paid client work.',
  },
];
