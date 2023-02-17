module.exports = {
  site: {
    title: 'Bliss',
    description: 'Simple Eleventy blog template',
    url: 'https://eleventy-bliss.vercel.app/',
    language: 'en',
    startYear: 2022,
    version: 1,
    generator: 'Eleventy v2.0.0',
    github: 'https://github.com/offbeatbits/eleventy-bliss-template',
  },
  author: {
    name: 'John Doe',
    url: 'https://eleventy-bliss.vercel.app/',
    fediverse: [
      {
        username: 'JohnMastodon',
        server: 'mastodon.social',
        url: 'https://mastodon.social/@JohnMastodon',
      },
    ],
  },
  dateFormats: {
    numerical: 'dd.MM.yyyy',
    readable: 'd LLL yyyy',
    fullReadable: 'd LLLL yyyy',
  },
  feed: {
    stylesheet: '/feed.xsl',
    excerpts: {
      title: 'RSS feed (excerpts)',
      path: '/excerpts.xml',
      limit: 10,
    },
    full: {
      title: 'RSS feed (full articles)',
      path: '/full.xml',
      limit: 10,
    },
  },
  json: {
    excerpts: {
      title: 'JSON feed (excerpts)',
      path: '/excerpts.json',
      limit: 10,
    },
    full: {
      title: 'JSON feed (full articles)',
      path: '/full.json',
      limit: 10,
    },
  },
  twtxt: {
    nick: 'eleventyBlissTemplate',
    path: '/twtxt.txt',
    avatar: '/images/twtxt-avatar.png',
    separator: ' - ',
    limit: 100,
    title: 'twtxt.txt (titles and links)',
  },
  icons: {
    ico: '/favicon.ico',
    svg: '/favicon.svg',
    i192: '/icon-192.png',
    i512: '/icon-512.png',
  },
  metaPages: [
    {
      permalink: '/privacy/',
      title: 'Privacy policy',
    },
    {
      permalink: '/colophon/',
      title: 'Colophon',
    },
    {
      permalink: 'https://www.lukaszwojcik.net/contact/',
      title: 'Contact author',
    },
  ],
  opengraph: {
    type: 'website',
    image: '/images/share-400x400.jpg',
  },
  twitter: {
    card: 'summary',
    image: '/images/share-400x400.jpg',
  },
  tags: {
    pageUrlPrefix: 'tag',
    postsPerPage: 10,
  },
  manifestJson: {
    language: 'en-US',
    themeColor: '#255b40',
    backgroundColor: '#255b40',
  },
};
