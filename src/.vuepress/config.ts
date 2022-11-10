const { description } = require('../../package')

// https://github.com/vuepress/vuepress-next/blob/98b7a57856c7b81a82291642e3cf7218699f3523/packages/%40vuepress/markdown/src/utils/slugify.ts
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

module.exports = {
    locales: {
    '/': {
        lang: 'en-US',
        title: 'GaGaNode',
        description: description,
    },
    },

    head: [
        ['meta', { name: 'theme-color', content: '#fff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: '/logo.svg' }]
    ],

    markdown: {
        extractHeaders: {
            level: [1, 2, 3, 4, 5],
        },
        anchor: {
            slugify: (str) => str
                .normalize('NFKD')
                // Remove accents
                .replace(rCombining, '')
                // Remove control characters
                .replace(rControl, '')
                // Replace special characters
                .replace(rSpecial, '-')
                // Remove continuos separators
                .replace(/-{2,}/g, '-')
                // Remove prefixing and trailing separators
                .replace(/^-+|-+$/g, '')
                // ensure it doesn't start with a number (#121)
                // .replace(/^(\d)/, '_$1')
                // lowercase
                .toLowerCase()
        }
    },

    plugins: [
        '@vuepress/plugin-shiki',
        '@vuepress/plugin-search',
        ['@vuepress/plugin-google-analytics', {
            id: 'G-SEH5LFSBRP',
        }],
    ],

    themeConfig: {
        repo: 'daqnext',
        docsRepo: 'daqnext/meson-docs',
        sidebarDepth: 1,
        docsDir: 'src',
        logo: '/logo.svg',
        themePlugins: {
            activeHeaderLinks: false,
        },
        locales: {
            '/': {
              selectLanguageName: 'English',
              navbar: [
                {
                    text: 'Home',
                    link: 'https://gaganode.com/',
                },
                {
                    text: 'Guide',
                    link: '/',
                },
                {
                    text: 'Meson Network',
                    link: 'https://meson.network/',
                },
                {
                    text: 'Learn More',
                    children: [
                        {
                            text: 'Twitter',
                            link: 'https://twitter.com/NetworkMeson'
                        },
                        {
                            text: 'Medium',
                            link: 'https://medium.com/meson-network'
                        },
                        {
                            text: 'Discord',
                            link: 'https://discord.gg/z6YfSHDkmS'
                        },
                        {
                            text: 'Telegram',
                            link: 'https://t.me/mesonnetwork'
                        },
                        {
                            text: 'Whitepaper',
                            link: 'https://docs.meson.network/Meson-Network-Whitepaper-v1.6.pdf'
                        },
                        {
                            text: 'Content2049',
                            link: 'https://content2049.meson.network'
                        },
                        {
                            text: 'YouTube',
                            link: 'https://www.youtube.com/c/MesonNetwork'
                        },
                        {
                            text: 'Media Kit',
                            link: 'https://github.com/daqnext/brand-kit'
                        },
                        {
                            text: 'Status',
                            link: 'https://status.meson.network'
                        },
                    ]
                },
            ],
            sidebar: {
                '/': [
                    {
                        text: '👋 Guide',
                        collapsible: true,
                        link: '/README.md',
                        children: [
                            '/README.md',
                            '/gaganode-credit.md',
                        ],
                    },
                    {
                        text: '🚀 Run GaGaNode',
                        collapsible: true,
                        link: '/running/README.md',
                        children: [
                            '/running/README.md',
                            '/running/how-to-run-gaganode-on-raspberry-pi-or-arm-sbc.md',
                            '/running/how-to-run-gaganode-on-android.md',
                        ],
                    },
                    {
                        text: '🧱 Glossary',
                        collapsible: true,
                        link: '/glossary.md',
                    },
                    {
                        text: '🌱 FAQ ',
                        collapsible: true,
                        link: '/faq.md',
                    },
                ],
            },
            },
          },
    },
}
