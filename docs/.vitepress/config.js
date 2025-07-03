import katex from 'markdown-it-katex'
import { sidebar } from './utils/sidebar.js';
export default {
  title: "知识库", // 网站标题
  description: "一个技术爱好者的学习与分享空间", // 网站描述
  markdown: {
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(katex)
    }
  },
  themeConfig: {
    appearance: true,
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    docFooter: {
      next: false,
      prev: false
    },
    editLink: {
      pattern: 'https://github.com/penge-2017/docs/:path',
      text: 'Github编辑此页面'
    },
    search: {
      provider: 'local',
      options: {
        // 多语言搜索支持
        locales: {
          // root 在这里代表默认的中文
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/penge-2017' }
    ],
    nav: [
      { text: '首页', link: '/' },
      {
        text: '理论板块',
        items: [
          { text: '基础知识', link: '/python/getting-started' },
          { text: '计算机科学', link: '/javascript/intro' },
          { text: '计算机底层', link: '/css/selectors.html' },
          { text: '数据结构与算法', link: '/css/selectors.html' }
        ]
      },
      {
        text: '实践项目',
        items: [
          { text: '评估系统破解', link: '/python/getting-started' },
          { text: '校鼠回收', link: '/javascript/intro' },
          { text: '校鼠空间', link: '/css/selectors.html' }
        ]
      },
      {
        text: '技术板块',
        items: [
          { text: '开发', link: '/python/getting-started' },
          { text: '设计', link: '/javascript/intro' },
          { text: '嵌入式', link: '/css/selectors.html' },
          { text: '安全', link: '/css/selectors.html' },
          { text: '大数据', link: '/css/selectors.html' },
          { text: '其它', link: '/css/selectors.html' }
        ]
      },
      { text: '登录', link: '/login' },
    ],
    sidebar: sidebar,
    outline: {
      level: [1, 6], // 显示 h2 到 h6 标题
      label: '导航'
    }
  }
}
