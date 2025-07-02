<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as allPosts } from '../utils/posts.data.js'

const { lang } = useData()

</script>

<template>
  <div class="post-list-card">
    <div class="post-grid">
      <a v-for="post in allPosts" :key="post.url" :href="post.url" class="post-card">
        <div class="card-content">
          <div class="card-header">
            <span class="card-date">{{ new Date(post.date).toLocaleDateString() }}</span>
          </div>
          <h3 class="card-title">{{ post.title }}</h3>
          <p class="card-description" v-html="post.description"></p>
        </div>
        <div class="card-footer">
          <span>阅读全文 →</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.post-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 24px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.card-date {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.card-description {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
  /* 限制描述显示行数 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-footer {
  padding: 12px 24px;
  border-top: 1px solid var(--vp-c-divider);
  text-align: right;
  font-weight: 600;
  color: var(--vp-c-brand);
  transition: background-color 0.3s;
}

.post-card:hover .card-footer {
  background-color: var(--vp-c-brand-soft);
}
</style>
