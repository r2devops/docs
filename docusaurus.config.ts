import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "r2devops";
const projectName = "docs";
const baseUrl = `/`;

const config: Config = {
  title: 'R2Devops documentation',
  tagline:
    'Protect your Software Supply Chain with R2Devops! Stay informed with real-time CI/CD tracking, detect CVEs and ensure pipelines compliance',
  favicon: 'img/logo-documentation.svg',

  // Set the production url of your site here
  url: `https://docs.${organizationName}.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'r2devops', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [require.resolve('docusaurus-lunr-search')],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          blogTitle: 'R2Devops Blog',
          showReadingTime: true,
          blogSidebarTitle: 'All blog posts',
          blogSidebarCount: 'ALL',
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://pub-46d0a39071f847669783608fcac60dd2.r2.dev/social_card.png',
    navbar: {
      // title: 'Documentation',
      logo: {
        alt: 'R2Devops logo',
        src: 'img/r2devops_logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },

      ],
    },
    footer: {
      logo: {
        alt: 'R2Devops Logo',
        src: 'img/r2devops_logo.svg',
        width: 160,
        height: 51,
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: baseUrl + 'docs',
            },
            {
              label: 'Self-managed',
              to: baseUrl + 'docs/self-managed',
            },
            {
              label: 'Marketplace',
              to: baseUrl + 'docs/marketplace/use-templates',
            },
            {
              label: 'Ambassador',
              to: baseUrl + 'docs/ambassador',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'All posts',
              to: baseUrl + 'blog',
            },
            {
              label: 'Releases',
              to: baseUrl + 'blog/tags/releases',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.r2devops.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/r2devops/docs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/r2devops_io',
            },
            {
              label: 'Open a support ticket',
              href: 'https://tally.so/r/w5Edvw',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} R2Devops.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'compliance, ci/cd, r2devops, security, documentation, blog',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    headTags: [
      // Declare a <link> preconnect tag
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://docs.r2devops.io',
        },
      },
      // Declare some json-ld structured data
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          name: 'R2Devops documentation',
          url: 'https://docs.r2devops.io/',
          logo: 'https://pub-46d0a39071f847669783608fcac60dd2.r2.dev/social_card.png',
        }),
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
