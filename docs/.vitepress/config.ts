import { markdownConfig } from './plugins/markdown-plugin';
export default {
  base: process.env.NODE_ENV === 'production'?'/vitepress-demo/': '/',
  outDir: '../dist',
  title: '前端开发文档',
  description: 'Just playing around.',
  markdown: {
    config: markdownConfig,
  },
  appearance: true, //
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAThJREFUOE+1k8FKw0AQhv/ZVE1Beij6DqIY6HsUNA30qCcPIqgXQU9WEPFkPdkXEATRpidfoHhUcUFBEE9eFDwnKW5GUtrQNFkIFPc4w//N/DOzhAkfTaiHFmDeWg0IrIPpPhTiRChVZ4EqgA8BuJ4tr6LimYCB+DDujvAF5iJApSjGQDuwpaMFTN8sL4gCdcGYy7TIdODXnk9TALNttfya3IwSqS4GJGZqCuYzz5GfCYDZsY7B2GFBe/1EyC3NgN9YFKrByuN7DJi9q8z/Buo770YIuPBsuRUDStdL5d6U8ZMXgBBHviMbCQszrtUkxhrA230Q0WUmkPASwqj3Vp9eU0Msuta5Z8td7RDHxPo1diqLIlRdEMojt5CoPIznPaRMsbaDEQsbBDwoMvaHnsfn8n+fKe9K/wDB9HIR/p5ZswAAAABJRU5ErkJggg==',
        type: 'image/x-icon',
      },
    ],
  ],
  themeConfig: {
    siteTitle: '前端开发文档',
    nav: [
      { text: '指南', link: '/guide/introduce' },
      { text: '组件', link: '/component/button/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduce' },
            { text: '开发环境', link: '/guide/develop' },
            { text: '风格指南', link: '/guide/style' },
            { text: '反馈', link: '/guide/feedback' },
          ],
        },
      ],
      '/component/': [
        {
          text: '组件',
          items: [
            { text: '按钮', link: '/component/button/' },
            { text: '单选框', link: '/component/radio/' },
          ],
        },
      ],
    },
  },
};
