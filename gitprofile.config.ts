// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Tuff-Tech-coder', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
 projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'Tuff-Tech-coder/Business-Directory-Scraper',
          'Tuff-Tech-coder/Google-Sheets-Auto-Report-Generator',
          'Tuff-Tech-coder/Excel-CSV-File-Merger',
          'Tuff-Tech-coder/Real-Estate-Listings-Scraper',
          'Tuff-Tech-coder/Amazon-Price-Tracker',
          'Tuff-Tech-coder/AI-Based-PDF-summarizer',
        ],
      },
    },
    external: {
      header: 'Featured',
      projects: [
        {
          title: 'Listing Engine',
          description:
            'Describe a product once; generates marketplace-ready listings for eBay, Etsy, and Amazon KDP. One product model, a single LLM pass, per-platform adapters. Working prototype.',
          imageUrl: '/listing-engine-hero.png',
          link: 'https://github.com/Tuff-Tech-coder/Listing-Engine',
        },
      ],
    },
  },
  seo: { title: 'Tuff-Tech-coder — AI Automation & Python', description: '', imageURL: '' },
  social: {
    linkedin: 'https://www.linkedin.com/in/daniel-alvarado-080105148/',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'djalvarado3@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills:  ['Python', 'pandas', 'NumPy', 'BeautifulSoup', 'Playwright', 'Docker', 'SQL', 'LangChain', 'Ollama', 'LLMs'],
  experiences: [
    {
      company: 'Tuff Prints',
      position: 'Owner-Operator',
      from: 'December 2024',
      to: 'February 2026',
      companyLink: '',
    },
  ],

  educations: [
    {
      institution: 'North Montco Technical Career Center', degree: 'Internet Technologies, Certificate of Competency', from: '2014', to: '2017' ,
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
 
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
