import { useBpmnStore } from '@/store/useBpmnStore'
import { storeToRefs } from 'pinia/dist/pinia.esm-browser'
const bpmnStore = useBpmnStore()
const { modelerJson, bpmnModeler } = storeToRefs(bpmnStore)
const { setModelerJson, setBpmnModeler } = bpmnStore

export const shapeEvent = {
  'shape.added': (e) => {
    console.log('shape.added', e)
  },
  'shape.move.end': (e) => {
    console.log('shape.move.end', e)
  },
  'shape.removed': (e) => {
    console.log('shape.removed', e)
  }
}
export const elementEvent = {
  'element.click': (e) => {
    console.log('element.click', e)
  },
  'element.changed': (e) => {
    console.log('element.changed', e)
  }
}
export const addBpmnListener = () => {
  const eventBus = bpmnModeler.value.get('eventBus')
  Object.keys(shapeEvent).forEach((item) => {
    bpmnModeler.value.on(item, shapeEvent[item])
  })
  Object.keys(elementEvent).forEach((item) => {
    eventBus.on(item, elementEvent[item])
  })
}
