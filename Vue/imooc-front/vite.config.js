import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  {resolve} from 'path'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),createSvgIconsPlugin({
    //缓存的图标路径
    iconDirs:[resolve(process.cwd(),'src/assets/icons')],
    symbolId:'icon-[name]'
  })],
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    }
  }
})
