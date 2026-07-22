import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import type { Theme } from 'vitepress'
import mediumZoom from 'medium-zoom'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img:not(.el-image__inner)', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
      // 随机背景：整个页面背景，无毛玻璃（手机端用竖版图片）
      const ts = Date.now()
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      const url = isMobile
        ? `https://api.yppp.net/pe.php?t=${ts}`
        : `https://api.yppp.net/pc.php?t=${ts}`
      document.documentElement.style.setProperty('--vp-random-bg', `url("${url}")`)
    })
    watch(() => route.path, () => nextTick(initZoom))
  }
} satisfies Theme
