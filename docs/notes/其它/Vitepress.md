---
title: "从零到赛博朋克：我的 VitePress 网站诞生记"
date: 2023-10-28
description: "一篇超详细的笔记，记录了如何使用 VitePress 搭建一个功能齐全、高度定制的个人知识库，从基础配置到高级美化，全程干货。"
tags: ["VitePress", "建站", "前端", "JavaScript", "Vue"]
comment: false # 这篇是教程，暂时关闭评论区
---

这篇笔记将完整记录我使用 [VitePress](https://vitepress.dev/) 这个快如闪电的静态站点生成器，从一个空文件夹开始，一步步搭建起你现在所看到的这个网站的全过程。它就像我的一次“赛博格改造”日记，充满了各种尝试、踩坑和最终成功的喜悦。

## 为什么选择 VitePress？

在茫茫多的建站工具中，我选择了 VitePress，原因很简单：

*   **快！** 基于 Vite，无论是开发时的热更新，还是最终的构建速度，都快得离谱。
*   **简洁！** “约定优于配置”的理念，让我们可以专注于内容创作，而不是繁琐的配置。
*   **强大！** 基于 Vue 3，你可以在 Markdown 中无缝使用 Vue 组件，想象力是唯一的限制。

## 第一站：打下地基

万丈高楼平地起，我们的第一步是初始化项目并让它跑起来。

```bash
# 创建项目文件夹
mkdir my-notes-site && cd my-notes-site

# 初始化 npm 项目
npm init -y

# 安装核心依赖：VitePress 和 Vue
npm add -D vitepress vue
```

然后在 `package.json` 中添加我们的“启动咒语”：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  // 关键一步：让项目拥抱现代JS模块
  "type": "module"
}
```

创建 `docs` 目录和第一篇笔记 `docs/index.md`，运行 `npm run docs:dev`，一个最基础的网站就诞生了！

## 第二站：核心配置

所有的魔法都发生在 `.vitepress/config.js` 这个文件里。在这里，我们定义了网站的标题、导航、侧边栏、国际化等等。

### 导航栏与链接

配置一个清晰的导航栏至关重要。VitePress 的链接写法非常直观，就像你在检索内容中看到的那样：

- **内部链接**：可以直接指向 Markdown 文件，VitePress 会自动处理后缀。
- **外部链接**：直接写完整的 URL，VitePress 会自动为它加上 `target="_blank"`。

```javascript
// .vitepress/config.js
export default {
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // 链接到 /docs/notes/python/intro.md
      { text: 'Python 笔记', link: '/notes/python/intro' },
      // 外部链接
      { text: '我的 GitHub', link: 'https://github.com/your-username' }
    ]
  }
}
```

### 侧边栏与大纲

一个好的文档网站，离不开清晰的侧边栏和页面大纲。

- **侧边栏 (`sidebar`)**：我们编写了一个自动生成侧边栏的 JS 脚本，它能扫描目录结构，智能过滤并生成嵌套菜单。这是保持网站可维护性的关键。
- **大纲 (`outline`)**：配置 `themeConfig.outline` 选项，可以自动根据文章的 `##` `###` 标题生成右侧的快速导航，让长文阅读不再迷路。

## 第三站：Markdown支持

VitePress 对 Markdown 进行了“魔改”，让我们可以写出更丰富、更具表现力的内容。

### GitHub 风格的警告框

这是我最喜欢的功能之一！它可以让你的提示信息在页面中脱颖而出。语法非常简单，就像你提供的检索资料里展示的那样：

> [!NOTE] 这是一个“笔记”框，适合放一些需要读者留意的补充信息。

> [!TIP] 这是一个“提示”框，可以给读者一些有用的建议或技巧。

> [!IMPORTANT] 这是一个“重要”框，用来强调那些绝对不能错过的关键信息。

> [!WARNING] 这是一个“警告”框，通常用来提示潜在的风险或破坏性操作。

> [!CAUTION] 这是一个“危险”框，比警告更严重，用于指出可能导致严重后果的行为。

**示例代码：**

markdown

```markdown
> [!TIP]
> 经常使用 `Ctrl + S` 是一个好习惯，就像经常 commit 一样。
```

### 数学公式

通过安装 `markdown-it-katex` 插件，我们可以像在 LaTeX 里一样优雅地书写数学公式。

```markdown
爱因斯坦的质能方程是一个传奇：

$$
E = mc^2
$$

而欧拉公式 $e^{i\pi} + 1 = 0$ 则被誉为数学中最美的公式。
```

## 第四站：高级定制

当基础功能满足不了我们的“野心”时，就该深入主题定制了。

### 自定义首页

我们通过 `layout: custom` Frontmatter 和自定义的 Vue 组件，完全接管了首页的渲染，实现了：

- 一个带有毛玻璃效果和自定义导航栏的头部。
- 一个科技感十足的英雄区（Hero Section）。
- 一个卡片式的、带有标签和摘要的动态文章列表。

### 深度美化

通过编写自定义的 CSS (`.vitepress/theme/custom.css`)，我们对网站的每一个细节进行精雕细琢，尤其是侧边栏：

- 增加了 Emoji 或 SVG 图标。
- 调整了间距、圆角和激活状态的样式。
- 让整个网站的视觉风格高度统一和专业。

## 第五站：扩展 VitePress 

### Vite 扩展

VitePress 的配置项中有一个 `vite` 字段，这就像一个“传送门”，让我们能直接使用庞大的 Vite 生态系统中的任何插件。

```javascript
// .vitepress/config.js
import imagemin from 'vite-plugin-imagemin';

export default {
  // ...
  vite: {
    plugins: [
      imagemin({ /* ... 配置 ... */ }) // 例如，使用图片压缩插件
    ]
  }
}
```

这为我们提供了无限的可能性，比如自动压缩图片、集成 PWA 功能、生成站点地图（Sitemap）等。

## 结语

从一个简单的想法，到一个功能齐全、外观酷炫的个人网站，VitePress 让我们能够将精力聚焦于真正重要的事情——**知识的整理与分享**。这个过程不仅锻炼了我的技术能力，更让我体会到了创造的乐趣。

希望这篇“诞生记”能对同样走在技术探索路上的你有所启发。如果你有任何问题或想法，欢迎随时与我交流。让我们一起在代码的世界里，创造更多有趣的东西！