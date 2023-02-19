module.exports = {
  site: {
    title: 'Bliss',
    description: 'Simple Eleventy blog template',
    url: 'https://eleventy-bliss.vercel.app/',
    logo: '/images/logo.svg',
    language: 'en',
    startYear: 2022,
    generator: {
      name: 'Eleventy',
      url: 'https://11ty.dev',
    },
    template: {
      name: 'Bliss',
      url: 'https://github.com/offbeatbits/eleventy-template-bliss',
      credit: {
        name: 'Offbeat Bits',
        url: 'https://offbeatbits.com',
      },
    },
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
    stylesheet: {
      url: '/feed.xsl',
      baseColor: '#1773cf',
    },
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
      permalink: 'https://example.org/link-1/',
      title: 'Example link 1',
    },
    {
      permalink: 'https://example.org/link-2/',
      title: 'Example link 2',
    },
    {
      permalink: 'https://example.org/link-3/',
      title: 'Example link 3',
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
    displayOnArchivePage: true,
    displayOnPostPage: true,
    pageUrlPrefix: 'tag',
    postsPerPage: 10,
  },
  manifestJson: {
    language: 'en-US',
    themeColor: '#1773cf',
    backgroundColor: '#1773cf',
  },
  shareButtons: [
    'mastodon',
    'twitter',
    'linkedin',
    'facebook',
    'hackernews',
    'clipboard',
  ],
};
