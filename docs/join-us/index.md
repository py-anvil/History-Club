# 加入我们

> 在这里发布社团的招募信息。

<div class="qq-image-wrapper">
  <img src="/join-us/qq-light.png" alt="qq" class="light-image" />
  <img src="/join-us/qq-dark.png" alt="qq" class="dark-image" />
</div>

<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<style>
.qq-image-wrapper {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.qq-image-wrapper img {
  max-width: 100%;
  height: auto;
}

/* 默认显示亮色图片 */
.dark-image {
  display: none;
}

/* 暗色模式下显示暗色图片 */
:root.dark .light-image {
  display: none;
}

:root.dark .dark-image {
  display: block;
}
</style>

## 招募要求

### 基本要求

- 莆田第一中学高一或高二学生

---
