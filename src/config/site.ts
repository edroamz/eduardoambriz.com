interface SiteConfig {
  name: string;
  description: string;
  links: {
    twitter: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Eduardo Ambriz',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  links: {
    twitter: 'https://twitter.com/edroamz',
    github: 'https://github.com/edroamz/portfolio'
  }
};
