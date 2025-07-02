<script setup>
import VPNavBar from 'vitepress/dist/client/theme-default/components/VPNav.vue'
import PostListCard from '../components/PostListCard.vue';
</script>

<template>
  <div class="custom-layout">
    <VPNavBar></VPNavBar>
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Code & Curiosity</h1>
        <p class="hero-tagline">探索代码的无限可能，在二进制世界里寻找乐趣</p>
        <div class="actions">
          <a href="notes/python" class="action-button brand">快速开始 →</a>
          <a href="https://github.com/your-github-username" target="_blank" class="action-button alt">访问 GitHub ↗</a>
        </div>
      </div>
      <div class="hero-bg"></div>
    </div>
    <main class="main-content">
      <PostListCard />
    </main>
  </div>
</template>

<style scoped>
.main-container {
  padding-top: 60px;
}

.hero-container {
  position: relative;
  padding: 128px 24px;
  text-align: center;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at top, var(--vp-c-brand-soft), transparent 50%),
    radial-gradient(ellipse at bottom, var(--vp-c-brand-dimm, #444), transparent 50%);
  opacity: 0.3;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  background: -webkit-linear-gradient(315deg, var(--vp-c-brand) 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 80px;
}

.hero-tagline {
  margin: 16px auto;
  max-width: 512px;
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
}

.actions {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 16px;
}

.action-button {
  display: inline-block;
  padding: 10px 24px;
  border-radius: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.action-button.brand {
  background-color: var(--vp-c-brand);
  color: white;
}

.action-button.brand:hover {
  background-color: var(--vp-c-brand-dark);
}

.action-button.alt {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-brand);
}

.action-button.alt:hover {
  background-color: var(--vp-c-brand-soft);
}

.main-content {
  max-width: 1152px;
  margin: 0 auto;
  padding: 32px 24px;
}
</style>
