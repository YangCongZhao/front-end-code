import { defineStore } from 'pinia'
import { reactive } from 'vue'

const useAppStore = defineStore('app', () => {
  const appState = reactive({
    sidebarOpened: true
  })
  const triggerSidebarOpened = () => {
    appState.sidebarOpened = !appState.sidebarOpened
  }

  return {
    appState,
    triggerSidebarOpened
  }
})

export default useAppStore
