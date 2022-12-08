// CustomPalette.js
export default class PaletteProvider {
  constructor(bpmnFactory, create, elementFactory, palette, translate) {
    this.bpmnFactory = bpmnFactory
    this.create = create
    this.elementFactory = elementFactory
    this.translate = translate

    palette.registerProvider(this)
  }
}

PaletteProvider.$inject = [
  'bpmnFactory',
  'create',
  'elementFactory',
  'palette',
  'translate'
]
PaletteProvider.prototype.getPaletteEntries = function (element) {
  // 此方法和上面案例的一样
  const { create, elementFactory } = this
  function createTask() {
    return function (event) {
      const shape = elementFactory.createShape({
        type: 'bpmn:Task'
      })
      console.log(shape) // 只在拖动或者点击时触发
      create.start(event, shape)
    }
  }
  return {
    'create.lindaidai-task': {
      group: 'model',
      className: 'icon-custom lindaidai-task',
      title: '创建一个类型为lindaidai-task的任务节点',
      action: {
        dragstart: createTask(),
        click: createTask()
      }
    }
  }
}
