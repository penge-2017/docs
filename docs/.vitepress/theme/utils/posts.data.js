// .vitepress/theme/posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('notes/**/*.md', {
  // excerpt: true, // 如果你想获取摘要
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        date: frontmatter.date
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // 按日期倒序排序
  }
})

