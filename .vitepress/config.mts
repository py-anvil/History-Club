import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
  srcDir: 'docs',
  lang: 'zh-Hans',
  title: 'Club Website',
  description: '一个高自定义的社团官网',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      {
        text: '社团动态',
        items: [
          { text: '社团新闻', link: '/news/', activeMatch: '/news' },
          { text: '社团活动', link: '/activities/', activeMatch: '/activities' },
        ]
      },
      {
        text: '关于我们',
        items: [
          { text: '了解社团', link: '/about-us/', activeMatch: '/about-us' },
          { text: '加入我们', link: '/join-us/', activeMatch: '/join-us' },
        ]
      }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: '本站点基于 MIT License 发布',
      copyright: `Copyright © ${new Date().getFullYear()} Club Website`
    },
    search: {
      provider: 'local'
    }
  },
  cleanUrls: true
})
