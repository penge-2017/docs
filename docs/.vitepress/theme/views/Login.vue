<script setup>
import VPNavBar from 'vitepress/dist/client/theme-default/components/VPNav.vue'
</script>
<template>
    <VPNavBar></VPNavBar>
    <div class="login-form">
        <div class="form-group">
            <label for="username">用户名</label>
            <input type="text" id="username" placeholder="请输入你的用户名">
        </div>
        <div class="form-group">
            <label for="password">密码</label>
            <input type="password" id="password" placeholder="请输入你的密码">
        </div>
        <button class="login-button">登录</button>
    </div>
</template>


<style>
.login-form {
    max-width: 400px;
    margin: 250px auto;
    padding: 20px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
}

.login-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: var(--vp-button-brand-bg);
    color: white;
    cursor: pointer;
    font-weight: bold;
}

.login-button:hover {
    background-color: var(--vp-button-brand-hover-bg);
}
</style>