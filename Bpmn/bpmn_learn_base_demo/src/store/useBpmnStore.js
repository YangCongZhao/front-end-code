import { defineStore } from 'pinia'
export const useBpmnStore = defineStore('BpmnStore', {
  state: () => {
    return {
      modelerJson: '1212', // 初始化页面时获取到的数据对象
      currentElement: null, // 页面上点击后作为当前元素
      bpmnModeler: null, // 画图工具库实例对象
      model: null, // 用于保存设置内容的实例对象
      scale: 100 // 视图的缩放比例，初始显示100%
    }
  },
  actions: {
    setModelerJson(modelerJson) {
      this.modelerJson = modelerJson
    },
    setBpmnModeler(bpmnModeler) {
      this.bpmnModeler = bpmnModeler
    }
  }
})
