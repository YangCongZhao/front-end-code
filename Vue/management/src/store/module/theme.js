import { defineStore } from 'pinia'
import { reactive } from 'vue'
import variables from '@/assets/styles/variables.scss'
const useThemeStore = defineStore('app', () => {
  const themeState = reactive({
    variables
  })
  return {
    themeState,

  }
})

export default useThemeStore
