module.exports = {
  site: {
    title: 'Eleventy Bliss',
    description:
      'Essays on life, technology, universe and everything in between. Personal writing by Łukasz Wójcik',
    url: 'https://offbeatbits.com/',
    language: 'en',
    startYear: 2020,
    version: 3,
    generator: 'Eleventy',
    languages: 'English, Polish',
    ide: 'Visual Studio Code',
    doctype: 'HTML5',
    license: {
      name: 'Creative Commons Attribution 4.0 International',
      shorthand: 'CC BY 4.0',
      url: 'https://creativecommons.org/licenses/by/4.0/',
    },
    codeLicense: {
      name: 'MIT License',
      shorthand: 'MIT',
      url: 'https://github.com/offbeatbits/eleventy-bliss-template/blob/main/LICENSE',
    },
    github: 'https://github.com/offbeatbits/eleventy-bliss-template',
  },
  author: {
    name: 'Łukasz Wójcik',
    url: 'https://lukaszwojcik.net/',
    contact: 'https://lukaszwojcik.net/contact/',
    postal: 'https://lukem.net/contact/',
    resume: 'https://lukaszwojcik.net/resume/',
    fediverse: [
      {
        username: 'lukem',
        server: 'masto.ai',
        url: 'https://masto.ai/@lukem',
      },
      {
        username: 'lukem',
        server: 'mstdn.games',
        url: 'https://mstdn.games/@lukem',
      },
    ],
    nostr: {
      name: 'lukem',
      hexPubKey:
        'd34176d2e51b521630e411b3201d855d15f544a786825514fbe6a98f1e89b1f9',
    },
    languages: 'Polish (native), English',
    location: 'Warsaw, Poland',
  },
  dateFormats: {
    numerical: 'dd.MM.yyyy',
    readable: 'd LLL yyyy',
    fullReadable: 'd LLLL yyyy',
  },
  security: {
    contact: [
      'https://www.lukem.net/contact/',
      'https://lukaszwojcik.net/contact/',
    ],
    expires: '2029-12-31T22:59:00.000Z',
    encryption: 'https://lukaszwojcik.net/pgp',
    preferredLanguages: 'en, pl',
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
  epub: {
    title: 'Eleventy Bliss Template',
    author: 'Łukasz Wójcik',
    cover: '_site/icon-512.png',
    fileName: 'offbeatbits.epub',
  },
  pdf: {
    format: 'A4',
    fileName: 'offbeatbits.pdf',
  },
};
