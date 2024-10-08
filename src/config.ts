import type { Site, SocialObjects } from './types';

export const SITE: Site = {
  website: 'https://rioro.top/',
  author: 'Torioro',
  title: 'Torioro',
  desc: 'Personal site of toRioRo (Torioro). Find articles on JavaScript, videos about code, and stories of my life.',
  keywords:
    'javascript, programming, code, personal, career, tutorial, technology, blog',
  ogImage: 'images/profile-large.jpg',
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ['en-EN']; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  // {
  //   name: 'Github',
  //   href: 'https://github.com/hswolff',
  //   linkTitle: ` ${SITE.title} on Github`,
  //   active: true,
  // },
  // {
  //   name: 'Facebook',
  //   href: 'https://www.facebook.com/harrywolff',
  //   linkTitle: `${SITE.title} on Facebook`,
  //   active: true,
  // },
  // {
  //   name: 'Instagram',
  //   href: 'http://instagram.com/hswolff',
  //   linkTitle: `${SITE.title} on Instagram`,
  //   active: true,
  // },
  // {
  //   name: 'LinkedIn',
  //   href: 'http://www.linkedin.com/in/hswolff',
  //   linkTitle: `${SITE.title} on LinkedIn`,
  //   active: true,
  // },
  {
    name: 'Mail',
    href: 'mailto:denglianglu233@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  // {
  //   name: 'Twitter',
  //   href: 'https://twitter.com/hswolff',
  //   linkTitle: `${SITE.title} on Twitter`,
  //   active: true,
  // },
  // {
  //   name: 'Twitch',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on Twitch`,
  //   active: false,
  // },
  // {
  //   name: 'YouTube',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on YouTube`,
  //   active: false,
  // },
  // {
  //   name: 'WhatsApp',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on WhatsApp`,
  //   active: false,
  // },
  // {
  //   name: 'Snapchat',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on Snapchat`,
  //   active: false,
  // },
  // {
  //   name: 'Pinterest',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on Pinterest`,
  //   active: false,
  // },
  // {
  //   name: 'TikTok',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on TikTok`,
  //   active: false,
  // },
  // {
  //   name: 'CodePen',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on CodePen`,
  //   active: false,
  // },
  // {
  //   name: 'Discord',
  //   href: 'https://discordapp.com/users/astro-paper',
  //   linkTitle: `${SITE.title} on Discord`,
  //   active: false,
  // },
  // {
  //   name: 'GitLab',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on GitLab`,
  //   active: false,
  // },
  // {
  //   name: 'Reddit',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on Reddit`,
  //   active: false,
  // },
  // {
  //   name: 'Skype',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on Skype`,
  //   active: false,
  // },
  // {
  //   name: 'Steam',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on Steam`,
  //   active: false,
  // },
  // {
  //   name: 'Telegram',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on Telegram`,
  //   active: false,
  // },
  // {
  //   name: 'Mastodon',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on Mastodon`,
  //   active: false,
  // },
];
