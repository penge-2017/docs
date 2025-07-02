<!-- .vitepress/theme/components/Comment.vue -->
<script setup>
import { ref, onMounted } from 'vue'

// --- 1. 模拟数据 (Mock Data) ---
// 在真实的后端场景中，这些数据将通过 API 获取
const mockComments = [
  {
    id: 1,
    author: '代码诗人',
    avatar: 'https://i.pravatar.cc/40?img=1', // 随机头像服务
    content: '博主的这篇文章写得太好了，思路清晰，对我帮助很大！',
    timestamp: '2023-10-27 10:30',
    replies: [
      {
        id: 3,
        author: 'Vue大师',
        avatar: 'https://i.pravatar.cc/40?img=2',
        content: '确实，尤其是动态加载文章列表那部分，非常实用。',
        timestamp: '2023-10-27 11:00',
      }
    ]
  },
  {
    id: 2,
    author: 'CSS魔法师',
    avatar: 'https://i.pravatar.cc/40?img=3',
    content: '学到了，原来 VitePress 的主题可以这么灵活地定制！',
    timestamp: '2023-10-26 18:00',
    replies: []
  }
];

// --- 2. 响应式状态 ---
const comments = ref([]);
const newCommentText = ref('');
const authorName = ref('访客'); // 默认昵称

// --- 3. 模拟 API 请求 ---
// 当组件挂载后，模拟从后端获取评论数据
onMounted(() => {
  // 模拟网络延迟
  setTimeout(() => {
    comments.value = mockComments;
    console.log('评论数据加载成功 (模拟)');
  }, 500);
});

// --- 4. 提交新评论的逻辑 ---
function submitComment() {
  if (!newCommentText.value.trim()) {
    alert('评论内容不能为空！');
    return;
  }

  // 创建一个新的评论对象
  const newComment = {
    id: Date.now(), // 用时间戳作为临时唯一ID
    author: authorName.value || '匿名访客',
    avatar: `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70)}`, // 随机一个新头像
    content: newCommentText.value,
    timestamp: new Date().toLocaleString(),
    replies: []
  };

  // 在真实场景中，这里会是一个 POST 请求到后端
  console.log('正在提交新评论 (模拟):', newComment);

  // 在前端直接将新评论添加到列表顶部，以获得即时反馈
  comments.value.unshift(newComment);

  // 清空输入框
  newCommentText.value = '';
}
</script>

<template>
  <div class="comment-section">
    <h3>评论区 ({{ comments.length }}条)</h3>

    <!-- 评论表单 -->
    <div class="comment-form">
      <input type="text" v-model="authorName" placeholder="你的昵称" class="author-input">
      <textarea v-model="newCommentText" placeholder="留下你的精彩评论..."></textarea>
      <button @click="submitComment">发表评论</button>
    </div>

    <!-- 评论列表 -->
    <div class="comment-list">
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <img :src="comment.avatar" alt="avatar" class="avatar">
        <div class="comment-content">
          <div class="comment-header">
            <span class="author">{{ comment.author }}</span>
            <span class="timestamp">{{ comment.timestamp }}</span>
          </div>
          <p>{{ comment.content }}</p>
          <!-- 回复列表 -->
          <div v-if="comment.replies && comment.replies.length > 0" class="replies">
            <div v-for="reply in comment.replies" :key="reply.id" class="comment-item reply-item">
              <img :src="reply.avatar" alt="avatar" class="avatar">
              <div class="comment-content">
                <div class="comment-header">
                  <span class="author">{{ reply.author }}</span>
                  <span class="timestamp">{{ reply.timestamp }}</span>
                </div>
                <p>{{ reply.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment-section {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

.author-input {
  width: 200px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.comment-form textarea {
  width: 100%;
  min-height: 80px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  resize: vertical;
}

.comment-form button {
  align-self: flex-end;
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  background-color: var(--vp-button-brand-bg);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.comment-form button:hover {
  background-color: var(--vp-button-brand-hover-bg);
}

.comment-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.author {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.timestamp {
  font-size: 0.85em;
  color: var(--vp-c-text-2);
}

.comment-item p {
  margin: 0;
  color: var(--vp-c-text-1);
}

.replies {
  margin-top: 15px;
  padding-left: 20px;
  border-left: 2px solid var(--vp-c-divider);
}
</style>
