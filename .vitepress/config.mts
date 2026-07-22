import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
  srcDir: 'docs',
  lang: 'zh-Hans',
  title: '湄轩历史社',  
  description: '福建省莆田第一中学的历史社',
  appearance: false,
  themeConfig: {
    nav: [
      {
        text: '了解社团',
        items: [
          { text: '关于我们', link: '/about-us/', activeMatch: '/about-us' },
          { text: '加入我们', link: '/join-us/', activeMatch: '/join-us' },
        ]
      }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/py-anvil' }
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
