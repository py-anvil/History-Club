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
    onMounted(initZoom)
    watch(() => route.path, () => nextTick(initZoom))
  }
} satisfies Theme
