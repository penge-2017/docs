import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import Comment from './components/Comment.vue'
import CustomHome from "./views/CustomHome.vue"
import 'katex/dist/katex.min.css'
import './custom.css'
import Login from './views/Login.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    const props = {}
    const { frontmatter } = useData()
    if (frontmatter.value.layout === 'home') {
      return h(CustomHome)
    } else if (frontmatter.value.layout === 'login') {
      return h(Login)
    }
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => (frontmatter.value.comment === false ? null : h(Comment)),
    })
  }
}